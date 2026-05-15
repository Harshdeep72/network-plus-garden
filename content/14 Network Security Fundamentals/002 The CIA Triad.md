# 002 The CIA Triad

**Module/Section:** 14 Network Security Fundamentals
**Tags:** #security #cia-triad #encryption #hashing #availability #🌱seedling

---

![[002 The CIA Triad.mp4]]

## 📖 Core Concept
The **CIA Triad** is the foundational model for network security. Because networking protocols were originally developed without security in mind, modern network security is "bolted on" to mitigate risks. The triad consists of three pillars:

* **Confidentiality:** Ensuring data is private and accessible only by authorized parties.
* **Integrity:** Ensuring data has not been altered, tampered with, or corrupted during storage or transit.
* **Availability:** Ensuring that data and network resources are accessible to authorized users when needed.

## 🛠️ Hardware & Devices
* **Routers/Switches:** Core network infrastructure devices that can be targeted by attacks (e.g., Ping of Death) to disrupt availability.
* **Servers:** Hosts that store data and provide services; physical threats (floods, power outages) or logical threats (DoS) can compromise their availability.

## 📜 Protocols & Standards
* **HTTPS (Hypertext Transfer Protocol Secure):** The secure version of HTTP used for web traffic, utilizing PKI for encrypted communication.
* **MD5 (Message-Digest Algorithm 5):** A common hashing algorithm used to create a unique fingerprint (hash digest) of data to verify integrity.
* **RSA (Rivest–Shamir–Adleman):** The most common implementation of asymmetric encryption used in PKI.

## 🔑 Key Terminology
* **Confidentiality:** The protection of data from unauthorized disclosure; achieved via encryption and authentication.
* **Encryption:** The process of encoding data so only authorized parties with the correct key can read it.
* **Symmetric Encryption:** A method where the sender and receiver use the **same secret key** to encrypt and decrypt data. It is ~1,000 times faster than asymmetric encryption but faces significant "key management" challenges.
* **Asymmetric Encryption:** A method using a **key pair** (Public and Private keys). Data encrypted with a Public key can only be decrypted by the corresponding Private key.
* **Public Key Infrastructure (PKI):** A framework of roles, policies, and procedures needed to create, manage, distribute, and revoke digital certificates and manage public-key encryption.
* **Digital Certificate:** A file that verifies the identity of a server/entity and contains their public key, often issued by a trusted third party (e.g., Verisign).
* **Session Key:** A symmetric key generated for a specific communication session, often exchanged via asymmetric encryption to allow for faster data transfer.
* **Integrity:** The assurance that data remains accurate and unaltered.
* **Hashing:** A mathematical algorithm that transforms data into a fixed-length string (hash digest). Even a tiny change in input results in a drastically different hash.
* **Availability:** The degree to which a system is accessible and operational.
* **Denial of Service (DoS):** An attack or event that floods a system with traffic, rendering it unable to process legitimate requests.
* **Distributed Denial of Service (DDoS):** A DoS attack originating from multiple sources simultaneously.
* **Ping of Death:** A legacy attack involving sending malformed or oversized packets to a device to cause it to crash.

## 🔄 How It Works (Processes)
### The Asymmetric-to-Symmetric Handshake (e-commerce example)
1. **Request:** Client connects to a server via HTTPS.
2. **Certificate Exchange:** The server provides its public key via a digital certificate.
3. **Key Generation:** The client generates a random number (the future session key).
4. **Encryption:** The client encrypts this random number using the server's public key.
5. **Decryption:** The server receives the message and uses its private key to decrypt it, revealing the random number.
6. **Symmetric Tunnel:** Both parties now possess the same random number (session key) and switch to symmetric encryption for the remainder of the session to maximize speed.

### Integrity Verification via Hashing
1. **Hashing:** The sender runs data through a hashing algorithm to create a hash digest.
2. **Transmission:** The data and the hash digest are sent to the receiver.
3. **Verification:** The receiver runs the received data through the same algorithm.
4. **Comparison:** If the calculated hash matches the received hash, integrity is confirmed. If they differ, the data is rejected.

## 📊 Comparisons & Key Differences

| Feature| Symmetric Encryption| Asymmetric Encryption|
| :---| :---| :---|
| **Key Usage**| Same key for both sides| Different keys (Public/Private)|
| **Speed**| Very Fast (~1000x faster)| Slower|
| **Primary Use**| Bulk data transfer| Key exchange / Handshakes|
| **Key Management**| Difficult (must share secret)| Easier (Public key is public)|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip:** Remember that symmetric is for speed, and asymmetric is for secure key exchange.
* **Exam Tip:** If a question mentions a "digital signature" or "fingerprint" of a file, it is referring to **Integrity** and **Hashing**.
* **Exam Tip:** Availability is not just about hackers; it includes physical issues like power outages, hardware failure, or even "success" (e.g., a site crashing because it became too popular).
* **Important:** Hashing is a one-way function; you cannot turn a hash back into the original data.

## ❓ Questions to Review
1. Why is symmetric encryption considered faster than asymmetric encryption?
2. What is the primary challenge associated with symmetric encryption?
3. If you change a single character in a file, what happens to its hash digest?
4. How does a server prove its identity to a client during an HTTPS handshake?
5. List three examples of events that would compromise "Availability."

## 🔗 Related Topics
* [[Encryption]]
* [[Hashing Algorithms]]
* [[PKI]]
* [[Redundancy and High Availability]]
* [[DoS and DDoS Attacks]]
