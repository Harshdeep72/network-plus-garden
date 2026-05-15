# 010 Understanding the OSI Model

**Module/Section:** 03 OSI Model
**Tags:** #osi-model #wireshark #packet-analysis #🌱seedling

---

![[010 Understanding the OSI Model.mp4]]

## 📖 Core Concept
The instructor uses **Wireshark** to demonstrate how the **OSI (Open Systems Interconnection) Model** functions in real-world network traffic. By capturing packets, one can visualize how data is encapsulated as it moves through the layers of the network stack.

* **Encapsulation Visualization:** Every packet capture shows the "stacking" of protocols. A single packet contains headers for Layer 2 (Data Link), Layer 3 (Network), Layer 4 (Transport), and Layer 7 (Application).
* **Packet Analysis:** By inspecting these captures, a technician can identify where a communication breakdown occurs (e.g., a Layer 2 MAC address issue vs. a Layer 7 application error).
* **Stream Reconstruction:** Wireshark allows the user to "follow the stream," reconstructing the raw data into human-readable formats like HTML (for web traffic) or command-line sessions (for Telnet).

## 🛠️ Hardware & Devices
* **Network Interface Card (NIC):** Implicitly involved as the source/destination for packet captures.
* **Server:** The remote host providing services (HTTP, FTP, Telnet).
* **Client/Host:** The local machine initiating the requests.

## 📜 Protocols & Standards
* **Ethernet:** A Layer 2 protocol used for local network communication.
* **IPv4 (Internet Protocol version 4):** A Layer 3 protocol responsible for logical addressing (source and destination IPs).
* **TCP (Transmission Control Protocol):** A Layer 4 protocol used for reliable, connection-oriented communication.
* **HTTP (Hypertext Transfer Protocol):** A Layer 7 protocol used for web traffic (Port 80 mentioned).
* **FTP (File Transfer Protocol):** A Layer 7 protocol used for file transfers.
* **Telnet:** A Layer 7 protocol used for remote terminal access.

## 🔑 Key Terminology
* **Wireshark**: A packet analyzer tool used to capture and inspect network traffic.
* **Packet Analyzer**: A tool that intercepts and logs traffic passing over a digital network.
* **Frame**: The protocol data unit (PDU) at Layer 2 of the OSI model; contains MAC addresses.
* **MAC Address**: A unique hardware identifier for a network interface, operating at Layer 2.
* **Encapsulation**: The process of wrapping data from a higher layer with headers from lower layers (e.g., adding an IP header to a TCP segment).
* **Three-Way Handshake**: The process used in TCP to establish a connection (SYN, SYN-ACK, ACK).
* **PCAP (Packet Capture)**: A file format used to store captured network traffic data.
* **Stream**: A sequence of packets representing a single session between two hosts.

## 🔄 How It Works (Processes)
1. **Capture**: Wireshark records traffic passing through the network interface.
2. **Layer Inspection**:
 * **Layer 2 (Data Link)**: Wireshark displays the Frame, Ethernet type, and Source/Destination MAC addresses.
 * **Layer 3 (Network)**: Wireshark displays the IPv4 header, including Source/Destination IP addresses.
 * **Layer 4 (Transport)**: Wireshark identifies the protocol (TCP/UDP) and port numbers.
 * **Layer 7 (Application)**: Wireshark interprets the payload (e.g., HTTP GET requests, Telnet commands, or file transfer data).
3. **Stream Following**: The tool reassembles individual packets into a continuous conversation, allowing the user to view the full exchange between client and server (e.g., seeing exactly what a user typed in a Telnet session).

## 📊 Comparisons & Key Differences
| Layer| PDU/Data Type| Key Identifiers|
| :---| :---| :---|
| **Layer 2**| Frame| MAC Addresses|
| **Layer 3**| Packet| IP Addresses|
| **Layer 4**| Segment| TCP/UDP Ports|
| **Layer 7**| Data| Application Protocol (HTTP, Telnet, etc.)|

* **HTTP vs. FTP vs. Telnet**: HTTP is used for web content (HTML), FTP for file transfers (binary/raw data), and Telnet for remote command-line interaction (clear-text commands).

## ⚠️ Exam Tips & Important Notes
* **Wireshark Usage**: While the *usage* of Wireshark is not on the Network+ exam, you must know that it is a **packet analyzer** and understand its purpose in troubleshooting.
* **Layer Mapping**: Memorize which layer handles which information:
 * MAC addresses = Layer 2.
 * IP addresses = Layer 3.
 * TCP/UDP/Ports = Layer 4.
 * Applications = Layer 7.
* **Security Warning**: Telnet sends data (including usernames and passwords) in clear text, making it highly insecure compared to encrypted alternatives.

## ❓ Questions to Review
1. At which layer of the OSI model would you find MAC addresses?
2. What is the primary purpose of a packet analyzer like Wireshark?
3. In a TCP connection, what are the three steps of the initial handshake?
4. If you are looking at a packet and see an IP address, which OSI layer are you inspecting?
5. Why is Telnet considered a security risk when viewed in a packet analyzer?
6. What is the difference between a Layer 2 frame and a Layer 3 packet?

## 🔗 Related Topics
* [[OSI Model]]
* [[TCP/IP Model]]
* [[Network Troubleshooting]]
* [[Data Encapsulation]]
