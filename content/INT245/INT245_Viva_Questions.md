---
tags:
  - int245
  - viva
  - interview-prep
  - pentest
aliases:
  - INT245 Viva Questions
---

# 🗣️ INT245 Comprehensive Viva Questions

<- Back to [[INT245_Dashboard|Master Dashboard]]

> [!tip] How to Use
> These questions cover the core concepts taught in INT245. Use them to self-test before your viva or practical exam. Answers are hidden in Obsidian callouts for active recall.

---

## Web-Based Attacks

> [!question]- What is SQL Injection (SQLi) and how can you mitigate it?
> SQLi occurs when untrusted user input is passed directly to a database query without sanitization, allowing an attacker to manipulate the query (e.g., using `' OR 1=1 -- -` to bypass authentication). It can be mitigated by using Prepared Statements (Parameterized Queries) and strict input validation.

> [!question]- Explain the difference between CSRF and SSRF.
> **CSRF (Cross-Site Request Forgery):** Tricks a victim's browser into performing unwanted actions on a site where they are currently authenticated. Target is the *client*.
> **SSRF (Server-Side Request Forgery):** Tricks the server into making HTTP requests to internal or restricted resources (like cloud metadata IPs). Target is the *server*.

> [!question]- What is Directory Traversal and how does an attacker execute it?
> Directory Traversal (or Path Traversal) allows an attacker to access arbitrary files on the server by manipulating file paths using dot-dot-slash (`../`) sequences. Example: `http://example.com/file?name=../../../../etc/passwd`.

> [!question]- What is Insecure Direct Object Reference (IDOR)? Give an example.
> IDOR occurs when an application provides direct access to objects based on user-supplied input without proper authorization checks. Example: Changing a URL from `user_id=123` to `user_id=124` and successfully viewing another user's private data.

> [!question]- What is XSS and what are its three main types?
> XSS (Cross-Site Scripting) is an attack where malicious JavaScript is injected into a victim's browser.
> 1. **Persistent (Stored):** Payload is saved on the server (e.g., in a forum post) and executes when victims view the page.
> 2. **Reflected:** Payload is included in the URL/request and immediately returned (reflected) by the server.
> 3. **DOM-based:** The vulnerability exists purely in the client-side code manipulating the DOM.

> [!question]- How does Session Hijacking work?
> It involves stealing or predicting a valid session token (Cookie/SID) to impersonate a legitimate user. It can occur via sniffing (over HTTP), XSS, or Session Fixation.

---

## Cloud and API Security

> [!question]- What is a Metadata Service Attack in cloud environments?
> Attackers exploit vulnerabilities like SSRF to query the cloud provider's Instance Metadata Service (IMS), typically at IP `169.254.169.254`, to extract sensitive info or temporary IAM credentials.

> [!question]- Explain JWT Manipulation.
> JWTs (JSON Web Tokens) are used for authentication. Attackers manipulate them by altering the payload, forging signatures, or changing the algorithm header to `none` to bypass signature verification and elevate privileges.

---

## Scanning and Enumeration

> [!question]- What is the difference between `-sV` and `-O` in Nmap?
> `-sV` probes open ports to determine the exact service and version information (Service Detection).
> `-O` attempts to determine the target operating system by analyzing network packet characteristics (OS Detection).

> [!question]- What is Banner Grabbing?
> Banner Grabbing is a reconnaissance technique used to collect information (such as software name and version) from a network service. It can be done using tools like `nc` (Netcat), `wget`, or Nmap's banner script.

> [!question]- What is the Nmap Scripting Engine (NSE) used for?
> NSE uses Lua scripts to automate various networking tasks such as vulnerability detection, exploitation, brute-forcing, and advanced discovery (e.g., `--script=ftp-anon`).

---

## Exploitation and Frameworks

> [!question]- What is the difference between a Bind Shell and a Reverse Shell?
> - **Bind Shell:** The target machine opens a port and listens for an incoming connection from the attacker (often blocked by firewalls).
> - **Reverse Shell:** The payload on the target machine initiates a connection back to the attacker's listening machine (often bypasses inbound firewall rules).

> [!question]- What is Metasploit and what are its primary components?
> Metasploit is an exploitation framework. Its primary components include:
> - **Exploits:** Code that takes advantage of a vulnerability.
> - **Payloads:** Code executed after successful exploitation (e.g., Meterpreter).
> - **Auxiliary:** Modules for scanning, fuzzing, and enumeration (no payload).
> - **Encoders:** Tools to obfuscate payloads to evade antivirus.

> [!question]- What is `msfvenom` used for?
> `msfvenom` is a standalone tool in the Metasploit framework used to generate and encode custom payloads (e.g., Windows executables or Python scripts) for use in attacks.

---

## OSINT and Physical Security

> [!question]- Name three OSINT tools and their primary purpose.
> 1. **dig/nslookup:** Querying DNS records (A, MX, NS).
> 2. **Sherlock:** Finding social media accounts across multiple platforms by username.
> 3. **Wappalyzer/WhatWeb:** Identifying technologies and CMS running on a website.

> [!question]- What is Tailgating in physical security?
> Tailgating is a physical security breach where an unauthorized person follows an authorized person into a secure area without their consent or knowledge.

> [!question]- Explain the concept of a "USB Drop" attack.
> An attacker leaves a maliciously loaded USB drive in a public or target location. The attack relies on human curiosity to plug the drive into a secure workstation, executing malware via Autorun/AutoPlay or tricking the user into opening a malicious file.

---

## Password Cracking

> [!question]- What is the purpose of `John the Ripper`?
> John the Ripper is an offline password cracking tool. It uses dictionary attacks, brute force, and rainbow tables to decipher password hashes (like those found in Linux `/etc/shadow`).

> [!question]- Why is a salt used in password hashing?
> A salt is random data added to a password before hashing. It ensures that two identical passwords have different hashes, protecting against rainbow table attacks and making offline cracking much harder.
