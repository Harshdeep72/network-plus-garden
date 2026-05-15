# 008 Configuring Routers

**Module/Section:** 10 Routing
**Tags:** #routing #cisco-packet-tracer #static-routing #🌱seedling

---

![[008 Configuring Routers.mp4]]

## 📖 Core Concept
Routers are Layer 3 devices responsible for forwarding data packets between different sub-networks. They use **Routing Tables** to determine the best path for traffic based on destination IP addresses.

* **Network Segmentation:** Routers divide a large network into smaller, manageable sub-networks (subnets).
* **Local vs. Remote Traffic:** If a device wants to communicate with another device on the same local segment, it uses Layer 2 (MAC addresses) via a switch. If the destination is on a different subnet, the packet must be sent to the router (the default gateway).
* **Routing Logic:** When a router receives a packet, it checks the destination IP against its routing table. If the destination is not in the local network, it forwards the packet to the "next hop" (the next router) based on the static or dynamic route configured.

## 🛠️ Hardware & Devices
* **Router:** A Layer 3 device that connects multiple networks. In the lesson, four routers are used:
 * **Backbone Router:** The central hub connecting all sub-networks.
 * **Dion Training Support Router:** Connects the Support network to the backbone.
 * **Dion Training HR Router:** Connects the Human Resources network to the backbone.
 * **Dion Training IT Router:** Connects the IT network to the backbone.
* **Switch (Layer 2):** Connects devices within the same local network. It uses MAC addresses to forward frames. It does not require an IP address for operation.
* **End Devices:**
 * **PCs/Laptops:** Used as endpoints for network communication.
 * **Web Server:** A host providing services, located in the IT subnet.

## 📜 Protocols & Standards
* **IP (Internet Protocol):** Used for addressing and routing packets across networks.
* **ARP (Address Resolution Protocol):** Used by switches to map IP addresses to MAC addresses to ensure frames reach the correct physical device.
* **Ping:** A utility used to test reachability between two hosts across an IP network.

## 🔑 Key Terminology
* **Routing Table:** A data table stored in a router or networked computer that lists the routes to particular network destinations.
* **Static Routing:** A form of routing where the administrator manually configures the paths in the routing table. It is ideal for small, stable networks.
* **Default Gateway:** The node on a computer's network that serves as an access point to another network (usually the router).
* **Next Hop:** The next router or destination to which a packet should be sent on its way to the final destination.
* **Subnetting:** The process of dividing a network into smaller segments.
* **Point-to-Point Connection:** A direct connection between two nodes (e.g., two routers).
* **Broadcast:** A communication where a message is sent to all devices on a network segment.

## 🔄 How It Works (Processes)
1. **Packet Origination:** A source device (e.g., Support PC) initiates a ping to a destination IP.
2. **Local Check:** The source device determines the destination is on a different subnet. It sends the packet to its default gateway (the local router).
3. **Routing Table Lookup:** The local router receives the packet, checks its routing table, and identifies the "next hop" (the backbone router) required to reach the destination network.
4. **Forwarding:** The packet is forwarded to the next router. This process repeats at each hop until the packet reaches the destination network's router.
5. **Delivery:** The final router uses ARP to resolve the destination IP to a MAC address and delivers the frame to the specific host (e.g., Web Server).
6. **Return Path:** The process repeats in reverse for the reply packet to reach the original source.

## 📊 Comparisons & Key Differences
| Feature| Layer 2 Switch| Router (Layer 3)|
| :---| :---| :---|
| **Primary Address**| MAC Address| IP Address|
| **Function**| Connects devices on the same LAN| Connects different sub-networks|
| **Routing Table**| No| Yes|
| **Scope**| Local segment| Inter-network|

## ⚠️ Exam Tips & Important Notes
* **Static Route Configuration:** When configuring a static route, always specify the **next hop** IP address.
* **Subnetting Efficiency:** Use the smallest subnet possible for point-to-point connections (e.g., `/30` provides 2 usable IP addresses, which is perfect for connecting two routers).
* **Packet Tracer:** While not on the exam, understanding the visual flow of packets (as shown in the simulator) is critical for troubleshooting routing issues.
* **Routing Logic:** Always remember that a router only cares about the *next hop*. It does not need to know the entire path to the destination, only the next step.

## ❓ Questions to Review
1. Why does a Layer 2 switch not need an IP address to function?
2. In a point-to-point connection between two routers, why is a `/30` subnet mask considered efficient?
3. What is the primary purpose of a routing table?
4. If a packet is destined for a network not listed in a router's routing table, what happens to the packet?
5. Explain the difference between the "inner" and "outer" IP addresses on a router as described in the video.

## 🔗 Related Topics
* [[Subnetting]]
* [[Layer 2 vs Layer 3 Devices]]
* [[Default Gateway]]
* [[Address Resolution Protocol (ARP)]]
