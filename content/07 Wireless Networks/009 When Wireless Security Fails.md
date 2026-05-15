# 009 When Wireless Security Fails

**Module/Section:** 07 Wireless Networks
**Tags:** #wireless-security #hacking #WEP #🌱seedling

---

![[009 When Wireless Security Fails.mp4]]

## 📖 Core Concept
The lesson focuses on the inherent vulnerabilities of **WEP (Wired Equivalent Privacy)** and demonstrates how an attacker can exploit these weaknesses using an **Initialization Vector (IV) attack**.

* **The Flaw:** WEP is considered extremely insecure because it uses a short, 24-bit Initialization Vector. Because the IV is so small, it repeats frequently, allowing an attacker to capture enough data packets to mathematically derive the encryption key.
* **The Process:** The attack involves capturing traffic, injecting packets to force the access point to generate more traffic (and thus more IVs), and then using a cracking tool to determine the key.
* **Recommendation:** Never use WEP. If found in a production environment, it must be upgraded to **WPA2** immediately.

## 🛠️ Hardware & Devices
* **Wireless Network Interface Card (NIC):** The device used to capture traffic and perform injections. In the lab, it is referred to as `wlan0mon` (the monitor mode interface).
* **Access Point (AP):** The target device broadcasting the "WirelessHacking" SSID.
* **Client Device:** An iPhone was used in the demonstration to generate traffic (streaming YouTube) to facilitate the capture of data packets.

## 📜 Protocols & Standards
* **WEP (Wired Equivalent Privacy):** An outdated and insecure wireless security protocol.
* **WPA2 (Wi-Fi Protected Access 2):** The recommended security standard to replace WEP.
* **ARP (Address Resolution Protocol):** Used during the "ARP Replay" phase of the attack to generate traffic on the network.

## 🔑 Key Terminology
* **Initialization Vector (IV):** A random value used in encryption processes to ensure that the same plaintext does not result in the same ciphertext. WEP's 24-bit IV is too short, leading to collisions.
* **BSSID (Basic Service Set Identifier):** The MAC address of the wireless access point.
* **Monitor Mode:** A state for a wireless network card that allows it to capture all traffic in the air, regardless of whether the traffic is intended for that specific device.
* **Packet Injection:** The process of inserting forged packets into a network stream to manipulate the network or force a response.
* **Fake Authentication:** A technique where an attacker sends a spoofed authentication request to an AP to associate with it without knowing the actual credentials.
* **ARP Replay:** An attack technique where the attacker captures an ARP packet and re-injects it into the network repeatedly to force the AP to generate new packets with new IVs.
* **Hexadecimal:** A base-16 numbering system used to represent the cracked WEP key (e.g., `17:25:83:AE:FA`).

## 🔄 How It Works (Processes)
### The IV Attack Workflow:
1. **Discovery:** Use `airodump-ng` to scan for the target network and identify the BSSID and channel.
2. **Capture:** Use `airodump-ng` to capture traffic and write it to a file (`WirelessHackingDump`).
3. **Fake Authentication:** Use `aireplay-ng` with the `fakeauth` command to associate the attacker's machine with the AP.
4. **Packet Injection (ARP Replay):** Use `aireplay-ng` with the `arpreplay` command to force the AP to generate traffic. This increases the number of captured data packets and unique IVs.
5. **Cracking:** Use `aircrack-ng` to analyze the captured `.cap` file. The tool attempts to derive the WEP key once a sufficient number of data packets (typically 10,000–25,000) are collected.
6. **Verification:** Once the key is cracked, use it to manually connect to the wireless network from a client device to confirm access.

## 📊 Comparisons & Key Differences
| Feature| WEP| WPA2|
| :---| :---| :---|
| **Security Level**| Extremely Insecure| Secure (Current standard)|
| **IV Size**| 24-bit (Too small)| 48-bit (Much larger/secure)|
| **Vulnerability**| Susceptible to IV attacks| Resistant to standard IV attacks|

## ⚠️ Exam Tips & Important Notes
* **WEP is broken:** If you see a question about WEP, the answer is almost always that it is insecure and should be replaced.
* **IV Length:** Remember that WEP uses a 24-bit IV. This is a common exam fact.
* **Tooling:** While the exam may not require you to run these commands, you should understand the *purpose* of the tools mentioned: `airodump-ng` (capture), `aireplay-ng` (injection/auth), and `aircrack-ng` (cracking).
* **Traffic Volume:** The speed of the crack is directly proportional to the amount of traffic on the network. If a network is idle, an attacker must use injection to create traffic.

## ❓ Questions to Review
1. Why is WEP considered insecure for modern wireless networks?
2. What is the specific length of the WEP Initialization Vector?
3. What is the purpose of "Monitor Mode" on a wireless network card?
4. Why is packet injection necessary in an IV attack if the network has no active users?
5. What is the recommended upgrade path for a network currently using WEP?
6. Which tool is primarily used for the "cracking" phase of the attack?

## 🔗 Related Topics
* [[Wireless Security]]
* [[WPA2 vs WPA3]]
* [[MAC Address Filtering]]
* [[SSID Broadcasting]]
