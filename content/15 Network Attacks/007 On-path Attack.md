# 007 On-path Attack

**Module/Section:** 15 Network Attacks
**Tags:** #security #on-path-attack #mitm #🌱seedling

---

![[007 On-path Attack.mp4]]

## 📖 Core Concept
An **On-path Attack** (formerly known as Man-in-the-Middle or MitM) is a scenario where an attacker positions their workstation logically between two communicating hosts. This allows the attacker to transparently capture, monitor, modify, and relay communications.

The primary goal is to intercept authorization packets to hijack an established session between a client and a server. Once the attacker is in the path, they can choose to perform either a **Replay** or a **Relay** attack.

## 🛠️ Hardware & Devices
* **Rogue Wireless Access Point:** A malicious or unauthorized wireless access point introduced to intercept traffic.
* **Rogue Hub/Switch:** Unauthorized networking hardware placed in the network path to facilitate traffic interception.
* **Workstation:** The attacker's device used to logically position itself between the victim client and server.

## 📜 Protocols & Standards
* **HTTP (Hypertext Transfer Protocol):** Unencrypted web traffic; the target state for SSL stripping.
* **HTTPS (Hypertext Transfer Protocol Secure):** Encrypted web traffic using TLS/SSL.
* **TLS (Transport Layer Security) 1.2/1.3:** Modern cryptographic protocols used to secure communications.
* **SSL (Secure Sockets Layer) 2.0:** An older, deprecated, and insecure cryptographic protocol often targeted in downgrade attacks.

## 🔑 Key Terminology
* **On-path Attack:** An attack where the perpetrator positions themselves between two communicating hosts to intercept or manipulate traffic.
* **ARP Poisoning:** A technique used to associate an attacker's MAC address with the IP address of another host (usually the default gateway) on a local area network.
* **DNS Poisoning:** An attack that corrupts the Domain Name System cache, redirecting traffic to a malicious destination.
* **Replay Attack:** Capturing valid data (such as an authentication handshake) and repeating it later to gain unauthorized access or impersonate a user.
* **Relay Attack:** The attacker acts as a proxy between two hosts, allowing them to read, modify, or inject data into the communication stream in real-time.
* **SSL Stripping:** An attack that forces a client to downgrade from an encrypted HTTPS connection to an unencrypted HTTP connection.
* **Downgrade Attack:** A strategy where an attacker forces a system to abandon a high-security communication mode in favor of a weaker, backwards-compatible, and crackable mode.

## 🔄 How It Works (Processes)
1. **Positioning:** The attacker uses methods like ARP poisoning, DNS poisoning, or rogue hardware to intercept the traffic path.
2. **Interception:** The attacker captures packets intended for the server.
3. **Action:**
 * **Replay:** The attacker captures an authentication handshake and sends it to the server to mimic an authorized user.
 * **Relay:** The attacker sits in the middle, receiving traffic from the client, modifying it (e.g., changing bank transaction amounts/destinations), and forwarding it to the server.
4. **Evasion/Bypass:**
 * **SSL Stripping:** Attacker intercepts an HTTPS request and forces the browser to use HTTP.
 * **Downgrade:** Attacker allows encryption but forces the negotiation of a weak protocol (e.g., SSL 2.0) that they can crack in real-time.

## 📊 Comparisons & Key Differences

| Feature| Replay Attack| Relay Attack|
| :---| :---| :---|
| **Primary Goal**| Impersonation/Access| Interception/Manipulation|
| **Method**| Captures and repeats data| Acts as a proxy/middleman|
| **Data Integrity**| Usually maintains original data| Often modifies data (e.g., bank transfers)|
| **Visibility**| Passive (usually)| Active (man-in-the-middle)|

## ⚠️ Exam Tips & Important Notes
* **Confidentiality vs. Integrity:** Relay attacks violate both. Confidentiality is breached because the attacker reads the data; integrity is breached because the attacker modifies the data.
* **Encryption is the Barrier:** Strong encryption (TLS 1.3) makes on-path attacks significantly harder, which is why attackers use SSL stripping and downgrade attacks to circumvent these protections.
* **Downgrade Scope:** Remember that downgrade attacks are not limited to web traffic; they apply to any protocol that supports backwards compatibility (Wi-Fi, VPNs, etc.).
* **Terminology:** While the industry often uses "Man-in-the-Middle," the CompTIA Network+ exam uses the term **On-path Attack**.

## ❓ Questions to Review
1. What is the fundamental difference between a replay attack and a relay attack?
2. How does an attacker violate the integrity of a transaction during a relay attack?
3. Why would an attacker prefer a downgrade attack over simply blocking the connection?
4. What is the primary purpose of SSL stripping?
5. Which network layer protocols are commonly targeted by downgrade attacks?

## 🔗 Related Topics
* [[ARP Poisoning]]
* [[DNS Poisoning]]
* [[Encryption Standards]]
* [[Wireless Security]]
