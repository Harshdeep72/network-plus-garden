# 009 Understanding SIEMs

**Module/Section:** 18 Network Monitoring
**Tags:** #siem #cybersecurity #network-monitoring #🌱seedling

---

![[009 Understanding SIEMs.mp4]]

## 📖 Core Concept
The lesson focuses on the practical implementation and configuration of a **SIEM (Security Information and Event Management)** system using **Security Onion**. A SIEM acts as a centralized hub for collecting, aggregating, and analyzing security data from across a network.

* **Data Collection Methods:**
 * **Network Taps/Port Mirroring:** Capturing raw traffic directly from a switch.
 * **Agents:** Installing software (like Beats or OSSEC) on endpoints to forward logs.
 * **Syslog:** Configuring network appliances (like firewalls) to push logs to the SIEM.
* **Analysis:** Once data is collected, tools like **Elastic Stack** (Elasticsearch, Logstash, Kibana) and **Bro/Zeek** are used to visualize, search, and alert on security events.
* **Tuning:** The instructor emphasizes that SIEMs generate massive amounts of data; therefore, analysts must "tune" sensors and define specific use cases to filter out noise and focus on actionable security intelligence.

## 🛠️ Hardware & Devices
* **VM (Virtual Machine):** Used for hosting the Security Onion appliance and Windows endpoints (MS1, DC1, PC1, PC2).
* **Switch:** Used for **Port Mirroring** (SPAN) to send a copy of network traffic to the SIEM sensor.
* **Unified Threat Management (UTM) System:** A security appliance (e.g., pfSense) that acts as a gateway and log source.

## 📜 Protocols & Standards
* **IPv4:** Used for network communication; the instructor specifically filters out IPv6 during packet capture.
* **Syslog:** A standard for message logging. Uses **UDP port 514**.
* **W3C Log Format:** A standard log format used by IIS for web server logging.
* **YAML (YAML Ain't Markup Language):** A data serialization language used for configuration files (e.g., `winlogbeat.yml`). Highly sensitive to white space (2-space indentation).

## 🔑 Key Terminology
* **SIEM (Security Information and Event Management):** A software solution that aggregates and analyzes activity from many different resources across an entire IT infrastructure.
* **Security Onion:** A free, open-source Linux distribution for intrusion detection, enterprise security monitoring, and log management.
* **Elastic Stack (ELK Stack):** A collection of tools including **Elasticsearch** (search/analytics engine), **Logstash** (data processing pipeline), and **Kibana** (visualization tool).
* **Bro (Zeek):** A powerful passive network analysis framework used as a Network Intrusion Detection System (NIDS).
* **Beats (Winlogbeat):** Lightweight data shippers installed as agents on hosts to send log data to the SIEM.
* **HIDS (Host-based Intrusion Detection System):** Software (e.g., **OSSEC/Wazuh**) installed on a specific host to monitor and analyze the internals of that system.
* **Zenmap:** A graphical user interface (GUI) for **Nmap**, used for network discovery and security auditing.
* **Port Mirroring (SPAN):** A method of monitoring network traffic by forwarding a copy of traffic from one or more ports on a switch to another port where a monitoring device is connected.
* **Index Pattern:** A configuration in Kibana that tells the system which Elasticsearch indices to explore (e.g., `logstash-ossec-*`).

## 🔄 How It Works (Processes)
1. **Packet Capture:** Using `tcpdump` to monitor traffic on a specific interface (`eth1`) without name resolution (`-n`) and filtering for IPv4 (`ip`).
2. **Agent Configuration:**
 * Edit `.yml` configuration files with the SIEM IP and port (e.g., `5044`).
 * Install the agent as a Windows Service (`install-service-winlogbeat`).
 * Start the service (`start-service winlogbeat`).
3. **Log Forwarding:**
 * **IIS Logging:** Configure IIS to log to both a local file and **ETW (Event Tracing for Windows)**, then point the agent to the specific IIS log path.
 * **Syslog:** Enable remote logging on the UTM appliance, pointing it to the SIEM IP on port 514.
4. **Data Visualization:** Using Kibana to create dashboards, define index patterns, and perform "Hunting" (searching for specific patterns like `alert_level:>=5`).

## 📊 Comparisons & Key Differences
| Feature| Network-based (Port Mirroring)| Host-based (Beats/OSSEC)|
| :---| :---| :---|
| **Visibility**| Sees traffic between hosts| Sees internal OS/App logs|
| **Deployment**| Switch configuration| Agent installation on each host|
| **Best For**| Detecting network scans/attacks| Detecting local file changes/logins|

## ⚠️ Exam Tips & Important Notes
* **YAML Sensitivity:** Remember that YAML files are extremely sensitive to white space. Use two spaces per indentation level.
* **Port Numbers:** Know that **Syslog uses 514** and **Beats/Logstash often uses 5044**.
* **Filtering:** When using `tcpdump`, the `-n` flag disables name resolution (faster, avoids DNS lookups).
* **Tuning:** SIEMs are not "set and forget." You must define what is relevant to your organization to avoid being overwhelmed by logs.
* **Exam Context:** You do not need to memorize the complex PowerShell commands (like the `get-winevent` string), but you should understand the *purpose* of using such commands to identify log sources.

## ❓ Questions to Review
1. What is the primary purpose of a SIEM in a network environment?
2. Why is port mirroring (SPAN) used in conjunction with a SIEM?
3. What is the difference between a NIDS (like Bro) and a HIDS (like OSSEC)?
4. Which port is standard for Syslog traffic?
5. Why is it important to "tune" a SIEM after initial deployment?

## 🔗 Related Topics
* [[Intrusion Detection Systems]]
* [[Log Management]]
* [[Network Scanning]]
* [[Port Mirroring]]
