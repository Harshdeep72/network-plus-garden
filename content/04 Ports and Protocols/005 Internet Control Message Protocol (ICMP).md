# 005 Internet Control Message Protocol (ICMP)

**Module/Section:** 04 Ports and Protocols
**Tags:** #icmp #protocols #network-layer #troubleshooting #security #dos #ddos #ping #traceroute #🌱seedling

---

![[005 Internet Control Message Protocol (ICMP).mp4]]

## 📖 Core Concept
The [[Internet Control Message Protocol (ICMP)]] is an integral part of the [[Internet Protocol Suite]], which is a set of networking protocols used on the internet. Unlike [[Transmission Control Protocol (TCP)]] and [[User Datagram Protocol (UDP)]], ICMP is not used for sending user data between two different systems. Instead, ICMP is a [[network layer protocol]] primarily used for:
* Diagnosing network communication issues.
* Providing hosts with information about network problems.
* Error reporting and testing.

ICMP operates at the [[network layer]] of the [[OSI model]] and is encapsulated within [[IP (Internet Protocol)]] packets. It is designed for speed and simplicity, not for data integrity or security, meaning it lacks reliability mechanisms found in TCP (e.g., no guarantee of message delivery, no ordering of data, no error correction).

## 🛠️ Hardware & Devices
* **Routers**: Network devices that forward packets between different networks. Mentioned in the context of being unable to forward packets due to buffer being filled up, and as a device where network administrators might block ICMP traffic.
* **Firewalls**: Network security devices that monitor and control incoming and outgoing network traffic based on predetermined security rules. Mentioned as a common place where network administrators block ICMP traffic.
* **Target Machine/System**: Any host or computer on a network that is the recipient of network communication or attacks.
* **Compromised Computers (Botnets)**: Computers that have been infected with malicious software and are controlled by an attacker, used to launch [[Distributed Denial of Service (DDoS)]] attacks.

## 📜 Protocols & Standards
* **Internet Control Message Protocol (ICMP)**: A network layer protocol used for diagnostic and error-reporting functions.
 * **Purpose**: Primarily for diagnosing network communication issues and providing hosts with information about network problems. Not for sending user data.
 * **OSI Layer**: Operates at the [[network layer]].
 * **Encapsulation**: Encapsulated within [[IP (Internet Protocol)]] packets.
 * **Messages**: Used for various purposes:
 * Indicating when a service or host is unreachable.
 * Notifying when a packet's [[Time To Live (TTL)]] has expired.
 * Reporting when a router cannot forward packets due to its buffer being filled up.
 * **Structure**: Simple structure, each message starts with a header:
 * **Type**: A one-byte long field indicating the type of ICMP message being transmitted (e.g., Echo Request, Echo Reply).
 * **Code**: A one-byte long field providing additional context about the message type.
 * **Checksum**: A two-byte long field used for error checking the message header and data.
 * **Data Section**: After the header, the ICMP message contains different data based on the type and code.
 * For Echo Request/Reply: Includes an identifier and a sequence number to match replies with requests, and optional data.
 * **Reliability**: Does NOT have reliability mechanisms like TCP (no guaranteed delivery, no data ordering, no error correction). Designed for speed and simplicity.
* **Internet Protocol Suite**: A set of networking protocols used on the internet, of which ICMP is an integral part. Also known as [[TCP/IP Model]].
* **Internet Protocol (IP)**: A network layer protocol that defines how data is addressed and routed between networks. ICMP packets are encapsulated within IP packets.
 * **Maximum IP Packet Size**: Traditionally limited to 65,535 bytes (including headers). This limit was exploited in the [[Ping of Death]] attack.
* **Transmission Control Protocol (TCP)**: A transport layer protocol that provides reliable, ordered, and error-checked delivery of a stream of octets between applications running on hosts communicating over an IP network. ICMP is contrasted with TCP for its lack of reliability.
* **User Datagram Protocol (UDP)**: A transport layer protocol that provides a connectionless, unreliable service for sending datagrams between applications. ICMP is contrasted with UDP for its purpose (diagnostics vs. data transfer).

## 🔑 Key Terminology
* **Internet Control Message Protocol (ICMP)**: A network layer protocol used for diagnostic and error-reporting functions, integral to the Internet Protocol Suite.
* **Internet Protocol Suite**: A comprehensive set of communication protocols used for the Internet and similar computer networks, often referred to as the TCP/IP model.
* **Transmission Control Protocol (TCP)**: A core protocol of the Internet Protocol Suite that provides reliable, ordered, and error-checked delivery of data between applications.
* **User Datagram Protocol (UDP)**: A core protocol of the Internet Protocol Suite that provides a connectionless, unreliable service for sending datagrams.
* **Network Layer Protocol**: A protocol that operates at the network layer of the OSI model, responsible for logical addressing and routing of packets across networks.
* **OSI Model (Open Systems Interconnection Model)**: A conceptual framework used to describe the functions of a networking system in seven layers.
* **Encapsulation**: The process of adding protocol header information to data as it moves down the layers of the OSI model. ICMP is encapsulated within IP packets.
* **Error Reporting**: The function of informing systems about issues encountered during network communication.
* **PING command utility**: A command-line tool that uses ICMP to test the reachability of a host on an IP network and measure the round-trip time for messages sent from the originating host to a destination computer.
* **ICMP Echo Request**: An ICMP message sent by the PING utility to test the reachability of a host.
* **ICMP Echo Reply**: An ICMP message sent by a receiving host in response to an Echo Request, indicating it is available and functioning.
* **Latency**: The time delay between the cause and effect of some physical change in the system being observed; in networking, it refers to the roundtrip time for a packet to travel to a destination and back.
* **ICMP Message Header**: The initial part of an ICMP message containing fields for Type, Code, and Checksum.
* **Type (ICMP Header Field)**: A one-byte field in the ICMP header that indicates the general category of the ICMP message (e.g., echo request, destination unreachable).
* **Code (ICMP Header Field)**: A one-byte field in the ICMP header that provides additional context or specifics about the message type.
* **Checksum (ICMP Header Field)**: A two-byte field in the ICMP header used for error checking the message header and data.
* **Identifier (ICMP Data Field)**: A field in the data section of ICMP Echo Request/Reply messages used to match replies with requests.
* **Sequence Number (ICMP Data Field)**: A field in the data section of ICMP Echo Request/Reply messages used to match replies with requests and track the order of packets.
* **ICMP Flood Attack**: A type of [[Denial of Service (DoS)]] attack that involves overwhelming a target machine with a large number of ICMP Echo Request (Ping) packets, consuming its resources.
* **Ping Packet**: Another term for an [[ICMP Echo Request]] packet.
* **Denial of Service (DoS)**: An attack designed to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet.
* **Distributed Denial of Service (DDoS)**: A DoS attack where the attacker uses a network of compromised computers (botnets) to generate a significant amount of traffic, making the attack more powerful, harder to defend against, and more difficult to trace.
* **Botnets**: A network of private computers infected with malicious software and controlled as a group without the owners' knowledge, e.g., to send spam messages or launch DDoS attacks.
* **Ping of Death**: An older type of [[Denial of Service (DoS)]] attack that exploited a vulnerability in unpatched systems by sending malformed or oversized ICMP Echo Request packets (larger than 65,535 bytes).
* **Malformed/Oversized Packets**: Network packets that exceed standard size limits or have incorrect formatting, which can cause issues for systems attempting to process them.
* **Buffer Overflows**: A condition where a program attempts to write data to a buffer beyond its allocated capacity, potentially overwriting adjacent memory locations and leading to system crashes or unpredictable behavior.
* **Boundary Firewalls**: Firewalls positioned at the perimeter of a network, controlling traffic between the internal network and external networks (like the internet).
* **Traceroute (Tracert/Traceroute utility)**: A network diagnostic tool that displays the path (route) and measures transit delays of packets across an Internet Protocol (IP) network. It uses ICMP messages.
* **Host Unreachable Error**: An ICMP message indicating that the destination host cannot be reached.

## 🔄 How It Works (Processes)
1. **ICMP for Network Diagnostics (e.g., PING utility)**:
 * A user initiates a [[PING command utility]] from a source host, specifying a target IP address.
 * The source host sends an [[ICMP Echo Request]] message to the target host.
 * The ICMP Echo Request message is encapsulated within an [[IP (Internet Protocol)]] packet.
 * If the target host is available and functioning properly, it receives the IP packet containing the ICMP Echo Request.
 * The target host processes the request and sends an [[ICMP Echo Reply]] message back to the source host.
 * The ICMP Echo Reply message is also encapsulated within an IP packet.
 * The source host receives the ICMP Echo Reply.
 * The PING utility calculates the [[latency]] (roundtrip time) and reports the success or failure of the communication, indicating network connectivity.

2. **ICMP Message Structure**:
 * Every ICMP message begins with a header.
 * The header consists of three fields:
 * **Type** (1 byte): Specifies the general category of the message.
 * **Code** (1 byte): Provides specific context for the message type.
 * **Checksum** (2 bytes): Used for error checking the header and data.
 * Following the header, the message contains a data section.
 * The content of the data section varies based on the message's Type and Code.
 * For [[ICMP Echo Request]] and [[ICMP Echo Reply]], the data section includes an identifier and a sequence number to match requests with replies, along with optional data.

3. **ICMP Flood Attack**:
 * An attacker sends a very large number of [[ICMP Echo Request]] packets (ping packets) to a target machine.
 * These packets are sent as fast as possible, often without waiting for replies.
 * The target system's resources (e.g., bandwidth, processing power) become overwhelmed trying to process the incoming requests and generate replies.
 * This consumption of resources prevents the target system from handling legitimate requests from actual users.
 * The result is a [[Denial of Service (DoS)]] condition, where legitimate users cannot access services.
 * For modern effectiveness, this attack is often amplified into a [[Distributed Denial of Service (DDoS)]] attack using [[botnets]].

4. **Ping of Death Attack (Historical)**:
 * An attacker crafts an [[ICMP Echo Request]] packet that is larger than the traditional maximum size of an [[IP (Internet Protocol)]] packet (65,535 bytes).
 * This malformed/oversized packet is sent to a vulnerable, unpatched target system.
 * When the target system attempts to reassemble these oversized packets, it can lead to:
 * [[Buffer Overflows]]
 * System crashes
 * Other unpredictable behavior
 * This typically results in a [[Denial of Service (DoS)]] condition on the victimized system.
 * *Note*: Most modern operating systems and network equipment are no longer vulnerable due to security patches.

## 📊 Comparisons & Key Differences
* **ICMP vs. TCP/UDP**:
 * **ICMP**:
 * **Purpose**: Network diagnostics and error reporting.
 * **Data Transfer**: NOT used for sending user data.
 * **Reliability**: No reliability mechanisms (no guaranteed delivery, no ordering, no error correction).
 * **Design**: Designed for speed and simplicity.
 * **OSI Layer**: Network layer.
 * **TCP (Transmission Control Protocol)**:
 * **Purpose**: Reliable, ordered, and error-checked delivery of user data.
 * **Data Transfer**: Used for sending user data.
 * **Reliability**: Highly reliable (acknowledgments, retransmissions, flow control, congestion control).
 * **Design**: Designed for data integrity and reliability.
 * **OSI Layer**: Transport layer.
 * **UDP (User Datagram Protocol)**:
 * **Purpose**: Connectionless, unreliable delivery of user data.
 * **Data Transfer**: Used for sending user data.
 * **Reliability**: No reliability mechanisms (best-effort delivery).
 * **Design**: Designed for speed and low overhead, suitable for real-time applications.
 * **OSI Layer**: Transport layer.

* **Denial of Service (DoS) vs. Distributed Denial of Service (DDoS)**:
 * **DoS (Denial of Service)**:
 * **Source**: Typically originates from a single attacking machine.
 * **Impact**: Aims to overwhelm a target's resources, making it unavailable.
 * **Defense**: Easier to block the single source IP address.
 * **DDoS (Distributed Denial of Service)**:
 * **Source**: Originates from multiple compromised computers (a [[botnets]]).
 * **Impact**: More powerful, harder to defend against, and more difficult to trace due to the distributed nature and sheer volume of traffic.
 * **Defense**: Requires more sophisticated mitigation strategies due to numerous attacking sources.

## ⚠️ Exam Tips & Important Notes
* **ICMP's Primary Role**: Remember that ICMP is a network diagnostic and error reporting tool, NOT a transport protocol like TCP or UDP for transmitting regular user data. This is a common point of confusion.
* **OSI Layer**: ICMP operates at the [[network layer]] and is encapsulated within [[IP (Internet Protocol)]] packets.
* **Key Utilities**: Be familiar with [[PING command utility]] and [[Traceroute (Tracert/Traceroute utility)]] as tools that rely on ICMP for network troubleshooting.
* **Vulnerabilities**: Understand the two main ICMP-based attacks discussed:
 * [[ICMP Flood Attack]] (DoS/DDoS)
 * [[Ping of Death]] (historical, but the concept is important).
* **Security vs. Troubleshooting Trade-off**: Blocking ICMP traffic at [[boundary firewalls]] and [[routers]] can enhance network security by mitigating ICMP-based attacks, but it significantly hinders network troubleshooting efforts (e.g., PING and Traceroute won't work).
* **Ping of Death Status**: While the [[Ping of Death]] is largely mitigated in modern systems, it's a term you might still encounter, so understand its historical context and mechanism.

## ❓ Questions to Review
1. What is the primary purpose of the Internet Control Message Protocol (ICMP), and how does it differ from TCP and UDP?
2. At which layer of the OSI model does ICMP operate, and how is it transported across a network?
3. Describe the three main fields found in an ICMP message header.
4. Explain how the PING utility uses ICMP messages to test network connectivity and measure latency.
5. What is an ICMP Flood Attack, and how does it lead to a Denial of Service (DoS) condition? How does a Distributed Denial of Service (DDoS) attack relate to an ICMP Flood?
6. Describe the Ping of Death attack, including the vulnerability it exploited and its typical outcome. Why is this attack less effective against modern systems?
7. What is the trade-off network administrators face when deciding whether to block ICMP traffic at their firewalls?
8. Why does ICMP lack the reliability mechanisms found in TCP?

## 🔗 Related Topics
* [[Internet Protocol Suite]]
* [[Transmission Control Protocol (TCP)]]
* [[User Datagram Protocol (UDP)]]
* [[OSI model]]
* [[Network layer]]
* [[IP (Internet Protocol)]]
* [[PING command utility]]
* [[Traceroute (Tracert/Traceroute utility)]]
* [[Denial of Service (DoS)]]
* [[Distributed Denial of Service (DDoS)]]
* [[Botnets]]
* [[Firewalls]]
* [[Routers]]
* [[Time To Live (TTL)]]
