# 001 Network Attacks

**Module/Section:** 15 Network Attacks
**Tags:** #cybersecurity #🌱seedling

---

![[001 Network Attacks.mp4]]

## 📖 Core Concept
The core concept of this section is the critical importance of **Network Security** in modern environments. Because most networks are "always-on" and connected to the **Internet** (the world's largest Wide-Area Network), they are constantly exposed to malicious actors. The primary goal of this section is to cover CompTIA Network+ Objective 4.2, which requires the ability to summarize various network attacks and their potential impacts on an organization's network infrastructure, data confidentiality, and integrity.

## 🛠️ Hardware & Devices
* **Network Switches**: Targeted by MAC flooding attacks to force them to behave like hubs.
* **Hubs**: An insecure network device; the goal of a MAC flooding attack is to force a switch to revert to this state to facilitate eavesdropping.
* **Wireless Access Points (WAPs)**: Targeted by "Evil Twin" attacks to trick users into connecting to malicious hardware.
* **Network Clients/Servers**: Endpoints targeted by on-path attacks and malware.
* **Rogue Devices**: Any unauthorized hardware connected to the network that poses a security risk.

## 📜 Protocols & Standards
* **ARP (Address Resolution Protocol)**: Targeted by ARP spoofing and ARP cache poisoning.
* **DNS (Domain Name System)**: Targeted by DNS spoofing, DNS poisoning, and unauthorized DNS zone transfers.
* **VLAN (Virtual Local Area Network)**: Targeted by VLAN hopping to bypass subnet segmentation.

## 🔑 Key Terminology
* **Denial-of-Service (DoS)**: An attack that attempts to overload or flood a network or service to make it unavailable to legitimate users.
* **Distributed Denial-of-Service (DDoS)**: A DoS attack originating from multiple compromised systems simultaneously to overwhelm a target.
* **MAC Flooding**: An attack that floods a switch with fake MAC addresses to exhaust its content-addressable memory (CAM) table, forcing it to broadcast traffic like a hub.
* **ARP Spoofing**: Sending falsified ARP messages over a local area network to link an attacker's MAC address with the IP address of a legitimate device.
* **ARP Cache Poisoning**: The result of ARP spoofing where the victim's ARP cache is updated with incorrect information, allowing the attacker to intercept traffic.
* **VLAN Hopping**: An exploit where an attacker sends traffic to a VLAN they are not authorized to access.
* **DNS Spoofing**: A technique where an attacker introduces corrupt DNS data into a DNS resolver's cache, causing the name server to return an incorrect IP address.
* **DNS Poisoning**: Similar to spoofing, it involves compromising the DNS server's cache to redirect traffic to malicious sites.
* **DNS Zone Transfer**: A process of replicating DNS databases between servers; if unauthorized, it can leak sensitive network topology information.
* **On-Path Attack**: (Formerly known as Man-in-the-Middle) An attack where the perpetrator positions themselves between two communicating parties to intercept, relay, or alter data.
* **Evil Twin**: A fraudulent Wi-Fi access point that appears to be a legitimate one to eavesdrop on wireless traffic.
* **Social Engineering**: Manipulating people into performing actions or divulging confidential information.
 * **Phishing**: Fraudulent communications (usually email) designed to trick users.
 * **Spear-Phishing**: A targeted phishing attack aimed at a specific individual or organization.
 * **Whaling**: A phishing attack specifically targeting high-profile executives (the "big fish").
* **Malware**: Malicious software including:
 * **Virus**: Self-replicating code that attaches to a host program.
 * **Worm**: Standalone malware that replicates to spread to other computers, often using network vulnerabilities.
 * **Trojan**: Malware disguised as legitimate software to gain unauthorized access.

## 🔄 How It Works (Processes)
* **On-Path Attack Workflow**: The attacker tricks a client into connecting to the attacker's machine first. The attacker then proxies the traffic to the legitimate server, remaining in the middle of the communication session to monitor or alter data.
* **MAC Flooding Workflow**: The attacker sends a massive volume of frames with different source MAC addresses to the switch. The switch's CAM table fills up, and the switch fails open, broadcasting all incoming traffic to all ports (acting as a hub), allowing the attacker to sniff the traffic.

## 📊 Comparisons & Key Differences
* **DoS vs. DDoS**: DoS is a single source attacking a target; DDoS uses a distributed network of compromised devices (botnet) to attack a target.
* **Virus vs. Worm vs. Trojan**:
 * **Virus**: Requires a host file to execute.
 * **Worm**: Self-propagating, does not require a host file.
 * **Trojan**: Relies on social engineering/deception to be installed by the user.

## ⚠️ Exam Tips & Important Notes
* **Objective 4.2 Focus**: The exam requires you to understand the *impact* of these attacks, not just the definitions. Always consider how an attack compromises the **CIA Triad** (Confidentiality, Integrity, Availability).
* **Terminology Shift**: Be aware that "Man-in-the-Middle" is now commonly referred to as an "On-Path" attack in modern CompTIA objectives.
* **Real-world Application**: The instructor emphasizes that these attacks are common and that understanding them is essential for both network defense and penetration testing.

## ❓ Questions to Review
1. What is the primary goal of a MAC flooding attack on a network switch?
2. How does an "Evil Twin" attack deceive wireless users?
3. What is the difference between phishing, spear-phishing, and whaling?
4. Why is an unauthorized DNS zone transfer considered a security risk?
5. How does an on-path attack maintain its position between the client and the server?

## 🔗 Related Topics
* [[Network Security]]
* [[VLANs]]
* [[DNS]]
* [[ARP]]
* [[Social Engineering]]
* [[Malware]]
