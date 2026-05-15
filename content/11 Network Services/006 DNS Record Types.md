# 006 DNS Record Types

**Module/Section:** 11 Network Services
**Tags:** #dns #network-services #infrastructure #🌱seedling

---

![[006 DNS Record Types.mp4]]

## 📖 Core Concept
DNS (Domain Name System) is the hierarchical, decentralized naming system used to translate human-readable domain names into machine-readable IP addresses. DNS servers utilize specific **Record Types** to store and organize this information. These records allow for various functions, including mapping addresses, routing email, verifying domain ownership, and managing zone authority.

## 🛠️ Hardware & Devices
* **DNS Server:** A server that stores DNS records and responds to queries.
* **Primary Nameserver:** The authoritative server that holds the original zone file.
* **Secondary Nameserver:** A server that receives a copy of the zone file from the primary server via a zone transfer.
* **Client/Host:** The device (e.g., PC, server) that initiates DNS queries.

## 📜 Protocols & Standards
* **DNS (Domain Name System):** The primary protocol for domain name resolution.
* **IPv4:** Internet Protocol version 4 (used by A records).
* **IPv6:** Internet Protocol version 6 (used by AAAA records).
* **SMTP (Simple Mail Transfer Protocol):** Used for routing email; operates on **Port 25**.
* **TCP (Transmission Control Protocol):** Used for **Zone Transfers** to ensure data integrity.
* **UDP (User Datagram Protocol):** Used for standard DNS queries.

## 🔑 Key Terminology
* **A Record (Address Record):** Links a hostname to an IPv4 address.
* **AAAA Record (Quad-A Record):** Links a hostname to an IPv6 address.
* **CNAME (Canonical Name Record):** Points a domain or subdomain to another domain name (alias). Cannot point to an IP address.
* **MX Record (Mail Exchange Record):** Directs email to a mail server. Uses priority values (lower number = higher priority).
* **SOA Record (Start of Authority):** Stores administrative information about a zone (e.g., serial number, administrator email, refresh timers). Essential for zone transfers.
* **PTR Record (Pointer Record):** Correlates an IP address to a domain name. Used for **Reverse DNS Lookups**. Stored under the `.arpa` top-level domain.
* **TXT Record (Text Record):** Stores human or machine-readable text. Often used for domain ownership verification and email spam prevention (e.g., SPF/DKIM).
* **NS Record (Nameserver Record):** Indicates which DNS server is authoritative for a domain.
* **Zone Transfer:** The process of copying DNS data from a primary to a secondary nameserver.
* **TTL (Time to Live):** A value (in seconds) that tells a DNS resolver how long to cache a record before requesting an update. Default is often 86,400 seconds (24 hours).
* **Forward Lookup:** Querying a domain name to find its associated IP address.
* **Reverse Lookup:** Querying an IP address to find its associated domain name.
* **Recursive Lookup:** The DNS server performs the work of querying other servers until it finds the final answer for the client.
* **Iterative Lookup:** The DNS server provides the client with the address of the next server to query, rather than performing the full search itself.

## 🔄 How It Works (Processes)
* **Zone Transfer:** The primary server sends the SOA record to the secondary server. The secondary server checks the serial number to determine if an update is required. This process uses TCP.
* **DNS Caching:** When a host resolves a domain, it stores the result in its local DNS cache. It will not query the DNS server again until the TTL expires.
* **Reverse DNS Lookup:** The IP address is reversed and appended with `.in-addr.arpa`. For example, `66.55.44.33` becomes `33.44.55.66.in-addr.arpa`.

## 📊 Comparisons & Key Differences

| Feature| A Record| AAAA Record| CNAME| MX Record|
| :---| :---| :---| :---| :---|
| **Purpose**| IPv4 Mapping| IPv6 Mapping| Alias/Redirect| Email Routing|
| **Target**| IP Address| IP Address| Domain Name| Domain Name|

* **Recursive vs. Iterative:**
 * **Recursive:** The server does the "heavy lifting" and returns the final IP to the client.
 * **Iterative:** The server provides a "referral" to the next server, and the client continues the query.

## ⚠️ Exam Tips & Important Notes
* **CNAME/MX Limitation:** Remember that CNAME and MX records **cannot** point to an IP address; they must point to a domain name.
* **Priority:** In MX records, the **lower** the number, the **higher** the priority.
* **PTR/Reverse DNS:** PTR records are almost always stored under the `.arpa` TLD.
* **Troubleshooting:** If you are troubleshooting email deliverability, check your PTR records.
* **Zone Transfers:** These use TCP, while standard DNS queries typically use UDP.

## ❓ Questions to Review
1. Which DNS record type is used to map a hostname to an IPv6 address?
2. If you want to load balance email across two servers using MX records, how should you set their priority values?
3. What is the primary difference between a recursive and an iterative DNS lookup?
4. Why would an administrator use a TXT record for a domain?
5. What is the function of the SOA record during a zone transfer?

## 🔗 Related Topics
* [[DNS]]
* [[IPv4 vs IPv6]]
* [[SMTP]]
* [[Cloud Computing]]
