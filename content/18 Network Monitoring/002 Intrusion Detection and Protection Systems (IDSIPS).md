# 002 Intrusion Detection and Protection Systems (IDSIPS)

**Module/Section:** 18 Network Monitoring
**Tags:** #security #ids #ips #snort #network-monitoring #🌱seedling

---

![[002 Intrusion Detection and Protection Systems (IDSIPS).mp4]]

## 📖 Core Concept
Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) are security technologies designed to identify and, in the case of IPS, mitigate network attacks. They analyze incoming traffic against known attack patterns or behavioral baselines.

* **IDS (Intrusion Detection System):** A passive security device that monitors network traffic, logs events, and alerts administrators to suspicious activity. It does not actively block traffic.
* **IPS (Intrusion Prevention System):** An active security device that sits in-line with network traffic. It performs all the functions of an IDS but has the authority to drop or block packets that match malicious signatures or policies.

## 🛠️ Hardware & Devices
* **Network-based IDS/IPS:** Hardware appliances or dedicated software devices that monitor traffic across an entire network segment.
* **Host-based IDS/IPS (HIDS/HIPS):** Software installed directly on individual endpoints (servers, workstations, tablets, phones) to monitor and protect that specific device.
* **Management PC:** A centralized station used to aggregate and correlate logs/alerts from various IDS/IPS sensors across the network.

## 📜 Protocols & Standards
* **Telnet:** Mentioned as an example of a protocol that might be restricted by policy-based detection (Port 23).
* **Snort:** An open-source, software-based IDS/IPS widely used in the industry to detect and prevent network attacks.

## 🔑 Key Terminology
* **Signature-based Detection:** A method that uses a "fingerprint" or specific string of bytes (pattern) to identify known threats. If the traffic matches the signature, it triggers an alert or block.
* **Policy-based Detection:** A method that flags traffic based on defined security policies (e.g., "No Telnet allowed").
* **Anomaly-based Detection:** A method that identifies threats by comparing current traffic to a baseline.
 * **Statistical Anomaly:** The system builds a baseline of "normal" traffic patterns over time; anything deviating from this baseline is flagged.
 * **Non-statistical Anomaly:** The administrator manually defines the thresholds for what constitutes an anomaly (e.g., "Flag any user downloading > 1GB per day").
* **False Positive:** An event where the system incorrectly identifies legitimate, safe traffic as malicious, potentially leading to the blocking of valid user activity.
* **In-line:** A deployment method where traffic must physically pass through the device (required for IPS).
* **Parallel (Out-of-band):** A deployment method where the device monitors a copy of the traffic (typical for IDS).
* **Denial of Service (DoS) Attack:** A malicious attempt to disrupt normal traffic of a server, service, or network by overwhelming the target with a flood of Internet traffic.

## 🔄 How It Works (Processes)
1. **IDS Workflow:** Traffic is mirrored or sent to the IDS. The IDS analyzes the traffic, logs the data, and sends an alert to the administrator if a threat is detected. It does not alter the traffic flow.
2. **IPS Workflow:** Traffic passes directly through the IPS. The IPS inspects the packets in real-time. If the traffic matches a malicious signature or violates a policy, the IPS drops the packet, preventing it from reaching the destination.
3. **Log Correlation:** Multiple IDS/IPS sensors (both host-based and network-based) send their logs to a central management console, allowing administrators to view a holistic picture of the network's security posture.

## 📊 Comparisons & Key Differences

| Feature| IDS (Intrusion Detection)| IPS (Intrusion Prevention)|
| :---| :---| :---|
| **Mode**| Passive| Active|
| **Placement**| Parallel (Off the switch)| In-line (Between devices)|
| **Response**| Logs and Alerts| Blocks/Drops traffic|
| **Risk**| Lower risk of blocking legitimate traffic| Higher risk of false positives|

## ⚠️ Exam Tips & Important Notes
* **IDS vs. IPS:** Remember that IDS is **passive** (monitoring/alerting) and IPS is **active** (blocking).
* **The "False Positive" Trap:** IPS systems must be tuned carefully. If an IPS is not tuned, it can cause significant network outages by blocking legitimate traffic due to false positives.
* **Layered Security:** Using both network-based and host-based systems provides "defense in depth." For example, a network IPS can stop a DoS attack, while a host-based IPS can prevent unauthorized software installation on a server.
* **Snort:** Recognize Snort as the industry-standard open-source IDS/IPS software.

## ❓ Questions to Review
1. What is the primary difference in deployment between an IDS and an IPS?
2. Why might an organization choose to run an IPS in "detection mode" rather than "prevention mode"?
3. What is the difference between statistical and non-statistical anomaly detection?
4. If a device is configured to block traffic based on a specific byte pattern, what type of detection is it using?
5. What is the purpose of a host-based IDS/IPS compared to a network-based one?

## 🔗 Related Topics
* [[Firewalls]]
* [[Network Segmentation]]
* [[Malware]]
* [[Denial of Service (DoS)]]
