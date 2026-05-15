# 005 Layer 4 (Transport Layer)

**Module/Section:** 03 OSI Model
**Tags:** #osi-model #transport-layer #tcp #udp #🌱seedling

---

![[005 Layer 4 (Transport Layer).mp4]]

## 📖 Core Concept
The **Transport Layer (Layer 4)** serves as the critical dividing line between the "upper layers" (Session, Presentation, Application) and the "lower layers" (Physical, Data Link, Network) of the OSI model. Its primary responsibility is the end-to-end delivery of data.

* **Data Unit:** The data unit at this layer is called a **Segment** (when using TCP) or a **Datagram** (when using UDP).
* **Functionality:** It handles reliability, flow control, and error correction. It ensures that data is delivered to the correct application on the destination device by utilizing port numbers.
* **Key Mechanisms:** The layer manages traffic flow through **Windowing** (adjusting transmission rates) and **Buffering** (storing data during congestion).

## 🛠️ Hardware & Devices
* **Firewalls:** Operate at Layer 4 by filtering traffic based on specific ports and protocols (e.g., blocking TCP Port 80).
* **Load Balancers:** Distribute network traffic across multiple servers; they often operate at Layer 4 to manage connections.
* **WAN Accelerators:** Devices that compress IP packets and optimize segment transmission to improve speed across Wide Area Networks.
* **Routers:** While primarily Layer 3 devices, they utilize internal memory (buffers) to manage Layer 4 segments during network congestion.

## 📜 Protocols & Standards
* **TCP (Transmission Control Protocol):** A connection-oriented, reliable protocol.
 * Uses a **three-way handshake** (SYN, SYN-ACK, ACK) to establish a connection.
 * Requires acknowledgements for every segment; performs retransmissions if segments are lost.
* **UDP (User Datagram Protocol):** A connectionless, unreliable protocol.
 * "Fire-and-forget" method; no handshake, no acknowledgements, no sequencing.
 * Lower overhead, making it ideal for real-time streaming (audio/video) where minor data loss is acceptable.

## 🔑 Key Terminology
* **Segment**: The PDU (Protocol Data Unit) used by TCP at the Transport Layer.
* **Datagram**: The PDU used by UDP at the Transport Layer.
* **Connection-Oriented**: A communication method that requires a formal connection establishment (handshake) before data transfer begins.
* **Connectionless**: A communication method where data is sent without establishing a prior connection or verifying receipt.
* **Three-Way Handshake**: The process used by TCP to establish a connection:
 1. **SYN**: Client sends a synchronization packet.
 2. **SYN-ACK**: Server responds with a synchronization acknowledgement.
 3. **ACK**: Client sends a final acknowledgement.
* **Windowing**: A flow control mechanism where the sender and receiver dynamically adjust the amount of data sent in each segment based on network conditions (retransmissions).
* **Buffering**: The process of storing incoming data in memory (on a router or device) when the incoming data rate exceeds the outgoing transmission capacity.
* **Sequencing**: The process of numbering segments so they can be reassembled in the correct order at the destination, even if they arrive out of order.

## 🔄 How It Works (Processes)
1. **TCP Communication**:
 * Establishment: Three-way handshake.
 * Transmission: Data is sent in segments.
 * Verification: Receiver sends acknowledgements (ACKs) for received segments.
 * Error Handling: If an ACK is not received, the sender retransmits the missing segment.
2. **UDP Communication**:
 * Data is sent as datagrams immediately.
 * No verification of receipt; if a datagram is dropped, it is lost forever.
3. **Windowing Process**:
 * If retransmissions occur, the "window" closes (less data sent per segment).
 * If transmission is successful, the "window" opens (more data sent per segment) to maximize throughput.
4. **Buffering Process**:
 * Router receives data from multiple sources.
 * If the output interface is slower than the combined input, data is held in a memory buffer.
 * Once the interface is free, the buffer is cleared. If the buffer overflows, data is dropped.

## 📊 Comparisons & Key Differences

| Feature| TCP| UDP|
| :---| :---| :---|
| **Reliability**| Reliable (Guaranteed delivery)| Unreliable (Best effort)|
| **Connection**| Connection-oriented| Connectionless|
| **Handshake**| Three-way handshake| None|
| **Sequencing**| Yes| No|
| **Flow Control**| Yes (Windowing)| No|
| **Overhead**| High| Low|
| **Use Case**| Banking, Web, E-commerce| Audio/Video Streaming|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip:** If you see "Segment," think TCP. If you see "Datagram," think UDP. Both are Layer 4.
* **Exam Tip:** Remember the three-way handshake sequence: SYN -> SYN-ACK -> ACK.
* **Concept Note:** Windowing is essentially an adaptive speed control mechanism. Think of it like a conversation: if the listener keeps asking you to repeat yourself, you slow down (close the window). If they understand everything, you talk faster (open the window).
* **Real-world Context:** Buffering is why video streaming sometimes "pauses" to load—the device is filling its buffer to ensure smooth playback despite network jitter.

## ❓ Questions to Review
1. What is the primary difference between a segment and a datagram?
2. Why does UDP perform better than TCP for real-time video streaming?
3. Describe the steps of the TCP three-way handshake.
4. What happens to the "window" size when a network experiences high packet loss?
5. At which layer of the OSI model do firewalls operate when they filter traffic based on port numbers?

## 🔗 Related Topics
* [[Layer 3 (Network Layer)]]
* [[Layer 5 (Session Layer)]]
* [[TCP/IP Model]]
* [[Network Congestion]]
