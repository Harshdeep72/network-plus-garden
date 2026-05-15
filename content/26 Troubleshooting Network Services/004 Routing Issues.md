# 004 Routing Issues

**Module/Section:** 26 Troubleshooting Network Services
**Tags:** #routing #troubleshooting #multicast #asymmetrical-routing #🌱seedling

---

![[004 Routing Issues.mp4]]

## 📖 Core Concept
This lesson covers three primary routing-related issues that can disrupt network performance and connectivity: **Multicast Flooding**, **Asymmetrical Routing**, and **Missing Routes**. Understanding these is critical for maintaining stable network traffic flows, particularly when security appliances are involved.

## 🛠️ Hardware & Devices
* **Switch**: Layer 2 device that uses a **CAM table** to forward traffic.
* **Router**: Layer 3 device responsible for path determination and packet forwarding.
* **Firewall**: Security appliance that performs deep packet inspection and stateful filtering.
* **Unified Threat Management (UTM) System**: An all-in-one security appliance that requires visibility into the full packet flow to function correctly.

## 📜 Protocols & Standards
* **HSRP (Hot Standby Router Protocol)**: A Cisco proprietary redundancy protocol that allows for gateway failover; mentioned as a potential cause for asymmetrical routing due to load balancing behaviors.
* **OSPF (Open Shortest Path First)**: A dynamic routing protocol; issues with neighbor states can lead to missing routes.
* **BGP (Border Gateway Protocol)**: A dynamic routing protocol used for inter-domain routing; issues with neighbor states can lead to missing routes.

## 🔑 Key Terminology
* **Multicast Flooding**: A condition where multicast traffic is broadcast to every port in a VLAN because the switch does not have a specific host associated with the multicast MAC address in its CAM table.
* **CAM Table (Content Addressable Memory Table)**: A table in a switch that maps MAC addresses to physical ports.
* **Asymmetrical Routing**: A condition where network packets follow one path to a destination and a different path when returning to the source.
* **Stateful Firewall**: A firewall that tracks the state of active connections and determines which network packets to allow through the firewall based on the context of the flow.
* **Deep Packet Inspection (DPI)**: A form of computer network packet filtering that examines the data part (and possibly the header) of a packet as it passes an inspection point.
* **Missing Route**: A condition where a router lacks a path to a specific destination network in its routing table, resulting in dropped packets.
* **Convergence**: The state where all routers in a network have consistent and accurate information about the network topology.
* **Static Route**: A route that is manually configured by a network administrator.
* **Dynamic Routing Protocol**: A protocol that allows routers to automatically share information about network reachability and build routing tables.

## 🔄 How It Works (Processes)
* **Multicast Flooding Prevention**: To stop flooding, the switch must be configured to block unknown multicast packets.
* **Asymmetrical Routing Impact**:
 * Routers prioritize the fastest path for packets, regardless of whether the return traffic follows the same path.
 * Stateful firewalls/UTMs drop packets if they do not see the entire flow (both directions).
 * **Solution**: Re-architect the network to place firewalls closer to the protected systems to ensure traffic flows through the same firewall in both directions.
* **Troubleshooting Missing Routes**:
 * **Verification (Router)**: Use `show ip route` to examine the routing table.
 * **Verification (Client/Server)**: Use `route print` to view the local routing table.
 * **Connectivity Check**: Use `ping` to verify if routers can communicate to establish neighbor states for dynamic protocols.

## 📊 Comparisons & Key Differences
| Feature| Static Routing| Dynamic Routing|
| :---| :---| :---|
| **Configuration**| Manual entry by administrator| Automated via protocols (OSPF, BGP)|
| **Common Issue**| Human error (mistyping)| Neighbor state/convergence failure|
| **Troubleshooting**| Verify table entries| Verify protocol status/connectivity|

## ⚠️ Exam Tips & Important Notes
* **Multicast Flooding**: You do not need to know specific switch commands for the exam, but you must know that blocking unknown multicast traffic is the correct remediation.
* **Asymmetrical Routing**: This does not technically "break" routing (packets still reach their destination), but it breaks **stateful security devices** that require full flow visibility.
* **Troubleshooting Command**: Know `show ip route` for routers and `route print` for Windows systems.
* **Dynamic Routing**: If routes are missing, always check if the routers have successfully established a "neighbor state" before assuming the route itself is the problem.

## ❓ Questions to Review
1. What is the primary cause of multicast flooding on a switch?
2. Why do stateful firewalls often drop traffic in an asymmetrical routing environment?
3. What command is used on a Cisco router to view the current routing table?
4. How does the placement of firewalls affect the likelihood of asymmetrical routing issues?
5. If two routers are using OSPF but cannot see each other's routes, what is the first thing you should verify?

## 🔗 Related Topics
* [[VLAN]]
* [[Layer 2 vs Layer 3 Switching]]
* [[Routing Tables]]
* [[Firewall Configuration]]
* [[Dynamic Routing Protocols]]
