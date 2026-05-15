# 005 Packet Captures

**Module/Section:** 18 Network Monitoring
**Tags:** #packet-capture #security #troubleshooting #nmap #dos #ddos #🌱seedling

---

![[005 Packet Captures.mp4]]

## 📖 Core Concept
Packet captures are a fundamental tool for network analysis, allowing administrators to view the raw data traversing a network device. On the CompTIA Network+ exam, you will not be presented with massive data files; instead, you will analyze "snippets" (5–20 lines) of packet data to identify network behaviors or security threats.

Key components of a packet capture log include:
* **Number:** The sequential order of the packet in the capture.
* **Time:** The elapsed time since the capture began (not a wall-clock timestamp). This is critical for correlating events across multiple logs in a [[SIEM]].
* **Source/Destination IP:** The origin and target of the traffic relative to the capture sensor.
* **Protocol:** The layer 3/4 protocol (e.g., TCP, UDP) or layer 2 protocol (e.g., ARP).
* **Length:** The size of the packet in bytes.
* **Info:** Header-specific details, such as TCP flags (SYN, ACK), sequence numbers, window sizes, and port numbers.

## 🛠️ Hardware & Devices
* **Network Device:** Any hardware (switch, router, firewall) where traffic is being monitored.
* **SPAN Port (Switched Port Analyzer):** A configuration on a network switch that mirrors traffic from one or more ports to a specific port for analysis by a packet capture device.
* **Sensor:** The device or software interface performing the packet capture.

## 📜 Protocols & Standards
* **TCP (Transmission Control Protocol):** Connection-oriented protocol used for reliable data transmission.
* **UDP (User Datagram Protocol):** Connectionless protocol used for faster, unreliable transmission.
* **ARP (Address Resolution Protocol):** Used at Layer 2 to map IP addresses to MAC addresses.
* **HTTP (Hypertext Transfer Protocol):** Port 80.
* **Telnet:** Port 23 (insecure remote access).
* **SSH (Secure Shell):** Port 22 (secure remote access).
* **FTP (File Transfer Protocol):** Port 21.
* **HTTPS (HTTP Secure):** Port 443.

## 🔑 Key Terminology
* **Packet Capture:** The process of intercepting and logging traffic passing over a digital network.
* **Port Scan:** A reconnaissance technique used to identify open ports and services on a target host.
* **SYN Flag:** A TCP flag used to initiate the first step of the three-way handshake.
* **SYN-ACK:** The second step of the TCP three-way handshake, acknowledging the initial SYN.
* **Denial-of-Service (DoS) Attack:** An attempt to make a machine or network resource unavailable to its intended users.
* **SYN Flood:** A type of DoS attack where an attacker sends a succession of SYN requests to a target system but never completes the three-way handshake, leaving connections "half-open" and exhausting server resources.
* **Distributed Denial-of-Service (DDoS) Attack:** A DoS attack originating from multiple compromised systems (often a [[Botnet]]), making it harder to block by simply filtering a single source IP.
* **Half-Open Connection:** A state in a TCP connection where the initial SYN has been received, but the final ACK has not been sent, consuming memory and connection slots on the server.
* **SIEM (Security Information and Event Management):** A system used to aggregate and correlate logs from various network devices.

## 🔄 How It Works (Processes)
* **TCP Three-Way Handshake:**
 1. **SYN:** Client sends a synchronization request.
 2. **SYN-ACK:** Server acknowledges and requests synchronization.
 3. **ACK:** Client acknowledges the server.
* **Identifying Attacks in Captures:**
 * **Port Scan:** Look for a single source IP sending SYN packets to a variety of different destination ports on a single target.
 * **SYN Flood (DoS):** Look for a high volume of SYN packets from a single source IP to a single destination, with no corresponding SYN-ACK or ACK packets.
 * **DDoS:** Look for a high volume of SYN packets targeting a single destination IP, but originating from multiple, distinct source IP addresses.

## 📊 Comparisons & Key Differences

| Feature| DoS| DDoS|
| :---| :---| :---|
| **Source IPs**| Single| Multiple|
| **Complexity**| Lower| Higher (often involves a botnet)|
| **Mitigation**| Block single IP| Requires traffic scrubbing/filtering|

## ⚠️ Exam Tips & Important Notes
* **Context is Key:** On the exam, you may see "..." in a log. This indicates that packets were skipped for brevity; do not assume the traffic stopped.
* **Correlation:** Always remember that the "Time" column in a capture is relative to the start of the capture. You must correlate this with other logs to establish a real-world timeline.
* **Exam Logic:** Even if a real-world expert would want more data, answer the exam question based on the *most obvious* pattern presented in the provided snippet.
* **Resource Exhaustion:** Remember that half-open connections (SYN floods) crash servers by consuming memory/connection tables, not necessarily by bandwidth saturation.

## ❓ Questions to Review
1. If you see a packet capture showing a single source IP sending SYN packets to ports 80, 23, 22, and 21, what is the most likely activity?
2. What is the primary difference between a DoS and a DDoS attack when viewing source IP addresses in a packet capture?
3. Why is it important to synchronize the "Time" column of a packet capture with a SIEM?
4. In a SYN flood, why does the target server eventually crash?
5. What does a "..." in a packet capture log snippet signify for the exam?

## 🔗 Related Topics
* [[TCP/IP Model]]
* [[Network Security]]
* [[Monitoring and Logging]]
* [[Nmap]]
