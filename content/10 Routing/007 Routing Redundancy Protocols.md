# 007 Routing Redundancy Protocols

**Module/Section:** 10 Routing
**Tags:** #routing #redundancy #FHRP #cisco #🌱seedling

---

![[007 Routing Redundancy Protocols.mp4]]

## 📖 Core Concept
Routing Redundancy Protocols are designed to prevent communication disruptions by automatically rerouting traffic if a path or device fails. They ensure continuous network availability and reliability. These protocols are collectively categorized as **First Hop Redundancy Protocols (FHRP)**.

* **Analogy:** Think of a highway with construction blocking a lane. If the city provides signs for an alternative route, you can navigate around the construction without delay. FHRP acts as those signs, dynamically rerouting traffic when a primary "hop" (router) fails.
* **Three Main Benefits:**
 * **Reliability:** Ensures communications remain active even if a single router fails.
 * **Load Balancing:** Distributes traffic across multiple routers to prevent any single device from becoming overwhelmed.
 * **Seamless Transitions:** Moves traffic from a failed router to a standby router automatically, without the end user noticing.

## 🛠️ Hardware & Devices
* **Routers:** The primary devices used in FHRP configurations to manage traffic and provide redundancy.
* **Switches:** Can utilize **Subinterfaces** to segment traffic and manage VLANs without requiring additional physical hardware.

## 📜 Protocols & Standards
* **FHRP (First Hop Redundancy Protocol):** The umbrella term for protocols that provide automatic failover for default gateways.
* **HSRP (Hot Standby Router Protocol):** A Cisco-proprietary protocol that presents multiple physical routers as a single virtual router to the local network.
* **VRRP (Virtual Router Redundancy Protocol):** An open-standard protocol that functions similarly to HSRP but is vendor-neutral.
* **GLBP (Gateway Load Balancing Protocol):** A Cisco-proprietary protocol that provides both redundancy and active load balancing across multiple routers.

## 🔑 Key Terminology
* **First Hop Redundancy Protocol (FHRP):** A set of protocols designed to ensure network reliability by providing automatic failover to a backup router.
* **Virtual IP (VIP):** An IP address not bound to a specific physical device; it serves as the default gateway for network devices, allowing traffic to be redirected to whichever router is currently active.
* **Subinterface:** A logical subdivision of a single physical interface on a router or switch, allowing for independent configuration, VLAN assignment, and security policies.
* **Active Router:** The router currently responsible for forwarding packets in an HSRP or VRRP group.
* **Standby/Backup Router:** A router waiting to take over routing responsibilities if the active router fails.
* **Preempting:** An HSRP feature where a higher-priority router can automatically take over as the active router if it comes online after the initial election.
* **Active Virtual Gateway (AVG):** In GLBP, the member responsible for assigning virtual MAC addresses to clients to facilitate load balancing.

## 🔄 How It Works (Processes)
1. **Redundancy Election:** Routers in a group communicate to elect an "Active" router and "Standby" routers.
2. **Gateway Assignment:** End devices are configured to use the **Virtual IP** as their default gateway.
3. **Failure Detection:** The protocol monitors the health of the active router.
4. **Failover:** If the active router fails, the protocol promotes a standby router to active status. The Virtual IP remains the same, so end devices do not need to change their configuration.
5. **Load Balancing (GLBP specific):** The AVG assigns different virtual MAC addresses to clients, allowing traffic to be distributed across multiple physical routers simultaneously.

## 📊 Comparisons & Key Differences

| Protocol| Vendor| Load Balancing| Standard|
| :---| :---| :---| :---|
| **HSRP**| Cisco| No (Active/Standby)| Proprietary|
| **VRRP**| Multi-vendor| No (Primary/Backup)| Open Standard|
| **GLBP**| Cisco| Yes (Multiple active)| Proprietary|

## ⚠️ Exam Tips & Important Notes
* **FHRP Definition:** Know that FHRP is the category name for HSRP, VRRP, and GLBP.
* **Proprietary vs. Open:** Remember that HSRP and GLBP are Cisco-proprietary, while VRRP is an open standard.
* **GLBP Advantage:** If the question asks for a protocol that provides *load balancing* in addition to redundancy, the answer is GLBP.
* **Virtual IP Function:** Understand that the Virtual IP is the "constant" that allows end-user devices to maintain connectivity without manual reconfiguration during a failover.

## ❓ Questions to Review
1. What is the primary purpose of a First Hop Redundancy Protocol?
2. Which protocol would you choose if you need to support multiple vendors in your network environment?
3. How does GLBP differ from HSRP in terms of traffic handling?
4. What is the function of a Virtual IP in an FHRP configuration?
5. Define "Preempting" and explain which protocol uses it.

## 🔗 Related Topics
* [[VLANs]]
* [[Default Gateway]]
* [[Routing]]
* [[MAC Addresses]]
