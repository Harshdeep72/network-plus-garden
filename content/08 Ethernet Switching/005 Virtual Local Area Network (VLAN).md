# 005 Virtual Local Area Network (VLAN)

**Module/Section:** 08 Ethernet Switching
**Tags:** #vlan #switching #layer2 #layer3 #🌱seedling

---

![[005 Virtual Local Area Network (VLAN).mp4]]

## 📖 Core Concept
A **VLAN (Virtual Local Area Network)** is a logical subdivision of a network that segments it into separate broadcast domains. Unlike traditional LANs, which rely on physical connections and hardware to define network boundaries, VLANs use software configuration to group hosts together. This allows devices to be logically grouped even if they are connected to different physical switches.

* **Logical vs. Physical:** VLANs allow multiple logical networks to share the same physical hardware (switches and cabling).
* **Strategic Purpose:** VLANs are used to improve network security, performance, management, and cost efficiency.
* **Evolution:** Before VLANs, administrators had to deploy separate physical switches, routers, and cabling for every department or network segment. VLANs allow for the consolidation of this hardware.

## 🛠️ Hardware & Devices
* **Layer 2 Switch:** Used for standard switching; without VLANs, these create a single, large broadcast domain.
* **Layer 3 Switch:** A switch capable of performing routing functions. It is used to route traffic between different VLANs.
* **Router:** Used to connect different network segments and enforce security policies (e.g., Access Control Lists) between VLANs.
* **Cabling:** Physical copper or fiber links used to connect switches and routers. Through **Trunking**, a single physical cable can carry traffic for multiple VLANs simultaneously.

## 📜 Protocols & Standards
* **OSI Model Layer 2 (Data Link Layer):** The layer where VLANs operate.
* **OSI Model Layer 3 (Network Layer):** The layer where routing between VLANs occurs (via Layer 3 switches or routers).

## 🔑 Key Terminology
* **VLAN (Virtual Local Area Network):** A logical segmentation of a network into separate broadcast domains.
* **Broadcast Domain:** A logical division of a computer network in which all nodes can reach each other by broadcast at the data link layer.
* **VLAN Tagging:** The process of adding a VLAN identifier (ID) to a data frame as it passes through a switch to ensure it stays within its assigned segment.
* **VLAN Database:** A file stored on a switch that contains configuration information, including VLAN IDs, names, and MTU sizes.
* **VLAN.DAT:** A specific flat file used by Cisco switches to store the VLAN database.
* **MTU (Maximum Transmission Unit):** The size of the largest protocol data unit (in bytes) that can be communicated in a single network layer transaction.
* **SVI (Switch Virtual Interface):** A virtual interface on a Layer 3 switch that provides routing capabilities for a specific VLAN, allowing inter-VLAN routing without an external router.
* **Trunking:** The process of carrying multiple VLANs across a single physical link between network devices.

## 🔄 How It Works (Processes)
1. **Frame Tagging:** When a frame enters a switch configured for VLANs, the switch tags the frame with a specific VLAN ID.
2. **Path Determination:** The switch uses these tags to determine the frame's path, ensuring it remains confined to its respective VLAN.
3. **Inter-VLAN Routing:** Because VLANs are separate broadcast domains, traffic cannot move between them natively. A Layer 3 device (Router or Layer 3 Switch) must be used to route traffic between them.
4. **Security Enforcement:** At the "choke point" (the router or Layer 3 switch), administrators can apply **Access Control Lists (ACLs)** to dictate which traffic is permitted to pass between VLANs.
5. **Trunking:** Multiple VLANs are transmitted over a single physical cable between switches or between a switch and a router. The devices use the tags to distinguish which traffic belongs to which VLAN.

## 📊 Comparisons & Key Differences

| Feature| Traditional LAN| VLAN|
| :---| :---| :---|
| **Segmentation**| Physical (cables/switches)| Logical (software config)|
| **Broadcast Domain**| Large, single domain| Smaller, multiple domains|
| **Hardware Needs**| High (separate devices per segment)| Low (consolidated hardware)|
| **Flexibility**| Low (requires re-cabling)| High (software-defined)|

## ⚠️ Exam Tips & Important Notes
* **Efficiency:** VLANs reduce the size of broadcast domains, which decreases unnecessary traffic and improves overall network performance.
* **Security:** VLANs isolate sensitive data. If a breach occurs in one VLAN, it is contained within that logical segment.
* **Management:** VLANs make it easier to implement policy changes and troubleshoot because the network is divided into smaller, manageable sections.
* **Cost:** VLANs save money by allowing organizations to use fewer physical switches and cables.
* **Exam Focus:** Remember that a router or Layer 3 switch is **required** for inter-VLAN communication.

## ❓ Questions to Review
1. What is the primary purpose of a VLAN in a modern network?
2. How does a VLAN reduce the size of a broadcast domain compared to a traditional switch?
3. What is the function of a Switch Virtual Interface (SVI)?
4. What happens to a data frame as it passes through a switch configured with VLANs?
5. Why is a router or Layer 3 switch necessary when using VLANs?
6. What is the purpose of the VLAN.DAT file?

## 🔗 Related Topics
* [[Layer 2 Switching]]
* [[Layer 3 Switching]]
* [[Broadcast Domains]]
* [[Access Control Lists (ACL)]]
* [[OSI Model]]
