# 004 Network Sensors

**Module/Section:** 18 Network Monitoring
**Tags:** #network-monitoring #sensors #snmp #performance-management #🌱seedling

---

![[004 Network Sensors.mp4]]

## 📖 Core Concept
Network sensors are internal monitoring mechanisms embedded within network infrastructure (routers, switches, firewalls) used to track performance metrics. These sensors provide real-time data on the health of the hardware. By monitoring these metrics, administrators can establish a "baseline" of normal operation and identify anomalies that suggest misconfigurations, hardware failure, or security attacks.

* **Proactive Management:** Sensors allow for the setting of thresholds that trigger alerts before a catastrophic failure occurs.
* **Performance Impact:** Excessive heat, high CPU, or high memory usage directly correlate to reduced device lifespan, system instability, and packet loss.

## 🛠️ Hardware & Devices
* **Routers:** Specialized computers that route traffic; monitored for CPU, memory, and temperature.
* **Switches:** Layer 2/3 devices; monitored for CPU (especially during broadcast storms) and temperature.
* **Firewalls:** Security appliances; monitored for CPU (due to complex ACL processing) and memory.
* **Internal Components:** Sensors are often located on specific controllers, processor units, and interface cards within the chassis.

## 📜 Protocols & Standards
* **SNMP (Simple Network Management Protocol):** The primary protocol used to report sensor data (temperature, CPU, memory) from network devices to a centralized monitoring dashboard.

## 🔑 Key Terminology
* **Minor Temperature Threshold:** A warning level set to notify administrators of rising temperatures before they reach dangerous levels. Triggers system messages, SNMP notifications, and environmental alarms.
* **Major Temperature Threshold:** A critical level indicating dangerous conditions. Triggers alarms and initiates **Load Shedding**.
* **Load Shedding:** A protective process where a device automatically shuts down non-essential functions or processing cards to reduce heat generation and prevent total system failure.
* **CPU Utilization:** The percentage of the Central Processing Unit's capacity currently in use. Normal range is 5–40%.
* **Memory Utilization:** The amount of RAM currently in use by the device. Normal baseline is ~40%.
* **Broadcast Storm:** A state where a network is flooded with broadcast traffic, often due to misconfiguration, causing extreme CPU utilization on switches.
* **ACL (Access Control List):** A set of rules applied to router interfaces to filter traffic. Complex ACLs require significant CPU resources to process each packet.
* **Baseline:** The established "normal" operating metrics for a device, used as a reference point to identify deviations.

## 🔄 How It Works (Processes)
1. **Baseline Establishment:** Administrators observe the device under normal conditions to determine standard ranges for temperature, CPU, and memory.
2. **Threshold Configuration:** Administrators set specific levels (Minor/Major for temperature; Minor/Severe/Critical for memory) within the device configuration.
3. **Monitoring:** Sensors continuously poll internal hardware metrics.
4. **Reporting:** When a threshold is crossed, the device sends an **SNMP** trap or notification to a centralized management system.
5. **Response:**
 * **Automated:** The device may perform load shedding (if a major temperature threshold is hit).
 * **Manual:** Administrators investigate the root cause (e.g., checking for broadcast storms or excessive ACL traffic) to return metrics to baseline.

## 📊 Comparisons & Key Differences

| Metric| Normal Range| Warning Signs|
| :---| :---| :---|
| **CPU Utilization**| 5% – 40%| >40% (Potential attack or misconfiguration)|
| **Memory Utilization**| ~40%| >80% (System hangs, crashes, or hardware upgrade needed)|

* **Minor vs. Major Thresholds:** Minor thresholds are for awareness and early intervention; Major thresholds are for emergency automated actions (load shedding) to prevent hardware destruction.

## ⚠️ Exam Tips & Important Notes
* **Root Cause Analysis:** High CPU is often a symptom of a **broadcast storm** (switches) or **complex ACLs** (routers).
* **Memory Thresholds:** If memory is consistently above 80%, it is a strong indicator that the hardware is under-provisioned for the current network load or is under a sustained attack.
* **Device Lifespan:** Emphasize that running devices at excessive temperatures for extended periods directly reduces the physical lifespan of the hardware.
* **SNMP:** Remember that SNMP is the standard mechanism for getting this sensor data to your management console.

## ❓ Questions to Review
1. What is the primary purpose of "load shedding" in a network device?
2. What is the typical "normal" range for CPU utilization on a healthy network device?
3. If a switch is experiencing a broadcast storm, which sensor metric would be most affected?
4. What are the three levels of memory threshold warnings mentioned for network devices?
5. Why would a router's CPU utilization spike when processing complex ACLs?

## 🔗 Related Topics
* [[SNMP]]
* [[Network Performance Monitoring]]
* [[Router Configuration]]
* [[Switching Concepts]]
* [[Access Control Lists]]
