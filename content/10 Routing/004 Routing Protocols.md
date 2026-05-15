# 004 Routing Protocols

**Module/Section:** 10 Routing
**Tags:** #routing #protocols #OSPF #BGP #RIP #🌱seedling

---

![[004 Routing Protocols.mp4]]

## 📖 Core Concept
Routing protocols are the mechanisms used by routers to communicate with one another to share information about network topology. This allows routers to build and maintain routing tables, which are used to determine the best path for data packets to reach their destination.

* **Autonomous System (AS):** A collection of networks under a single administrative domain.
* **Interior vs. Exterior:**
 * **Interior Gateway Protocols (IGP):** Operate *within* an autonomous system (e.g., inside a corporate network).
 * **Exterior Gateway Protocols (EGP):** Operate *between* autonomous systems (e.g., the backbone of the internet).
* **Routing Advertisement Methods:**
 * **Distance Vector:** Determines the "best" path based on the number of hops (routers) between the source and destination.
 * **Link State:** Determines the "best" path based on the cost (speed/bandwidth) of the links.
 * **Hybrid:** A combination of both distance vector and link state methodologies.

## 🛠️ Hardware & Devices
* **Routers:** The primary networking device responsible for forwarding data packets between computer networks. They use routing protocols to determine the most efficient path for data.

## 📜 Protocols & Standards
* **RIP (Routing Information Protocol):**
 * **Type:** Interior Gateway Protocol (IGP).
 * **Method:** Distance Vector.
 * **Metric:** Hop count (Max 15 hops; 16 is considered "unreachable").
 * **Transport:** Uses UDP.
 * **Characteristics:** Oldest dynamic routing protocol; slow convergence; updates every 30 seconds.
* **OSPF (Open Shortest Path First):**
 * **Type:** Interior Gateway Protocol (IGP).
 * **Method:** Link State.
 * **Metric:** Cost (based on link speed/bandwidth).
 * **Characteristics:** Highly efficient; widely adopted; fast convergence.
* **IS-IS (Intermediate System to Intermediate System):**
 * **Type:** Interior Gateway Protocol (IGP).
 * **Method:** Link State.
 * **Metric:** Cost (based on link speed).
 * **Characteristics:** Functions similarly to OSPF but has seen less widespread adoption.
* **EIGRP (Enhanced Interior Gateway Routing Protocol):**
 * **Type:** Interior Gateway Protocol (IGP).
 * **Method:** Advanced Distance Vector / Hybrid.
 * **Metric:** Bandwidth and Delay.
 * **Characteristics:** Proprietary to Cisco; very popular in Cisco-only environments.
* **BGP (Border Gateway Protocol):**
 * **Type:** Exterior Gateway Protocol (EGP).
 * **Method:** Path Vector (counts AS hops, not router hops).
 * **Characteristics:** The "backbone of the internet"; slow convergence due to massive scale.

## 🔑 Key Terminology
* **Convergence:** The time required for all routers in a network to update their routing tables and reach a state of agreement following a topology change.
* **Hold-down Timer:** A mechanism used to stabilize routing tables by delaying the processing of routing updates, which can help improve convergence in unstable networks.
* **Hop Count:** The number of routers a packet must pass through to reach its destination.
* **Link State:** A routing method where routers maintain a map of the entire network topology to calculate the shortest path based on link speed.
* **Metric:** A value assigned to a route by a routing protocol to help determine the "best" path (e.g., hop count, bandwidth, delay).
* **Path Vector:** A routing method used by BGP that tracks the sequence of Autonomous Systems a packet must traverse.

## 🔄 How It Works (Processes)
1. **Distance Vector Process:** Routers send a full copy of their routing table to directly connected neighbors at regular intervals. They calculate the best path solely by counting the number of routers (hops) in the path.
2. **Link State Process:** Routers flood information about their local links throughout the "Link State Domain." Each router builds a complete map of the network and calculates the shortest path to every destination based on link speed (cost).
3. **Convergence Process:** When a topology change occurs (e.g., a link goes down or a new router is added), the change propagates through the network. The network is "converged" once all routers have updated their tables to reflect the new state.

## 📊 Comparisons & Key Differences

| Feature| RIP| OSPF| EIGRP| BGP|
| :---| :---| :---| :---| :---|
| **Type**| IGP| IGP| IGP| EGP|
| **Method**| Distance Vector| Link State| Hybrid| Path Vector|
| **Metric**| Hop Count| Cost (Speed)| Bandwidth/Delay| AS Hops|
| **Vendor**| Open| Open| Cisco Proprietary| Open|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip:** If the question asks for an **Exterior Gateway Protocol**, the answer is always **BGP**. Everything else mentioned is an Interior protocol.
* **Exam Tip:** Remember that RIP has a hard limit of 15 hops.
* **Exam Tip:** Understand the distinction between "Hop Count" (Distance Vector) and "Cost/Speed" (Link State).
* **Important:** EIGRP is a hybrid protocol developed by Cisco. It is not used in multi-vendor environments as frequently as OSPF.

## ❓ Questions to Review
1. What is the primary difference between an Interior Gateway Protocol and an Exterior Gateway Protocol?
2. Why does a Link State protocol generally converge faster and perform better than a Distance Vector protocol?
3. What is the maximum hop count for RIP, and what happens if a route exceeds it?
4. Which protocol is considered the "backbone of the internet" and why?
5. If you are in a Cisco-only environment and want a protocol that uses both bandwidth and delay as metrics, which protocol should you choose?

## 🔗 Related Topics
* [[Routers]]
* [[Autonomous Systems]]
* [[Routing Tables]]
* [[Bandwidth]]
