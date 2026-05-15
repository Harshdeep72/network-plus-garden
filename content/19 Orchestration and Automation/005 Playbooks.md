# 005 Playbooks

**Module/Section:** 19 Orchestration and Automation
**Tags:** #incident-response #security #automation #SOAR #🌱seedling

---

![[005 Playbooks.mp4]]

## 📖 Core Concept
Incident response involves preparing for emergency scenarios by documenting specific, repeatable procedures. **Playbooks** serve as the foundational documentation for these procedures, acting as a checklist to ensure consistency, efficiency, and readiness across an organization's security team.

* **Standardization:** Playbooks act as Standard Operating Procedures (SOPs) for junior analysts and incident handlers, ensuring that responses to threats (DDoS, viruses, phishing, etc.) are uniform.
* **NIST Incident Response Process:** Playbooks are often structured around the NIST (National Institute of Standards and Technology) framework, covering phases such as Preparation, Detection, Analysis, Containment, Eradication, Recovery, and Post-Incident Activity.
* **Automation:** While playbooks are documentation, they serve as the blueprint for **Runbooks**, which are the automated versions of these procedures executed by security tools.

## 🛠️ Hardware & Devices
* **Workstations:** End-user devices that may require isolation, scanning, or re-imaging during an incident.
* **Servers:** Systems that may be subject to data exfiltration or ransomware; these must be analyzed and potentially isolated.
* **Sandbox Environment:** A secure, isolated environment used for dynamic analysis of suspicious files (e.g., opening phishing emails to identify malicious URLs or IPs).

## 📜 Protocols & Standards
* **NIST Incident Response Process:** The industry-standard framework for handling security incidents, consisting of:
 1. **Preparation:** Training, defining roles, and establishing communication paths.
 2. **Detection & Analysis:** Identifying threat indicators and assessing risk factors.
 3. **Containment, Eradication, & Recovery:** Stopping the spread, removing threats, and restoring systems.
 4. **Post-Incident Activity:** Lessons learned, root cause analysis, and updating workflows.

## 🔑 Key Terminology
* **Playbook:** A documented set of procedures and checklists used to guide incident response for specific types of threats.
* **Runbook:** An automated version of a playbook that uses software to partially or fully execute the response steps.
* **SOAR (Security Orchestration, Automation, and Response):** A class of security tools that facilitates incident response, threat hunting, and security configuration by automating runbooks and providing data enrichment.
* **SIEM (Security Information and Event Management):** A system that aggregates security data; SOAR tools often feed enriched data into the SIEM for analyst review.
* **Data Exfiltration:** The unauthorized transfer of data from a computer or other device.
* **Ransomware:** A type of malware that encrypts a victim's files; the attacker demands a ransom to restore access.
* **Social Engineering:** Manipulating individuals into divulging confidential information, often via phishing.
* **Dynamic Analysis:** The process of executing code (e.g., opening a file in a sandbox) to observe its behavior in real-time.
* **Indicator of Compromise (IoC):** Evidence on a computer or network that indicates a security breach has likely occurred (e.g., malicious IP addresses, URLs, or file hashes).

## 🔄 How It Works (Processes)
### The Transition from Playbook to Runbook
1. **Manual Phase:** An analyst identifies a threat (e.g., phishing). They consult the **Playbook** (the document).
2. **Automation Phase:** The organization implements a **SOAR** platform. The Playbook is converted into a **Runbook** (the code/script).
3. **Execution:** The Runbook performs initial steps (e.g., deleting emails, scanning registries).
4. **Human-in-the-loop:** The Runbook pauses at a critical decision point (e.g., "Should we re-image this workstation?").
5. **Completion:** The analyst confirms the action; the Runbook resumes and completes the remaining steps.

### Ransomware Response Protocol
* **Do NOT power off:** Disconnecting the network is preferred over shutting down the system.
* **Forensics:** Keeping the system powered on allows a technician to extract encryption keys from the system's RAM.

## 📊 Comparisons & Key Differences

| Feature| Playbook| Runbook|
| :---| :---| :---|
| **Nature**| Document/Checklist (Static)| Automated Script/Workflow (Dynamic)|
| **Purpose**| Defines "What to do"| Executes "How to do it"|
| **Execution**| Performed by a human| Performed by a SOAR system|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip:** Remember that a **SOAR** is used for orchestration and automation, while a **SIEM** is primarily for logging and analysis.
* **Crucial Distinction:** Know the difference between a Playbook (the "recipe") and a Runbook (the "automated cooking").
* **Ransomware Gotcha:** Never power off a machine infected with ransomware immediately if you want to perform memory forensics; isolate it from the network instead.
* **Efficiency:** Automation via Runbooks allows a single analyst to handle a significantly higher volume of incidents compared to manual processes.

## ❓ Questions to Review
1. What is the primary difference between a playbook and a runbook?
2. Which security tool is responsible for orchestrating and automating incident response workflows?
3. Why should you avoid powering off a system infected with ransomware?
4. What are the four main phases of the NIST incident response process mentioned in the lesson?
5. How does a sandbox environment assist in the analysis of a phishing attack?

## 🔗 Related Topics
* [[Security Information and Event Management (SIEM)]]
* [[Incident Response]]
* [[Malware]]
* [[Social Engineering]]
