# 008 Public Key Infrastructure (PKI)

**Module/Section:** 16 Logical Security
**Tags:** #security #pki #encryption #🌱seedling

---

![[008 Public Key Infrastructure (PKI) ** is a comprehensive framework consisting of hardware, software, policies, procedures, and people designed to manage digital keys and certificates. Its primary purpose is to facilitate secure data transfer, authentication, and encrypted communication over networks.

* **Relationship to Cryptography:** PKI is the overarching system that creates, manages, and validates asymmetric key pairs. **Public Key Cryptography** is merely the specific process of encryption and decryption using those keys; it is a subset of the broader PKI architecture.
* **Real-World Application:** Every time a user connects to a website via **HTTPS**, they are participating in a PKI-based transaction.

## 🛠️ Hardware & Devices
* **Web Server:** The host that provides the service (e.g., diontraining.com) and holds the private key.
* **Client Computer/Web Browser:** The device initiating the secure connection and performing the initial asymmetric encryption of the shared secret.

## 📜 Protocols & Standards
* **HTTPS (Hypertext Transfer Protocol Secure):** The protocol used for secure communication over a computer network.
* **TLS (Transport Layer Security) / SSL (Secure Sockets Layer):** Protocols used to create a secure, encrypted tunnel for data transmission once a shared secret key has been established.
* **AES (Advanced Encryption Standard):** A symmetric encryption algorithm used for "bulk encryption" once the secure tunnel is established.

## 🔑 Key Terminology
* **Public Key Infrastructure (PKI)**: A system of hardware, software, policies, procedures, and people that manages asymmetric key pairs and digital certificates.
* **Asymmetric Encryption**: A cryptographic system that uses pairs of keys: **public keys** (which may be disseminated widely) and **private keys** (which are known only to the owner).
* **Symmetric Encryption**: A method of encryption where the same key is used for both encryption and decryption.
* **Certificate Authority (CA)**: A trusted third party that issues digital certificates and manages the trust between entities.
* **Digital Certificate**: An electronic document used to prove the ownership of a public key and verify the identity of the server.
* **Shared Secret Key**: A randomly generated string of data used for symmetric encryption during a session.
* **Key Escrow**: The process of storing cryptographic keys in a secure, third-party location. This allows for key recovery in the event of loss or for legal/investigative purposes.
* **Confidentiality**: Ensuring that only authorized parties can access the data (achieved via the encrypted tunnel).
* **Authentication**: The process of verifying the identity of the server (ensuring the user is connected to the legitimate site).

## 🔄 How It Works (Processes)
1. **Request:** The user navigates to an HTTPS site.
2. **Public Key Retrieval:** The browser contacts the **Certificate Authority (CA)** to obtain the web server's public key.
3. **Secret Generation:** The browser generates a random "shared secret key" (e.g., 51363).
4. **Asymmetric Encryption:** The browser encrypts the shared secret key using the server's **public key**.
5. **Transmission:** The encrypted secret is sent to the web server.
6. **Decryption:** The web server uses its **private key** to decrypt the message and retrieve the shared secret key.
7. **Symmetric Tunneling:** Both parties now possess the shared secret. They switch to a symmetric algorithm (like **AES**) to create a **TLS/SSL tunnel** for all subsequent data transfer.
8. **Verification:** The successful establishment of this tunnel results in the "padlock" icon in the browser, confirming confidentiality and authentication.

## 📊 Comparisons & Key Differences
| Feature| Public Key Cryptography| Public Key Infrastructure (PKI)|
| :---| :---| :---|
| **Scope**| The specific process of encryption/decryption.| The entire system (people, policies, hardware, software).|
| **Function**| Mathematical transformation of data.| Management, issuance, and trust of keys/certificates.|
| **Relationship**| A component of PKI.| The framework that utilizes cryptography.|

## ⚠️ Exam Tips & Important Notes
* **PKI vs. Cryptography:** Remember that PKI is the *system* (the "big picture"), while public key cryptography is just the *method* used within that system.
* **Key Escrow Controversy:** While key escrow provides a safety net for data recovery (e.g., an employee leaving the company), it introduces a massive security risk. If a malicious actor compromises the escrow, they gain access to all stored keys.
* **Authentication:** PKI provides authentication by ensuring the server is who they claim to be, as only the legitimate server possesses the private key required to decrypt the initial handshake.

## ❓ Questions to Review
1. What is the primary difference between PKI and public key cryptography?
2. Why is a Certificate Authority (CA) necessary in a PKI environment?
3. At what stage of the connection process does the system switch from asymmetric to symmetric encryption?
4. What is the purpose of Key Escrow, and what is the primary security concern associated with it?
5. How does a web browser verify that it is communicating with the correct server?

## 🔗 Related Topics
* [[Asymmetric Encryption]]
* [[Symmetric Encryption]]
* [[Digital Certificates]]
* [[HTTPS]]
* [[TLS and SSL]]
