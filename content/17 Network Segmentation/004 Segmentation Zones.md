# 004 Segmentation Zones

**Module/Section:** 17 Network Segmentation
**Tags:** #network-segmentation #firewalls #security #🌱seedling

---

![[004 Segmentation Zones.mp4]]

## 📖 Core Concept
Network segmentation is the practice of dividing a network into distinct zones to control traffic flow and enhance security. By using firewalls, boundary devices, and Access Control Lists (ACLs), administrators can apply specific security policies to interfaces based on their zone classification. The three primary zones discussed are:

* **Trusted Zone (Inside):** Represents the internal corporate network or intranet. This is the most secure area where internal users and resources reside.
* **Untrusted Zone (Outside):** Represents external networks, primarily the internet. This zone is considered hostile and is subject to the strictest filtering.
* **Screened Subnet (Semi-trusted):** An intermediary zone (often historically referred to as a DMZ or Demilitarized Zone) that sits between the trusted and untrusted zones. It hosts publicly accessible services (web/email) that require access from both the internet and the internal network, but keeps these potentially vulnerable servers isolated from the internal network.

## 🛠️ Hardware & Devices
* **Firewall:** A boundary device used to enforce security policies between zones. It uses stateful inspection to track traffic and manage port access.
* **Switch:** Used to connect internal PCs within the trusted zone.
* **Servers:** Specifically web servers and email servers, which are placed in the screened subnet to provide services to both internal and external users.
* **Intrusion Detection System (IDS):** A monitoring device used to detect malicious activity within the network traffic.
* **Intrusion Prevention System (IPS):** A security device that can actively block or prevent detected threats.
* **Unified Threat Management (UTM):** An all-in-one security appliance that integrates multiple security features (firewall, IDS/IPS, etc.) to protect network segments.

## 📜 Protocols & Standards
* **SMTP (Simple Mail Transfer Protocol):** Uses **Port 25** for sending emails.
* **POP3 (Post Office Protocol version 3):** Uses **Port 110** for receiving emails.
* **IMAP (Internet Message Access Protocol):** Uses **Port 143** for receiving emails.
* **HTTP (Hypertext Transfer Protocol):** Uses **Port 80** for unsecure web browsing.
* **HTTPS (Hypertext Transfer Protocol Secure):** Uses **Port 443** for secure web browsing.

## 🔑 Key Terminology
* **Segmentation Zones:** Logical divisions of a network used to apply security policies and boundary defenses.
* **Trusted Zone:** The internal network (intranet) that is considered secure and managed by the organization.
* **Untrusted Zone:** The internet or any external network that is not under the organization's control.
* **Screened Subnet:** A "semi-trusted" network segment that acts as a buffer between the internal network and the internet, hosting public-facing services.
* **Stateful Firewall:** A firewall that tracks the state of active connections and determines which network packets to allow through based on the state of the connection (e.g., allowing return traffic for a request initiated from the inside).
* **Access Control List (ACL):** A set of rules applied to an interface that defines what traffic is permitted or denied.

## 🔄 How It Works (Processes)
* **Traffic Flow from Trusted to Untrusted:** Generally, internal users initiate requests to the internet. The stateful firewall tracks these requests and automatically allows the return traffic back into the trusted zone.
* **Traffic Flow from Untrusted to Trusted:** Generally blocked. Traffic is only allowed if it is a response to a request initiated from within the trusted zone.
* **Traffic Flow to Screened Subnet:**
 * **From Internet:** Specific ports (e.g., 80, 443, 25) are opened to allow public access to hosted services.
 * **From Internal:** Internal users access these servers as needed.
* **Security Choke Point:** The screened subnet acts as a choke point where traffic can be inspected by IDS/IPS/UTM devices before reaching the internal network or the servers themselves.

## 📊 Comparisons & Key Differences

| Feature| Trusted Zone| Screened Subnet| Untrusted Zone|
| :---| :---| :---| :---|
| **Trust Level**| High| Semi-trusted| None|
| **Primary Purpose**| Internal resources| Public-facing services| External connectivity|
| **Access Policy**| Highly restricted| Controlled/Filtered| Open/Hostile|

## ⚠️ Exam Tips & Important Notes
* **Stateful Inspection:** Remember that stateful firewalls allow return traffic for requests initiated from the inside; you do not need to manually open return ports.
* **Screened Subnet Logic:** Always place public-facing servers (web, email) in a screened subnet rather than the internal network to prevent attackers from having direct access to your internal resources.
* **Port Knowledge:** Memorize the ports mentioned (25, 110, 143, 80, 443) as they are critical for configuring firewall rules for screened subnets.
* **Choke Points:** Understand that a screened subnet provides a strategic location to place security appliances like IPS and UTMs to inspect traffic.

## ❓ Questions to Review
1. What is the primary purpose of a screened subnet in a network architecture?
2. Why is it considered a security risk to place a web server directly on the internal (trusted) network?
3. If an internal user requests a webpage from the internet, why is the return traffic allowed through a stateful firewall?
4. Which ports must be opened on a firewall to allow secure web traffic and IMAP email traffic to a server in a screened subnet?
5. How does a screened subnet act as a "choke point" for network security?

## 🔗 Related Topics
* [[Firewalls]]
* [[Access Control Lists]]
* [[Intrusion Detection and Prevention Systems]]
* [[Network Segmentation]]
