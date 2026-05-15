# 010 Understanding Digital Certificates

**Module/Section:** 16 Logical Security
**Tags:** #security #encryption #certificates #🌱seedling

---

![[010 Understanding Digital Certificates.mp4]]

## 📖 Core Concept
Digital certificates are electronic documents used to prove the identity of a website or entity and to facilitate secure communication. They are the foundation of trust in web browsing.
* **Function:** Certificates bind a public key to an identity (like a domain name or organization).
* **Verification:** Browsers use these certificates to verify that the website you are visiting is legitimate and that the connection is encrypted.
* **Certificate Contents:** A digital certificate typically includes:
 * **Subject:** The entity the certificate was issued to (e.g., Google LLC, Apple Inc.).
 * **Issuer:** The Certificate Authority (CA) that verified the identity and signed the certificate (e.g., Google Trust Services, DigiCert).
 * **Validity Period:** The "Valid From" and "Valid To" dates.
 * **Public Key Info:** The specific encryption algorithm and key size used.
 * **Fingerprint:** A unique identifier for the specific certificate.
 * **Signature Algorithm:** The hashing algorithm used to ensure the integrity of the certificate (e.g., SHA-256).

## 🛠️ Hardware & Devices
* **Desktop Computers:** Used for browsing; typically have higher processing power, allowing for the use of larger, more computationally expensive encryption keys like RSA-2048.
* **Mobile Devices:** Have limited processing power compared to desktops; favor more efficient encryption methods like ECC to maintain high security with smaller key sizes.

## 📜 Protocols & Standards
* **HTTPS (Hypertext Transfer Protocol Secure):** The secure version of HTTP, used for encrypted communication over a computer network.
 * **Port:** 443.
* **RSA (Rivest-Shamir-Adleman):** A widely used public-key cryptosystem.
 * **Key Size:** 2048 bits (as seen in the Apple example).
* **ECC (Elliptic Curve Cryptography):** A public-key cryptography approach based on the algebraic structure of elliptic curves.
 * **Key Size:** 256 bits (as seen in the Google example).
* **SHA-256 (Secure Hash Algorithm 256-bit):** A cryptographic hash function used to provide integrity for the certificate's signature.

## 🔑 Key Terminology
* **Digital Certificate:** An electronic document used to verify the identity of a public key owner and to establish a secure, encrypted connection.
* **Certificate Authority (CA):** A trusted third-party organization that issues digital certificates.
* **Public Key:** A cryptographic key that can be shared publicly, used to encrypt data or verify a digital signature.
* **RSA Encryption:** A standard encryption method that relies on large prime numbers; requires larger key sizes for equivalent security compared to ECC.
* **ECC (Elliptic Curve Cryptography):** An encryption method that provides high security with smaller key sizes, making it ideal for mobile and low-power devices.
* **Fingerprint:** A unique cryptographic hash of the certificate used to identify it specifically.
* **Subject:** The individual, organization, or domain name to which the certificate is issued.
* **Issuer:** The entity (CA) that validates the information and issues the certificate.

## 🔄 How It Works (Processes)
1. **Connection Initiation:** A user navigates to a website via HTTPS (Port 443).
2. **Certificate Presentation:** The server sends its digital certificate to the user's browser.
3. **Browser Validation:** The browser checks the certificate against its list of trusted Certificate Authorities.
4. **Algorithm Selection:** The server determines the optimal encryption method based on the client's capabilities:
 * **Mobile/Low-Power:** The server provides an **ECC** certificate (256-bit) to save processing power while maintaining security.
 * **Desktop/High-Power:** The server provides an **RSA** certificate (2048-bit) as the hardware can handle the increased computational load.
5. **Verification:** The browser confirms the identity of the subject, the validity of the dates, and the integrity of the signature using the CA's public key.

## 📊 Comparisons & Key Differences

| Feature| ECC (Elliptic Curve)| RSA (Rivest-Shamir-Adleman)|
| :---| :---| :---|
| **Key Size**| Smaller (e.g., 256 bits)| Larger (e.g., 2048 bits)|
| **Processing Load**| Lower (Efficient)| Higher (Resource Intensive)|
| **Best Use Case**| Mobile/Low-power devices| Desktop computers|
| **Security Level**| Equivalent to RSA at these sizes| Equivalent to ECC at these sizes|

## ⚠️ Exam Tips & Important Notes
* **HTTPS Port:** Always remember that HTTPS uses **Port 443**.
* **Efficiency:** Understand *why* ECC is used for mobile (lower processing power) versus RSA for desktops.
* **Equivalency:** Even though RSA keys (2048 bits) are numerically much larger than ECC keys (256 bits), they provide **equivalent** levels of security.
* **Certificate Details:** Know that a certificate contains the Issuer, Subject, Validity dates, Public Key info, and a unique Fingerprint.

## ❓ Questions to Review
1. Which port is used for HTTPS connections?
2. Why would a website choose to serve an ECC certificate instead of an RSA certificate?
3. What is the primary purpose of a digital certificate?
4. What is the role of a Certificate Authority (CA)?
5. If an RSA key is 2048 bits and an ECC key is 256 bits, which one is more secure? (Answer: They provide equivalent security).
6. Where can you find the unique identifier for a specific digital certificate in a browser?

## 🔗 Related Topics
* [[Public Key Infrastructure (PKI)]]
* [[Encryption Algorithms]]
* [[Hashing]]
* [[Transport Layer Security (TLS)]]
