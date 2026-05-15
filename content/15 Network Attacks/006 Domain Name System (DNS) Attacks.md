# 006 Domain Name System (DNS) Attacks

**Module/Section:** 15 Network Attacks
**Tags:** #dns #cybersecurity #network-attacks #🌱seedling

---

![[006 Domain Name System (DNS) Attacks.mp4]]

## 📖 Core Concept
The Domain Name System (DNS) is the fundamental internet service responsible for translating human-readable domain names (e.g., www.example.com) into machine-readable IP addresses. Because this service is critical for network connectivity, it is a primary target for attackers. DNS attacks generally aim to disrupt service, steal sensitive information, or redirect legitimate traffic to malicious destinations.

## 🛠️ Hardware & Devices
* **DNS Resolver:** A server that performs the translation process by querying other DNS servers to resolve a domain name.
* **Open DNS Server:** A DNS server that is configured to accept and resolve queries from any source on the internet, often exploited in amplification attacks.
* **Firewalls:** Network security devices used to monitor and filter traffic; they are often bypassed by DNS tunneling techniques.

## 📜 Protocols & Standards
* **DNS (Domain Name System):** The protocol used for name resolution.
* **Port 53:** The standard port used for DNS traffic (both UDP and TCP).
* **DNSSEC (Domain Name System Security Extensions):** A suite of extensions that adds digital signatures to DNS data to ensure authenticity and integrity.
* **HTTP (Hypertext Transfer Protocol):** Often encapsulated within DNS traffic during tunneling.
* **SSH (Secure Shell):** Often encapsulated within DNS traffic during tunneling.

## 🔑 Key Terminology
* **DNS Cache Poisoning (DNS Spoofing):** The act of corrupting the DNS cache data of a resolver with false information, causing users to be redirected to an attacker-controlled IP address.
* **DNS Amplification Attack:** A type of Distributed Denial of Service (DDoS) attack where an attacker sends a small query to an open DNS server with a spoofed victim IP, causing the server to send a much larger response to the victim, overwhelming them.
* **DNS Tunneling:** A method of encapsulating non-DNS traffic (like HTTP or SSH) within DNS queries and responses to bypass firewall restrictions for command and control or data exfiltration.
* **Domain Hijacking (Domain Theft):** The unauthorized change of a domain name's registration, allowing an attacker to take control of the domain and redirect its traffic.
* **DNS Zone Transfer Attack:** An attack where an unauthorized party requests a full copy of the DNS zone data (all records for a domain) to gain reconnaissance information about an organization's network infrastructure.
* **Data Exfiltration:** The unauthorized transfer of data from a computer or network.
* **Reconnaissance:** The phase of an attack where the adversary gathers information about the target system to plan future exploits.

## 🔄 How It Works (Processes)
* **DNS Cache Poisoning:**
 1. Attacker targets a DNS resolver.
 2. Attacker injects false IP address mappings into the resolver's cache.
 3. Legitimate users query the resolver and receive the malicious IP.
 4. Users are redirected to a fake, malicious website.
* **DNS Amplification:**
 1. Attacker identifies an open DNS server.
 2. Attacker sends a query for a large amount of data (e.g., all hosts in a domain).
 3. Attacker spoofs the source IP address to be the victim's IP.
 4. The DNS server sends the large response to the victim, flooding their network.
* **DNS Tunneling:**
 1. Attacker wraps non-DNS data (e.g., SSH/HTTP) inside DNS packets.
 2. The traffic passes through firewalls because they are configured to allow DNS traffic on port 53.
 3. The attacker's server on the outside decapsulates the traffic to retrieve the data.

## 📊 Comparisons & Key Differences

| Attack Type| Primary Goal| Mitigation Strategy|
| :---| :---| :---|
| **Cache Poisoning**| Redirection/Theft| Use DNSSEC, secure firewalls.|
| **Amplification**| Denial of Service (DoS)| Rate limiting, limit response sizes.|
| **Tunneling**| Exfiltration/Bypass| Monitor/analyze DNS logs for anomalies.|
| **Domain Hijacking**| Domain Theft/Control| Registry locks, secure account management.|
| **Zone Transfer**| Reconnaissance| Restrict zone transfers to authorized IPs.|

## ⚠️ Exam Tips & Important Notes
* **DNSSEC:** Remember that DNSSEC is the primary defense for ensuring the **integrity** and **authenticity** of DNS data to prevent cache poisoning.
* **Port 53:** Always associate DNS traffic with port 53. If a question mentions traffic on port 53 that isn't standard DNS queries, it is likely referring to **DNS Tunneling**.
* **Zone Transfers:** These are legitimate administrative functions between DNS servers, but they become an attack when performed by unauthorized entities.
* **DNS Tunneling:** Note that this is a "legitimate technique" that is being misused; it is not inherently malicious in its protocol design, but rather in its application.

## ❓ Questions to Review
1. Which DNS attack involves corrupting the cache of a resolver to redirect users?
2. What protocol should be implemented to ensure the integrity and authenticity of DNS data?
3. Why is DNS traffic often used for tunneling to bypass firewalls?
4. What is the difference between a DNS amplification attack and a standard DoS attack?
5. How can an organization prevent unauthorized domain hijacking?
6. What is the primary purpose of a DNS zone transfer attack from an attacker's perspective?

## 🔗 Related Topics
* [[Domain Name System]]
* [[Denial of Service (DoS)]]
* [[Firewalls]]
* [[Network Reconnaissance]]
