# 010 Network Performance Metrics

**Module/Section:** 18 Network Monitoring
**Tags:** #network-monitoring #performance-metrics #🌱seedling

---

![[010 Network Performance Metrics.mp4]]

## 📖 Core Concept
Network performance monitoring is the end-to-end evaluation of the user experience. Unlike traditional monitoring, which focuses on performance between two specific points (e.g., a switch and a router), network performance monitoring tracks the experience from the end user's workstation to the final destination. To ensure network availability and health, administrators must monitor three primary metrics: **Latency**, **Bandwidth/Throughput**, and **Jitter**.

## 🛠️ Hardware & Devices
* **Workstation:** The endpoint device used by the user to access network resources.
* **Router:** A network device that forwards data packets; prone to buffer issues during congestion.
* **Switch:** A network device that connects devices on a local network; also prone to buffer issues during congestion.
* **WiFi Adapter:** A wireless network interface card used to connect to a network; often results in lower throughput compared to wired connections due to interference and shared medium.

## 📜 Protocols & Standards
* **ICMP (Internet Control Message Protocol):** Used by the `ping` utility to test reachability and measure round-trip time.
* **TCP/IP (Transmission Control Protocol/Internet Protocol):** The fundamental suite for network communication. TCP requires an acknowledgement (ACK) for data received; high latency forces the sender to wait, slowing down performance.

## 🔑 Key Terminology
* **Network Performance Monitoring:** The end-to-end monitoring of the user experience from the workstation to the final destination.
* **Latency:** The measure of time it takes for data to reach its destination. Usually measured as Round Trip Time (RTT) in milliseconds (ms).
* **Bandwidth:** The theoretical maximum rate of data transfer across a network under ideal conditions.
* **Throughput:** The actual, real-world measure of data successfully transferred from source to destination.
* **Jitter:** The variation in the delay of received packets. It represents the inconsistency in packet arrival times.
* **Packet Loss:** Occurs when network congestion causes router/switch buffers to fill up, forcing the device to drop incoming packets.
* **Quality of Service (QoS):** A set of technologies used to manage network traffic, prioritize specific types of data (like voice or video), and reduce jitter/congestion.
* **Round Trip Time (RTT):** The time required for a signal to go from the sender to the receiver and back to the sender.

## 🔄 How It Works (Processes)
* **Measuring Latency:** A user executes a `ping` command. An ICMP packet leaves the workstation, travels to the destination (e.g., 8.8.8.8), and returns. The time taken is recorded in milliseconds.
* **TCP Data Flow:** TCP/IP sends a limited amount of data and waits for an acknowledgement (ACK). If latency is high, the "wait time" increases, causing a bottleneck in data transmission.
* **Buffer Congestion & Jitter:**
 1. Network congestion occurs; routers/switches cannot process traffic as fast as it arrives.
 2. Buffers fill up.
 3. If buffers overflow, **packet loss** occurs.
 4. If congestion eases, the buffer dumps all stored packets at once. The destination device struggles to process this "burst," resulting in **jitter** (e.g., audio/video speeding up or lagging).

## 📊 Comparisons & Key Differences

| Metric| Definition| Nature|
| :---| :---| :---|
| **Bandwidth**| Theoretical maximum capacity| Ideal/Potential|
| **Throughput**| Actual measured data transfer| Real-world/Actual|

* **Traditional Monitoring vs. Network Performance Monitoring:** Traditional monitoring checks segments (e.g., switch-to-router), whereas performance monitoring checks the entire path from the end-user workstation to the final destination.

## ⚠️ Exam Tips & Important Notes
* **Latency Impact:** High latency is most noticeable in real-time applications like VoIP, video conferencing, and online gaming.
* **Throughput vs. Bandwidth:** Always remember that bandwidth is the "theoretical limit" and throughput is the "actual reality."
* **Jitter Symptoms:** If a user reports that a voice or video call "speeds up" or "lags" intermittently, this is a classic symptom of jitter.
* **QoS Importance:** Implementing QoS is the primary method for mitigating jitter by prioritizing time-sensitive traffic.
* **Testing:** Using tools like `speedtest.net` provides a measurement of throughput, not bandwidth.

## ❓ Questions to Review
1. What is the primary difference between bandwidth and throughput?
2. Why does high latency negatively impact TCP/IP performance?
3. What are the three key metrics used to monitor network performance?
4. What causes jitter in a network environment?
5. How does packet loss relate to router/switch buffers?
6. Which applications are most sensitive to jitter?
7. What is the purpose of QoS in a network?

## 🔗 Related Topics
* [[Quality of Service (QoS)]]
* [[TCP/IP Suite]]
* [[ICMP]]
* [[Network Monitoring Tools]]
