# 002 Ethernet Fundamentals

**Module/Section:** 08 Ethernet Switching
**Tags:** #ethernet #layer2 #🌱seedling

---

![[002 Ethernet Fundamentals.mp4]]

## 📖 Core Concept
Ethernet is the dominant **Layer 2 (Data Link Layer)** protocol used in modern Local Area Networks (LANs). It evolved from early, non-standardized networking technologies to become the industry standard. Ethernet utilizes a **contention-based** access method, meaning devices compete for network access rather than waiting for a specific turn (deterministic). This approach prioritizes efficiency and low overhead over the rigid structure of older technologies like Token Ring.

## 🛠️ Hardware & Devices
* **Coaxial Cables:** Used in early Ethernet (10Base2 and 10Base5).
 * **BNC Connectors:** Used to connect coaxial cables.
 * **Vampire Taps:** A method for connecting devices to thick coaxial cable.
* **Twisted Pair Cables:** Modern cabling (e.g., CAT3).
* **Hubs:** A legacy networking device that connects multiple devices, sharing a single collision domain. All ports on a hub share the same bandwidth and collision domain.
* **Switches:** Modern networking devices that segment networks. Each port on a switch acts as its own individual collision domain, allowing for higher performance and full-duplex communication.

## 📜 Protocols & Standards
* **Ethernet:** The primary Layer 2 protocol for LANs.
* **10Base2 ("Thinnet"):** Early Ethernet standard; supports up to 200 meters.
* **10Base5 ("Thicknet"):** Early Ethernet standard; supports up to 500 meters.
* **10Base-T:** Ethernet standard supporting 10 Mbps over Category 3 (CAT3) twisted-pair cabling; max distance of 100 meters.
* **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** The protocol/logic used by Ethernet to manage network access and handle collisions.

## 🔑 Key Terminology
* **Deterministic Network:** A network access method where devices must wait for a specific signal (like a token) to transmit, ensuring no collisions (e.g., Token Ring).
* **Contention-Based:** A network access method where devices "contend" or compete for the medium, listening for gaps in traffic to transmit.
* **Collision:** Occurs when two or more devices transmit data simultaneously on the same segment, resulting in corrupted, unintelligible signals.
* **Collision Domain:** A network segment where devices compete for access; if two devices transmit at the same time, a collision occurs.
* **Carrier Sensing:** The ability of a device to listen to the network medium to determine if a signal is already present.
* **Multiple Access:** The ability for many devices to share the same network medium.
* **Collision Detection (CD):** The ability of a device to detect when a collision has occurred during transmission.
* **Random Back-off Timer:** A mechanism where devices involved in a collision wait for a randomized amount of time before attempting to retransmit, preventing repeated immediate collisions.
* **Half-Duplex:** A communication mode where a device can either send or receive, but not both simultaneously (required in shared collision domains).
* **Full-Duplex:** A communication mode where a device can send and receive data simultaneously (possible when each port is its own collision domain).

## 🔄 How It Works (Processes)
### CSMA/CD Workflow:
1. **Listen (Carrier Sense):** The device listens to the medium to see if it is idle.
2. **Transmit:** If the medium is clear, the device transmits its data.
3. **Detect:** If two devices transmit simultaneously, a collision is detected.
4. **Stop & Jam:** Both devices stop transmitting immediately.
5. **Back-off:** Both devices generate a **random back-off timer**.
6. **Retry:** Once the timer expires, the device listens to the medium again. If clear, it attempts to retransmit the data.

## 📊 Comparisons & Key Differences

| Feature| Deterministic (e.g., Token Ring)| Contention-Based (Ethernet)|
| :---| :---| :---|
| **Access Style**| Ordered/Turn-based| Chaotic/Competition-based|
| **Collisions**| None| Possible|
| **Overhead**| High (Token passing)| Low|
| **Efficiency**| Lower (wasted time slots)| Higher (uses available bandwidth)|

## ⚠️ Exam Tips & Important Notes
* **Historical Context:** You do **not** need to memorize technical specifications for 10Base2 or 10Base5 for the current Network+ exam.
* **Switch vs. Hub:** Always remember that a switch creates a separate collision domain for every port, whereas a hub creates one giant collision domain for all connected devices.
* **Full-Duplex:** Full-duplex is only possible when there is no contention (i.e., on a switch port).
* **Collision Domains:** The goal of modern network design is to keep collision domains as small as possible to maximize performance.

## ❓ Questions to Review
1. What is the primary advantage of a contention-based network over a deterministic one?
2. Why does a hub perform worse than a switch in a high-traffic network?
3. What happens to a device's transmission when a collision is detected in an Ethernet network?
4. How does a switch port differ from a hub port regarding collision domains?
5. What does the "Carrier Sense" portion of CSMA/CD actually do?

## 🔗 Related Topics
* [[Layer 2 Data Link Layer]]
* [[Network Topologies]]
* [[Switching Concepts]]
