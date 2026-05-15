# 005 Redundant Site Considerations

**Module/Section:** 21 Disaster Recovery
**Tags:** #disaster-recovery #redundancy #business-continuity #🌱seedling

---

![[005 Redundant Site Considerations.mp4]]

## 📖 Core Concept
Redundant site considerations are a critical component of a **Business Continuity Plan (BCP)** and **Disaster Recovery (DR) Plan**. The goal is to ensure an organization can maintain essential functions and services during a disruption.

* **Continuity of Operations (COOP):** The ability of an organization to maintain essential functions during a disaster.
* **Strategic Planning:** Decisions regarding redundant sites must be made by senior management, as they involve balancing costs, recovery time objectives (RTO), and the needs of specific user groups (e.g., mission-critical staff vs. general staff).
* **Hybrid Models:** Organizations often use different strategies for different assets (e.g., a hot site for servers, but remote work/telework for employees).

## 🛠️ Hardware & Devices
* **Servers:** File servers and application servers requiring replication.
* **Networking Equipment:** Routers, switches, and firewalls (often subject to platform diversity).
* **End-user Hardware:** Laptops, monitors, phones, desks, and chairs.
* **Power Infrastructure:** Solar panels, battery backups, and backup generators.
* **Connectivity Hardware:** Microwave links, cable modems, and cellular modems.
* **Mobile Units:** Portable trailers, tents, and integrated command centers (e.g., DJC2).
* **Environmental Control:** Portable air conditioning units for server cooling in mobile sites.

## 📜 Protocols & Standards
* **DJC2 (Deployable Joint Command and Control System):** A US military integrated command and control headquarters system.
 * **Deployment time:** ~72 hours to arrive.
 * **Initial functionality:** ~24 hours after arrival.
 * **Full functionality:** Up to 7 days.
 * **Capacity:** Supports up to 200 people.

## 🔑 Key Terminology
* **Hot Site:** A fully equipped backup facility that is up and running continuously. It allows for near-zero downtime but is the most expensive option.
* **Warm Site:** A facility with basic infrastructure (power, HVAC, network connectivity) but lacking full hardware/software installation. Recovery takes days.
* **Cold Site:** An empty facility (e.g., a leased building) with minimal infrastructure (tables/chairs). It requires significant time (weeks/months) to become operational.
* **Mobile Site:** Portable, self-contained units (tents/trailers) that can be delivered to a location to provide recovery services.
* **Virtual Site:** A cloud-based redundant site strategy leveraging scalability to implement hot, warm, or cold site configurations.
* **Platform Diversity:** The practice of using different operating systems, hardware vendors, or cloud providers to mitigate the risk of a single point of failure (e.g., avoiding a vulnerability that affects all Cisco devices).
* **Geographic Dispersion:** Spreading resources across different physical locations or regions to ensure a localized disaster does not destroy both primary and redundant sites.

## 🔄 How It Works (Processes)
* **Redundancy Layering:** Organizations often layer connectivity (e.g., Primary: Microwave link -> Secondary: Cable -> Tertiary: Cellular modem) to ensure constant uptime.
* **Cloud Replication:** Using providers like AWS, Azure, or Google Cloud to mirror data and services, allowing for instant failover.
* **Mobile Deployment:** In a disaster, mobile units are transported to the site, connected to local power/internet, and configured to provide immediate, contained workspace.

## 📊 Comparisons & Key Differences

| Site Type| Cost| Recovery Time| Equipment Status|
| :---| :---| :---| :---|
| **Hot Site**| High| Near-zero| Fully equipped/running|
| **Warm Site**| Medium| Days| Basic infrastructure only|
| **Cold Site**| Low| Weeks/Months| Empty shell|
| **Mobile Site**| Variable| Varies| Self-contained/Portable|

* **Platform Diversity vs. Standardization:**
 * *Standardization:* Easier to support, lower training costs, but susceptible to "all-eggs-in-one-basket" vulnerabilities.
 * *Diversity:* Higher complexity and support costs, but provides immunity to vendor-specific vulnerabilities or outages.

## ⚠️ Exam Tips & Important Notes
* **Exam Focus:** Understand the trade-offs between cost and recovery time for each site type.
* **Real-world Reality:** Most companies do not use a hot site for *everyone*; they prioritize "mission-critical" personnel and use cheaper alternatives for the rest.
* **Virtual Sites:** Remember that "Virtual" is a modern approach that applies the concepts of hot/warm/cold to cloud environments.
* **Platform Diversity:** This is a risk mitigation strategy. If the exam asks how to prevent a single vulnerability from taking down both sites, the answer is "Platform Diversity."

## ❓ Questions to Review
1. Which site type is the most expensive but offers the fastest recovery time?
2. What is the primary difference between a warm site and a cold site?
3. What is the purpose of platform diversity in a disaster recovery plan?
4. How does a mobile site differ from a traditional site?
5. Why would an organization choose to use different network hardware at a redundant site compared to the primary site?

## 🔗 Related Topics
* [[Disaster Recovery]]
* [[Business Continuity Planning]]
* [[Cloud Computing]]
* [[Redundancy]]
