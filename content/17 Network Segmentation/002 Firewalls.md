# 002 Firewalls

**Module/Section:** 17 Network Segmentation
**Tags:** #firewalls #security #ACL #OSI-model #🌱seedling

---

![[002 Firewalls.mp4]]

## 📖 Core Concept
Firewalls serve as the primary barrier between networks, utilizing predefined rule sets to permit or deny traffic. They can be implemented as software or hardware, and as physical or virtual appliances. They can be deployed as **Host-based** (protecting a single device) or **Network-based** (protecting an entire network segment).

Firewalls also frequently perform **NAT (Network Address Translation)** or **PAT (Port Address Translation)** to allow multiple private IP addresses to share a single public IP address.

## 🛠️ Hardware & Devices
* **Firewall:** A security device that monitors and controls incoming and outgoing network traffic based on security rules.
* **Router:** Often used to host ACLs; acts as a boundary device.
* **Switch:** Can use ACLs based on MAC addresses.
* **UTM (Unified Threat Management):** An all-in-one security appliance that consolidates multiple security functions (firewall, router, IDS/IPS, anti-malware) into a single device or cloud service.

## 📜 Protocols & Standards
* **TCP (Transmission Control Protocol):** Connection-oriented protocol often filtered by port.
* **UDP (User Datagram Protocol):** Connectionless protocol often filtered by port.
* **HTTP (Hypertext Transfer Protocol):** Port 80.
* **SSH (Secure Shell):** Port 22.
* **Telnet:** Port 23 (Insecure, often explicitly denied in ACLs).
* **OSI Model Layers:**
 * **Layer 2:** Data Link (MAC address filtering).
 * **Layer 3:** Network (IP address filtering).
 * **Layer 4:** Transport (Port filtering).
 * **Layers 5-7:** Session, Presentation, Application (Deep Packet Inspection).

## 🔑 Key Terminology
* **Packet-Filtering Firewall:** A firewall that inspects individual packets based on header information (Source/Destination IP and Port) against an Access Control List (ACL).
* **ACL (Access Control List):** A set of rules assigned to an interface that defines traffic permissions (permit/deny) based on specific criteria.
* **Stateful Firewall:** A firewall that tracks the state of active connections (sessions). It allows return traffic for requests initiated from inside the network but blocks unsolicited incoming traffic.
* **NGFW (Next-Generation Firewall):** A third-generation firewall that performs **DPI (Deep Packet Inspection)** at layers 5-7 of the OSI model to understand the content of the traffic.
* **DPI (Deep Packet Inspection):** A form of packet filtering that examines the data part (and header) of a packet as it passes an inspection point to search for non-compliance, viruses, or spam.
* **WAF (Web Application Firewall):** A specialized firewall designed to protect web servers by filtering and monitoring HTTP traffic.
* **UTM (Unified Threat Management):** A security appliance that integrates multiple security features, including firewall, antivirus, and IDS/IPS, into one management interface.
* **NAC (Network Access Control):** A solution that manages access to a network by authenticating and authorizing devices before granting them entry.

## 🔄 How It Works (Processes)
1. **Packet-Filtering:** The firewall examines the header of every packet independently. If the packet matches a "deny" rule in the ACL, it is dropped.
2. **Stateful Inspection:** The firewall maintains a "state table." When a user initiates an outbound request (e.g., SSH to a server), the firewall records the session. It automatically permits the corresponding return traffic from that specific server but denies any other unsolicited attempts to connect to that port.
3. **Deep Packet Inspection (NGFW):** The firewall reassembles the packet stream and inspects the actual payload (application data) to determine if the traffic is malicious, regardless of the port being used.

## 📊 Comparisons & Key Differences

| Feature| Packet-Filtering| Stateful Firewall| Next-Gen Firewall (NGFW)|
| :---| :---| :---| :---|
| **OSI Layer**| 3 & 4| 3 & 4| 5, 6, & 7|
| **Inspection**| Header only| Session state| Deep Packet Inspection (DPI)|
| **Granularity**| Low| Medium| High|
| **Context**| None| Knows if traffic is a reply| Knows the application/content|

## ⚠️ Exam Tips & Important Notes
* **Reading ACLs:** You are expected to be able to read and interpret an ACL (e.g., identifying that a "deny any" rule will block all traffic, including legitimate return traffic if not configured correctly). You do **not** need to write complex ACLs from scratch for the exam.
* **Phishing/Stateful Firewalls:** Be aware that stateful firewalls can be bypassed by users clicking malicious links. If a user initiates a request to a malicious site, the firewall sees it as a "requested session" and allows the malicious payload to return.
* **UTM Popularity:** UTMs are increasingly popular because they provide "always-on" updated threat intelligence, which is superior to a static firewall.

## ❓ Questions to Review
1. What is the primary difference between a packet-filtering firewall and a stateful firewall?
2. At which layers of the OSI model does a Next-Generation Firewall (NGFW) operate?
3. Why is a "deny any" rule at the end of an ACL potentially problematic for inbound traffic?
4. What is the purpose of a UTM, and how does it differ from a standard firewall?
5. How does a stateful firewall handle an unsolicited incoming connection attempt compared to a reply to an internal request?

## 🔗 Related Topics
* [[Network Address Translation (NAT)]]
* [[Intrusion Detection and Prevention Systems (IDS/IPS)]]
* [[OSI Model]]
* [[Network Access Control (NAC)]]
