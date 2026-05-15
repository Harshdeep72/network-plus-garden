# 003 VOIP Issues

**Module/Section:** 27 Troubleshooting Performance Issues
**Tags:** #voip #qos #latency #jitter #troubleshooting #🌱seedling

---

![[003 VOIP Issues.mp4]]

## 📖 Core Concept
VoIP (Voice over Internet Protocol) is a set of protocols designed to transmit streaming voice and video in real-time. Unlike standard data protocols (HTTP, FTP, Email) where packet order and delivery speed are flexible, VoIP requires **real-time delivery** to maintain a coherent conversation.

Because VoIP is a real-time application, it is highly sensitive to network performance. If the network cannot maintain a high **Quality of Service (QoS)**, users will experience:
* **Dropouts:** Intermittent loss of audio.
* **Echoing:** Hearing one's own voice repeated back.
* **Glitches/Robotic Static:** Distortion caused by packets arriving out of order or at irregular intervals.

## 🛠️ Hardware & Devices
* **VoIP Handsets:** The physical devices used to initiate and receive voice calls.
* **Satellite Connections:** Mentioned as a high-latency hardware medium. Due to the distance signals must travel (up to a satellite and back), these connections often introduce significant delays (150ms–500ms+ round trip).

## 📜 Protocols & Standards
* **VoIP (Voice over Internet Protocol):** A suite of protocols for real-time voice/video communication.
* **UDP (User Datagram Protocol):** The primary transport protocol used for VoIP. It is preferred because it is faster than TCP, though it does not guarantee packet order or delivery.
* **TCP (Transmission Control Protocol):** Mentioned by contrast; not typically used for real-time VoIP because the overhead of error correction and retransmission would cause unacceptable delays.

## 🔑 Key Terminology
* **Latency:** The time (measured in milliseconds) it takes for a signal to travel from the source to the intended destination. For high-quality VoIP, latency should ideally be kept under 50–100ms.
* **Jitter:** The variation in the delay of received packets. It is measured by sampling the elapsed time between when packets were sent and when they arrive. High jitter results in packets arriving out of order, causing "robotic" audio.
* **Quality of Service (QoS):** A networking mechanism that allows administrators to prioritize specific types of traffic (like VoIP) over others to ensure better performance.
* **Millisecond (ms):** 1/1000th of a second.

## 🔄 How It Works (Processes)
1. **Packet Transmission:** VoIP data is broken into packets and sent over the network using UDP.
2. **Network Transit:** Packets traverse various network devices and the internet. Because they use UDP, they may take different paths and arrive out of order.
3. **Reassembly:** The receiving system attempts to reassemble the packets in the correct order.
4. **Jitter Impact:** If packets arrive in the wrong order (e.g., packet 3 arrives before packet 2), the system struggles to reassemble them, resulting in audio distortion.
5. **QoS Prioritization:** When QoS is configured, network devices inspect traffic, identify VoIP packets, and move them to the front of the transmission queue, ensuring they are processed before non-essential data.

## 📊 Comparisons & Key Differences
| Feature| Standard Data (HTTP/FTP)| VoIP (Real-Time)|
| :---| :---| :---|
| **Packet Order**| Can be reordered at destination| Must be in order for clear audio|
| **Sensitivity**| Low (can wait for retransmission)| High (cannot wait for retransmission)|
| **Transport**| Often TCP| Typically UDP|
| **Priority**| Standard| High (requires QoS)|

## ⚠️ Exam Tips & Important Notes
* **The "Golden Rule" of VoIP:** Latency and Jitter are the two primary enemies of VoIP performance.
* **QoS Limitations:** QoS settings only apply to your local network. Once traffic leaves your network and enters the public internet, your QoS rules are no longer honored by external ISPs.
* **Latency Thresholds:**
 * **Ideal:** Under 50–100ms.
 * **Noticeable:** 100–200ms.
 * **Severe:** 500ms+ (requires conversational protocols like saying "Over" to manage the delay).
* **Jitter Cause:** Jitter is often a symptom of high latency or packets taking disparate routes across the internet.

## ❓ Questions to Review
1. What is the primary transport protocol used for VoIP, and why is it chosen over TCP?
2. How does high latency specifically affect a VoIP conversation?
3. What is the difference between latency and jitter?
4. Why does configuring QoS on a local router not guarantee high quality once the traffic reaches the public internet?
5. If a user reports "robotic" sounding audio, which performance metric is most likely the culprit?

## 🔗 Related Topics
* [[Quality of Service (QoS)]]
* [[UDP vs TCP]]
* [[Network Latency]]
* [[Jitter]]
