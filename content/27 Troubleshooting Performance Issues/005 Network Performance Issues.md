# 005 Network Performance Issues

**Module/Section:** 27 Troubleshooting Performance Issues
**Tags:** #troubleshooting #performance #dns #bandwidth #cpu #🌱seedling

---

![[005 Network Performance Issues.mp4]]

## 📖 Core Concept
Network performance issues manifest as slow connectivity, latency, or packet loss. Troubleshooting these issues requires a systematic approach to identify which of the five primary "bottlenecks" is the root cause. When performance degrades, it is often due to resource exhaustion or physical layer degradation.

The five primary causes of network performance issues are:
1. **High CPU Usage:** Network devices (routers, switches, firewalls) are computers; if their CPU is overwhelmed, processing speed drops, causing latency, jitter, and packet loss.
2. **High Bandwidth Usage:** When the pipe is full, buffers overflow, leading to dropped packets and subsequent TCP retransmissions, which further congest the network.
3. **Poor Physical Connectivity:** Damaged or substandard cabling causes transmission errors, forcing retransmissions at the data link or transport layer.
4. **Network Malfunctioning:** Misconfigurations, hardware failures, or outdated firmware/OS versions causing inefficient packet handling.
5. **DNS Problems:** High latency in resolving domain names to IP addresses creates a "perceived" network slowness for the end user.

## 🛠️ Hardware & Devices
* **Routers:** Core networking devices that route traffic; susceptible to high CPU usage if processing complex ACLs.
* **Switches:** Layer 2/3 devices that can suffer from performance issues due to hardware failure or misconfiguration.
* **Firewalls:** Border security devices; often the bottleneck if they contain overly complex rule sets (e.g., thousands of ACL entries).
* **Cable Tester:** A tool used to verify the integrity of twisted-pair copper cabling.
* **Fiber Light Meter:** A tool used to measure signal loss and verify the integrity of fiber optic cabling.
* **Demarcation Point (Demarc):** The physical point where the ISP's network ends and the customer's premises wiring begins.

## 📜 Protocols & Standards
* **TCP (Transmission Control Protocol):** A connection-oriented protocol that handles retransmissions. If packets are dropped due to bandwidth congestion, TCP attempts to resend them, which can exacerbate bandwidth saturation.
* **DNS (Domain Name System):** The protocol responsible for resolving human-readable domain names into IP addresses. High latency here directly impacts user experience.

## 🔑 Key Terminology
* **CPU Utilization:** The percentage of processing power currently being used by a device’s processor.
* **Latency:** The time delay between a request and a response.
* **Jitter:** The variation in the delay of received packets.
* **Packet Loss:** Occurs when data packets fail to reach their destination, often due to buffer overflow or physical layer errors.
* **ACL (Access Control List):** A set of rules applied to an interface or device to filter traffic. Large, inefficient ACLs increase CPU load.
* **Bandwidth Utilization:** The measurement of how much of the available network capacity is currently being consumed.
* **NetFlow Analysis:** A network monitoring technique used to collect IP traffic information and monitor what traffic types and sites are consuming bandwidth.
* **Acceptable Use Policy (AUP):** A document or set of rules that defines what users are permitted to do on the network.
* **Retransmission:** The process of sending data again when the original transmission is lost or corrupted.

## 🔄 How It Works (Processes)
* **Troubleshooting Physical Connectivity:**
 1. Connect a test client directly to the **Demarcation Point**.
 2. If the connection is poor at the Demarc, the issue is with the ISP.
 3. If the connection is good at the Demarc, test cables segment-by-segment (Demarc -> Border Router -> Switch -> Client) to isolate the damaged cable.
* **Optimizing ACLs:**
 1. Audit the current rule set (e.g., an ACL with 3,000 entries).
 2. Simplify and consolidate rules to reduce the number of comparisons the CPU must perform for every incoming packet.
* **Managing Bandwidth:**
 1. Conduct a **NetFlow analysis** to identify top talkers/traffic types.
 2. If non-business traffic (e.g., social media) is consuming the majority of bandwidth, update the AUP or implement traffic shaping/blocking.

## 📊 Comparisons & Key Differences
| Issue| Primary Symptom| Troubleshooting Tool/Method|
| :---| :---| :---|
| **High CPU**| Latency, Jitter, Packet Loss| ACL Review, Hardware Upgrade|
| **High Bandwidth**| Dropped packets, TCP retransmissions| NetFlow Analysis, AUP enforcement|
| **Physical Issues**| Transmission errors| Cable Tester, Fiber Light Meter|
| **DNS Issues**| Slow website loading/resolution| DNS latency testing|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip:** Always remember that routers, switches, and firewalls are essentially computers with CPUs. If they are overworked, the entire network slows down.
* **Exam Tip:** If a user complains about "slow internet," always check DNS resolution time. It is a common "hidden" cause of perceived slowness.
* **Exam Tip:** A damaged cable may still pass traffic, but it will cause errors that force retransmissions, which degrades performance. Always verify physical layer integrity.
* **Exam Tip:** When troubleshooting ISP issues, the **Demarcation Point** is your primary reference point to determine if the problem is "on-net" (internal) or "off-net" (ISP).

## ❓ Questions to Review
1. What are the five most common causes of network performance issues?
2. Why does a large, unoptimized ACL lead to high CPU utilization on a firewall?
3. How does TCP retransmission contribute to a "feedback loop" of bandwidth congestion?
4. What is the purpose of connecting a test client to the demarcation point?
5. How does high DNS latency affect the end-user experience?
6. Which tool would you use to test a fiber optic cable versus a twisted-pair cable?

## 🔗 Related Topics
* [[Troubleshooting Methodology]]
* [[DNS (Domain Name System)]]
* [[Network Monitoring]]
* [[Physical Layer (Layer 1)]]
