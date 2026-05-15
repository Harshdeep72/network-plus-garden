# 006 VLAN Configuration

**Module/Section:** 08 Ethernet Switching
**Tags:** #VLAN #switching #8021Q #network-configuration #🌱seedling

---

![[006 VLAN Configuration.mp4]]

## 📖 Core Concept
VLANs (Virtual Local Area Networks) are essential for modern network architecture, providing increased flexibility, improved performance, and enhanced security by logically segmenting a physical network into multiple broadcast domains. Proper configuration of interfaces and trunking is required to maintain this segmentation.

## 🛠️ Hardware & Devices
* **Switches:** Modern network devices that support VLAN tagging and logical segmentation.
* **Legacy Network Devices:** Older hardware that does not support VLAN tagging; these require the use of a **Native VLAN** to communicate with modern switches.
* **VoIP Phones:** Devices configured to use a **Voice VLAN** to ensure traffic prioritization.
* **Video Teleconference (VTC) Systems:** Systems that utilize **Voice VLANs** for prioritized traffic.
* **Servers:** High-performance devices that often utilize **Link Aggregation** to increase bandwidth and provide redundancy.

## 📜 Protocols & Standards
* **IEEE 802.1Q:** The industry-standard protocol for VLAN tagging. It inserts a tag into the Ethernet frame header containing a **VLAN Identifier (VID)**, allowing switches to identify and forward frames to the correct VLAN across trunk links.

## 🔑 Key Terminology
* **VLAN (Virtual Local Area Network):** A logical subdivision of a network that allows for the separation of traffic based on department, function, or security requirements.
* **VLAN Tagging:** The process of inserting a VID into an Ethernet frame to maintain separation between VLANs when traversing shared physical infrastructure.
* **VID (VLAN Identifier):** A unique numerical ID assigned to a VLAN, contained within the 802.1Q tag.
* **Trunking:** The transmission of traffic from multiple VLANs across a single physical link while maintaining logical separation.
* **Native VLAN:** A specific VLAN on a trunk port that carries untagged traffic. It is used for compatibility with legacy devices that do not understand VLAN tags.
* **Voice VLAN:** A specialized VLAN dedicated to VoIP traffic, designed to segregate voice data from regular network traffic to ensure Quality of Service (QoS).
* **Link Aggregation (Port Channeling/Bonding):** The technique of combining multiple physical network links into a single logical link to increase bandwidth and provide redundancy.
* **Speed:** The rate of data transfer, typically measured in Mbps or Gbps.
* **Duplex:** The mode of communication between devices.
 * **Half Duplex:** Devices can either send or receive data, but not both simultaneously (analogy: walkie-talkies).
 * **Full Duplex:** Devices can send and receive data simultaneously, effectively doubling capacity.
* **Auto-negotiation:** A process where devices automatically select the highest common performance settings (speed/duplex) supported by both ends of a link.

## 🔄 How It Works (Processes)
* **802.1Q Tagging Process:** When a frame leaves a departmental switch, the switch inserts a tag with a VID. As the frame traverses shared trunk links, the tag ensures the frame remains isolated from other VLANs.
* **Native VLAN Handling:** When a switch receives an untagged frame on a trunk port, it automatically assigns that frame to the configured Native VLAN.
* **Voice VLAN Prioritization:** Traffic from VoIP/VTC devices is tagged for the Voice VLAN. The switch applies **QoS (Quality of Service)** policies to this traffic, giving it precedence over standard data (email/web) to reduce latency, jitter, and packet loss.
* **Link Aggregation:** Multiple physical ports are bundled. Data is distributed across these links. If one physical link fails, traffic continues to flow over the remaining links, providing resiliency.
* **Speed/Duplex Configuration:** Devices negotiate settings. If auto-negotiation fails or is inappropriate for legacy gear, manual configuration is required to prevent performance degradation (e.g., a 1Gbps link being throttled to 100Mbps half-duplex).

## 📊 Comparisons & Key Differences

| Feature| Half Duplex| Full Duplex|
| :---| :---| :---|
| **Simultaneity**| Cannot send/receive at once| Can send/receive at once|
| **Performance**| Lower (congestion prone)| Higher (doubles capacity)|
| **Analogy**| Walkie-talkie| Telephone|

## ⚠️ Exam Tips & Important Notes
* **Security Warning:** By default, the Native VLAN is often VLAN 1. Cybersecurity experts strongly recommend changing the Native VLAN to a different ID (e.g., 10 or 100) to prevent **VLAN Hopping attacks**.
* **Consistency:** The Native VLAN must be configured identically on both ends of a trunk link, or traffic will be misrouted.
* **Performance:** Misconfiguring speed and duplex (e.g., forcing half-duplex on a high-speed server) is a common cause of network bottlenecks and is frequently tested on the exam.
* **Redundancy:** Link aggregation is not just for speed; it is a critical strategy for maintaining network uptime (resiliency) in data centers.

## ❓ Questions to Review
1. What is the primary purpose of the 802.1Q tag in an Ethernet frame?
2. Why is it considered a security risk to leave the Native VLAN as the default (VLAN 1)?
3. How does a Voice VLAN improve the performance of VoIP traffic?
4. What is the difference between link aggregation and a standard single-link connection regarding redundancy?
5. If a device is capable of 1Gbps full-duplex but is manually set to 100Mbps half-duplex, what is the impact on network throughput?

## 🔗 Related Topics
* [[VLAN Hopping]]
* [[Quality of Service (QoS)]]
* [[Ethernet Switching]]
* [[Trunking]]
