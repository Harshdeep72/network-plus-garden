# 006 Encryption

**Module/Section:** 16 Logical Security
**Tags:** #security #encryption #data-states #🌱seedling

---

![[006 Encryption.mp4]]

## 📖 Core Concept
The primary focus of this lesson is the role of **Encryption** as a risk mitigation strategy for maintaining the **Confidentiality** of data. Encryption serves as a secondary layer of security; if an attacker circumvents access controls, the data remains unreadable without the proper decryption key.

Data exists in one of three states at any given time. Security professionals must implement specific encryption strategies for each state:
1. **Data at Rest**: Data stored on physical media.
2. **Data in Motion (Transit)**: Data moving across a network or between system components.
3. **Data in Use (Processing)**: Data currently being manipulated by the CPU or held in volatile memory (RAM).

## 🛠️ Hardware & Devices
* **Hard Drives (HDD/SSD)**: Storage devices where "Data at Rest" resides.
* **Central Processing Unit (CPU)**: The component where "Data in Use" is processed. Modern processors (Intel/AMD) include secure processing mechanisms for encryption and integrity checks.
* **RAM (Random Access Memory)**: Volatile memory where "Data in Use" is typically held.
* **Wireless Access Point (WAP)**: Network device used to connect wireless clients; requires encryption (e.g., WPA2) to secure data in motion.

## 📜 Protocols & Standards
* **HTTPS (Hypertext Transfer Protocol Secure)**: Uses TLS/SSL to secure web traffic.
* **TLS (Transport Layer Security)**: A protocol used to provide secure communication for data in motion.
* **SSL (Secure Socket Layer)**: The predecessor to TLS, still commonly used to describe transport layer encryption.
* **IPSec (Internet Protocol Security)**: A suite of protocols used to secure IP communications, often used in VPNs.
* **L2TP (Layer 2 Tunneling Protocol)**: A tunneling protocol used to support VPNs.
* **WPA2 (Wi-Fi Protected Access 2)**: A security protocol for wireless networks, often paired with AES encryption.
* **AES (Advanced Encryption Standard)**: A symmetric encryption algorithm used for protecting data at rest and in motion.

## 🔑 Key Terminology
* **Encryption**: A security method where information is encoded so it can only be accessed or decrypted by a user with the correct security key.
* **Unencrypted Data (Clear Text / Plain Text)**: Data stored, transmitted, or processed in an unprotected, easily readable format.
* **Encrypted Data (Cipher Text)**: Data that has been scrambled via an algorithm and is unreadable without the proper decryption key.
* **Data at Rest**: Data that is stored in memory, on a hard drive, or on any storage device.
* **Data in Motion (Data in Transit)**: Data currently moving from one computer to another over a network, or between components within a system (e.g., hard disk to memory).
* **Data in Use (Data in Processing)**: Active, non-persistent data currently being read into memory, manipulated by the CPU, or held in CPU registers/caches.
* **Full Disk Encryption (FDE)**: A technology that encrypts the entire storage medium (e.g., BitLocker).
* **File-Level Encryption**: Encryption applied to specific files or folders rather than the entire drive.
* **Risk Mitigation**: The process of reducing the impact or likelihood of a security threat; encryption is a primary tool for mitigating the risk of unauthorized data access.

## 🔄 How It Works (Processes)
1. **Encryption Process**: Data is processed through an algorithm using a key to transform Plain Text into Cipher Text.
2. **Decryption Process**: The reverse of encryption; the recipient uses the corresponding key to transform Cipher Text back into Plain Text.
3. **Data State Transition**:
 * Data is retrieved from storage (**At Rest**).
 * The CPU processes the data (**In Use**).
 * The data is transmitted over a network (**In Motion**).
 * The data is stored again at the destination (**At Rest**).
 * *Note:* The CPU is involved in the encryption/decryption process itself, meaning the data is "in use" even while being prepared for "motion" or "rest."

## 📊 Comparisons & Key Differences

| State| Definition| Protection Methods|
| :---| :---| :---|
| **At Rest**| Stored on media| FDE, File/Folder Encryption, Database Encryption|
| **In Motion**| Moving across networks/buses| TLS, SSL, IPSec, L2TP, WPA2|
| **In Use**| Being processed by CPU/RAM| Secure CPU mechanisms, integrity checks|

## ⚠️ Exam Tips & Important Notes
* **Confidentiality**: Encryption is primarily used to ensure the confidentiality of data.
* **Secondary Defense**: Encryption is a "tried and true" method that protects data even if primary access controls (like passwords or firewalls) are bypassed.
* **Context Matters**: Always identify the state of the data (Rest, Motion, Use) to determine the correct security control.
* **Terminology**: Be familiar with the terms "Clear Text" and "Cipher Text."

## ❓ Questions to Review
1. What are the three states of data, and how does encryption apply to each?
2. Why is encryption considered a form of risk mitigation for access controls?
3. What is the difference between Clear Text and Cipher Text?
4. If you are sending a file over a VPN, what state is that data in, and what protocols might be used?
5. What hardware components are responsible for protecting data while it is "in use"?

## 🔗 Related Topics
* [[Access Control]]
* [[VPN (Virtual Private Network)]]
* [[Wireless Security]]
* [[Confidentiality, Integrity, and Availability (CIA Triad)]]
