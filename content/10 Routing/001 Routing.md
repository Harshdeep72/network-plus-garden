# 001 Routing

**Module/Section:** 10 Routing
**Tags:** #routing #osi-model #layer-3 #🌱seedling

---

![[001 Routing.mp4]]

## 📖 Core Concept
The primary function of a **Router** is to route traffic between different subnets, internal networks, and external networks. While switches (Layer 2) operate within a single broadcast domain, routers (Layer 3) act as boundaries that separate broadcast domains, increasing network efficiency and security.

* **Broadcast Domain Separation:** Routers break up large broadcast domains into smaller, more manageable segments.
* **Layer 2 vs. Layer 3:** Routers transition data from Layer 2 (MAC addressing/frames) to Layer 3 (IP addressing/packets) to facilitate communication across different network segments.
* **Data Flow:** When data leaves a local network, the router strips the Layer 2 frame, processes the Layer 3 packet, and re-encapsulates it for the next hop.

## 🛠️ Hardware & Devices
* **Router:** A Layer 3 device responsible for forwarding traffic between different networks or subnets.
* **Switch (Layer 2):** A device that operates at the Data Link layer, connecting devices within the same broadcast domain.
* **Multi-layer Switch (Layer 3 Switch):** A device capable of performing both Layer 2 switching and Layer 3 routing.
 * *Exam Note:* For the purpose of the CompTIA Network+ exam, if a device is performing routing functions, it is classified as a **router**, regardless of whether it is a dedicated router or a multi-layer switch.

## 📜 Protocols & Standards
* **RIP (Routing Information Protocol):** Mentioned as a routing protocol to be covered.
* **OSPF (Open Shortest Path First):** Mentioned as a routing protocol to be covered.
* **BGP (Border Gateway Protocol):** Mentioned as a routing protocol to be covered.
* **PIM (Protocol Independent Multicast):** Mentioned as a multicast routing protocol to be covered.
* **GRE (Generic Routing Encapsulation):** Mentioned as a tunneling protocol to be covered.

## 🔑 Key Terminology
* **Router**: A device that forwards data packets between computer networks based on Layer 3 (IP) addresses.
* **Broadcast Domain**: A logical division of a computer network in which all nodes can reach each other by broadcast at the Data Link layer.
* **Layer 3 Switch**: A high-performance device that supports the same routing protocols as a router and can perform routing functions in addition to standard switching.
* **Default Gateway**: The node on a computer network that serves as the forwarding host (router) to other networks when no other route specification matches the destination IP address.
* **Data Frame**: The protocol data unit (PDU) at Layer 2 (Data Link Layer) of the OSI model.
* **Packet**: The protocol data unit (PDU) at Layer 3 (Network Layer) of the OSI model.
* **Address Translation (NAT/PAT)**: The process of modifying IP address information in IP packet headers while in transit across a traffic routing device.

## 🔄 How It Works (Processes)
1. **Initiation:** PC1 sends data intended for a destination outside its local network.
2. **ARP/Gateway:** PC1 sends an ARP request to find the MAC address of its default gateway (the router).
3. **Encapsulation Transition:** The router receives the Layer 2 frame from the local switch, strips the frame header, and inspects the Layer 3 IP packet.
4. **Routing Decision:** The router consults its routing table to determine the next hop for the destination IP.
5. **WAN Transmission:** The router re-encapsulates the packet for the WAN medium (e.g., serial, fiber) and sends it to the next router.
6. **Delivery:** The receiving router strips the WAN header, identifies the destination MAC address for the target PC, re-encapsulates it into a Layer 2 frame, and delivers it to the destination PC via the local switch.

## 📊 Comparisons & Key Differences
| Feature| Switch (Layer 2)| Router / Layer 3 Switch|
| :---| :---| :---|
| **OSI Layer**| Layer 2 (Data Link)| Layer 3 (Network)|
| **Addressing**| MAC Addresses| IP Addresses|
| **Broadcast Domains**| Single domain| Splits/Separates domains|
| **Primary Function**| Forwarding within a LAN| Routing between networks|

## ⚠️ Exam Tips & Important Notes
* **Terminology Consistency:** If the exam uses the word "switch," it refers to a Layer 2 device. If it uses "router" or "multi-layer switch," it refers to Layer 3 functionality.
* **Broadcast Domains:** Remember that routers are the primary devices used to segment broadcast domains.
* **Layer Transition:** Always remember that routers strip Layer 2 information to inspect Layer 3 information, then re-encapsulate it for the next hop.

## ❓ Questions to Review
1. What is the primary difference between a Layer 2 switch and a router regarding broadcast domains?
2. At which layer of the OSI model does a router primarily operate?
3. What happens to the Layer 2 frame when it reaches a router?
4. How does a multi-layer switch function differently on the exam compared to a standard switch?
5. Why is it necessary for a router to use IP addresses instead of MAC addresses when communicating across a WAN?

## 🔗 Related Topics
* [[OSI Model]]
* [[Switching]]
* [[IP Addressing]]
* [[Routing Tables]]
* [[NAT and PAT]]
* [[WAN Technologies]]
