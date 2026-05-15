# 009 tcpdump

**Module/Section:** 23 Troubleshooting Tools
**Tags:** #troubleshooting #tcpdump #packet-analysis #linux #cli #🌱seedling

---

![[009 tcpdump.mp4]]

## 📖 Core Concept
**tcpdump** is a powerful, text-based command-line packet analyzer used by network technicians to capture and display TCP/IP and other network packets transmitted or received by a host.

* **Functionality:** It captures traffic in real-time and displays it on the screen or saves it to a file for later analysis.
* **Platform Availability:** Installed by default on Linux, Unix, and macOS. For Windows, it must be downloaded and installed separately.
* **Promiscuous Mode:** When running `tcpdump`, the network interface card (NIC) is placed into "promiscuous mode," allowing it to capture all traffic passing through the network segment, not just traffic destined for that specific host.
* **Analysis Workflow:** Technicians often use `tcpdump` to capture raw data and then import the resulting files into graphical tools like **Wireshark** for more in-depth inspection.

## 🛠️ Hardware & Devices
* **Network Interface Card (NIC):** The hardware component that must be set to promiscuous mode to capture network traffic.
 * **Interface naming conventions:**
 * `en0`: Common interface name for macOS.
 * `eth0`: Common interface name for Linux.

## 📜 Protocols & Standards
* **TCP/IP:** The primary suite of protocols analyzed by `tcpdump`.
* **IPv4/IPv6:** `tcpdump` identifies these as `IP` and `IP6` respectively in the output.
* **HTTPS (Port 443):** Mentioned as a common protocol observed during traffic analysis.
* **UDP:** A connectionless protocol mentioned during the analysis of beaconing traffic.
* **FTP/HTTP:** Mentioned as protocols that transmit data in the clear, which can be inspected using the `-x` flag.

## 🔑 Key Terminology
* **tcpdump**: A command-line packet analyzer.
* **PCAP (Packet Capture)**: A file format used to store captured network traffic for later analysis.
* **Promiscuous Mode**: A mode of operation for a network interface that allows it to capture all packets on the network segment, regardless of the destination MAC address.
* **Beaconing**: Periodic, repetitive signals sent by a computer (often associated with malware or keep-alive tasks) to a specific destination.
* **Indicator of Compromise (IoC)**: Evidence that a system has been breached or is communicating with malicious actors (e.g., command and control servers).
* **Man Pages**: The built-in manual documentation for Unix/Linux commands, accessed via `man [command]`.

## 🔄 How It Works (Processes)
### Basic Capture
1. **Administrative Access:** Use `sudo` to run `tcpdump` with the necessary permissions to access the network interface.
2. **Command Syntax:** `sudo tcpdump -i [interface]` (e.g., `sudo tcpdump -i en0`).
3. **Stopping Capture:** Use `Ctrl+C` to terminate the live capture.

### Saving and Reading Files
* **Write to File:** Use the `-w` flag to save traffic to a PCAP file: `sudo tcpdump -w [filename].pcap`.
* **Read from File:** Use the `-r` flag to analyze a previously captured file: `sudo tcpdump -r [filename].pcap`.

### Filtering
* **Source Filtering:** `sudo tcpdump src [IP_address]`
* **Port Filtering:** `sudo tcpdump src port [port_number]`
* **Content Inspection:** Use the `-x` flag to display packet contents in both Hex and ASCII formats.

## 📊 Comparisons & Key Differences

| Feature| tcpdump| Wireshark|
| :---| :---| :---|
| **Interface**| Text-based (CLI)| Graphical (GUI)|
| **Environment**| Native to Linux/Unix/macOS| Cross-platform|
| **Primary Use**| Quick capture/filtering| Deep packet inspection|
| **Accessibility**| Requires CLI proficiency| User-friendly interface|

## ⚠️ Exam Tips & Important Notes
* **Exam Focus:** You do not need to be an expert in writing complex `tcpdump` filters for the Network+ exam, but you must understand that it is a **command-line packet capture tool** and how it relates to **Wireshark**.
* **Filtering Strategy:**
 * **Filter during collection:** Best for large enterprise networks to save disk space and reduce noise.
 * **Filter after collection:** Best when you are unsure what you are looking for (e.g., searching for unknown IoCs).
* **Permissions:** Always remember that capturing traffic requires administrative/root privileges (`sudo`).

## ❓ Questions to Review
1. What is the primary difference between `tcpdump` and Wireshark?
2. Which command flag is used to save captured traffic to a file?
3. Why must a technician use `sudo` when running `tcpdump`?
4. What is the purpose of placing a NIC into "promiscuous mode"?
5. If you want to see the contents of a packet in both Hex and ASCII, which flag should you add?
6. When would a technician choose to filter traffic *during* collection rather than *after*?

## 🔗 Related Topics
* [[Wireshark]]
* [[Packet Analysis]]
* [[Network Troubleshooting]]
* [[TCP/IP Model]]
