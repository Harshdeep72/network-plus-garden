# 005 Domain Name System (DNS)

**Module/Section:** 11 Network Services
**Tags:** #dns #network-services #fqdn #host-file #🌱seedling

---

![[005 Domain Name System (DNS).mp4]]

## 📖 Core Concept
The **Domain Name System (DNS)** is a foundational network service that acts as the "phonebook of the internet." Its primary purpose is to translate human-readable hostnames (e.g., `diontraining.com`) into machine-readable numeric IP addresses (e.g., `66.123.45.237`).

Computers communicate using IP addresses for routing, but humans find names significantly easier to remember. DNS automates this resolution process in the background, allowing users to navigate the internet using intuitive names rather than complex strings of numbers.

## 🛠️ Hardware & Devices
* **DNS Server:** A server responsible for storing DNS records and resolving queries from clients.
* **Router:** Facilitates the connection to the WAN (Wide Area Network) once the client obtains the destination IP address from the DNS server.
* **Client Devices:** Computers, laptops, or mobile devices that initiate DNS queries to resolve hostnames.

## 📜 Protocols & Standards
* **DNS (Domain Name System):** The primary protocol used for name-to-number and number-to-name resolution.
* **HTTP (Hypertext Transfer Protocol):** Used for insecure web traffic.
* **HTTPS (Hypertext Transfer Protocol Secure):** Used for secure, encrypted web traffic.
* **FTP (File Transfer Protocol):** Used for transferring files between a client and a server.

## 🔑 Key Terminology
* **DNS (Domain Name System):** A distributed naming system for computers, services, or other resources connected to the internet or a private network.
* **FQDN (Fully Qualified Domain Name):** A domain name that specifies its exact location in the tree hierarchy of the DNS. It includes the hostname, the domain name, and the top-level domain (e.g., `www.diontraining.com`).
* **URL (Uniform Resource Locator):** The address of a given unique resource on the web. It includes the protocol (e.g., `https://`) and the FQDN.
* **Top-Level Domain (TLD):** The highest level of the domain name hierarchy (e.g., `.com`, `.edu`, `.gov`, `.mil`, `.net`, `.org`).
* **Second-Level Domain:** The domain name directly below the TLD (e.g., `diontraining` in `diontraining.com`).
* **Subdomain:** A domain that is part of a larger domain (e.g., `support` in `support.diontraining.com`).
* **Host:** The lowest level of the hierarchy, referring to a specific machine or service.
* **Host File:** A local text file stored on an operating system that maps hostnames to IP addresses. It acts as a local override to DNS.

## 🔄 How It Works (Processes)
1. **Query Initiation:** The user enters a hostname (e.g., `diontraining.com`) into a browser.
2. **Local Check:** The system first checks the local **Host File**. If a match is found, the system uses that IP and stops.
3. **DNS Request:** If no match is found in the host file, the client sends a query to the configured DNS server: "Do you know the IP for `diontraining.com`?"
4. **Resolution:** The DNS server looks up the record and replies with the corresponding IP address.
5. **Connection:** The client uses the provided IP address to route traffic to the destination server via the router.

## 📊 Comparisons & Key Differences

| Feature| DNS (Domain Name System)| Host File|
| :---| :---| :---|
| **Scope**| Global/Network-wide| Local to the specific device|
| **Management**| Centralized on DNS servers| Manually edited on each machine|
| **Precedence**| Lower (consulted after host file)| Higher (local override)|
| **Scalability**| High (handles millions of records)| Low (unmanageable at scale)|

## ⚠️ Exam Tips & Important Notes
* **Precedence:** Always remember that the **Host File** takes precedence over DNS. If an entry exists in the host file, the system will not query a DNS server for that specific name.
* **Security Risk:** Malicious actors can modify host files to redirect users to fake, malicious websites (phishing). This is a common vector for credential theft.
* **Hierarchy:** Understand the 5 levels of the DNS hierarchy: **Root → TLD → Second-Level Domain → Subdomain → Host**.
* **Use Case:** DNS is for global resolution; Host files are for local overrides, testing, or blocking specific sites.

## ❓ Questions to Review
1. What is the primary function of DNS in a network environment?
2. Which file on a local computer acts as a manual override for DNS resolution?
3. List the five levels of the DNS hierarchy in order from highest to lowest.
4. Why is an FQDN considered "fully qualified"?
5. How can a network administrator use a host file to block access to a specific website?

## 🔗 Related Topics
* [[IP Addressing]]
* [[Routing]]
* [[Web Services]]
* [[Network Security]]
