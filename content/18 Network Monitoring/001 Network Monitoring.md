# 001 Network Monitoring

**Module/Section:** 18 Network Monitoring
**Tags:** #network-monitoring #security #snmp #siem #🌱seedling

---

![[001 Network Monitoring.mp4]]

## 📖 Core Concept
Network monitoring is the practice of using hardware and software tools to continually observe and analyze network performance in real-time. The primary goals are to ensure operational integrity, maintain optimal performance, and identify issues before they impact users.

* **Key Objectives:**
 * Detect and report traffic bottlenecks, outages, unauthorized access, and inefficiencies.
 * Track critical metrics: bandwidth utilization, device uptime, service availability.
 * Maintain network reliability, stability, and security.
 * Minimize downtime and improve user experience.
* **CompTIA Alignment:**
 * **Objective 1.2:** Compare and contrast networking appliances, applications, and functions.
 * **Objective 3.2:** Given a scenario, use network monitoring technologies.

## 🛠️ Hardware & Devices
* **Network Sensors:** Hardware devices (or software-based agents) deployed within a network to collect data regarding traffic patterns, which is then used for monitoring and analysis.
* **Network Devices:** General infrastructure components (routers, switches, firewalls) that act as nodes monitored by management protocols like SNMP.

## 📜 Protocols & Standards
* **SNMP (Simple Network Management Protocol):** A set of protocols used for managing complex networks. It monitors network nodes for specific conditions that require administrative intervention or action.

## 🔑 Key Terminology
* **IDS (Intrusion Detection System):** A security technology that monitors network traffic specifically to identify suspicious activities or potential threats and issues alerts when such activity is detected.
* **IPS (Intrusion Prevention System):** A security mechanism that goes beyond detection; it identifies potential threats and takes automated actions to prevent or mitigate those threats in real-time.
* **Packet Capture:** The process of recording all or specific segments of network traffic. These recordings are used for deep-dive analysis, diagnostics, and security investigations.
* **Network Flow Data:** Information collected about traffic passing through a network device. It specifically tracks the **source**, **destination**, **volume**, and **path** of the traffic.
* **Log Aggregation:** The process of collecting, centralizing, and organizing log data from various disparate systems across the network into a single location for easier analysis and monitoring.
* **SIEM (Security Information and Event Management):** A comprehensive solution that aggregates, correlates, and analyzes security-related data from across the entire network to identify and report on security incidents and threats.
* **Network Performance Metrics:** Quantitative measures used to evaluate the level of service and health provided by the network.
* **Interface Statistics:** Detailed metrics specifically related to the performance and usage of network interfaces, including error rates, utilization percentages, and total traffic volumes.

## 🔄 How It Works (Processes)
1. **Monitoring/Collection:** Sensors and protocols (like SNMP) gather raw data from network devices and traffic flows.
2. **Aggregation:** Log data and flow data are centralized (Log Aggregation) to provide a unified view.
3. **Analysis:** The SIEM or monitoring software correlates the data to identify patterns, anomalies, or security breaches.
4. **Action/Reporting:**
 * If an **IDS** is used, an alert is generated.
 * If an **IPS** is used, the system automatically blocks or mitigates the threat.
 * Administrators use **Interface Statistics** and **Performance Metrics** to tune the network for optimal performance.

## 📊 Comparisons & Key Differences
| Feature| IDS (Intrusion Detection)| IPS (Intrusion Prevention)|
| :---| :---| :---|
| **Primary Function**| Monitors and alerts| Monitors, alerts, and blocks|
| **Action Taken**| Passive (Alerting)| Active (Mitigation/Prevention)|

## ⚠️ Exam Tips & Important Notes
* **Distinction between IDS and IPS:** Remember that IDS is "Detection" (Alerting), while IPS is "Prevention" (Action/Blocking).
* **SNMP Purpose:** Focus on the fact that SNMP is for *managing* complex networks by monitoring nodes for conditions that need administrative action.
* **Flow Data vs. Packet Capture:** Packet capture is the actual recording of traffic (the "what"), whereas flow data is the metadata (source, destination, path, volume).
* **SIEM Value:** Understand that SIEM is the "comprehensive" solution that performs correlation across multiple data sources.

## ❓ Questions to Review
1. What is the fundamental difference between an IDS and an IPS?
2. Which protocol would you use to monitor nodes on a network for administrative action?
3. What specific information is contained within "Network Flow Data"?
4. Why is log aggregation critical for large-scale network monitoring?
5. What are three examples of interface statistics a network administrator might monitor?

## 🔗 Related Topics
* [[Intrusion Detection and Prevention Systems]]
* [[Simple Network Management Protocol]]
* [[Security Information and Event Management]]
* [[Network Performance Metrics]]
