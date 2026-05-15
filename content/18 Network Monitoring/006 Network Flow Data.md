# 006 Network Flow Data

**Module/Section:** 18 Network Monitoring
**Tags:** #monitoring #netflow #security #network-analysis #🌱seedling

---

![[006 Network Flow Data.mp4]]

## 📖 Core Concept
The lesson focuses on **Network Traffic Flow Analysis**, which is the process of monitoring and analyzing network traffic to identify patterns, trends, and anomalies.

* **Full Packet Capture (FPC) vs. Flow Analysis:**
 * **Full Packet Capture (FPC):** Captures the entire packet, including both the header and the payload. While highly detailed, it is extremely storage-intensive and impractical for long-term monitoring in most organizations.
 * **Flow Analysis:** Uses a **Flow Collector** to record metadata and statistics about traffic rather than the actual content. This is significantly more storage-efficient and allows for long-term trend analysis and anomaly detection.
* **Purpose:** Flow analysis is used to establish baselines. By comparing current traffic against these baselines, administrators can identify malicious behavior (e.g., malware in transit, data exfiltration, or tunneling) or performance issues.

## 🛠️ Hardware & Devices
* **Flow Collector:** A device or software component that records metadata and statistics about network traffic.
* **Routers/Switches:** Network appliances that are polled by monitoring tools (like MRTG) to report traffic flow statistics via protocols like SNMP.
* **Servers:** Often the source of traffic spikes (e.g., file servers performing backups or being used for data exfiltration).

## 📜 Protocols & Standards
* **NetFlow:** A Cisco-developed protocol used to report network flow information to a structured database. It defines a "flow" based on packets sharing common characteristics (e.g., same source/destination IP, ports, and protocol).
* **IPFIX (IP Flow Information Export):** An IETF standard based on NetFlow; it is essentially the industry-standard version of NetFlow.
* **SNMP (Simple Network Management Protocol):** Used by tools like MRTG to poll network appliances (routers/switches) for interface traffic statistics.

## 🔑 Key Terminology
* **Metadata:** Data that describes other data. In networking, this includes source/destination IP, ports, protocol, and interface information, but excludes the actual payload (the "message" content).
* **Flow Analysis:** The practice of monitoring network traffic statistics to identify trends and patterns.
* **Baseline:** The normal, expected behavior or traffic pattern of a network.
* **Normalization:** The process of organizing data into a standard format (e.g., JSON or tab-delimited) so it can be easily searched and analyzed by different tools.
* **JSON (JavaScript Object Notation):** A lightweight data-interchange format used by tools like Zeek to store normalized log data.
* **Data Exfiltration:** The unauthorized transfer of data from a computer or network.
* **Tunneling:** A method of using a protocol to carry another protocol, often used to bypass security controls or hide traffic.

## 🔄 How It Works (Processes)
1. **NetFlow Process:**
 * Traffic passes through a network device.
 * The device identifies packets with shared characteristics (e.g., same source/destination IP and port).
 * The device exports this metadata to a collector.
 * The collector stores the data in a database for visualization and querying.
2. **Zeek (Hybrid) Process:**
 * Passively monitors traffic (like a sniffer).
 * Logs metadata by default.
 * If traffic matches specific "interesting" parameters/rules, it triggers a full packet capture for that specific session for deep forensic analysis.
3. **MRTG Process:**
 * Uses SNMP to poll routers and switches.
 * Collects interface traffic statistics over time.
 * Generates visual graphs to display traffic volume, allowing admins to spot spikes or anomalies.

## 📊 Comparisons & Key Differences

| Feature| Full Packet Capture (FPC)| NetFlow / Flow Analysis|
| :---| :---| :---|
| **Data Captured**| Header + Payload| Metadata only|
| **Storage Usage**| Extremely High| Low/Efficient|
| **Primary Use**| Deep Forensics| Trend Analysis / Anomaly Detection|
| **Content Visibility**| Full visibility| No content visibility|

## ⚠️ Exam Tips & Important Notes
* **Storage Reality:** Remember that FPC is rarely used for long-term monitoring due to the massive storage requirements.
* **Identification:** NetFlow identifies a "flow" based on packets sharing the same characteristics (Source IP, Destination IP, Source Port, Destination Port, Protocol).
* **Anomaly Detection:** A traffic spike at 2:00 AM might be a scheduled backup (normal) or data exfiltration (malicious). The tool identifies the *anomaly*, but the administrator must use context to determine if it is malicious.
* **Tooling:** Know the difference between **NetFlow** (Cisco/Standard), **Zeek** (Hybrid/Normalization), and **MRTG** (SNMP-based graphing).

## ❓ Questions to Review
1. Why is NetFlow generally preferred over Full Packet Capture for daily network monitoring?
2. What specific information is included in a NetFlow record, and what is excluded?
3. How does Zeek differ from a standard flow collector?
4. What protocol does MRTG use to gather traffic statistics from network appliances?
5. If you see a massive traffic spike on your network graph at 3:00 AM, what are two possible explanations?

## 🔗 Related Topics
* [[Network Monitoring]]
* [[SNMP]]
* [[Packet Sniffing]]
* [[Security Baselines]]
