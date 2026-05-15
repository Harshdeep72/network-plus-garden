# 004 Address Resolution Protocol (ARP) Attacks

**Module/Section:** 15 Network Attacks
**Tags:** #arp #layer-2-attacks #🌱seedling

---

![[004 Address Resolution Protocol (ARP) Attacks.mp4]]

## 📖 Core Concept
The Address Resolution Protocol (ARP) is a foundational protocol used in IP networking to map an IP address to a physical MAC address on a local area network (LAN). Because ARP is an older protocol, it lacks built-in security mechanisms, making it highly susceptible to manipulation. Attackers exploit this by sending falsified ARP messages to intercept, modify, or disrupt network traffic.

## 🛠️ Hardware & Devices
* **Switches:** Modern switches are often used to implement security features like Dynamic ARP Inspection (DAI) to mitigate ARP-based attacks.
* **Default Gateway:** The router or device that connects the local network to external networks; often a primary target for ARP poisoning to redirect outbound traffic.
* **End-user Devices (Computers/Servers):** The targets of ARP spoofing where the ARP cache is corrupted to redirect traffic.

## 📜 Protocols & Standards
* **ARP (Address Resolution Protocol):** A protocol used to resolve IP addresses to MAC addresses. It is inherently insecure because it does not verify the authenticity of ARP responses.

## 🔑 Key Terminology
* **ARP Spoofing:** An attack where an attacker sends falsified ARP messages to a LAN to link the attacker's MAC address with the IP address of a legitimate host or server.
* **ARP Poisoning:** A broader attack that corrupts the ARP cache (table) of network devices, often targeting the default gateway to associate the attacker's MAC address with multiple IP addresses on the LAN.
* **ARP Cache (ARP Table):** A temporary storage area on a device that maintains the mapping of IP addresses to their corresponding MAC addresses.
* **On-path Attack:** An attack where the perpetrator positions themselves between two communicating parties to intercept, view, or modify data in transit.
* **ARP Flood:** A technique used in poisoning where a high volume of malicious ARP packets is sent to overwhelm or corrupt the ARP tables of network devices.
* **Dynamic ARP Inspection (DAI):** A security feature on switches that validates ARP packets in a network by comparing them against a trusted database of MAC-to-IP bindings.
* **Static ARP Entries:** Manually configured, permanent mappings of IP addresses to MAC addresses on a device to prevent unauthorized changes to the ARP cache.
* **Network Segmentation:** The practice of dividing a network into smaller, isolated segments (e.g., using VLANs) to limit the blast radius of an attack.
* **VPN (Virtual Private Network):** A technology that creates an encrypted tunnel for data, ensuring that even if traffic is intercepted via ARP spoofing, the data remains unreadable.

## 🔄 How It Works (Processes)
1. **Reconnaissance:** The attacker scans the network to identify active IP addresses and their corresponding MAC addresses.
2. **Injection:** The attacker uses specialized software to send fake ARP responses to the target(s) or the default gateway.
3. **Cache Corruption:** The victim devices receive the malicious ARP packets and update their local ARP caches with the attacker's MAC address associated with the legitimate IP address.
4. **Interception/Disruption:** Traffic intended for the legitimate host is now routed to the attacker's machine. The attacker can then:
 * **Intercept:** View sensitive data.
 * **Modify:** Alter data in transit (On-path attack).
 * **Deny:** Drop packets to cause a Denial of Service (DoS).

## 📊 Comparisons & Key Differences

| Feature| ARP Spoofing| ARP Poisoning|
| :---| :---| :---|
| **Scope**| Targeted (usually one host).| Broad (affects multiple hosts/gateway).|
| **Primary Goal**| Intercept traffic for a specific IP.| Corrupt the ARP table of the gateway/LAN to hijack multiple sessions.|
| **Impact**| Redirects traffic for a specific host.| Can disrupt the entire network or hijack multiple sessions.|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip:** Remember that ARP spoofing is typically a precursor to an **on-path attack**.
* **Exam Tip:** Static ARP entries are effective but **impractical for large networks** due to the administrative overhead of manual configuration.
* **Exam Tip:** **Dynamic ARP Inspection (DAI)** is the primary switch-based defense against these attacks.
* **Distinction:** If the question describes a targeted attack on a single host, it is likely **ARP Spoofing**. If it describes a systemic corruption of the gateway or multiple hosts, it is **ARP Poisoning**.

## ❓ Questions to Review
1. What is the primary vulnerability of the ARP protocol?
2. How does an attacker use an ARP attack to perform an on-path attack?
3. What is the main difference between ARP spoofing and ARP poisoning?
4. Why is the use of static ARP entries not recommended for large enterprise environments?
5. How does Dynamic ARP Inspection (DAI) protect a network?

## 🔗 Related Topics
* [[VLANs]]
* [[Intrusion Detection Systems (IDS)]]
* [[Denial of Service (DoS) Attacks]]
* [[VPN]]
* [[Layer 2 Attacks]]
