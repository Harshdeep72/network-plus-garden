# 007 Securing DNS

**Module/Section:** 11 Network Services
**Tags:** #dns #cybersecurity #🌱seedling

---

![[007 Securing DNS.mp4]]

## 📖 Core Concept
The Domain Name System (DNS) is a foundational network service responsible for translating human-readable domain names (e.g., facebook.com) into machine-readable IP addresses. Because DNS was designed without inherent security, it is highly vulnerable to manipulation.

Attackers can exploit this by performing **DNS Spoofing** or **Cache Poisoning**, where they redirect a user to a malicious "Compromise Server." This server mimics a legitimate site to harvest credentials (usernames/passwords) while potentially forwarding the user to the real site to avoid detection. Securing DNS involves three primary pillars:
1. **Integrity:** Ensuring the DNS data received is exactly what the server intended to send (DNSSEC).
2. **Privacy/Confidentiality:** Encrypting the DNS query so eavesdroppers cannot see which websites a user is visiting (DoH and DoT).
3. **Trust:** Safeguarding the digital ecosystem by preventing "DNS snooping."

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
* **DNS (Domain Name System):** The core protocol for name resolution; inherently insecure.
* **HTTPS (Hypertext Transfer Protocol Secure):** Used by DoH to encrypt and blend DNS queries with standard web traffic.
* **TLS (Transport Layer Security):** Used by DoT to create an encrypted tunnel for DNS traffic.
* **DNSSEC (Domain Name System Security Extensions):** A suite of extensions that adds cryptographic signatures to DNS data.

## 🔑 Key Terminology
* **DNSSEC (Domain Name System Security Extensions):** A protocol suite that provides a "tamper-proof seal" for DNS data using cryptographic signatures verified against a chain of trust. It ensures data integrity but does **not** provide encryption.
* **DoH (DNS over HTTPS):** A protocol that sends DNS queries over an encrypted HTTPS connection. It hides DNS traffic by blending it with standard web traffic.
* **DoT (DNS over TLS):** A protocol that encapsulates DNS queries within a TLS tunnel, providing privacy through encryption.
* **DNS Snooping:** The act of monitoring DNS queries to infer which websites a user is visiting.
* **Compromise Server:** A malicious server controlled by an attacker used to harvest user data (e.g., credentials) after redirecting traffic via DNS manipulation.
* **Chain of Trust:** A hierarchical system of cryptographic verification used by DNSSEC to validate data back to a globally recognized anchor.

## 🔄 How It Works (Processes)
* **DNSSEC Verification:**
 1. DNS data is signed with cryptographic signatures.
 2. The receiving device verifies these signatures against a chain of trust.
 3. If the signature is missing or invalid, the system identifies the record as suspicious/malicious and rejects it.
* **DoH/DoT Privacy:**
 1. Instead of sending plain-text DNS queries, the client initiates a secure tunnel (HTTPS or TLS).
 2. The query is encrypted within this tunnel.
 3. The resolver receives the query, decrypts it, and returns the result securely, preventing eavesdroppers from seeing the requested domain.

## 📊 Comparisons & Key Differences

| Feature| DNSSEC| DoH (DNS over HTTPS)| DoT (DNS over TLS)|
| :---| :---| :---| :---|
| **Primary Goal**| Integrity (Tamper-proof)| Privacy (Encryption)| Privacy (Encryption)|
| **Encryption**| No| Yes| Yes|
| **Traffic Blending**| No| Yes (Blends with web traffic)| No (Uses dedicated tunnel)|
| **Control**| Maintains local control| Often shifts to 3rd party providers| Maintains local control|

## ⚠️ Exam Tips & Important Notes
* **Crucial Distinction:** DNSSEC provides **integrity** (proof that the data hasn't been changed), but it does **not** provide **confidentiality** (it does not encrypt the query).
* **Trade-off:** While DoH provides excellent privacy, it often shifts DNS resolution control away from the local organization or ISP to a third-party provider.
* **Exam Focus:** Understand that DNS was originally created without security, making it a primary target for redirection attacks.
* **Terminology:** Remember that "DNS snooping" refers to monitoring user activity by watching their DNS requests.

## ❓ Questions to Review
1. Which DNS security measure is designed specifically to ensure data integrity through cryptographic signatures?
2. What is the primary difference between DNSSEC and DoH regarding data privacy?
3. What is "DNS snooping," and how do DoH and DoT mitigate it?
4. Why is DNSSEC considered a "tamper-proof seal" rather than an encryption tool?
5. What is a potential administrative downside of implementing DoH in an enterprise environment?

## 🔗 Related Topics
* [[DNS (Domain Name System)]]
* [[HTTPS]]
* [[TLS (Transport Layer Security)]]
* [[Network Security]]
