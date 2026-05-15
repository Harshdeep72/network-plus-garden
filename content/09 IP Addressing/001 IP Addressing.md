# 001 IP Addressing

**Module/Section:** 09 IP Addressing
**Tags:** #ip-addressing #osi-model #ipv4 #ipv6 #🌱seedling

---

![[001 IP Addressing.mp4]]

## 📖 Core Concept
IP addressing is the fundamental method used to identify devices on a network and facilitate communication between them.

* **Function:** IP addresses act as unique numerical labels for internet-communicating devices. They are essential for routing data between different networks or subnets.
* **OSI Layer:** IP addresses operate at **Layer 3 (Network Layer)** of the OSI model.
* **Analogy:** An IP address functions similarly to a physical mailing address. Just as a house number, street, city, state, and zip code allow the postal service to route a letter from a source to a destination, an IP address allows routers to move data packets across the internet to the correct destination device.
* **Routing Logic:** Similar to the postal service, data routing is hierarchical. Routers look at the "destination" portion of the address to determine if the packet belongs on the local network or if it needs to be forwarded to a regional/central distribution point (gateway) to reach a different network.

## 🛠️ Hardware & Devices
* **Routers:** Layer 3 devices that use IP addresses to forward data between different networks or subnets.
* **Switches:** Layer 2 devices that use **MAC addresses** to forward data within the same local area network (LAN).
* **Laptops/Computers:** End-user devices that require IP addresses to communicate outside of their immediate local network.

## 📜 Protocols & Standards
* **Internet Protocol (IP):** The primary protocol for addressing and routing packets.
 * **IPv4 (Internet Protocol version 4):** Uses a 32-bit address scheme.
 * **IPv6 (Internet Protocol version 6):** Uses a 128-bit address scheme to provide a significantly larger pool of available addresses.
* **CompTIA Network+ Objectives:**
 * **1.4:** Common networking ports, protocols, services, and traffic types.
 * **1.7:** IPv4 network addressing.
 * **1.8:** Evolving use cases for modern network environments.

## 🔑 Key Terminology
* **IP Address (Internet Protocol Address):** A unique numerical label assigned to each device participating in a computer network that uses the Internet Protocol for communication.
* **MAC Address (Media Access Control Address):** A physical address assigned to a network interface controller (NIC) for use as a network address in communications within a network segment (Layer 2).
* **Subnet:** A logical subdivision of an IP network.
* **Dotted Decimal Notation:** The format used to represent IPv4 addresses (e.g., 192.168.1.1), which represents the underlying 32-bit binary value.
* **Unicast:** Communication between a single sender and a single receiver.
* **Multicast:** Communication where data is sent from one source to a specific group of destinations.
* **Broadcast:** Communication where data is sent from one source to all devices on a network segment.
* **Anycast:** (IPv6 specific) Communication where data is routed to the "nearest" or "best" destination among a group of potential receivers.
* **Tunneling:** A method of transporting data packets of one protocol inside another protocol.
* **Dual Stack:** A configuration where a device runs both IPv4 and IPv6 protocol stacks simultaneously.
* **NAT64:** A transition mechanism that allows IPv6-only clients to communicate with IPv4-only servers.

## 🔄 How It Works (Processes)
* **Local Communication:** Devices on the same LAN communicate using Layer 2 (MAC addresses) via switches.
* **Remote Communication:** When data must leave the local network, the device uses the destination IP address. The router examines this address to determine the next hop, similar to how a post office routes mail based on zip codes and regional distribution centers.
* **Address Assignment:** IP addresses can be assigned statically or dynamically (to be covered in future lessons).

## 📊 Comparisons & Key Differences

| Feature| IPv4| IPv6|
| :---| :---| :---|
| **Address Length**| 32-bit| 128-bit|
| **Address Space**| Limited| Virtually unlimited|
| **Data Flows**| Unicast, Multicast, Broadcast| Unicast, Multicast, Anycast|

## ⚠️ Exam Tips & Important Notes
* **Layer Distinction:** Remember that switches use MAC addresses (Layer 2), while routers use IP addresses (Layer 3).
* **Subnetting:** This is a high-priority topic. The instructor emphasizes learning the "long math" way first to understand the logic before using "shortcut" methods.
* **Exam Strategy:** Expect to perform binary-to-decimal and decimal-to-binary conversions on the exam.

## ❓ Questions to Review
1. At which layer of the OSI model do IP addresses function?
2. What is the primary difference between how a switch handles data and how a router handles data?
3. How many bits are in an IPv4 address compared to an IPv6 address?
4. What is the purpose of "Dual Stack" in a network environment?
5. Why is the hierarchical structure of an IP address similar to the postal system?

## 🔗 Related Topics
* [[03 OSI Model/001 OSI Model|OSI Model]]
* [[10 Routing/001 Routing|Routing]]
* [[11 Network Services/001 Network Services|Network Services]]
* [[08 Ethernet Switching/001 Ethernet Switching|Ethernet Switching]]
