# 004 Disaster Recovery Metrics

**Module/Section:** 21 Disaster Recovery
**Tags:** #disaster-recovery #availability #reliability #metrics #🌱seedling

---

![[004 Disaster Recovery Metrics.mp4]]

## 📖 Core Concept
Disaster recovery metrics are quantifiable standards used to plan, evaluate, and manage an organization's ability to recover IT operations following a disruptive event. These metrics identify organizational risks and measure the effectiveness of availability and restoration efforts.

* **Availability vs. Reliability:**
 * **Availability:** Focuses on the network being "up" and operational. It is measured by uptime (percentage of time a system is functional).
 * **Reliability:** Focuses on the network's ability to transmit data without dropping packets.
 * **The Balance:** A network must be both highly available and highly reliable to be effective for business operations.
* **Availability Standards:**
 * **Five Nines (99.999%):** Allows for a maximum of 5 minutes of downtime per year.
 * **Six Nines (99.9999%):** Allows for a maximum of 31 seconds of downtime per year.
 * *Note:* Achieving these levels requires careful design, as maintenance (patching, hardware upgrades) consumes these limited downtime windows.

## 🛠️ Hardware & Devices
* **Backup Diesel Generator:** Used for power redundancy; typically takes 30–45 seconds to engage, with full power transfer by 45–60 seconds.
* **Battery Backup System (UPS):** Provides instant power to servers and networking equipment during a power failure, allowing for an RTO of zero.
* **Networking Equipment (Routers/Switches):** Mentioned in the context of needing maintenance windows that must fit within availability targets.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **MTTR (Mean Time to Repair):** The average time required to repair a network device after a failure occurs. A lower MTTR is preferred.
* **MTBF (Mean Time Between Failures):** The average time elapsed between one failure and the next for a specific device. A higher MTBF indicates more reliable equipment.
* **MTD (Maximum Tolerable Downtime):** The absolute maximum duration a business process can be inoperable before the organization suffers irrevocable failure. This is determined by business stakeholders.
* **RTO (Recovery Time Objective):** The target duration of time within which a business process must be restored after a disaster to avoid unacceptable consequences.
* **RPO (Recovery Point Objective):** The maximum duration of data loss an organization can tolerate, measured in time. It dictates the frequency of backups (e.g., an RPO of 6 hours requires backups at least every 6 hours).

## 🔄 How It Works (Processes)
* **Calculating Availability:** (Total minutes up / Total minutes available) * 100.
* **Geographic Diversity (Risk Management):** Distributing teams across different time zones and physical locations (e.g., US, Philippines, Egypt) ensures that if one region suffers a disaster, others can maintain operations, keeping the organization within its MTD.
* **Ransomware Recovery Workflow:**
 1. System is infected/encrypted.
 2. Decision made to format/wipe the system rather than pay the ransom.
 3. System is restored from the last "known good" backup.
 4. Data generated between the last backup and the time of infection is lost; this duration is the RPO.

## 📊 Comparisons & Key Differences

| Metric| Goal| Focus|
| :---| :---| :---|
| **MTTR**| Low| Speed of repair|
| **MTBF**| High| Equipment reliability|
| **RTO**| Low| Speed of service restoration|
| **RPO**| Low| Amount of data loss tolerance|

## ⚠️ Exam Tips & Important Notes
* **MTTR vs. MTBF:** Remember that you want MTTR to be low (fix it fast) and MTBF to be high (it breaks rarely).
* **RPO vs. RTO:** RTO is about *time to restore operations*; RPO is about *amount of data lost*.
* **MTD:** This is the "upper limit." If you exceed the MTD, the business faces irrevocable failure.
* **Real-world Application:** The instructor emphasizes that these metrics are not just technical numbers; they are business decisions involving cost-benefit analysis (e.g., hiring more staff vs. accepting longer response times).

## ❓ Questions to Review
1. If a device has a high MTBF, is it considered more or less reliable than a device with a low MTBF?
2. How does the Recovery Point Objective (RPO) directly influence an organization's backup schedule?
3. What is the difference between "Five Nines" and "Six Nines" in terms of annual downtime?
4. Why is geographic diversity considered a strategy for maintaining Maximum Tolerable Downtime (MTD)?
5. If a system fails and is restored in 45 minutes, and the organization has an RTO of 60 minutes, did they meet their objective?

## 🔗 Related Topics
* [[Disaster Recovery Planning]]
* [[Business Continuity]]
* [[Redundancy and Fault Tolerance]]
* [[Backup Strategies]]
