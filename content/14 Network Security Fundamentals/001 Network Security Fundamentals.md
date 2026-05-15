# 001 Network Security Fundamentals

**Module/Section:** 14 Network Security Fundamentals
**Tags:** #security #cia-triad #risk-management #hardening #🌱seedling

---

![[001 Network Security Fundamentals.mp4]]

## 📖 Core Concept
The primary focus of this section is transitioning from network functionality to network security. The instructor emphasizes that while building a functional network is the first step, protecting the data and resources within that network is critical for business operations. This section covers Domain 4 of the CompTIA Network+ exam, specifically focusing on:
* **Basic Security Concepts**: Understanding the foundational pillars of information security.
* **Risk Management**: The relationship between threats and vulnerabilities and how to mitigate them.
* **Compliance**: Adhering to industry regulations and contractual requirements.
* **Defense-in-Depth**: Implementing physical and logical security measures (hardening) to protect network assets.

## 🛠️ Hardware & Devices
* **Network Devices**: General mention of routers, switches, and firewalls as targets for device hardening.
* **Network Clients/Endpoints**: Personal computers and workstations that require hardening to prevent unauthorized access.

## 📜 Protocols & Standards
* **PCI DSS**: Payment Card Industry Data Security Standard. A set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment.
* **GDPR**: General Data Protection Regulation. A regulation in EU law on data protection and privacy in the European Union and the European Economic Area.

## 🔑 Key Terminology
* **CIA Triad**: A model designed to guide policies for information security within an organization, consisting of:
 * **Confidentiality**: Ensuring that information is accessible only to those authorized to have access.
 * **Integrity**: Ensuring the accuracy and completeness of data and information.
 * **Availability**: Ensuring that authorized users have reliable and timely access to information and resources.
* **Threat**: Any potential danger to information or systems.
* **Vulnerability**: A weakness in a system, process, or architecture that could be exploited by a threat.
* **Risk**: The potential for loss, damage, or destruction of an asset as a result of a threat exploiting a vulnerability. (Formula: Risk = Threat × Vulnerability).
* **Device Hardening**: The process of securing a system by reducing its surface of vulnerability, typically by disabling unused ports, turning off unnecessary services, and changing default credentials.
* **Honeypot**: A decoy system or network resource designed to attract attackers, gather intelligence on their techniques, and divert them from production systems.
* **Physical Security**: The protection of personnel, hardware, programs, networks, and data from physical circumstances and events that could cause serious losses or damage.

## 🔄 How It Works (Processes)
* **Risk Management Process**: Network administrators must identify threats and vulnerabilities to calculate risk. Once risk is understood, they implement controls to mitigate, transfer, avoid, or accept that risk.
* **Device Hardening Workflow**:
 1. Identify all active services and open ports on a device.
 2. Disable any services or ports not required for the device's specific business function.
 3. Replace all default manufacturer passwords with strong, unique credentials.
* **Active Defense**: Using tools like honeypots to monitor attacker behavior, allowing administrators to learn from the attack and improve defensive posture.

## 📊 Comparisons & Key Differences
* **Threat vs. Vulnerability**: A threat is an external or internal force that *could* cause harm (e.g., a hacker), whereas a vulnerability is a specific weakness *within* the system (e.g., an unpatched software bug). You cannot have a security risk without both present.

## ⚠️ Exam Tips & Important Notes
* **Domain Focus**: This section covers Domain 4 (Network Security), which is a significant portion of the N10-009 exam.
* **The "Why"**: The instructor emphasizes that for the exam, you must understand not just *what* a security measure is, but *why* it is the correct solution in a given scenario.
* **Hardening**: Remember that hardening is not a one-time task; it is a continuous process of auditing and updating.

## ❓ Questions to Review
1. What are the three components of the CIA Triad?
2. How is "Risk" calculated in the context of network security?
3. What is the primary purpose of device hardening, and what are three common steps to achieve it?
4. Why would an organization implement a honeypot on their network?
5. What is the difference between PCI DSS and GDPR in terms of their regulatory focus?

## 🔗 Related Topics
* [[Network Security]]
* [[Risk Management]]
* [[Compliance and Auditing]]
* [[Device Hardening]]
* [[Physical Security]]
