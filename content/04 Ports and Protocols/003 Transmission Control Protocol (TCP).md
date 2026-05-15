# 003 Transmission Control Protocol (TCP)

**Module/Section:** 04 Ports and Protocols
**Tags:** #TCP #TransmissionControlProtocol #OSIModel #TransportLayer #ThreeWayHandshake #SYN #ACK #SYN-ACK #ErrorChecking #FlowControl #Windowing #Ports #HTTPS #SSL #TLS #ReliableTransmission #🌱seedling

---

![[003 Transmission Control Protocol (TCP).mp4]]

## 📖 Core Concept
[[Transmission Control Protocol (TCP)]] is a fundamental protocol within the [[Internet Protocol Suite]] that governs the exchange of data over the internet. Its primary function is to ensure the **reliable delivery of data packets** across a network. This reliability is achieved by guaranteeing that all data packets reach their intended destination, in the correct order, and without corruption. TCP operates at the [[Transport Layer]] of the [[OSI Model]]. It is responsible for establishing and maintaining connections between a client and a server, breaking down larger messages into smaller packets for efficient transfer, sending them over the network, and reassembling them at the destination. Key features include a [[Three-Way Handshake]] for connection establishment, [[Error Checking]] for data integrity, and [[Flow Control]] to manage data transmission rates. TCP also utilizes [[Ports]] to differentiate between various services or applications running on the same physical computer.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
* **[[Transmission Control Protocol (TCP)]]**:
 * A fundamental protocol within the [[Internet Protocol Suite]].
 * Consists of a set of rules governing data exchange over the internet.
 * Widely used due to its reliability in delivering data packets.
 * Ensures data packets reach their destination in the correct order and without corruption.
 * Achieves reliability through [[Error Checking]], [[Data Sequencing]], and [[Acknowledgement]].
 * Operates at the [[Transport Layer]] of the [[OSI Model]].
 * Responsible for reliable transmission of data between a client and a server.
 * Breaks down larger messages into smaller packets (packetization).
 * Reassembles packets at the destination.
 * Uses a [[Three-Way Handshake]] to establish connections.
 * Employs [[Error Checking]] and [[Flow Control]] mechanisms.
 * Uses [[Sequence Numbers]] and [[Acknowledgement Messages]] for data integrity and order.
 * Utilizes [[Ports]] as numerical identifiers for services/applications.
 * Each TCP connection is identified by a pair of endpoint addresses (IP address + port number).
* **[[Hypertext Transfer Protocol Secure (HTTPS)]]**:
 * A secure version of HTTP.
 * Standard port: **443**.
 * Uses [[SSL]] or [[TLS]] for encryption of data sent over this port.
* **[[Secure Sockets Layer (SSL)]]**:
 * A cryptographic protocol designed to provide communication security over a computer network.
 * Used by HTTPS to encrypt data.
* **[[Transport Layer Security (TLS)]]**:
 * The successor to SSL.
 * A cryptographic protocol designed to provide communication security over a computer network.
 * Used by HTTPS to encrypt data.

## 🔑 Key Terminology
* **[[Transmission Control Protocol (TCP)]]**: A core protocol of the Internet Protocol Suite that provides reliable, ordered, and error-checked delivery of a stream of bytes between applications running on hosts communicating over an IP network.
* **[[Internet Protocol Suite]]**: A conceptual model and set of communications protocols used on the Internet and similar computer networks, often referred to as TCP/IP.
* **[[Reliability]]**: In networking, the assurance that data packets will reach their intended destination in the correct order and without corruption.
* **[[Error Checking]]**: A mechanism used by TCP to detect if data packets have been lost or corrupted during transmission.
* **[[Data Sequencing]]**: The process of assigning sequence numbers to data packets to ensure they can be reassembled in the correct order at the destination.
* **[[Acknowledgement (ACK)]]**: A message sent by the receiver back to the sender to confirm successful receipt of data packets.
* **[[OSI Model]]**: **Open Systems Interconnection Model**: A conceptual framework that standardizes the functions of a telecommunication or computing system into seven abstraction layers.
* **[[Transport Layer]]**: The fourth layer of the OSI model, responsible for end-to-end communication between applications, including segmenting data, establishing connections, and ensuring reliable data transfer (where TCP operates).
* **[[Packetization]]**: The process of breaking down larger messages or data streams into smaller, manageable units called packets for transmission over a network.
* **[[Three-Way Handshake]]**: A three-step process used by TCP to establish a reliable connection between a client and a server before data transmission begins.
* **[[SYN (Synchronize)]]**: The first step in the TCP three-way handshake, where the client sends a SYN packet to the server to initiate a communication session.
* **[[SYN-ACK (Synchronize-Acknowledge)]]**: The second step in the TCP three-way handshake, where the server responds to the client's SYN packet with a SYN-ACK packet, acknowledging receipt and indicating its willingness to establish a session.
* **[[ACK (Acknowledge)]]**: The third step in the TCP three-way handshake, where the client sends an ACK packet back to the server to confirm the establishment of the connection. Also used generally to acknowledge receipt of data.
* **[[Flow Control]]**: A mechanism used by TCP to prevent a sender from overwhelming a receiver with too much data at once, ensuring the receiver can process the incoming data.
* **[[Windowing]]**: A flow control mechanism used by TCP that allows the receiver to specify the amount of data (the "window size") it can handle at one time. This window can be dynamically adjusted (widened or narrowed) based on network conditions.
* **[[Port]]**: A numerical identifier within the TCP/IP suite and other networking protocols that helps distinguish between different services or applications running on the same physical computer or server.
* **[[Endpoint Address]]**: A combination of an IP address and a port number that uniquely identifies one end of a TCP connection.
* **[[Source IP]]**: The IP address of the sending device.
* **[[Destination IP]]**: The IP address of the receiving device.
* **[[Source Port]]**: The port number used by the sending application.
* **[[Destination Port]]**: The port number used by the receiving application or service.

## 🔄 How It Works (Processes)
1. **Reliable Data Transmission (General TCP Process)**:
 * TCP breaks down larger messages into smaller units called **packets**.
 * These packets are sent over the network.
 * At the destination, TCP reassembles the packets into the original message.
 * It uses [[Error Checking]], [[Data Sequencing]], and [[Acknowledgement]] to ensure all data arrives correctly and in order.
 * If a packet is lost or corrupted, TCP detects this and requests retransmission from the sender.

2. **[[Three-Way Handshake]] (Connection Establishment)**:
 * **Step 1: SYN (Synchronize)**: The client initiates communication by sending a SYN packet to the server. This packet indicates the client's desire to establish a connection.
 * **Step 2: SYN-ACK (Synchronize-Acknowledge)**: The server receives the SYN packet and responds with a SYN-ACK packet. This acknowledges receipt of the client's SYN and informs the client that the server is willing and able to establish a session.
 * **Step 3: ACK (Acknowledge)**: The client receives the SYN-ACK and sends an ACK packet back to the server. This confirms the establishment of the connection.
 * **Purpose**: This process ensures that both the sender and the receiver are ready for data transmission and that the communication channel is reliable and secure before actual data transfer begins.

3. **[[Error Checking]]**:
 * TCP uses [[Sequence Numbers]] to track the order of packets.
 * It uses [[Acknowledgement Messages]] to confirm successful receipt of packets.
 * If a packet is not acknowledged within a certain timeframe or is found to be corrupted, TCP identifies it as lost or corrupted.
 * The protocol then requires the sender to retransmit the missing or corrupted packet.

4. **[[Flow Control]] (using [[Windowing]])**:
 * TCP employs flow control to prevent the sender from overwhelming the receiver with too much data.
 * This is achieved through a mechanism called **windowing**.
 * The receiver specifies the amount of data (the "window size") it can handle at one time.
 * During a communication session, this window can be dynamically adjusted (widened or narrowed) by the receiver.
 * The adjustment is based on the current network conditions and the receiver's processing capabilities, allowing more or less data to be sent during each transmission.

5. **Port Utilization**:
 * When sending data, TCP uses [[Ports]] as part of its communication process.
 * A port is a numerical identifier.
 * Each TCP connection is uniquely identified by a pair of [[Endpoint Addresses]]:
 * [[Source IP]] and [[Source Port]]
 * [[Destination IP]] and [[Destination Port]]
 * This allows multiple network applications to coexist on the same physical server, with each application or service assigned a unique port number to identify its function.
 * Example: Accessing a secure website (HTTPS) involves the web browser establishing a TCP connection with the server over Port 443.

## 📊 Comparisons & Key Differences
N/A — not covered in this lesson. (Implicitly, TCP is contrasted with UDP in other lessons, but not explicitly in this transcript.)

## ⚠️ Exam Tips & Important Notes
* **Think of TCP, think of the [[Three-Way Handshake]]**: This connection establishment process is crucial for understanding TCP.
* **TCP operates at the [[Transport Layer]] of the [[OSI Model]]**: This is a fundamental point for the exam.
* **TCP ensures reliability**: Remember the mechanisms: [[Packetization]], [[Acknowledgement]], and [[Error Checking]].
* **TCP uses [[Ports]]**: Understand their role in logical differentiation of services on a single physical machine.
* **Key features to remember**: Reliability, [[Three-Way Handshake]], [[Error Checking]], [[Flow Control]] (Windowing), and [[Ports]].

## ❓ Questions to Review
1. What is the primary purpose of the [[Transmission Control Protocol (TCP)]] in network communication?
2. At which layer of the [[OSI Model]] does [[TCP]] operate?
3. Describe the three steps involved in the [[Three-Way Handshake]] and explain the purpose of each step.
4. How does [[TCP]] ensure the reliable delivery of data packets, including handling lost or corrupted packets?
5. Explain the concept of [[Flow Control]] in [[TCP]] and specifically describe how [[Windowing]] contributes to it.
6. What is a [[Port]] in the context of [[TCP]] communication, and why are ports important?
7. Provide an example of a common application protocol that uses [[TCP]] and its associated standard port number.
8. What are the two main cryptographic protocols mentioned that are used with [[HTTPS]] over [[Port 443]]?

## 🔗 Related Topics
* [[Internet Protocol Suite]]
* [[OSI Model]]
* [[Transport Layer]]
* [[User Datagram Protocol (UDP)]] (implied contrast)
* [[IP Addressing]]
* [[Ports]]
* [[Hypertext Transfer Protocol Secure (HTTPS)]]
* [[Secure Sockets Layer (SSL)]]
* [[Transport Layer Security (TLS)]]
