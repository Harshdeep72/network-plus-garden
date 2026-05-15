# 009 Network Time Protocol (NTP)

**Module/Section:** 11 Network Services
**Tags:** #NTP #time-synchronization #protocols #🌱seedling

---

![[009 Network Time Protocol (NTP).mp4]]

## 📖 Core Concept
The **Network Time Protocol (NTP)** is a foundational networking protocol used to synchronize the clocks of computer systems across packet-switched, variable-latency networks (such as TCP/IP networks).

* **Purpose:** Ensures all devices on a network share the same time, which is critical for security protocols, transaction logging, system troubleshooting, and network optimization.
* **Accuracy:**
 * **Internal NTP Server:** Typically accurate to within a few milliseconds of Coordinated Universal Time (UTC).
 * **External NTP Server:** Publicly available servers over the internet, typically accurate to within tens of milliseconds.
* **Security Dependency:** Many security protocols (e.g., Kerberos/Domain authentication) require time synchronization. If a workstation's time drifts by more than ~5 minutes from a Domain Controller, authentication will fail.

## 🛠️ Hardware & Devices
* **Reference Clocks:** High-precision hardware devices used as the source for Stratum 0. Examples include:
 * Atomic clocks
 * GPS (Global Positioning System) receivers
 * Devices generating a "pulse per second" (PPS) trigger.
* **Domain Controllers:** Often act as the central NTP server within an enterprise environment to synchronize all connected workstations.

## 📜 Protocols & Standards
* **NTP (Network Time Protocol):**
 * **Port:** UDP 123.
 * **Current Version:** Version 4 (released 2010).
 * **Age:** Developed in the 1980s.
* **PTP (Precision Time Protocol):** A modern protocol for high-precision synchronization (sub-microsecond range) on LANs.
* **NTS (Network Time Security):** An extension of NTP that adds cryptographic security.
 * **Components:** Uses **TLS** (Transport Layer Security) and **AEAD** (Authenticated Encryption with Associated Data).

## 🔑 Key Terminology
* **NTP (Network Time Protocol):** A protocol used to synchronize computer clocks over a network.
* **UTC (Coordinated Universal Time):** The primary time standard by which the world regulates clocks and time.
* **Stratum:** A hierarchical, semi-layered system used in NTP to categorize time sources based on their distance from the reference clock.
* **Stratum 0:** High-precision timekeeping devices (atomic clocks, GPS). These are not NTP servers themselves but provide the time source.
* **Stratum 1:** Primary time servers directly connected to a Stratum 0 device.
* **Stratum 2:** Servers that synchronize their time with Stratum 1 servers.
* **Stratum 16:** Indicates a device is unsynchronized or unreachable.
* **PTP (Precision Time Protocol):** A protocol designed for extreme accuracy (sub-microsecond) in financial or industrial systems.
* **NTS (Network Time Security):** A security extension for NTP that authenticates the time source and ensures data integrity.
* **AEAD (Authenticated Encryption with Associated Data):** A form of encryption that provides both confidentiality and authenticity.

## 🔄 How It Works (Processes)
### NTP Hierarchy (Stratum System)
1. **Stratum 0:** The source (Atomic clock/GPS).
2. **Stratum 1:** Primary servers connected to Stratum 0. They may peer with other Stratum 1 servers for verification.
3. **Stratum 2:** Servers that query multiple Stratum 1 servers to ensure stability.
4. **Stratum 3+:** Each subsequent layer adds network delay. The hierarchy continues until Stratum 15.
5. **Stratum 16:** The "unsynchronized" state.

### PTP Architecture
* **Primary-Secondary Architecture:** The primary clock sends time messages; secondary clocks adjust based on network delay and transmission time calculations.

### NTS Security Process
* Uses **TLS** to establish a secure connection and **AEAD** to verify that the time packets have not been tampered with (preventing on-path attacks).

## 📊 Comparisons & Key Differences

| Feature| NTP| PTP|
| :---| :---| :---|
| **Accuracy**| Milliseconds| Sub-microsecond|
| **Primary Use**| General networking| Financial/Industrial|
| **Security**| Basic (vulnerable to on-path)| Varies|
| **Hierarchy**| Stratum-based| Primary-Secondary|

## ⚠️ Exam Tips & Important Notes
* **Port Number:** Remember that NTP uses **UDP port 123**.
* **Stratum Limits:** The maximum stratum level is 15; 16 means the device is unsynchronized.
* **Security:** NTP is vulnerable to on-path attacks; NTS was created specifically to address this.
* **Authentication:** If a workstation is off by more than 5 minutes, it will fail to authenticate with a Domain Controller.
* **Hierarchy:** NTP servers are *never* Stratum 0; they must connect *to* a Stratum 0 device.

## ❓ Questions to Review
1. What is the default port and protocol used by NTP?
2. What does a Stratum level of 16 indicate in an NTP hierarchy?
3. Why would an organization choose PTP over standard NTP?
4. How does NTS improve upon standard NTP?
5. What is the maximum number of layers (stratum) allowed in the NTP hierarchy?

## 🔗 Related Topics
* [[UDP]]
* [[TCP/IP]]
* [[TLS]]
* [[Domain Controller]]
