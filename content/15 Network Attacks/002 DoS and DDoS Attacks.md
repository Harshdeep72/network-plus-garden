# 002 DoS and DDoS Attacks

**Module/Section:** 15 Network Attacks
**Tags:** #security #dos #ddos #tcp #icmp #🌱seedling

---

![[002 DoS and DDoS Attacks.mp4]]

## 📖 Core Concept
The primary goal of a **Denial of Service (DoS)** attack is to overwhelm a target system (server or workstation) with so many requests that it exhausts its resources (memory, CPU, bandwidth), causing it to crash or become unresponsive to legitimate users.

* **Evolution of Attacks:** While single-machine DoS attacks were highly effective 10–30 years ago, modern hardware is significantly faster, making it difficult for one computer to crash a server alone. However, the concepts remain foundational for understanding modern **Distributed Denial of Service (DDoS)** attacks.
* **Resource Exhaustion:** The core mechanism of these attacks is forcing the victim to allocate resources (like memory for half-open connections) until no more resources are available for legitimate traffic.
* **The "Mom" Analogy:** An instructor compares a server to a parent. One child asking for attention is manageable; however, if dozens of children (zombies/bots) demand attention simultaneously, the parent (server) becomes overwhelmed and unable to function.

## 🛠️ Hardware & Devices
* **Workstation:** Used as the source of a DoS attack.
* **Server:** The target of the attack; suffers from resource exhaustion.
* **C2 (Command and Control) Server:** A server used by an attacker to manage and issue commands to a botnet.
* **Cloud Servers:** Modern infrastructure that can "horizontally scale" to handle increased traffic, though this can lead to massive financial costs during a DDoS attack.

## 📜 Protocols & Standards
* **TCP (Transmission Control Protocol):** Used in SYN Flood attacks. Relies on the three-way handshake.
* **ICMP (Internet Control Message Protocol):** Used in Smurf attacks (ping floods).
* **IP (Internet Protocol):** Used for spoofing source addresses to hide the attacker's identity and redirect responses.

## 🔑 Key Terminology
* **DoS (Denial of Service):** An attack where a single machine floods a victim with requests to cause a crash.
* **TCP SYN Flood:** A DoS attack where the attacker initiates a TCP handshake but never completes it, leaving the connection "half-open."
* **Three-Way Handshake:** The standard TCP connection process:
 1. **SYN:** Client sends a packet with the SYN flag.
 2. **SYN-ACK:** Server responds with SYN and ACK flags.
 3. **ACK:** Client sends an ACK flag to complete the connection.
* **Half-Open Connection:** A state where a server has reserved resources for a connection that never completes the handshake.
* **Spoofing:** Falsifying the source IP address in a packet header to hide the attacker's identity or redirect responses to a victim.
* **Smurf Attack:** A type of ICMP flood where an attacker sends a ping to a subnet broadcast address with a spoofed source IP (the victim's IP). All devices on the subnet respond to the victim, amplifying the traffic.
* **DDoS (Distributed Denial of Service):** An attack using multiple compromised machines (hundreds to thousands) to overwhelm a target simultaneously.
* **Botnet:** A collection of compromised computers controlled by a single master node.
* **Zombie:** An individual computer that has been compromised and is part of a botnet.
* **C2 (Command and Control):** The infrastructure used by an attacker to control the botnet.
* **Horizontal Scaling:** A cloud computing technique where a system adds more servers to handle increased load.

## 🔄 How It Works (Processes)
### TCP SYN Flood Process:
1. **Initiation:** Attacker sends multiple packets with the **SYN** flag set to the target.
2. **Response:** The server reserves memory/resources and sends back **SYN-ACK** packets.
3. **The Trap:** The attacker ignores the SYN-ACK and never sends the final **ACK**.
4. **Exhaustion:** The server keeps the connections "half-open" for a default timeout period (typically ~3 minutes). If enough of these occur, the server runs out of memory and crashes.

### Smurf Attack Process:
1. **Spoofing:** Attacker sends an ICMP Echo Request (ping) to a **subnet broadcast address**.
2. **Deception:** The source IP of the ping is set to the **victim's IP address**.
3. **Amplification:** Every device on that subnet receives the ping and sends an ICMP Echo Reply back to the victim.
4. **Result:** The victim is flooded with responses, overwhelming their bandwidth and processing power.

## 📊 Comparisons & Key Differences
| Feature| DoS| DDoS|
| :---| :---| :---|
| **Source**| Single machine| Multiple machines (Botnet)|
| **Scale**| Limited by one machine's bandwidth| Massive (100,000+ machines)|
| **Complexity**| Lower| Higher (requires C2 infrastructure)|
| **Detection**| Easier to block| Difficult to block (traffic from many IPs)|

## ⚠️ Exam Tips & Important Notes
* **Historical Context:** Remember that while Smurf attacks are less common today due to network hardening (blocking ICMP at the perimeter), they are still a valid exam topic.
* **Cloud Costs:** Be aware that even if a server survives a DDoS attack via horizontal scaling, the business still pays for the bandwidth and compute resources consumed by the attack traffic.
* **TCP Handshake:** Know the order of the three-way handshake (SYN -> SYN-ACK -> ACK) for the exam.
* **Smurf Attack:** If a network is misconfigured to allow responses to broadcast pings, it remains vulnerable to Smurf attacks.

## ❓ Questions to Review
1. What is the primary difference between a DoS and a DDoS attack?
2. In a TCP SYN flood, what state is the connection in when the server is waiting for the final ACK?
3. How does an attacker use a subnet broadcast address to amplify a Smurf attack?
4. What is a "zombie" in the context of network security?
5. Why might a company still suffer financial loss from a DDoS attack even if their servers do not crash?
6. What is the purpose of spoofing an IP address in a DoS attack?

## 🔗 Related Topics
* [[TCP/IP]]
* [[ICMP]]
* [[Network Security]]
* [[Cloud Computing]]
