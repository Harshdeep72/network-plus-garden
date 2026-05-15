# 008 Rogue Device and Attacks

**Module/Section:** 15 Network Attacks
**Tags:** #rogue-devices #security #🌱seedling

---

![[008 Rogue Device and Attacks.mp4]]

## 📖 Core Concept
A **Rogue Device** is any unauthorized device or service connected to a corporate or private network. These devices bypass security controls, potentially allowing unauthorized access, data exfiltration, or the establishment of malicious services.

* **Identification:** Network devices are identified via their **MAC (Media Access Control) address** and **IP (Internet Protocol) address**.
* **Mitigation:** The most effective defense is requiring **digital certificates** on all endpoints and servers, forcing authentication and traffic encryption via **IPSec** or **HTTPS**.
* **Detection:** The process of identifying and removing unauthorized machines is known as **Rogue System Detection**.

## 🛠️ Hardware & Devices
* **Wireless Access Points (WAPs):** Devices that extend a wired network into the wireless spectrum. Rogue WAPs can be used to bridge traffic from a parking lot into the internal network or act as "Evil Twins."
* **Network Taps:** Physical devices attached to cabling to record packets passing over a network segment. Rogue taps are used by adversaries to intercept traffic.
* **Smart Appliances:** IoT devices (printers, webcams, VoIP handsets, VTC systems, smart TVs, appliances). These are often Linux-based, rarely patched, and serve as significant entry points for attackers.
* **Workstations/Laptops:** Personal devices brought into an environment without authorization.
* **WiFi Pineapple:** A specialized hardware device used to easily create rogue access points for malicious purposes.

## 📜 Protocols & Standards
* **IPSec (Internet Protocol Security):** A suite of protocols used to secure IP communications by authenticating and encrypting each IP packet.
* **HTTPS (Hypertext Transfer Protocol Secure):** Secure version of HTTP using TLS/SSL for encryption.
* **DHCP (Dynamic Host Configuration Protocol):** Used for IP assignment; rogue DHCP servers can be used to redirect traffic.
* **DNS (Domain Name System):** Used for name resolution; rogue DNS servers can be used to divert traffic to malicious sites.
* **SSH (Secure Shell):** Used for remote administration; unauthorized use of SSH can indicate a compromised or rogue client.

## 🔑 Key Terminology
* **Rogue Device:** Any unauthorized hardware or software connected to a network.
* **Evil Twin:** A fraudulent wireless access point that appears to be a legitimate one (e.g., mimicking a coffee shop's SSID) to capture user traffic.
* **Honeypot:** A decoy server or system set up by an attacker to harvest credentials or sensitive data.
* **ARP Poisoning:** A technique where an attacker sends falsified ARP (Address Resolution Protocol) messages over a local area network to link their MAC address with the IP address of a legitimate server.
* **Banner Grabbing:** A technique used to gain information about a remote system (OS, services, versions) by connecting to open ports and reading the "banner" returned.
* **Fingerprinting:** Analyzing the unique characteristics of a device's network stack to identify the OS or device type.
* **NAC (Network Access Control):** A security solution that enforces policy-based access to the network, often requiring authentication (certificates/credentials) before granting access.
* **BYOD (Bring Your Own Device):** A policy where employees are authorized to use personal devices on the corporate network; if a device is not covered by this policy, it is considered "rogue."

## 🔄 How It Works (Processes)
* **Rogue Device Detection Workflow:**
 1. **Baseline Establishment:** Identify all authorized devices currently on the network.
 2. **Detection:** Use scanning, physical inspection, or monitoring to find devices not in the baseline.
 3. **Verification:** Determine if the device is truly unauthorized (e.g., checking against change management logs).
 4. **Remediation:** Remove the device or revoke its network access.
* **Detection Methods:**
 * **Visual Inspection:** Physical walk-throughs of server rooms and offices to check for unauthorized hardware or counterfeit equipment.
 * **Network Mapping/Host Discovery:** Using scanners to enumerate hosts and compare them against the known baseline.
 * **Wireless Monitoring (Sniffing):** Scanning airwaves to identify unauthorized SSIDs.
 * **Traffic Analysis:** Monitoring for unauthorized protocols (e.g., unexpected port 80 traffic) or peer-to-peer flows.

## 📊 Comparisons & Key Differences
| Feature| Authorized Device| Rogue Device|
| :---| :---| :---|
| **Authorization**| Approved via Change Management| Unapproved/Unknown|
| **Visibility**| Known to IT/Security team| Hidden or "Shadow IT"|
| **Security**| Patched, monitored, managed| Unpatched, vulnerable, unmanaged|
| **Access**| Controlled via NAC/Certificates| Bypasses standard controls|

## ⚠️ Exam Tips & Important Notes
* **Definition of Rogue:** It is not just hardware; it includes **software** (unauthorized installations) and **virtual machines** (which can be spun up silently).
* **Authorized vs. Unauthorized Use:** An authorized device (company laptop) can become a "rogue device" if used in an unauthorized way (e.g., tethering, unauthorized scanning, or installing prohibited software).
* **Physical Security:** Never underestimate the importance of physical inspections. Attackers may use fake asset tags to make rogue hardware look legitimate.
* **IoT Vulnerability:** Smart appliances are high-risk because they are often ignored during standard patching cycles.

## ❓ Questions to Review
1. What is the primary difference between a rogue WAP and an "Evil Twin" attack?
2. Why are virtual machines considered a significant challenge for rogue device detection compared to physical hardware?
3. How can an authorized company laptop be classified as a "rogue device"?
4. What role does a digital certificate play in preventing rogue device access?
5. Why is "banner grabbing" a useful tool for an administrator performing network mapping?

## 🔗 Related Topics
* [[Network Access Control (NAC)]]
* [[Wireless Security]]
* [[Intrusion Detection Systems (IDS)]]
* [[Change Management]]
