# 004 Authentication Methods

**Module/Section:** 16 Logical Security
**Tags:** #authentication #security #protocols #🌱seedling

---

![[004 Authentication Methods.mp4]]

## 📖 Core Concept
**Authentication** is the fundamental process of verifying the identity of a user or device. It ensures that an entity is who or what they claim to be. This is a critical component of logical security, ensuring that only authorized individuals gain access to network resources.

* **Verification:** Requires proof of identity (e.g., government ID, credentials).
* **Failure:** If the provided proof does not match the registered identity, access is denied.
* **Evolution:** Modern networks have moved from simple local authentication to centralized, federated, and multi-factor systems to handle the complexity of modern enterprise environments.

## 🛠️ Hardware & Devices
* **Domain Controller (DC):** A server that responds to security authentication requests within a Windows Server domain. It acts as the Key Distribution Center (KDC) for Kerberos.
* **Hardware Tokens:** Physical devices (e.g., RSA Key Fob, YubiKey) used to generate time-based one-time passwords (TOTP).
* **Client/Workstation:** The device requesting access to network resources.

## 📜 Protocols & Standards
* **LDAP (Lightweight Directory Access Protocol):** A protocol used to access and maintain distributed directory information services over an IP network.
 * **Port:** 389 (Standard/Plaintext).
 * **LDAPS (LDAP Secure):** Uses SSL/TLS to encrypt data. **Port:** 636.
* **Kerberos:** An authentication protocol designed to provide strong authentication for client/server applications by using secret-key cryptography.
 * **Port:** 88.
* **SAML (Security Assertion Markup Language):** An XML-based standard for exchanging authentication and authorization data between an identity provider and a service provider.
* **SOAP (Simple Object Access Protocol):** Often paired with SAML to transfer authentication information.
* **RADIUS (Remote Authentication Dial-In User Service):** A networking protocol that provides centralized Authentication, Authorization, and Accounting (AAA) management for users who connect and use a network service.
 * **Ports:** 1812 (Authentication), 1813 (Accounting).
 * **Alternative Ports:** 1645, 1646 (Proprietary).
* **TACACS+ (Terminal Access Controller Access Control System Plus):** A Cisco-proprietary protocol that provides AAA services.
* **TOTP (Time-based One-Time Password):** An algorithm that computes a one-time password from a shared secret key and the current time.

## 🔑 Key Terminology
* **Local Authentication:** The process of verifying credentials stored locally on the device (e.g., a laptop's hard drive).
* **Active Directory (AD):** Microsoft’s implementation of LDAP; a directory service for Windows domain networks.
* **Key Distribution Center (KDC):** The part of the Kerberos protocol responsible for authentication and ticket granting.
* **Ticket Granting Ticket (TGT):** A ticket issued by the KDC to a user, which the user then presents to request access to specific network resources.
* **Single Sign-On (SSO):** An authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems.
* **Federated Identity Management:** A system that allows a user's identity to be shared across multiple security domains (e.g., using a Google account to log into a third-party website).
* **Principal:** In SAML, the user whose identity is being verified.
* **Identity Provider (IdP):** The entity that authenticates the user (e.g., Google).
* **Service Provider (SP):** The entity providing the resource the user wants to access (e.g., diontraining.com).
* **Replay Attack:** A form of network attack in which a valid data transmission is maliciously or fraudulently repeated or delayed. TOTP helps prevent this.

## 🔄 How It Works (Processes)
* **Kerberos Workflow:**
 1. User logs into the domain.
 2. Client contacts the KDC (Domain Controller).
 3. KDC authenticates the user and issues a **TGT**.
 4. When accessing a resource (printer/file share), the client presents the TGT to the KDC.
 5. KDC issues a **Service Ticket** or session key.
 6. Client presents the Service Ticket to the resource; access is granted.
* **SAML/SSO Workflow:**
 1. User requests a resource from the Service Provider (SP).
 2. SP identifies the user's Identity Provider (IdP).
 3. User authenticates with the IdP.
 4. IdP sends an XHTML assertion back to the user's browser.
 5. Browser forwards the assertion to the SP.
 6. SP validates the assertion and grants access.

## 📊 Comparisons & Key Differences

| Feature| RADIUS| TACACS+|
| :---| :---| :---|
| **Protocol**| UDP| TCP|
| **Vendor**| Open Standard (Cross-platform)| Cisco Proprietary|
| **AAA**| Combines Auth/Authz| Separates Auth/Authz/Accounting|
| **Encryption**| Encrypts only the password| Encrypts the entire packet|

## ⚠️ Exam Tips & Important Notes
* **Kerberos Single Point of Failure:** The Domain Controller is the KDC. If it goes down, authentication fails. Use redundant DCs.
* **SSO Risk:** If a user's credentials are compromised in an SSO environment, the attacker gains access to *all* linked resources (the "Master Key" analogy).
* **RADIUS vs. TACACS+:** Remember that RADIUS is cross-platform (UDP), while TACACS+ is Cisco-specific (TCP).
* **TOTP Security:** TOTP is resistant to replay attacks because the password expires after a short interval (e.g., 30–60 seconds).

## ❓ Questions to Review
1. Which port is used for secure LDAP (LDAPS) communications?
2. What is the primary difference between the transport protocols used by RADIUS and TACACS+?
3. In a Kerberos environment, what is the role of the KDC?
4. Why is SSO considered both a convenience and a security risk?
5. What are the three main roles in a SAML authentication process?

## 🔗 Related Topics
* [[AAA (Authentication, Authorization, and Accounting)]]
* [[Multi-Factor Authentication (MFA)]]
* [[802.1X]]
* [[Active Directory]]
