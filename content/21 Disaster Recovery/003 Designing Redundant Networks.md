# 003 Designing Redundant Networks

**Module/Section:** 21 Disaster Recovery
**Tags:** #redundancy #high-availability #network-design #🌱seedling

---

![[003 Designing Redundant Networks.mp4]]

## 📖 Core Concept
The core concept of this lesson is the strategic design of **Redundancy** and **High Availability (HA)**. Redundancy is the inclusion of extra components (hardware, software, or environmental) to ensure that if one part fails, the system continues to function.

Key themes include:
* **Business Case Analysis:** Redundancy is not a "one size fits all" solution. Decisions must be based on the specific needs of the organization (e.g., a small office vs. a massive server farm).
* **The Triple Constraint:** Every project involves a trade-off between **Time, Cost, and Quality**. Improving redundancy usually increases cost or time.
* **Proactive Design:** It is significantly cheaper and more efficient to build redundancy into a network from the start rather than retrofitting it into an existing infrastructure.
* **Operational Goals:** Defining success through metrics and Key Performance Indicators (KPIs) is essential to justify the costs of high-availability features.

## 🛠️ Hardware & Devices
* **Network Interface Cards (NICs):** Redundant NICs can be installed to ensure connectivity if one port or card fails.
* **Power Supplies:** Redundant internal power supplies for routers and switches.
* **Storage Devices:**
 * **NAS (Network Attached Storage):** Used for centralized file storage with drive-level redundancy.
 * **RAID (Redundant Array of Independent Disks):** Specifically mentioned **RAID 5** as a method to provide data redundancy across multiple hard drives.
* **Environmental Infrastructure:**
 * **UPS (Uninterruptible Power Supply):** Battery backups for short-term power stability.
 * **Generators:** For long-term power outages.
 * **HVAC/Cooling Systems:** Redundant air conditioning units to prevent hardware overheating in server environments.

## 📜 Protocols & Standards
* **TCP (Transmission Control Protocol):** Mentioned as having built-in redundancy through packet retransmission mechanisms.
* **UDP (User Datagram Protocol):** Contrasted with TCP; lacks the built-in packet retransmission redundancy.
* **ITIL (Information Technology Infrastructure Library):** Mentioned as a framework for IT service management and establishing performance standards.

## 🔑 Key Terminology
* **Redundancy:** The duplication of critical components or functions of a system with the intention of increasing the reliability of the system, usually in the form of a backup or fail-safe.
* **High Availability (HA):** A characteristic of a system which aims to ensure an agreed level of operational performance, usually uptime, for a higher than normal period.
* **Five Nines:** A standard of availability representing 99.999% uptime, considered the "gold standard" for critical infrastructure.
* **Software RAID:** A method of creating redundant storage using software-based management rather than dedicated hardware controllers.
* **KPI (Key Performance Indicator):** A measurable value that demonstrates how effectively a company is achieving key business objectives.
* **Quality of Service (QoS):** The description or measurement of the overall performance of a service, particularly the performance seen by the users of the network.

## 🔄 How It Works (Processes)
* **Categorization of Applications:**
 1. Define business applications into categories (e.g., Cat 1: Web, Cat 2: Email, Cat 3: Streaming).
 2. Apply profiles to these categories to manage traffic and service levels.
* **Measuring Success:**
 1. Establish performance standards (e.g., uptime percentages).
 2. Implement metrics/KPIs to track performance.
 3. Use charts/data to report progress to stakeholders.
* **The Design Lifecycle:**
 1. Identify business needs.
 2. Determine technical goals (e.g., 99% vs. 99.999% uptime).
 3. Budget for hardware/software redundancy.
 4. Implement and monitor using metrics.

## 📊 Comparisons & Key Differences

| Feature| Low Redundancy| High Redundancy|
| :---| :---| :---|
| **Cost**| Low| High|
| **Complexity**| Simple| Complex|
| **Uptime**| Lower (Risk of downtime)| Higher (Five Nines)|
| **Implementation**| Fast/Easy| Slow/Difficult|

* **TCP vs. UDP:** TCP provides redundancy via retransmission; UDP does not.
* **Hardware vs. Software Redundancy:** Hardware redundancy (extra routers/switches) is often more expensive than software solutions (virtual routers/switches or software RAID).

## ⚠️ Exam Tips & Important Notes
* **Design Early:** Always emphasize that retrofitting redundancy is more expensive than designing it from scratch.
* **Business Case:** Never suggest redundancy without considering the business case. If the cost of downtime is lower than the cost of the redundant equipment, the redundancy may not be justified.
* **Triple Constraint:** Remember the "Good, Quick, Cheap" trade-off. You generally cannot have all three.
* **Metrics:** Don't just measure things for the sake of it; ensure your metrics align with your defined performance standards and business goals.

## ❓ Questions to Review
1. Why is it more cost-effective to design for redundancy at the beginning of a project rather than retrofitting it later?
2. How does the "Triple Constraint" (Time, Cost, Quality) impact network design decisions?
3. What is the difference between hardware redundancy and software redundancy, and when might you choose one over the other?
4. How do TCP and UDP differ in terms of their contribution to network reliability?
5. Why is it important to categorize business applications when designing a network?

## 🔗 Related Topics
* [[Quality of Service (QoS)]]
* [[RAID Levels]]
* [[Network Infrastructure Management]]
* [[Disaster Recovery Planning]]
