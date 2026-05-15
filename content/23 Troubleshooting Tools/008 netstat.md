# 008 netstat

**Module/Section:** 23 Troubleshooting Tools
**Tags:** #netstat #troubleshooting #windows-commands #🌱seedling

---

![[008 netstat.mp4]]

## 📖 Core Concept
**NetStat** (Network Statistics) is a command-line utility used to display detailed information regarding IP-based network connections on a local system. It provides visibility into current sessions, source/destination IP addresses, port numbers, and the state of those connections. It is cross-platform, available on Windows, Linux, UNIX, and OS X.

* **Default Output:** When run without arguments, it displays four columns:
 * **Protocol:** The transport layer protocol (e.g., TCP).
 * **Local Address:** The IP address and port of the local machine.
 * **Foreign Address:** The IP address and port of the remote destination.
 * **State:** The current status of the connection (e.g., Established, Listening).

## 🛠️ Hardware & Devices
* **Network Interface Card (NIC):** The physical or virtual hardware component that connects the computer to the network. In the example provided, the NIC is identified by the IP `192.168.105.3`.

## 📜 Protocols & Standards
* **TCP (Transmission Control Protocol):** A connection-oriented protocol used for reliable data transmission.
* **UDP (User Datagram Protocol):** A connectionless protocol used for faster, low-overhead communication.
* **ICMP (Internet Control Message Protocol):** Used for network diagnostics and error reporting.
* **IPv4 (Internet Protocol version 4):** The standard IP addressing scheme.
* **IPv6 (Internet Protocol version 6):** The next-generation IP addressing scheme.
* **HTTPS (Hypertext Transfer Protocol Secure):** Uses **Port 443** for encrypted web traffic.

## 🔑 Key Terminology
* **NetStat**: A command-line tool used to monitor network connections and statistics.
* **Local Host (Loopback)**: Represented as `127.0.0.1`; used by a system to communicate with itself.
* **Foreign Address**: The remote IP address or hostname that the local system is communicating with.
* **PID (Process Identification Number)**: A unique number assigned by the operating system to each running process.
* **Socket**: A combination of an IP address and a port number.
* **Zombie/Botnet**: A compromised computer controlled remotely by a malicious actor, often used for distributed attacks.
* **Baseline**: A set of performance metrics that represent "normal" operating conditions, used for comparison during troubleshooting.

## 🔄 How It Works (Processes)
1. **Basic Execution:** Running `netstat` shows active connections.
2. **Resolving Hostnames:** NetStat attempts to resolve IP addresses to hostnames (e.g., `diontraining.com`). If resolution fails, the raw IP address is displayed.
3. **Process Identification:**
 * Run `netstat -ano` to see the **PID** associated with each connection.
 * Run `tasklist` to view a list of all running processes and their corresponding PIDs.
 * Cross-reference the PID from `netstat` with the `tasklist` output to identify the specific application (e.g., `GoogleDriveFS.exe`) responsible for the network traffic.
4. **Statistics Analysis:** Running `netstat -s` provides a granular breakdown of packets (delivered, discarded, errors, fragmented) for IPv4, IPv6, TCP, and UDP.

## 📊 Comparisons & Key Differences

| Command| Function|
| :---| :---|
| `netstat`| Displays active TCP connections (simplified).|
| `netstat -a`| Displays all sockets (listening and non-listening) and all protocols (TCP, UDP, ICMP).|
| `netstat -n`| Displays addresses and port numbers in numerical form (no hostname resolution).|
| `netstat -an`| Combines numerical output with all sockets (listening/non-listening).|
| `netstat -ano`| Adds the PID (Owner) to the `netstat -an` output.|
| `netstat -s`| Displays per-protocol statistics (IPv4/6, TCP/UDP, ICMP).|

## ⚠️ Exam Tips & Important Notes
* **Troubleshooting Malware:** If you suspect a system is part of a botnet, use `netstat -ano` to identify which specific process is initiating suspicious outbound connections.
* **Performance Baselines:** The `-s` (statistics) flag is essential for establishing a baseline. Compare current statistics against your baseline to identify anomalies like high packet loss or excessive fragmentation.
* **Well-Known Ports:** NetStat will automatically display well-known port names (e.g., HTTPS for 443) unless the `-n` flag is used.
* **Exam Focus:** Be prepared to identify which flag is needed to achieve a specific output (e.g., "Which command shows the process ID associated with a connection?").

## ❓ Questions to Review
1. What is the primary difference between `netstat` and `netstat -a`?
2. Why would a network administrator use the `-n` flag in a production environment?
3. If you identify an unknown process using `netstat -ano`, what is the next command you should run to identify the application?
4. What does the "State" column in the `netstat` output represent?
5. How can the `netstat -s` command assist in determining if a network connection is healthy?

## 🔗 Related Topics
* [[TCP/IP]]
* [[Port Numbers]]
* [[Malware]]
* [[Command Line Interface]]
