# 006 Understanding Firewalls

**Module/Section:** 17 Network Segmentation
**Tags:** #firewalls #security #ACL #🌱seedling

---

![[006 Understanding Firewalls.mp4]]

## 📖 Core Concept
Firewalls are dedicated network devices or software applications designed to secure networks by controlling the flow of traffic. While routers use Access Control Lists (ACLs) for basic filtering, firewalls are the primary tools for robust network security.

* **Access Control Lists (ACLs):** A set of rules applied to a firewall, router, or infrastructure device to permit or deny traffic through an interface.
* **Rule Processing:** ACLs are processed in a **top-down** manner. The first rule that matches the traffic condition is applied, and subsequent rules are ignored for that specific packet.
* **Best Practices:**
 * Place specific rules at the top and generic rules at the bottom.
 * Always include an **explicit "deny all"** rule at the end of an ACL if the device does not support an "implied deny."
 * Log all actions (both permits and denies) to maintain an audit trail.
* **Firewall Types:**
 * **Hardware-based:** Protects an entire subnet or network boundary (e.g., SOHO wireless routers).
 * **Software-based:** Protects individual host machines (e.g., Windows Defender Firewall, macOS Firewall).

## 🛠️ Hardware & Devices
* **Wireless Router (N300 Model):** A common SOHO (Small Office/Home Office) combination device acting as a router, switch, and wireless access point.
* **Network Boundary Devices:** Hardware firewalls positioned at the edge of the network to filter traffic entering or leaving the local network.

## 📜 Protocols & Standards
* **TCP (Transmission Control Protocol):** Connection-oriented protocol often used for web traffic and services.
* **UDP (User Datagram Protocol):** Connectionless protocol.
* **Telnet (Port 23):** Unsecure remote access protocol; often blocked by firewalls.
* **FTP (File Transfer Protocol):** Uses **Port 20** (data) and **Port 21** (control).
* **SSH (Secure Shell):** Secure remote access protocol (Port 22).
* **HTTP (Port 80):** Standard web traffic.
* **HTTPS (Port 443):** Secure web traffic.
* **IPSec:** Used for secure VPN tunnels.

## 🔑 Key Terminology
* **Access Control List (ACL):** A rule set used to control traffic flow based on source, destination, port, and protocol.
* **Implied Deny:** A default security posture where any traffic not explicitly permitted is automatically blocked.
* **Port Forwarding:** A technique to redirect incoming traffic from a specific port on the router to a specific internal IP address/device.
* **Port Triggering:** A dynamic form of port forwarding where an outbound connection triggers an inbound opening.
* **Windows Defender Firewall with Advanced Security:** A host-based firewall management tool in Windows that allows for granular control over inbound/outbound rules and profiles (Domain, Private, Public).
* **Stealth Mode (macOS):** A firewall setting that makes the device ignore and not acknowledge ping requests, making the device "invisible" to network scans.
* **PF / IPFW:** Command-line firewall tools used in macOS/Unix-like systems for advanced configuration.

## 🔄 How It Works (Processes)
1. **Traffic Evaluation:** The firewall inspects incoming/outgoing packets against the ACL.
2. **Rule Matching:** The firewall checks the packet against the first rule. If it matches, the action (permit/deny) is taken, and processing stops.
3. **Logging:** If configured, the firewall records the event (source, destination, action taken) for security auditing.
4. **Inbound/Outbound Filtering:**
 * **Outbound:** Blocking internal users from accessing specific services (e.g., blocking gaming ports or Telnet).
 * **Inbound:** Using port forwarding to allow external traffic to reach specific internal servers (e.g., hosting a web server).

## 📊 Comparisons & Key Differences

| Feature| Hardware Firewall (SOHO)| Software Firewall (Host-based)|
| :---| :---| :---|
| **Scope**| Protects the entire network/subnet| Protects the individual host|
| **Fidelity**| Often lower (simple block/allow)| High (application-specific rules)|
| **Placement**| Network boundary| Operating system level|
| **Management**| Web-based GUI| OS settings or CLI (PF/IPFW)|

## ⚠️ Exam Tips & Important Notes
* **Top-Down Processing:** Remember that order is everything. Specific rules must come before generic ones.
* **Default Deny:** Always assume an "implicit deny" exists or manually create a "deny all" rule at the bottom of your ACLs.
* **Exam Scenario:** If asked how to block a specific service (like Telnet), you must identify the port (23) and the protocol (TCP) to create the correct rule.
* **Logging:** Always emphasize that logging is a critical security requirement for audit purposes.
* **Stealth Mode:** Know that this specifically refers to ignoring ICMP (ping) requests.

## ❓ Questions to Review
1. Why is the order of rules in an ACL critical to firewall performance?
2. What is the difference between an "implied deny" and an "explicit deny"?
3. If a user needs to host a web server behind a SOHO router, what firewall feature should they configure?
4. What are the two ports associated with FTP, and why might you need to open both?
5. How does "Stealth Mode" on a macOS firewall improve security?

## 🔗 Related Topics
* [[Access Control Lists]]
* [[Port Forwarding]]
* [[Network Segmentation]]
* [[ICMP]]
* [[TCP and UDP]]
