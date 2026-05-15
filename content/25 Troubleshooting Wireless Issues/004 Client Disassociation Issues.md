# 004 Client Disassociation Issues

**Module/Section:** 25 Troubleshooting Wireless Issues
**Tags:** #wireless #troubleshooting #security #🌱seedling

---

![[004 Client Disassociation Issues.mp4]]

## 📖 Core Concept
The lesson focuses on **Client Disassociation**, which is the process of a wireless client losing its connection to a Wireless Access Point (WAP). While many disassociation events are legitimate and expected behaviors of network management, they can also be indicators of malicious activity. Understanding the difference between normal maintenance-driven disassociation and security-driven de-authentication attacks is critical for network troubleshooting.

## 🛠️ Hardware & Devices
* **Wireless Access Point (WAP):** The networking hardware device that allows a Wi-Fi compliant device to connect to a wired network.
* **Wireless Controller:** A centralized device or software used to manage multiple WAPs, often used to review logs to determine the root cause of disassociation.

## 📜 Protocols & Standards
* **N/A — not covered in this lesson.** (Note: The lesson discusses general wireless management processes rather than specific IEEE 802.11 frame types, though it references the concept of de-authentication packets).

## 🔑 Key Terminology
* **Client Disassociation:** The state in which a wireless client is no longer connected to a WAP.
* **Idle Timeout:** A mechanism where a client is disconnected if no traffic is sent or received for a specific duration (default is 300 seconds/5 minutes).
* **Keep-Alive Packet:** A small data packet sent by a client to the WAP at regular intervals to maintain an active connection and prevent idle timeouts.
* **Session Timeout:** A mechanism that forces a client to re-authenticate after a set period (default is 1800 seconds).
* **Wireless Network Change:** A configuration update (e.g., changing a shared passphrase) that causes the WAP to reboot or reset the wireless radio, forcing all connected clients to re-authenticate.
* **Manual Deletion:** An administrative action where a specific client is forcibly removed from the network by an administrator.
* **Authentication Timeout:** A failure to complete the authentication or key exchange process within the allotted time, resulting in the client being dropped.
* **De-authentication Attack:** A malicious attack where an attacker sends spoofed de-authentication frames to a client, forcing them to disconnect so the attacker can capture the handshake packets to crack the passphrase.

## 🔄 How It Works (Processes)
1. **Idle Timeout Process:**
 * Client is inactive for 300 seconds.
 * WAP disconnects the client to free up network resources.
 * *Mitigation:* Clients may send "keep-alive" packets to stay connected.
2. **Session Timeout Process:**
 * Client reaches 1800 seconds of connection time.
 * The client and WAP automatically trigger a re-authentication process to maintain security.
3. **Wireless Network Change/Radio Reset Process:**
 * Administrator modifies settings (e.g., passphrase) or resets the radio.
 * The WAP disables the network/radio.
 * All clients are disassociated.
 * Clients must initiate a new association/authentication process once the radio is back online.
4. **De-authentication Attack Process:**
 * Attacker sends spoofed packets to the client.
 * Client is forced to disconnect.
 * Client attempts to reconnect.
 * Attacker captures the association/authentication handshake packets.
 * Attacker attempts to crack the shared passphrase.

## 📊 Comparisons & Key Differences

| Feature| Legitimate Disassociation| De-authentication Attack|
| :---| :---| :---|
| **Trigger**| Idle, session timeout, admin action| Malicious spoofed packets|
| **Frequency**| Predictable/Periodic| Often repetitive/Constant|
| **Goal**| Resource management/Security| Capture handshake for cracking|
| **Resolution**| Automatic reconnection| Requires security investigation|

## ⚠️ Exam Tips & Important Notes
* **Troubleshooting Step:** If you see a client repeatedly de-authenticating, always check the **Wireless Gateway** and **Wireless Controller logs** first.
* **Distinction:** Distinguish between "normal" network behavior (timeouts, reboots) and "abnormal" behavior (constant, unexplained disconnections).
* **Security Context:** Remember that de-authentication attacks are specifically used to capture the handshake process to crack the network passphrase.

## ❓ Questions to Review
1. What is the default idle timeout duration for most wireless access points?
2. Why would an administrator intentionally cause a wireless network change that results in client disassociation?
3. What is the primary purpose of a "keep-alive" packet?
4. How does an attacker use a de-authentication attack to compromise a network?
5. If a user reports constant disconnections, what is the first place a network administrator should look for evidence?

## 🔗 Related Topics
* [[Wireless Security]]
* [[Wireless Access Points]]
* [[Authentication Protocols]]
* [[Network Troubleshooting]]
