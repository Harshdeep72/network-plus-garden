# 009 Encapsulation and Decapsulation

**Module/Section:**
**Video Length:**

---

![[009 Encapsulation and Decapsulation.mp4]]

## 📖 Core Concept
- encapsulation is the process of putting headers( and trailers ) around some data. ( if we move down the OSI layer from 7 -1 its encapsulation)
- Protocol Data Unit(PDU) is a single unit of information transmitted within the computer network . ( L7 PDU is layer 7 PDU ) ( but there are special like this :![[Pasted image 20260511155404.png]]![[Pasted image 20260511155428.png]])
- Above images states if we use TCP we call them segments but if we use UDP then we call them Datagrams
- decapsulation


- TCP HEADERS (20 bytes) includes :
	- source Port , Destination Port
	- Sequencce number
	- Acknowledgement Number
	- Offset , reserved, TCP Flags , Window
	- Checksum , urgent Pointer
	- mTCP ( Optional)
- 3 way Handshake
- ![[Pasted image 20260511170853.png]]
- There are several packet that go back and forth between client and Server:
- SYN , ACK , FIN , RST , PUSH , URGENT
- SYN used to synchronization of connection during the handshake
- ACK is acknowledgement used to ensure that all packets were recieved.
- FIN is finished packet sued to tear down the virtual connections created using 3 way handshake and SYN flag. always appear when last packet is transmittied and then host is ready to close the connection.
- RST is reset used when a client or server receives a packet that it was not expecting during the current connection.
- PUSH



- A Ethernet Header contains :
	- Destination MAC Address
	- Source MAC address
	- EtherType
	- VLAN tag (optional)
- MAC address : physical address that is used to Identify a network card on a local area network
- A frame being sent at Layer 2 will also contain a payload
- if we use VLANs its 42 bytes and 46 bytes with No VLANs

## 🛠️ Hardware & Devices
-

## 📜 Protocols & Standards
-

## 🔑 Key Terminology
- As data moves from Layer 7 to Layer 1 it undergoes encapsulation.
- Segment (L4 PDU , TCP HEADER ) : We add our source and destination ports.
- Packet ( L3 PDU , IP header ) : We add our source and destination IP addresses.
- Frame ( L2 PDU. Ethernet Header) : we add our sources and destination MAC addresses.
- Bits (L1 Header) : we are transmitting L2 frames as a series of 1's and 0's.

## 🔄 How It Works (Processes)
-

## ❓ Questions to Review
-

## 🔗 Related Topics
- [[Networking]]
