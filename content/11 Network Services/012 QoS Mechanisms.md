# 012 QoS Mechanisms

**Module/Section:** 11 Network Services
**Tags:** #qos #traffic-management #🌱seedling

---

![[012 QoS Mechanisms.mp4]]

## 📖 Core Concept
Quality of Service (QoS) refers to the set of technologies and techniques used to manage network traffic, reduce packet loss, latency, and jitter. The goal is to transform "peaky" traffic patterns (unpredictable bursts) into a smoother, more consistent flow to ensure high-priority applications (like VoIP or video) perform reliably.

QoS is implemented through several distinct mechanisms:
* **Classification:** Identifying traffic types without altering packets.
* **Marking:** Altering packet headers to indicate priority.
* **Congestion Management:** Using queuing algorithms to handle buffer overflow.
* **Congestion Avoidance:** Proactively dropping packets to prevent total buffer exhaustion.
* **Policing & Shaping:** Controlling the rate of traffic flow.
* **Link Efficiency:** Optimizing the actual data payload and transmission method.

## 🛠️ Hardware & Devices
* **Routers/Switches:** The primary devices that implement QoS mechanisms based on packet analysis and markings.
* **WAN Accelerators:** Specialized devices designed to compress data before transmission across a Wide Area Network (WAN) to improve link efficiency.
* **Slow-speed interfaces:** Specifically mentioned as environments requiring shaping and link efficiency (e.g., T1 lines, ISDN, dial-up, satellite).

## 📜 Protocols & Standards
* **IP Precedence:** The first 3 bits of the Type of Service (ToS) byte in an IP header used for classification.
* **DSCP (DiffServ Code Point):** The first 6 bits of the ToS byte used for more granular traffic classification.
* **TCP (Transmission Control Protocol):** Connection-oriented protocol; preferred for dropping during congestion because it handles retransmissions.
* **UDP (User Datagram Protocol):** Connectionless protocol; sensitive to drops as there is no native retransmission mechanism.
* **RTP (Real-time Transport Protocol):** Used for voice/video delivery.
* **CRTP (Compressed RTP):** A protocol used to compress the IP/UDP/RTP header and voice payload to save bandwidth.

## 🔑 Key Terminology
* **Classification**: The process of identifying traffic based on headers, port numbers, and protocols without modifying the packet.
* **Marking**: The process of changing specific bits within a frame or packet header to inform network devices how to handle that traffic.
* **Queuing**: The process of buffering traffic when a device receives data faster than it can transmit it.
* **Weighted Fair Queuing (WFQ)**: A queuing algorithm that services multiple traffic queues in a round-robin fashion, giving each an equal turn.
* **Low-Latency Queuing (LLQ)**: A strict priority queuing mechanism where high-priority traffic (e.g., VoIP) is emptied before lower-priority queues.
* **Weighted Round-Robin (WRR)**: A hybrid queuing mechanism that assigns different "weights" to queues, allowing high-priority traffic to send more packets per turn than low-priority traffic.
* **Random Early Detection (RED)**: A congestion avoidance mechanism that drops packets from queues before they are completely full to prevent "tail drop" and manage TCP flow control.
* **Policing**: A rate-limiting mechanism that drops packets that exceed a configured speed limit.
* **Shaping**: A rate-limiting mechanism that buffers excess packets to smooth out traffic bursts rather than dropping them.
* **Link Fragmentation and Interleaving (LFI)**: A technique that breaks large data packets into smaller fragments and interleaves high-priority voice packets between them to reduce latency.

## 🔄 How It Works (Processes)
1. **Traffic Classification**: The router/switch analyzes the packet's port and protocol (e.g., distinguishing SMTP from VoIP) to determine priority.
2. **Marking**: The device modifies the ToS byte (IP Precedence or DSCP) to "tag" the packet for downstream devices.
3. **Congestion Management**:
 * *WFQ*: Takes one packet from each queue in a cycle (1-2-3-4, 1-2-3-4).
 * *LLQ*: Empties Queue 1 entirely, then Queue 2, etc.
 * *WRR*: Takes a specific number of packets based on weight (e.g., 3 from Queue 1, 2 from Queue 2, 1 from Queue 3).
4. **Congestion Avoidance (RED)**: As the buffer fills, the device begins dropping packets (preferentially dropping TCP over UDP) to signal the sender to slow down.
5. **Policing vs. Shaping**:
 * *Policing*: If traffic > limit, drop immediately.
 * *Shaping*: If traffic > limit, hold in buffer and release when bandwidth allows.

## 📊 Comparisons & Key Differences

| Feature| Policing| Shaping|
| :---| :---| :---|
| **Action on Excess**| Drops packets| Buffers packets|
| **Result**| Triggers retransmissions| Smooths traffic flow|
| **Best Use Case**| High-speed interfaces| Low-speed (T1, ISDN, Satellite)|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip**: Remember that **Policing** is like a police officer giving a ticket (dropping traffic), while **Shaping** is like a funnel (smoothing traffic).
* **Exam Tip**: **CRTP** can reduce VoIP headers from 40 bytes down to 2–4 bytes.
* **Exam Tip**: **TCP** is preferred for dropping during congestion because it handles retransmissions automatically; **UDP** drops result in permanent loss of service.
* **Exam Tip**: **LFI** is specifically used to prevent large data packets from causing latency spikes for voice traffic on slow links.

## ❓ Questions to Review
1. What is the primary difference between classification and marking?
2. Why is LLQ (Low-Latency Queuing) potentially dangerous for low-priority traffic?
3. Which congestion avoidance mechanism drops packets before the buffer is full?
4. Why would you choose shaping over policing on a T1 connection?
5. How does CRTP improve link efficiency for VoIP?

## 🔗 Related Topics
* [[Quality of Service (QoS)]]
* [[TCP/IP Model]]
* [[Network Congestion]]
* [[VoIP]]
