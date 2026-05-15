# 001 Disaster Recovery

**Module/Section:** 21 Disaster Recovery
**Tags:** #disaster-recovery #business-continuity #high-availability #🌱seedling

---

![[001 Disaster Recovery.mp4]]

## 📖 Core Concept
**Disaster Recovery (DR)** is a strategic security planning model designed to enable an organization to regain access to software, data, and hardware necessary to resume critical business functions following a disaster. These disasters can be natural (e.g., floods, earthquakes) or human-induced (e.g., cyberattacks, accidental deletion, sabotage).

The primary objectives of a DR plan are:
* **Minimize Downtime:** Reducing the duration that systems are unavailable.
* **Minimize Data Loss:** Ensuring that the amount of lost information is kept to an absolute minimum.
* **Maximize Recovery Speed:** Ensuring the organization returns to normal operations as quickly as possible to mitigate negative impacts on business operations.

The process relies on a combination of policies, tools, and procedures to ensure the continuity of vital technology infrastructure.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Disaster Recovery (DR)**: A strategic planning model involving policies, tools, and procedures to restore critical business functions and technology infrastructure after a disaster.
* **High Availability (HA)**: A system design approach that ensures systems and processes meet an agreed-upon level of operational performance with a high level of uptime.
* **Redundant Networks**: A network design strategy that implements duplicate components, paths, and computing power to ensure continuous service if a single system or component fails.
* **Mean Time Between Failures (MTBF)**: A metric used to measure the average time between inherent failures of a system during normal operation.
* **Mean Time to Repair (MTTR)**: A metric representing the average time required to repair a failed component or system.
* **Recovery Point Objective (RPO)**: A metric defining the maximum tolerable period in which data might be lost from an IT service due to a major incident.
* **Recovery Time Objective (RTO)**: A metric defining the maximum tolerable duration of time that a computer, system, network, or application can be down after a failure.
* **Cold Site**: A recovery site that provides basic infrastructure (power, cooling, space) but lacks the necessary hardware and data to resume operations immediately.
* **Warm Site**: A recovery site that has hardware and connectivity pre-installed, but requires data restoration and configuration to become fully operational.
* **Hot Site**: A fully functional recovery site that mirrors the primary site, allowing for near-instantaneous failover with current data and hardware.
* **Tabletop Exercise**: A discussion-based disaster recovery training exercise where team members meet to walk through a simulated disaster scenario to evaluate plans and procedures.
* **Validation Test**: A formal process used to verify that disaster recovery procedures work as intended and meet the defined RTO and RPO requirements.

## 🔄 How It Works (Processes)
The disaster recovery planning process involves several distinct phases:
1. **High-Availability Planning**: Establishing the baseline for operational performance and uptime requirements.
2. **Redundancy Design**: Implementing duplicate paths and hardware to eliminate single points of failure.
3. **Metric Definition**: Establishing KPIs (Key Performance Indicators) such as MTBF, MTTR, RPO, and RTO to measure recovery success.
4. **Site Selection**: Determining the appropriate recovery site strategy (Cold, Warm, or Hot) based on budget and business needs.
5. **Training and Exercises**: Conducting tabletop exercises and validation tests to ensure staff and systems are prepared for actual incidents.

## 📊 Comparisons & Key Differences
| Site Type| Readiness Level| Cost| Recovery Speed|
| :---| :---| :---| :---|
| **Cold Site**| Low| Low| Slow|
| **Warm Site**| Medium| Medium| Moderate|
| **Hot Site**| High| High| Fast|

## ⚠️ Exam Tips & Important Notes
* **Domain Focus**: This section falls under Domain 3: Network Operations, specifically Objective 3.3.
* **Goal Alignment**: Always remember that the goal of DR is to balance the cost of recovery against the business impact of downtime and data loss.
* **Terminology**: Be prepared to distinguish between RPO (data loss) and RTO (time loss) on the exam, as these are frequently tested.

## ❓ Questions to Review
1. What is the primary difference between a Hot Site and a Cold Site?
2. How does "High Availability" differ from "Disaster Recovery"?
3. Which metric (RPO or RTO) is specifically concerned with the amount of data loss?
4. Why is a tabletop exercise considered a critical part of a DR plan?
5. What is the purpose of implementing redundant network paths?

## 🔗 Related Topics
* [[Network Operations]]
* [[Business Continuity Planning]]
* [[Redundancy]]
* [[High Availability]]
