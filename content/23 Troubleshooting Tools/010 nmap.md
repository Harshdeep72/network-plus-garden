# 010 nmap

**Module/Section:** 23 Troubleshooting Tools
**Tags:** #nmap #security #reconnaissance #scanning #🌱seedling

---

![[010 nmap.mp4]]

## 📖 Core Concept
**Nmap (Network Mapper)** is a powerful, open-source utility used for network discovery and security auditing. It functions by sending specially crafted packets to target hosts and analyzing the responses to determine the state of the network.

* **Primary Functions:**
 * **Host Discovery:** Identifying which devices are "up" or "down" on a network.
 * **Service Detection:** Identifying which services (applications) are running on specific ports.
 * **Operating System (OS) Detection:** Fingerprinting the OS of the target device.
 * **Version Detection:** Identifying specific software versions to pinpoint known vulnerabilities.
 * **Network Mapping:** Documenting network topology and identifying rogue devices.

## 🛠️ Hardware & Devices
* **Router:** Acts as the gateway/boundary between the outside (internet) and the internal target network (10.10.10.0/24).
* **Servers (Target Environment):**
 * **LAMP-Server:** Located at 10.10.10.10.
 * **Metasploitable2:** Located at 10.10.10.11 (a highly vulnerable test server).
 * **DVWA (Damn Vulnerable Web App):** Located at 10.10.10.12.
* **Docker Containers:** The instructor notes that the target servers are running within a container-based virtualization environment, which causes Nmap to report identical OS fingerprint ranges for all three servers.

## 📜 Protocols & Standards
* **TCP/IP:** The underlying suite used for all communications.
* **DNS (Domain Name System):** Used for hostname resolution. Nmap attempts to resolve names; if no DNS server is reachable (as in the lab), Nmap will report an error but still function using IP addresses.
* **Common Ports Mentioned:**
 * **21:** FTP (File Transfer Protocol)
 * **22:** SSH (Secure Shell)
 * **23:** Telnet
 * **80:** HTTP (Web Server)
 * **139/445:** NetBIOS/SMB (Samba for Windows file sharing)
 * **3306:** MySQL
 * **8080:** Web Proxy/Alternative HTTP

## 🔑 Key Terminology
* **Fingerprinting:** The process of analyzing responses from a host to identify its operating system or the specific version of a service.
* **SYN Scan (-sS):** A "half-open" scan that sends a SYN packet and waits for a SYN/ACK; it does not complete the full three-way handshake, making it faster and stealthier.
* **Ping Scan (-sn):** A host discovery technique that sends ICMP echo requests to determine if a host is active without performing a port scan.
* **Service Version Detection (-sV):** Probes open ports to determine the specific application and version running.
* **OS Detection (-O):** Analyzes TCP/IP stack behavior to guess the target's operating system.
* **Rogue Device:** An unauthorized device connected to a network.

## 🔄 How It Works (Processes)
1. **Host Discovery:** Use `nmap -sn [network/CIDR]` to identify active IP addresses.
2. **Port Scanning:** Use `nmap -sS [target]` to identify open/closed ports. Nmap scans the top 1000 most common ports by default.
3. **Service Versioning:** Use `nmap -sV [target]` to query services for their specific software versions (e.g., Apache 2.4.18).
4. **OS Fingerprinting:** Use `nmap -O [target]` to identify the underlying operating system.
5. **Comprehensive Scanning:** Combine flags (e.g., `nmap -sS -sV -O [target]`) to gather all intelligence in a single operation.

## 📊 Comparisons & Key Differences

| Feature| Command| Purpose|
| :---| :---| :---|
| **Ping Scan**| `-sn`| Quickly find active hosts; no port scanning.|
| **SYN Scan**| `-sS`| Stealthy port scanning; doesn't complete the handshake.|
| **Version Scan**| `-sV`| Identifies specific software versions for vulnerability mapping.|
| **OS Scan**| `-O`| Identifies the target's operating system.|

## ⚠️ Exam Tips & Important Notes
* **Default Behavior:** Nmap scans the top 1000 most common ports by default if no specific port range is provided.
* **Time vs. Accuracy:** Comprehensive scans (combining `-sS`, `-sV`, and `-O`) take significantly longer than simple scans. The demo showed a jump from <1 second to 140 seconds for a full scan.
* **DNS Errors:** If Nmap reports "unable to determine any DNS servers," it is usually because the machine cannot reach a DNS resolver; this does not stop the scan if you are targeting by IP address.
* **Vulnerability Association:** The primary goal of version detection is to cross-reference software versions with known CVEs (Common Vulnerabilities and Exposures).

## ❓ Questions to Review
1. Which Nmap flag is used to perform a "ping scan" for host discovery?
2. Why would a security professional use the `-sV` flag instead of just a standard port scan?
3. What is the difference between a SYN scan and a full TCP connection scan?
4. If Nmap reports 997 closed ports, how many ports were likely scanned in total?
5. Why might Nmap report the same OS for multiple different servers in a virtualized environment?

## 🔗 Related Topics
* [[TCP Three-Way Handshake]]
* [[ICMP]]
* [[Port Scanning]]
* [[Vulnerability Assessment]]
* [[Network Mapping]]
