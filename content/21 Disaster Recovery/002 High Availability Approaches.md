# 002 High Availability Approaches

**Module/Section:** 21 Disaster Recovery
**Tags:** #high-availability #redundancy #disaster-recovery #🌱seedling

---

![[002 High Availability Approaches.mp4]]

## 📖 Core Concept
High availability (HA) is the practice of designing network systems to ensure continuous operation with minimal downtime. The primary goal is to eliminate single points of failure by implementing **redundancy** at the device, connection, and infrastructure levels.

* **Network Redundancy:** Ensuring that if one component (cable, NIC, switch, router, or power source) fails, traffic is automatically rerouted or handled by a secondary component.
* **Three-Layer Design Approach:**
 1. **Device Level:** Redundant Network Interface Cards (NICs) and cables.
 2. **Infrastructure Level:** Redundant switches and routers with multiple paths.
 3. **External Level:** Redundant connections to the internet/ISP.

## 🛠️ Hardware & Devices
* **Network Interface Cards (NICs):** Physical components installed in servers to provide network connectivity. Multiple NICs can be grouped for load balancing or redundancy.
* **Switches/Routers:** Core networking devices that should be connected via multiple, redundant paths (e.g., dual trunk ports using fiber optics).
* **Load Balancers:** Hardware or software devices that distribute incoming network traffic across multiple servers to prevent any single server from becoming a bottleneck.
* **Diesel Generator:** A backup power source that acts as an active-passive failover mechanism.
* **Solar Panels/Battery Backup:** Used in the instructor's example to demonstrate the transition from active-passive (grid/solar switching) to active-active (battery-buffered) power configurations.

## 📜 Protocols & Standards
* **N/A — not covered in this lesson.** (The lesson focuses on architectural approaches rather than specific protocol standards like HSRP or VRRP).

## 🔑 Key Terminology
* **High Availability (HA):** A system design approach that ensures a service remains operational for a high percentage of time, minimizing downtime.
* **Redundancy:** The inclusion of extra components or pathways that are not strictly necessary to functioning, but are present in case of failure in other components.
* **Active-Active:** A configuration where multiple systems or components operate simultaneously, sharing the workload. If one fails, the others continue to handle the traffic, though total throughput may decrease.
* **Active-Passive (Standby):** A configuration where a primary system handles the load while a secondary system remains idle (standby). The secondary system only activates if the primary system fails.
* **Load Balancing:** The process of distributing network or application traffic across a number of servers to ensure no single server is overwhelmed.
* **Content Delivery Network (CDN):** A geographically distributed group of servers that work together to provide fast delivery of internet content by caching data closer to the end-user.
* **Throughput:** The actual rate at which data is successfully transferred over a communication channel.

## 🔄 How It Works (Processes)
* **NIC Teaming/Bonding:**
 * Multiple NICs can be grouped.
 * **Load Balancing Mode:** Four 100 Mbps cards act as one virtual card, providing 400 Mbps throughput.
 * **Failover Mode:** A secondary card remains idle until the primary group fails, providing a fallback connection.
* **Active-Active Failover:** Both systems are "on." If one fails, the remaining system(s) continue to process traffic, but the total capacity (throughput) is reduced.
* **Active-Passive Failover:** The primary system handles 100% of the load. Upon failure, the secondary system must "spin up" or initialize, which often results in a brief period of downtime (e.g., the 30–60 second delay of a generator starting).
* **CDN Traffic Rerouting:** If a specific edge server in a CDN fails, the network automatically redirects user requests to the next closest geographically available server to maintain service continuity.

## 📊 Comparisons & Key Differences

| Feature| Active-Active| Active-Passive|
| :---| :---| :---|
| **Resource Usage**| High (all systems working)| Low (standby is idle)|
| **Failover Speed**| Instant (seamless)| Slower (requires initialization)|
| **Throughput**| Combined capacity| Single system capacity|
| **Complexity**| Higher| Lower|

## ⚠️ Exam Tips & Important Notes
* **Redundancy vs. Throughput:** Remember that adding NICs can serve two purposes: increasing total throughput (load balancing) OR increasing reliability (redundancy).
* **The "Hidden" Cost of Active-Passive:** Be aware that active-passive setups often involve a "failover time" where the service is unavailable while the standby system takes over.
* **Design Perspective:** When answering exam questions, always think about redundancy in three tiers: the device (NICs), the path (cables/switches), and the service (load balancers/CDNs).

## ❓ Questions to Review
1. What is the primary difference between active-active and active-passive configurations regarding resource utilization?
2. If you have four 100 Mbps NICs in an active-active load-balanced group, what is the total throughput, and what happens if one NIC fails?
3. How does a CDN improve both availability and performance for an end-user?
4. Why might an organization choose an active-active power configuration (like a battery buffer) over an active-passive one (like a generator)?
5. What are the three levels of network redundancy mentioned in the lesson?

## 🔗 Related Topics
* [[Load Balancing]]
* [[Disaster Recovery]]
* [[Network Redundancy]]
* [[Content Delivery Networks]]
