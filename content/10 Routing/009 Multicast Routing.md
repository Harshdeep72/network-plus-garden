# 009 Multicast Routing

**Module/Section:** 10 Routing
**Tags:** #multicast #routing #igmp #pim #🌱seedling

---

![[009 Multicast Routing.mp4]]

## 📖 Core Concept
Multicast routing is a method of network communication where a single data stream is sent to a specific group of interested receivers. The goal is to transmit the data only once from the source, ensuring that only devices that have explicitly requested the traffic receive it, thereby optimizing bandwidth and network resources.

* **Multicast Group**: A logical group of hosts identified by a Class D IP address.
* **Efficiency**: Unlike broadcast (which sends to everyone) or unicast (which requires a separate stream for every receiver), multicast sends one stream that is replicated only as needed by the network infrastructure.

## 🛠️ Hardware & Devices
* **Routers**: Essential for managing multicast traffic between network segments and maintaining multicast distribution trees.
* **Servers**: The source of the multicast traffic.
* **Clients/PCs**: The receivers that join multicast groups to receive specific data streams.

## 📜 Protocols & Standards
* **IGMP (Internet Group Management Protocol)**: Used between clients and local routers to manage group membership.
 * **IGMPv1**: Basic join functionality; routers polled clients every 60 seconds to verify membership.
 * **IGMPv2**: Introduced "leave" messages, allowing clients to exit a group voluntarily, reducing unnecessary traffic.
 * **IGMPv3**: Introduced Source-Specific Multicast (SSM), allowing clients to request traffic from specific servers/sources rather than just the general group.
* **PIM (Protocol Independent Multicast)**: Used for routing multicast traffic between multicast-enabled routers.
 * **PIM-DM (Dense Mode)**: Uses a "flood and prune" mechanism.
 * **PIM-SM (Sparse Mode)**: Uses a shared distribution tree that transitions to a Shortest Path Tree (SPT).

## 🔑 Key Terminology
* **Class D IP Address**: The IP range reserved for multicast (224.0.0.0 to 239.255.255.255).
* **Multicast Distribution Tree**: The path or structure created by routers to deliver multicast traffic from the source to all receivers.
* **Flood and Prune**: A process in PIM-DM where traffic is initially sent to all segments and then "pruned" (removed) from paths where no receivers exist.
* **Rendezvous Point (RP)**: A specific router in PIM-SM that acts as a meeting point for sources and receivers to establish the initial shared distribution tree.
* **Shortest Path Tree (SPT)**: The most efficient, lowest-latency path between the multicast source and the receiver.
* **Source-Specific Multicast (SSM)**: A feature of IGMPv3 that allows a receiver to specify which server it wants to receive data from within a multicast group.

## 🔄 How It Works (Processes)
### IGMP Process
1. **Join**: A client sends a request to the local router to join a specific multicast group (e.g., 239.2.1.3).
2. **Tracking**: The router records the interface where the request originated.
3. **Delivery**: When the router receives multicast traffic for that group, it forwards the data only to the interfaces that have active members.

### PIM-DM (Dense Mode) Process
1. **Flood**: The router floods multicast traffic to every segment in the network.
2. **Prune**: Routers that do not have any downstream receivers send a "prune" message back to the source to stop the traffic flow on that branch.
3. **Maintenance**: This process repeats every 3 minutes to re-verify the tree.

### PIM-SM (Sparse Mode) Process
1. **Shared Tree**: Traffic is initially sent to a Rendezvous Point (RP) and then distributed to receivers.
2. **Optimization**: Over time, the routers identify the most efficient path.
3. **Switchover**: The network transitions from the shared tree to the Shortest Path Tree (SPT) for optimal performance.

## 📊 Comparisons & Key Differences

| Feature| PIM-DM (Dense Mode)| PIM-SM (Sparse Mode)|
| :---| :---| :---|
| **Initial Behavior**| Floods traffic everywhere| Uses a Rendezvous Point (RP)|
| **Efficiency**| Low (high overhead)| High (resource efficient)|
| **Path Selection**| Immediate optimal path| Starts sub-optimal, moves to SPT|
| **Modern Usage**| Rarely used| Industry standard|

## ⚠️ Exam Tips & Important Notes
* **IGMP Versions**: Remember that v2 added "leave" messages, and v3 added "source-specific" capabilities.
* **PIM Modes**: Understand that PIM-SM is the preferred modern method because it avoids the massive bandwidth waste caused by the "flood and prune" behavior of PIM-DM.
* **Performance**: If a question asks about network performance impacts, remember that PIM-DM's periodic flooding (every 3 minutes) is a major performance drain.

## ❓ Questions to Review
1. Which IGMP version introduced the ability to request traffic from a specific source?
2. What is the primary purpose of the "Rendezvous Point" in PIM-SM?
3. Why is PIM-DM generally considered inefficient for modern networks?
4. What happens when a client sends a "leave" message in IGMPv2?
5. What is the difference between a shared distribution tree and a Shortest Path Tree (SPT)?

## 🔗 Related Topics
* [[IP Addressing]]
* [[Routing Protocols]]
* [[Network Segmentation]]
