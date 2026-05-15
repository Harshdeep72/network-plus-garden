# 003 When to Automate and Orchestrate

**Module/Section:** 19 Orchestration and Automation
**Tags:** #automation #orchestration #it-operations #🌱seedling

---

![[003 When to Automate and Orchestrate.mp4]]

## 📖 Core Concept
Automation and orchestration are essential for streamlining complex IT processes, enhancing security, and improving operational efficiency. However, they are not "one-size-fits-all" solutions. Before implementation, organizations must evaluate five critical factors:

1. **Complexity:** Determine if the task is simple (automation) or involves multiple, interconnected steps (orchestration).
2. **Cost:** Perform a cost-benefit analysis comparing upfront development/maintenance costs against long-term efficiency gains.
3. **Single Points of Failure:** Ensure redundancy and manual fallback processes exist if the automated system fails.
4. **Technical Debt:** Account for the long-term cost of maintaining, updating, and refactoring code.
5. **Ongoing Supportability:** Ensure the internal team has the skills to maintain these systems as external dependencies (APIs/Webhooks) change.

**The Golden Rule:** The most effective use of automation/orchestration is for tasks that are **repeatable** and **stable**. Avoid automating "one-off" or highly variable tasks.

## 🛠️ Hardware & Devices
* **Servers/Storage:** Mentioned in the context of routine backups.
* **Workstations:** Mentioned in the context of malware remediation and imaging.
* **Network Infrastructure:** The environment where automation/orchestration is deployed.

## 📜 Protocols & Standards
* **API (Application Programming Interface):** A set of rules and protocols that allow different software applications to communicate with each other. Automation systems rely heavily on APIs to interact with other platforms.
* **Webhooks:** A method for augmenting or altering the behavior of a web page or web application with custom callbacks. Used to trigger automated actions when specific events occur in another system.

## 🔑 Key Terminology
* **Automation:** The use of technology to perform a specific, usually simple, task with minimal human intervention (e.g., a nightly server backup).
* **Orchestration:** The automated configuration, coordination, and management of complex computer systems and services. It often launches multiple automation processes to complete a larger workflow (e.g., malware incident response).
* **Runbook:** A collection of procedures and information that performs a specific task or responds to a specific event (e.g., isolating a machine, imaging it, and re-deploying it).
* **Technical Debt:** The implied cost of additional rework caused by choosing an easy or "quick and dirty" solution now instead of a better approach that would take longer.
* **Cost-Benefit Analysis:** A systematic process for calculating and comparing the benefits and costs of a project or decision.
* **Redundancy:** The inclusion of extra components that are not strictly necessary to functioning, in case of failure in other components.
* **Failover:** A backup operational mode in which the functions of a system are assumed by a secondary system when the primary system becomes unavailable.

## 🔄 How It Works (Processes)
### Example: Malware Incident Response (Orchestration Workflow)
1. **Detection:** Identify a workstation infected with malware.
2. **Isolation:** Logically isolate the machine from the network.
3. **Forensics:** Image the storage drive and submit it to the forensics team.
4. **Remediation:** Format the drive and install a "known good" operating system image.
5. **Validation:** Scan the workstation to ensure it is clean.
6. **Restoration:** Return the workstation to the network.

### Decision-Making Logic for Automation
* **Is it repeatable?** If yes, proceed. If no (one-off), do not automate.
* **Is it stable?** If yes, proceed. If it changes frequently, the maintenance cost will outweigh the benefits.
* **Manual vs. Automated:** If the time to code the automation exceeds the time saved over the long term, perform the task manually.

## 📊 Comparisons & Key Differences

| Feature| Automation| Orchestration|
| :---| :---| :---|
| **Scope**| Single, specific task| Complex, multi-step workflow|
| **Complexity**| Low| High|
| **Dependency**| Often self-contained| Relies on multiple APIs/systems|
| **Example**| Nightly backup| Malware incident response|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip:** Always look for the "repeatable and stable" requirement when asked if a process should be automated.
* **Exam Tip:** Remember that automation is not free; it requires ongoing maintenance (technical debt) and personnel training.
* **Critical Warning:** Never create a single point of failure. If your automation fails, you *must* have a manual fallback process.
* **Real-world Reality:** Outsourcing the creation of an automation tool without maintaining the internal knowledge to fix it when APIs change is a common cause of system failure.

## ❓ Questions to Review
1. What is the primary difference between automation and orchestration?
2. Why is "technical debt" a significant concern when implementing automated systems?
3. If a task takes 30 minutes to do manually and occurs once every two years, should you automate it? Why or why not?
4. What is the danger of relying solely on APIs for your orchestration processes?
5. How can you mitigate the risk of a single point of failure in an automated environment?

## 🔗 Related Topics
* [[Incident Response]]
* [[Backup and Recovery]]
* [[API Security]]
* [[System Maintenance]]
