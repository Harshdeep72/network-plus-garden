# 003 Simple Network Management Protocol (SNMP)

**Module/Section:** 18 Network Monitoring
**Tags:** #snmp #network-management #security #🌱seedling

---

![[003 Simple Network Management Protocol (SNMP).mp4]]

## 📖 Core Concept
**Simple Network Management Protocol (SNMP)** is an internet protocol designed for collecting and organizing information about managed devices on IP networks. It allows administrators to monitor device health, gather statistics, and modify device behavior remotely.

* **Managed Devices:** Any network device capable of communicating with an SNMP manager. Examples include routers, switches, firewalls, printers, servers, and end-user client devices.
* **Architecture:**
 * **SNMP Manager:** A centralized node (usually a server) that runs the SNMP protocol to collect, process, and analyze information from agents across the LAN or WAN.
 * **SNMP Agents:** Background services running on managed devices that collect local data and transmit it to the manager either at regular intervals or upon request.

## 🛠️ Hardware & Devices
* **Managed Devices:** Routers, switches, firewalls, printers, servers, and end-user client devices.
* **Management Station:** A centralized server or workstation responsible for running the SNMP manager software.

## 📜 Protocols & Standards
* **SNMP (Simple Network Management Protocol):** The primary protocol for network management.
* **SNMPv1:** The original version; uses plain-text community strings for security.
* **SNMPv2:** An iteration of the protocol; also relies on plain-text community strings.
* **SNMPv3:** The most secure version; introduces integrity, authentication, and encryption.
* **Encryption Standards:**
 * **DES (Data Encryption Standard):** 56-bit encryption key (considered weak).
 * **3DES (Triple DES):** An improvement over DES.
 * **AES (Advanced Encryption Standard):** The modern standard for encryption in SNMPv3 (requires device firmware support).

## 🔑 Key Terminology
* **MIB (Management Information Base):** A hierarchical database used to describe the structure of management data on a device. It stores information about OIDs.
* **OID (Object Identifier):** A unique identifier used to name and identify a specific variable or object that can be read or set via SNMP.
* **Community String:** A shared secret key used in SNMPv1 and v2 for authentication. Default values are often "public" (read-only) or "private" (read-write).
* **Variable Binding:** A key-value pair configuration used to report data (e.g., `SiteName: PR-Branch`).
* **Granular Trap:** A trap message sent with a unique OID, allowing the manager to identify the specific event without sending redundant data.
* **Verbose Trap:** A trap message that contains the full payload of information regarding an alert, consuming more bandwidth and server resources.
* **Integrity:** Ensuring data has not been altered during transit (achieved via hashing in SNMPv3).
* **Authentication:** Validating the source of the message to ensure it originated from a trusted device.
* **Confidentiality:** Ensuring data privacy through encryption.

## 🔄 How It Works (Processes)
The SNMP manager interacts with agents using three primary message types:

1. **Set Request:** The manager sends a request to an agent to change the value of a variable. The agent updates the variable and responds with the new value.
2. **Get Request:** The manager requests the value of one or more variables from the agent.
3. **Trap Message:** An asynchronous notification sent from an agent to the manager *without* being requested. These are used for real-time alerts regarding events like uptime, configuration changes, or link failures.

## 📊 Comparisons & Key Differences

| Feature| SNMPv1 / v2| SNMPv3|
| :---| :---| :---|
| **Security**| Low (Plain-text)| High (Encrypted)|
| **Authentication**| Community Strings| Validates Source|
| **Integrity**| None| Hashing|
| **Confidentiality**| None| DES/3DES/AES|
| **Access Control**| Basic| Group-based authorization|

## ⚠️ Exam Tips & Important Notes
* **Security Risk:** SNMPv1 and v2 are considered insecure because community strings are sent in plain text. Always prefer SNMPv3.
* **Default Strings:** Never leave default community strings ("public"/"private") enabled on production devices.
* **Bandwidth Efficiency:** Granular traps are more bandwidth-efficient than verbose traps because they only send the OID changes rather than the entire data set.
* **Firmware Dependency:** You can only use advanced encryption (like AES) if the device's firmware supports it.

## ❓ Questions to Review
1. What is the primary difference between a "Get" request and a "Trap" message?
2. Why is SNMPv1 considered a security risk compared to SNMPv3?
3. What is the purpose of an OID within the MIB?
4. How does SNMPv3 achieve confidentiality?
5. What are the two types of trap encoding methods, and which one is more bandwidth-efficient?

## 🔗 Related Topics
* [[Network Monitoring]]
* [[Network Security]]
* [[Encryption Standards]]
