# 005 Common Agreements

**Module/Section:** 20 Documentation and Processes
**Tags:** #documentation #compliance #governance #🌱seedling

---

![[005 Common Agreements.mp4]]

## 📖 Core Concept
In enterprise networking, administrative documentation is essential for defining relationships, expectations, and security boundaries. These agreements serve as governance tools to manage how data is handled, how departments collaborate, and how services are maintained.

* **Administrative vs. Technical Controls:** Agreements like NDAs are **administrative controls**. They define policy and expectations but do not physically prevent actions. To enforce these policies technically, one must implement **technical controls** (e.g., Data Loss Prevention systems).
* **Legal Standing:** Agreements range from legally binding contracts with severe penalties to non-binding "gentleman's agreements" used for internal coordination.

## 🛠️ Hardware & Devices
* **Network Infrastructure:** Routers and switches mentioned in the context of SLA hardware replacement guarantees.
* **Note:** The instructor notes that keeping excessive "cold spare" hardware in a supply closet is expensive, leading organizations to use SLAs with suppliers to guarantee rapid replacement instead.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology

* **NDA (Non-Disclosure Agreement):** A legally binding contract between two or more parties that defines confidential data and prohibits its unauthorized disclosure. Used to protect intellectual property and trade secrets.
* **MOU (Memorandum of Understanding):** A non-binding, formal written agreement between parties that outlines intended common actions or responsibilities. Often called a "letter of intent."
* **SLA (Service-Level Agreement):** A documented commitment between a service provider and a client defining the quality, availability, and responsibilities regarding a service.
* **DLP (Data Loss Prevention):** A technical control system used to monitor and prevent the unauthorized movement or disclosure of sensitive data.
* **Non-compete Clause:** A provision often found within employment agreements (or NDAs) that prevents an employee from using learned information to start a competing business or join a competitor.
* **Five Nines (99.999%):** A common uptime standard in SLAs, equating to no more than approximately 5 minutes of downtime per year.

## 🔄 How It Works (Processes)

* **NDA Enforcement:**
 1. Parties sign the document defining confidential information.
 2. If breached, legal penalties apply (fines, loss of IP rights, or jail time).
 3. *Note:* The NDA itself does not stop data exfiltration; it only provides legal recourse after the fact.
* **MOU Workflow (Example):**
 1. Two departments (e.g., IT and Operations) identify a need for cooperation.
 2. They document specific responsibilities (e.g., IT provides a technician; Operations provides an office/parking).
 3. Both sign the document to formalize the intent.
 4. If one party fails to fulfill their part, the other cannot sue because the agreement is non-binding.
* **SLA Execution:**
 1. Provider and client agree on performance metrics (e.g., 99.999% uptime or 4-hour hardware replacement).
 2. If the provider fails to meet the metric, the contract dictates the penalty (e.g., a refund of the monthly service fee).

## 📊 Comparisons & Key Differences

| Feature| NDA| MOU| SLA|
| :---| :---| :---| :---|
| **Legal Status**| Legally Binding| Non-binding| Legally Binding (Contractual)|
| **Primary Purpose**| Protect Confidentiality| Define Intent/Cooperation| Define Service Quality/Uptime|
| **Typical Usage**| IP protection, Employment| Internal/Inter-departmental| ISP/Cloud/Hardware support|
| **Consequences**| Fines, Jail, IP forfeiture| None (renegotiation)| Refunds, Service credits|

## ⚠️ Exam Tips & Important Notes
* **Administrative vs. Technical:** Remember that an NDA is an *administrative* control. If the exam asks how to *technically* prevent data loss, the answer is a **DLP**, not an NDA.
* **MOU Characteristics:** Memorize that an MOU is **non-binding**. It is a "gentleman's agreement" that is written down for formality but cannot be enforced in court.
* **SLA Focus:** SLAs are primarily concerned with **operational priorities**, response times, and availability.
* **Uptime Math:** Be aware that "Five Nines" (99.999%) is a standard high-availability metric used in SLAs.

## ❓ Questions to Review
1. Which type of agreement is considered a "formalized gentleman's agreement" and is non-binding?
2. If an organization wants to prevent an employee from sharing trade secrets, what is the best *administrative* control to use?
3. What is the primary difference between an NDA and an SLA regarding legal enforceability?
4. If a company needs to ensure a router is replaced within 4 hours of failure, what type of document should they negotiate with their vendor?
5. Why would an organization implement a DLP system alongside an NDA?

## 🔗 Related Topics
* [[Data Loss Prevention (DLP)]]
* [[High Availability]]
* [[Security Policies]]
