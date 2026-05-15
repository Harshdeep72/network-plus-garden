# 001 Ethernet Switching

**Module/Section:** 08 Ethernet Switching
**Tags:** #ethernet #switching #layer-2 #🌱seedling

---

![[001 Ethernet Switching.mp4]]

## 📖 Core Concept
The core focus of this section is **Ethernet Switching**, which operates primarily at **Layer 2 (Data Link Layer)** of the [[OSI Model]]. The curriculum aligns with CompTIA Network+ objectives:
* **Objective 1.2:** Compare and contrast networking appliances, applications, and functions.
* **Objective 2.2:** Configure switching technologies and features.
* **Objective 4.3:** Apply network security features, defense techniques, and solutions (specifically [[Network Access Control]]).

The section covers the evolution of network connectivity from legacy Layer 1 devices to modern, intelligent Layer 2 switches, the segmentation of networks via [[VLANs]], loop prevention via [[Spanning Tree Protocol]], and the management of frame sizes via [[MTU]].

## 🛠️ Hardware & Devices
* **Hub:** A legacy Layer 1 networking device that broadcasts incoming data to all ports.
* **Bridge:** A legacy device that connects two network segments and filters traffic based on MAC addresses (the precursor to modern switches).
* **Switch:** A modern Layer 2 device that makes forwarding decisions based on MAC addresses to move data efficiently across a Local Area Network (LAN).

## 📜 Protocols & Standards
* **Ethernet:** The standard technology for connecting devices in a wired Local Area Network (LAN).
* **STP (Spanning Tree Protocol):** A network protocol used to prevent switching loops in redundant Ethernet networks.
* **NAC (Network Access Control):** A security solution that manages access to the network by verifying the identity and compliance of devices attempting to connect.

## 🔑 Key Terminology
* **Layer 2 (Data Link Layer):** The OSI layer where switching occurs; responsible for node-to-node data transfer and MAC address-based forwarding.
* **VLAN (Virtual Local Area Network):** A logical subdivision of a broadcast domain that allows network administrators to group devices together regardless of their physical location.
* **Broadcast Domain:** A logical division of a computer network in which all nodes can reach each other by broadcast at the data link layer.
* **MTU (Maximum Transmission Unit):** The size of the largest protocol data unit (in bytes) that can be communicated in a single network layer transaction.
* **Switching Loop:** A condition in a network where frames are forwarded in an endless cycle, potentially causing network congestion and failure.

## 🔄 How It Works (Processes)
* **Evolution of Switching:** The instructor highlights the progression from simple Layer 1 hubs (which lack intelligence) to bridges (which introduced MAC-based filtering), culminating in modern switches that combine these functions for high-speed, intelligent data movement.
* **Network Segmentation:** VLANs are used to take a single physical broadcast domain and subdivide it into smaller, more manageable logical segments.
* **Loop Prevention:** STP is utilized to detect and disable redundant paths in a network topology to prevent switching loops.
* **Security Enforcement:** NAC acts as a gatekeeper, ensuring that only authorized or compliant devices gain access to the Ethernet network.

## 📊 Comparisons & Key Differences
| Feature| Hub| Bridge| Switch|
| :---| :---| :---| :---|
| **OSI Layer**| Layer 1| Layer 2| Layer 2|
| **Intelligence**| None (Broadcasts)| Basic (MAC filtering)| High (MAC-based switching)|
| **Function**| Physical connectivity| Segment connection| Intelligent data forwarding|

## ⚠️ Exam Tips & Important Notes
* **Focus Areas:** Ensure you understand the distinction between Layer 1 and Layer 2 devices for Objective 1.2.
* **Security:** Pay close attention to how NAC is applied at the access layer (Objective 4.3).
* **Configuration:** Expect scenario-based questions regarding the configuration of VLANs and the troubleshooting of STP (Objective 2.2).
* **MTU:** Remember that MTU defines the maximum frame size; exceeding this can lead to fragmentation or dropped packets.

## ❓ Questions to Review
1. What is the primary difference between a hub and a switch in terms of how they handle incoming data?
2. Why is a VLAN considered a tool for managing broadcast domains?
3. What specific problem does the Spanning Tree Protocol (STP) solve in an Ethernet network?
4. At which layer of the OSI model does Ethernet switching primarily operate?
5. How does Network Access Control (NAC) enhance the security of a Layer 2 network?

## 🔗 Related Topics
* [[OSI Model]]
* [[VLANs]]
* [[Spanning Tree Protocol]]
* [[Network Access Control]]
* [[MAC Address]]
