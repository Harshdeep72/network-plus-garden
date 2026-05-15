# 008 Understanding DNS

**Module/Section:** 11 Network Services
**Tags:** #dns #packet-tracer #🌱seedling

---

![[008 Understanding DNS.mp4]]

## 📖 Core Concept
The Domain Name System (DNS) is a hierarchical, distributed naming system used to translate human-readable domain names (e.g., diontraining.com) into machine-readable IP addresses.

The process follows a specific hierarchy:
1. **Client Cache:** The client first checks its own local DNS cache.
2. **Local DNS Server:** If not found, the request is sent to the configured local DNS server.
3. **Root DNS Server:** If the local server doesn't have the record, it queries the Root DNS server (which manages Top-Level Domains like .com or .net).
4. **Authoritative Name Server:** The Root server directs the request to the authoritative server that holds the actual records for the specific domain.
5. **Resolution:** Once the IP is found, the information is cached at each level (Root and Local DNS) to speed up future requests.

## 🛠️ Hardware & Devices
* **Client:** The end-user device initiating the request (IP: 10.0.0.2).
* **Local DNS Server:** The internal server responsible for resolving queries for the local network (IP: 10.0.0.3).
* **Switch 0:** Layer 2 device connecting the client and local DNS server to the company router.
* **Company Router:** The border gateway router connecting the internal network to the internet.
* **Internet Router:** Simulates the internet backbone/cloud.
* **Root DNS Server:** A high-level server (IP: 10.2.0.2) that manages TLDs (Top-Level Domains) like .com.
* **Dion Training Router:** The border gateway for the destination network.
* **Switch 1:** Layer 2 device on the destination network.
* **Authority DNS Server:** The authoritative name server (IP: 10.4.0.2) for the `diontraining.com` domain.
* **Web Server:** The server (IP: 10.4.0.3) hosting the actual website content (`server.diontraining.com`).

## 📜 Protocols & Standards
* **DNS (Domain Name System):** Used for domain-to-IP resolution.
* **ARP (Address Resolution Protocol):** Used to map known IP addresses to unknown MAC addresses at Layer 2.
* **HTTP (Hypertext Transfer Protocol):** Used to request and receive web page content (GET requests).
* **Ethernet:** The standard for Layer 2 communication.
* **IP (Internet Protocol):** Used for Layer 3 addressing and routing.

## 🔑 Key Terminology
* **DNS Cache:** A temporary database stored on a client or server that holds recent DNS lookups to avoid repeating the full resolution process.
* **Authoritative Name Server:** The server that holds the actual DNS records for a specific domain.
* **Root DNS Server:** The top of the DNS hierarchy; it directs queries to the appropriate TLD servers.
* **A Record (Address Record):** A DNS record that maps a hostname to an IPv4 address.
* **CNAME (Canonical Name Record):** A DNS record that acts as an alias, pointing one domain name to another (e.g., `www.diontraining.com` points to `server.diontraining.com`).
* **SOA (Start of Authority):** A DNS record containing administrative information about the zone, including refresh rates, retry intervals, and expiration times.
* **Default Gateway:** The router that serves as the exit point for traffic destined for networks outside the local subnet.
* **Broadcast (ff:ff:ff:ff:ff:ff):** A Layer 2 frame sent to all devices on a local segment.

## 🔄 How It Works (Processes)
1. **ARP Initiation:** When a client needs to contact a DNS server but lacks its MAC address, it sends an ARP broadcast.
2. **DNS Query:** The client sends a DNS request to the local DNS server.
3. **Recursive/Iterative Query:** If the local DNS server lacks the record, it queries the Root DNS server.
4. **Referral:** The Root server provides the address of the Authoritative Name Server.
5. **Resolution:** The local DNS server queries the Authoritative Name Server, receives the IP, and caches it.
6. **Response:** The local DNS server provides the IP to the client.
7. **Data Transfer:** The client uses the resolved IP to initiate an HTTP GET request to the web server.

## 📊 Comparisons & Key Differences
| Feature| Local DNS Server| Root DNS Server|
| :---| :---| :---|
| **Primary Role**| First point of contact for clients| Manages TLDs (.com, .net)|
| **Cache Usage**| Stores results for local clients| Stores results for TLD referrals|
| **Authority**| None (for external domains)| High-level directory authority|

## ⚠️ Exam Tips & Important Notes
* **ARP is mandatory:** Remember that even if you know the IP address, you cannot communicate at Layer 2 without the MAC address. ARP is the bridge between Layer 3 and Layer 2.
* **Caching:** DNS servers do not "own" the records they cache; they only hold them temporarily based on the Time to Live (TTL).
* **Hierarchy:** Always remember the flow: Client -> Local DNS -> Root DNS -> Authoritative DNS.
* **Subdomains:** Subdomains (like `authority.diontraining.com`) are handled by the authoritative server for the parent domain.

## ❓ Questions to Review
1. What is the purpose of an ARP broadcast in a DNS resolution process?
2. Why does a DNS server cache a record it does not own?
3. What is the difference between an A record and a CNAME record?
4. What happens if a client's DNS cache expires?
5. Which record contains the administrative details for a DNS zone?

## 🔗 Related Topics
* [[DNS Hierarchy]]
* [[ARP Process]]
* [[Layer 2 vs Layer 3]]
* [[HTTP/HTTPS]]
