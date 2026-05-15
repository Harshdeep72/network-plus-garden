# 007 Wireless Security

**Module/Section:** 07 Wireless Networks
**Tags:** #wireless-security #802-11 #encryption #🌱seedling

---

![[007 Wireless Security.mp4]]

## 📖 Core Concept
Wireless networks provide convenience but introduce significant security risks because signals extend beyond physical walls. To secure a wireless network, administrators must implement two primary controls:
1. **Authentication**: Verifying the identity of devices attempting to connect to the Wireless Access Point (WAP).
2. **Encryption**: Protecting data in transit so that intercepted traffic remains unreadable.

Wireless security is generally categorized into two modes:
* **Personal Mode**: Uses a **Pre-Shared Key (PSK)**. All users share the same password.
* **Enterprise Mode**: Uses **802.1X** authentication, requiring individual credentials (username/password or digital certificates) verified by a centralized server.

## 🛠️ Hardware & Devices
* **Wireless Access Point (WAP)**: The central device that manages wireless connections and enforces security policies.
* **Authentication Server**: A server (e.g., **RADIUS**) used in Enterprise mode to validate individual user credentials.

## 📜 Protocols & Standards
* **802.1X**: An IEEE standard for port-based network access control; used in Enterprise mode to provide individual authentication.
* **RADIUS (Remote Authentication Dial-In User Service)**: A networking protocol that provides centralized Authentication, Authorization, and Accounting (AAA) management.
* **WEP (Wired Equivalent Privacy)**: The original, deprecated 802.11 security standard (1999).
* **WPA (Wi-Fi Protected Access)**: A security standard designed to replace WEP.
* **WPA2 (Wi-Fi Protected Access 2)**: Based on the 802.11i standard; currently widely used.
* **WPA3 (Wi-Fi Protected Access 3)**: The latest standard (2018), offering superior security and encryption.
* **TKIP (Temporal Key Integrity Protocol)**: A legacy encryption protocol used in WPA to replace WEP's initialization vectors.
* **CCMP (Counter Mode with Cipher Block Chaining Message Authentication Code Protocol)**: The integrity protocol used in WPA2.
* **AES (Advanced Encryption Standard)**: A symmetric block cipher used in WPA2 and WPA3.
* **RC4 (Rivest Cipher 4)**: A stream cipher used in WEP and WPA; now considered insecure.
* **SAE (Simultaneous Authentication of Equals)**: The WPA3 handshake protocol based on the Dragonfly key exchange.

## 🔑 Key Terminology
* **Pre-Shared Key (PSK)**: A security mechanism where the same password is used by the WAP and all connecting clients.
* **Initialization Vector (IV)**: A 24-bit value used in WEP; its predictable nature allows attackers to crack the key.
* **Message Integrity Check (MIC)**: A feature in WPA that hashes data to ensure it has not been tampered with during transit.
* **Forward Secrecy**: A property of security protocols (like SAE) ensuring that if a session key is compromised, past communications remain encrypted and secure.
* **WPS (Wi-Fi Protected Setup)**: A standard designed to simplify connecting devices to a WAP via a PIN or push-button; highly vulnerable to brute-force attacks.
* **Open Network**: A wireless network with no encryption or authentication.

## 🔄 How It Works (Processes)
* **802.1X Authentication**:
 1. Client attempts to connect to the WAP.
 2. WAP requests credentials.
 3. Client provides credentials (username/password or certificate).
 4. WAP forwards the request to a RADIUS server.
 5. RADIUS server validates the user and grants/denies access.
* **WPS Brute Force**: WPS splits an 8-digit PIN into two 4-digit halves. The system validates each half separately, reducing the search space from 100 million combinations to 20,000, allowing for rapid cracking.
* **SAE (Dragonfly Key Exchange)**: Unlike WPA2, where an attacker can capture a handshake and perform offline brute-force attacks, SAE requires an active interaction with the WAP for every password guess, making brute force impractical.

## 📊 Comparisons & Key Differences

| Standard| Encryption| Integrity| Key Vulnerability|
| :---| :---| :---| :---|
| **WEP**| RC4| None| Initialization Vectors (IVs)|
| **WPA**| RC4| TKIP / MIC| Weak encryption (RC4/TKIP)|
| **WPA2**| AES| CCMP| Offline dictionary attacks on PSK|
| **WPA3**| AES (GCM)| SAE| None (Current standard)|

## ⚠️ Exam Tips & Important Notes
* **Never use WEP, WPA, or WPS.** They are considered insecure and easily crackable.
* **Open** = No security/encryption.
* **WEP** = Think "Initialization Vectors."
* **WPA** = Think "TKIP" and "RC4."
* **WPA2** = Think "CCMP" and "AES."
* **WPA3** = Think "SAE" and "Dragonfly."
* **Enterprise Mode** = Always involves a centralized server (RADIUS) and 802.1X.
* **Personal Mode** = Always involves a Pre-Shared Key (PSK).

## ❓ Questions to Review
1. Why is WEP considered insecure despite its name?
2. What is the primary difference between WPA2 and WPA3 regarding the handshake process?
3. Why should WPS be disabled in a production environment?
4. How does Enterprise mode improve upon Personal mode in terms of user accountability?
5. What is the benefit of Forward Secrecy in WPA3?

## 🔗 Related Topics
* [[Wireless Access Points]]
* [[RADIUS]]
* [[802.11 Standards]]
* [[Encryption Algorithms]]
