# 011 Interface Statistics

**Module/Section:** 18 Network Monitoring
**Tags:** #interface-statistics #troubleshooting #cisco #🌱seedling

---

![[011 Interface Statistics.mp4]]

## 📖 Core Concept
Interface statistics provide a granular view of the health, performance, and configuration of physical or logical ports on networking devices (routers, switches, firewalls). By analyzing these statistics, administrators can identify physical layer issues, configuration mismatches, or congestion problems.

* **Interface:** A physical or logical port on a network device.
* **Purpose of Monitoring:** To track link state, throughput, error rates, and buffer health to ensure optimal network performance and facilitate troubleshooting.

## 🛠️ Hardware & Devices
* **Router/Switch/Firewall:** Enterprise-level devices that maintain individual statistics for every interface.
* **Fast Ethernet (F0/0):** A 100 Mbps connection using CAT5 cabling.
* **Cabling:**
 * **Unshielded Twisted Pair (UTP):** Copper cabling used for Ethernet.
 * **Fiber (FX):** Mentioned in the context of 100BaseTX/FX interface types.

## 📜 Protocols & Standards
* **OSPF (Open Shortest Path First):** A routing protocol that uses interface bandwidth to calculate link costs.
* **EIGRP (Enhanced Interior Gateway Routing Protocol):** A routing protocol that uses interface bandwidth to calculate link costs.
* **ARPA (Advanced Research Projects Agency):** The standard Ethernet encapsulation type.
* **802.3:** The IEEE standard for Ethernet, defining frame sizes (standard frame size is 1,518 bytes).
* **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** A media access method used in half-duplex Ethernet to detect and manage collisions.

## 🔑 Key Terminology
* **Link State:** Indicates if a cable is connected and if the protocol is operational (e.g., "up/up").
* **MTU (Maximum Transmission Unit):** The largest packet or frame size that can be sent over the network (default is 1,500 bytes for Ethernet).
* **Reliability:** A ratio (out of 255) representing the percentage of successfully processed packets vs. total frames.
* **TX/RX Load:** A measure (out of 255) of how busy the router is transmitting (TX) or receiving (RX) frames.
* **Keepalive:** A periodic signal (default 10 seconds) sent to verify the connection to a neighbor device is still active.
* **FIFO (First In, First Out):** A queuing strategy where packets are processed in the order they arrive.
* **Runt:** An Ethernet frame smaller than 64 bytes.
* **Giant:** An Ethernet frame exceeding the 802.3 standard of 1,518 bytes.
* **CRC (Cyclic Redundancy Check):** An error-detecting code used to ensure data integrity. A CRC error means the received frame was corrupted.
* **Throttles:** Occurs when an interface fails to buffer incoming packets due to high load.
* **Overrun:** Occurs when the interface cannot receive traffic due to insufficient hardware buffers.
* **Ignored:** Packets discarded because the hardware interface was low on internal buffers (often due to noise or broadcast storms).
* **Babble:** A transmitted frame larger than 1,518 bytes.
* **Late Collision:** A collision that occurs after the interface has already started transmitting the frame.
* **Deferred:** Frames that waited to be transmitted because the media was busy (common in half-duplex).

## 🔄 How It Works (Processes)
1. **Link Verification:** The device checks for a physical connection and a valid protocol. If both are present, the interface status is "up/up."
2. **Traffic Processing:** Packets enter the input queue. If the CPU is overwhelmed, **SPD (Selective Packet Discard)** drops low-priority packets to preserve capacity for high-priority traffic.
3. **Error Detection:**
 * **CRC Check:** The receiver calculates a checksum; if it doesn't match the sender's, the packet is rejected.
 * **Collision Detection:** In half-duplex, the device senses the wire; if a collision occurs, it waits and retransmits.
4. **Buffering:** If the output queue exceeds its maximum (e.g., 40 packets), additional packets are dropped.

## 📊 Comparisons & Key Differences

| Feature| Full Duplex| Half Duplex|
| :---| :---| :---|
| **Collisions**| Should be zero| Expected/Normal|
| **Performance**| Higher (simultaneous send/receive)| Lower (listen before talk)|
| **CSMA/CD**| Not required| Required|

* **Giant vs. Babble:** A **Giant** is an oversized frame *received* by the interface; a **Babble** is an oversized frame *transmitted* by the interface.

## ⚠️ Exam Tips & Important Notes
* **Troubleshooting Logic:**
 * **Half Duplex vs. Full Duplex:** If you see a speed mismatch or half-duplex on a high-speed link, it effectively cuts bandwidth in half and causes collisions.
 * **CRC Errors:** Often indicate physical layer issues like dirty fiber connectors, bad cabling, or EMI (Electromagnetic Interference) from running cables near power lines or fluorescent lights.
 * **Collisions on Full Duplex:** This is a major red flag; it usually indicates two devices are incorrectly connected to the same switch port.
* **Exam Focus:** You do not need to memorize every single counter, but you must be able to interpret interface statistics to identify the root cause of a network performance issue.

## ❓ Questions to Review
1. What does a "runt" frame indicate about an Ethernet transmission?
2. Why would an interface show "CRC errors," and what physical layer issues might cause this?
3. How does a "Giant" differ from a "Babble" in interface statistics?
4. If an interface is configured for full duplex, why would you see a high number of collisions?
5. What is the purpose of the "Keepalive" timer?

## 🔗 Related Topics
* [[Ethernet Standards]]
* [[Quality of Service (QoS)]]
* [[Network Troubleshooting Methodology]]
* [[Routing Protocols]]
