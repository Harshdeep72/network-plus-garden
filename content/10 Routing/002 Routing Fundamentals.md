# 002 Routing Fundamentals

**Module/Section:** 10 Routing
**Tags:** #routing #layer-3 #osi-model #🌱seedling

---

![[002 Routing Fundamentals.mp4]]

## 📖 Core Concept
The primary function of a **router** is to route traffic between different subnets, internal networks, and external networks. While switches operate at Layer 2 to manage local traffic, routers operate at Layer 3 to connect disparate networks.

* **Broadcast Domain Separation:** Routers are essential for breaking up broadcast domains. Unlike switches, which maintain a single broadcast domain for all connected devices, routers isolate these domains, increasing network efficiency and security.
* **Layer Transition:** Routing involves the transition between Layer 2 (Data Link) and Layer 3 (Network). When a packet leaves a local network, the router strips the Layer 2 frame (MAC addresses) and uses Layer 3 logical addressing (IP addresses) to route the data across the Wide Area Network (WAN).

## 🛠️ Hardware & Devices
* **Router:** A Layer 3 device responsible for forwarding traffic between different networks or subnets.
* **Switch:** A Layer 2 device that connects devices within the same local network.
* **Multilayer Switch (Layer 3 Switch):** A device capable of performing both Layer 2 switching and Layer 3 routing.
 * *Exam Note:* For the CompTIA Network+ exam, if a device is performing routing functions, it is considered a "router" or "Layer 3 device," regardless of whether it is a physical router or a multilayer switch.

## 📜 Protocols & Standards
* **ARP (Address Resolution Protocol):** Used to map a known IP address to a physical MAC address.
* **IP (Internet Protocol):** The primary Layer 3 protocol used for logical addressing and routing packets across networks.

## 🔑 Key Terminology
* **Router**: A networking device that forwards data packets between computer networks based on IP addresses.
* **Broadcast Domain**: A logical division of a computer network in which all nodes can reach each other by broadcast at the Data Link Layer.
* **Layer 2 (Data Link Layer)**: The layer responsible for node-to-node delivery using physical MAC addresses.
* **Layer 3 (Network Layer)**: The layer responsible for logical addressing (IP) and routing data across different networks.
* **Default Gateway**: The router that serves as the exit point for a device to communicate with a network outside of its own subnet.
* **WAN (Wide Area Network)**: A telecommunications network that extends over a large geographical distance, connecting multiple LANs.
* **Data Frame**: The protocol data unit (PDU) at Layer 2, containing MAC addresses.
* **Packet**: The protocol data unit (PDU) at Layer 3, containing IP addresses.

## 🔄 How It Works (Processes)
**Data Flow from PC1 to PC2:**
1. **Initiation:** PC1 sends an ARP request to find the destination. The switch, not knowing the destination, forwards the request to the **Default Gateway** (Router 1).
2. **Layer 2 to Layer 3 Transition:** Router 1 receives the Layer 2 frame. It strips the frame, identifies the destination IP, and encapsulates the data into a Layer 3 packet.
3. **WAN Transit:** Router 1 forwards the packet across the WAN (serial, fiber, satellite, or VPN) to Router 2.
4. **Layer 3 to Layer 2 Transition:** Router 2 receives the packet, strips the IP header, and determines the destination MAC address for PC2 (which is on its local segment).
5. **Delivery:** Router 2 encapsulates the data into a new Layer 2 frame and sends it to the switch, which delivers it to PC2.

## 📊 Comparisons & Key Differences

| Feature| Switch (Layer 2)| Router (Layer 3)|
| :---| :---| :---|
| **Primary Layer**| Layer 2 (Data Link)| Layer 3 (Network)|
| **Addressing**| MAC Addresses| IP Addresses|
| **Broadcast Domains**| Maintains one domain| Separates/Breaks domains|
| **Function**| Local connectivity| Inter-network connectivity|

## ⚠️ Exam Tips & Important Notes
* **Terminology:** If the exam mentions a "switch," assume it is a standard Layer 2 switch. If it mentions a "multilayer switch," treat it as a router/Layer 3 device.
* **MAC vs. IP:** Remember that MAC addresses are for local (intra-network) communication, while IP addresses are for global (inter-network) routing.
* **The "Why":** Routers are the only way to leave your local network. If you are communicating outside your subnet, you are using a router.

## ❓ Questions to Review
1. Why are routers considered superior to switches for managing broadcast domains?
2. What happens to the Layer 2 frame when it reaches a router?
3. How does a multilayer switch differ from a standard Layer 2 switch in an exam context?
4. At what point in the communication process does a device stop using MAC addresses and start using IP addresses?
5. What is the role of the default gateway in a network?

## 🔗 Related Topics
* [[OSI Model]]
* [[Switching Fundamentals]]
* [[IP Addressing]]
* [[ARP]]
* [[WAN Technologies]]
