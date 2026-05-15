# 001 Logical Security

**Module/Section:** 16 Logical Security
**Tags:** #logical-security #security-fundamentals #IAM #encryption #🌱seedling

---

![[001 Logical Security.mp4]]

## 📖 Core Concept
Logical security encompasses the non-physical measures implemented within an organization to protect digital data, restrict unauthorized access, and ensure the **CIA Triad** (Confidentiality, Integrity, and Availability). This module aligns with CompTIA Network+ objectives:
* **Objective 1.4:** Explain common networking ports, protocols, services, and traffic types.
* **Objective 4.1:** Explain the importance of basic network security concepts.
* **Objective 4.3:** Apply network security features, defense techniques, and solutions.

The core focus is on the framework of policies and technologies that govern how users interact with network resources, how data is encrypted, and how identities are verified.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
* **IPSec (Internet Protocol Security):** A suite of protocols used to secure IP communications by authenticating and encrypting each IP packet in a communication session.
 * **AH (Authentication Header):** Provides connectionless integrity and data origin authentication for IP packets.
 * **ESP (Encapsulating Security Payload):** Provides confidentiality, data origin authentication, and connectionless integrity.
* **PKI (Public Key Infrastructure):** A set of roles, policies, hardware, software, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption.

## 🔑 Key Terminology
* **Logical Security**: Non-physical measures (software/policy-based) implemented to protect digital data and restrict unauthorized access.
* **IAM (Identity and Access Management)**: A framework of policies and technologies ensuring that the right individuals have the appropriate access to technology resources.
* **MFA (Multifactor Authentication)**: A security system requiring two or more independent categories of credentials (factors) to verify a user's identity.
* **Least Privilege**: A security principle where users are granted only the minimum levels of access—or permissions—needed to perform their job functions.
* **Access Control**: The process of granting or denying specific requests to obtain and use information and related information processing services.
* **Symmetric Encryption**: An encryption method where the same key is used for both encryption and decryption.
* **Asymmetric Encryption**: An encryption method that uses a pair of keys (a public key and a private key) to encrypt and decrypt data.
* **Digital Certificate**: An electronic document used to prove the validity of a public key and the identity of the owner.
* **Digital Signature**: A mathematical scheme for verifying the authenticity of digital messages or documents.
* **Key Management**: The process of securely creating, managing, storing, distributing, and destroying cryptographic keys throughout their lifecycle.

## 🔄 How It Works (Processes)
* **Authentication Process**: Users provide credentials to verify identity; MFA adds layers by requiring independent categories of credentials.
* **Data Protection (IPSec)**: Data is transmitted over untrusted networks using AH for integrity/authentication and ESP for confidentiality.
* **Certificate Lifecycle**: Managed via PKI, involving the issuance, validation, and potential revocation of digital certificates to establish trust.
* **Key Lifecycle**: Involves the secure generation, usage, rotation, and destruction of security keys to prevent unauthorized access.

## 📊 Comparisons & Key Differences
| Concept| Description|
| :---| :---|
| **Symmetric Encryption**| Uses one shared key for both encryption and decryption; faster, but key distribution is a challenge.|
| **Asymmetric Encryption**| Uses a public/private key pair; more secure for key exchange, but computationally more intensive.|
| **AH (IPSec)**| Focuses on authentication and integrity of the packet.|
| **ESP (IPSec)**| Focuses on encryption (confidentiality) in addition to authentication and integrity.|

## ⚠️ Exam Tips & Important Notes
* **Exam Focus**: Be prepared to identify when to use specific digital certificates and how to apply the principle of **Least Privilege** in a given scenario.
* **Terminology**: Understand that IAM is the "umbrella" framework, while MFA is a specific tool/method used within that framework.
* **Practical Skill**: The instructor emphasizes the ability to inspect digital certificates (e.g., viewing certificate details for websites like Google.com or Apple.com) to verify their authenticity.

## ❓ Questions to Review
1. What are the three components of the CIA Triad, and how does logical security support them?
2. What is the primary difference between symmetric and asymmetric encryption?
3. Why is MFA considered more secure than single-factor authentication?
4. In the context of IPSec, what is the specific role of the Encapsulating Security Payload (ESP)?
5. What does the principle of "Least Privilege" aim to prevent in a corporate network environment?

## 🔗 Related Topics
* [[Identity and Access Management (IAM)]]
* [[Multifactor Authentication (MFA)]]
* [[Encryption Standards]]
* [[IPSec]]
* [[Public Key Infrastructure (PKI)]]
* [[Digital Certificates]]
