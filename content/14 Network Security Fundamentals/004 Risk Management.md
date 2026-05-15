# 004 Risk Management

**Module/Section:** 14 Network Security Fundamentals
**Tags:** #security #risk-management #assessment #🌱seedling

---

![[004 Risk Management.mp4]]

## 📖 Core Concept
Risk management is the foundational process of identifying, evaluating, and prioritizing risks, followed by the allocation of resources to minimize, monitor, and control the probability or impact of a vulnerability being exploited by a threat.

* **The Risk Equation:** Risk exists where **Threats** (potential for harm) and **Vulnerabilities** (weaknesses) intersect.
* **Risk Assessment:** A systematic process to identify potential hazards, analyze the consequences of those hazards, and determine the organization's tolerance for such events.
* **Goal:** To move from a reactive security posture to a proactive one by understanding the attack surface and business dependencies.

## 🛠️ Hardware & Devices
* **Network Routers:** Mentioned as a common target for vulnerability assessments; unpatched firmware represents a significant vulnerability.
* **Cisco Devices (Counterfeit):** Used as a real-world example of supply chain risk. Counterfeit hardware may contain malicious firmware/backdoors.
* **Power Infrastructure:** Battery backups (UPS) and diesel generators are cited as mitigation controls for the vulnerability of power loss.

## 📜 Protocols & Standards
* **Mitre ATT&CK Framework:** A globally accessible knowledge base of adversary tactics and techniques based on real-world observations. It is used to map out methodologies used by threats to harm networks.

## 🔑 Key Terminology
* **Risk Management**: The identification, evaluation, and prioritization of risks, followed by the allocation of resources to minimize, monitor, and control the probability or impact of a vulnerability being exploited.
* **Risk Assessment**: A process to identify potential hazards and analyze what could happen if a hazard occurs, determining likelihood, consequences, and organizational risk tolerance.
* **Threat**: An entity or event that has the potential to cause harm to a system or network.
* **Vulnerability**: A weakness in a system or network that could be exploited by a threat.
* **Security Risk Assessment**: An assessment used to identify, assess, and implement key security controls within an application, system, or network.
* **Penetration Test**: A technical assessment where ethical hackers are given permission to attempt to break into a network to validate security controls and identify improvements.
* **Posture Assessment**: An assessment of an organization's attack surface to understand cyber risk exposure caused by misconfigurations and patching delays.
* **Business Risk Assessment**: The process of identifying, understanding, and evaluating potential hazards concerning the day-to-day operations of a company.
* **Process Assessment**: A disciplined examination of organizational processes against criteria to determine their capability to perform within quality, cost, and schedule goals.
* **Vendor Assessment**: The evaluation of a prospective vendor to determine if they can effectively meet business obligations and maintain appropriate security controls.

## 🔄 How It Works (Processes)
### Security Risk Assessment Types
1. **Threat Assessment:** Focuses on identifying potential attackers or harmful events. Uses frameworks like Mitre ATT&CK.
2. **Vulnerability Assessment:** Focuses on identifying, quantifying, and prioritizing weaknesses. Uses scanners (Nessus, QualysGuard, OpenVAS) to enumerate systems and software versions.
3. **Penetration Test:** Active, authorized attempt to exploit vulnerabilities to validate defenses.
4. **Posture Assessment:** Four-step cycle:
 * Define mission-critical components.
 * Identify strengths, weaknesses, and security issues.
 * Strengthen the position.
 * Stay in control.

### Business Risk Assessment Types
1. **Process Assessment:** Auditing internal workflows (e.g., user account creation) to ensure they meet quality and time requirements.
2. **Vendor Assessment:** Vetting suppliers to mitigate supply chain vulnerabilities (e.g., preventing the introduction of counterfeit hardware/malware).

## 📊 Comparisons & Key Differences

| Feature| Threat Assessment| Vulnerability Assessment|
| :---| :---| :---|
| **Focus**| The attacker/event| The system/network weakness|
| **Perspective**| Attacker's view| Defender's view|
| **Control**| External (usually)| Internal (usually)|
| **Tooling**| Frameworks (Mitre ATT&CK)| Scanners (Nessus, OpenVAS)|

## ⚠️ Exam Tips & Important Notes
* **The "Why":** Remember that a vulnerability is usually within your control (e.g., patching), whereas a threat is often external and outside your direct control.
* **Supply Chain:** The instructor emphasizes that vendor assessments are critical to prevent "backdoor" entries into the network via compromised hardware or software.
* **Holistic View:** Modern assessments often combine threat and vulnerability assessments to provide a complete picture of the security landscape.

## ❓ Questions to Review
1. What are the three main components of the risk management process?
2. How does a vulnerability assessment differ from a threat assessment in terms of control?
3. Which framework is specifically mentioned as a knowledge base for adversary tactics and techniques?
4. What are the four steps involved in a posture assessment?
5. Why is a vendor assessment considered a critical component of mitigating supply chain risk?

## 🔗 Related Topics
* [[Security Controls]]
* [[Vulnerability Scanning]]
* [[Penetration Testing]]
* [[Supply Chain Security]]
