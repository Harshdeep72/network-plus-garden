# 006 Firewall Issues

**Module/Section:** 26 Troubleshooting Network Services
**Tags:** #firewalls #troubleshooting #ACL #🌱seedling

---

![[006 Firewall Issues.mp4]]

## 📖 Core Concept
Firewalls serve as the primary security barrier between networks, acting as an inspection point that monitors and filters traffic based on established rule sets. Troubleshooting firewall issues involves determining whether traffic is failing to reach the firewall or failing to pass through it.

* **Primary Function:** To act as a barrier between a private internal network and the public internet or other internal subnets.
* **Troubleshooting Methodology:** Use the seven-step troubleshooting method combined with the [[OSI Model]] to isolate issues layer-by-layer (Layer 1 physical, Layer 2 data link, Layer 3 network).
* **Common Failure Points:**
 * Access to protected resources from unprotected networks is blocked.
 * Access to unprotected resources from protected networks is blocked.
 * Administrative access to the firewall configuration itself is failing.

## 🛠️ Hardware & Devices
* **Firewall:** A network security device (or software) that monitors and filters traffic.
 * **Host-based Firewall:** Software running on an individual computer (e.g., Windows Defender Firewall) to protect that specific device.
 * **Network-based Firewall:** A dedicated security device deployed in-line with network traffic, typically before the border or gateway router.
* **Router:** The gateway device where network-based firewalls are often positioned.
* **Network Interface Card (NIC):** The hardware component used to connect devices; link lights on the NIC are used to verify Layer 1 connectivity.

## 📜 Protocols & Standards
* **TCP (Transmission Control Protocol):** Connection-oriented protocol often filtered by firewalls.
* **UDP (User Datagram Protocol):** Connectionless protocol often filtered by firewalls.
* **NTP (Network Time Protocol):** Uses **UDP port 123**. Blocking this port prevents time synchronization.
* **HTTP (Hypertext Transfer Protocol):** Uses **TCP port 80**.
* **HTTPS (Hypertext Transfer Protocol Secure):** Uses **TCP port 443**.
* **SMTP (Simple Mail Transfer Protocol):** Uses **TCP port 25**.
* **ARP (Address Resolution Protocol):** Used at Layer 2 to map IP addresses to MAC addresses; essential for verifying Layer 2 connectivity.

## 🔑 Key Terminology
* **Access Control List (ACL):** A collection of permit and deny conditions (rules) used to provide security by controlling traffic flow.
* **Rule Set:** The established criteria a firewall uses to inspect and filter traffic.
* **Screened Subnet:** A network segment (often called a DMZ) that acts as a buffer between the internal network and the internet.
* **Implicit Deny:** The concept that if a packet does not match any specific permit rule in an ACL, it is automatically denied (implied by the order of processing).

## 🔄 How It Works (Processes)
### Troubleshooting Workflow
1. **Layer 1 (Physical):** Check cabling and link lights on the NIC.
2. **Layer 2 (Data Link):** Verify communication between the router and firewall using ARP and MAC addresses.
3. **Layer 3 (Network):** Verify valid IP address, subnet mask, and default gateway.
4. **Firewall Inspection:** Inspect the ACLs for misconfigurations.

### ACL Processing
* **Sequential Processing:** ACLs are processed from the top of the list to the bottom.
* **First Match Wins:** Once a packet matches a rule, the firewall stops processing the list.
* **Ordering Logic:** Most specific rules must be placed at the top; most generic rules must be placed at the bottom.

## 📊 Comparisons & Key Differences
| Feature| Host-based Firewall| Network-based Firewall|
| :---| :---| :---|
| **Deployment**| Software on a single device| Hardware/Appliance in-line|
| **Scope**| Protects one device| Protects the entire network|
| **Example**| Windows Defender Firewall| Cisco Firewall/Router ACLs|

## ⚠️ Exam Tips & Important Notes
* **ACL Ordering:** Always remember that ACLs are processed in order. A generic "Deny All" rule at the top of a list will block all subsequent "Permit" rules, rendering them useless.
* **Typo Risks:** A simple typo in a subnet mask (e.g., `0.0.255.255` vs `0.0.0.255`) can lead to massive unintended consequences, such as blocking 65,536 IPs instead of 256.
* **Command Line:** On Cisco devices, use `show access-lists` to inspect current rules.
* **Protocol Awareness:** Always verify if you are blocking TCP or UDP. Blocking UDP 123 will break NTP, even if TCP is allowed.
* **Software Firewalls:** When troubleshooting Windows Defender, check both **Inbound** and **Outbound** rules, and verify if specific applications/services are being blocked in addition to ports/IPs.

## ❓ Questions to Review
1. Why is the order of rules in an ACL critical to network traffic flow?
2. If a firewall is configured with a "Deny All" rule at the top of the list, what happens to traffic that matches a "Permit" rule located at the bottom?
3. What is the difference between a host-based firewall and a network-based firewall?
4. Which layer of the OSI model are you primarily troubleshooting when you check the IP address, subnet mask, and default gateway?
5. Why might a network administrator accidentally block 65,536 IP addresses instead of 256?

## 🔗 Related Topics
* [[OSI Model]]
* [[TCP/IP Suite]]
* [[Network Security Devices]]
* [[Troubleshooting Methodology]]
