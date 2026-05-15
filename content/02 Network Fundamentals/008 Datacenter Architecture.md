# 008 Datacenter Architecture

**Module/Section:** 02 - Network Fundamentals
**Tags:** #datacenter #topology #architecture #🌱seedling

---

![[008 Datacenter Architecture.mp4]]

## 📖 Core Concept
A **Datacenter** is a facility composed of network computers and storage used to organize, process, store, and disseminate large amounts of data. Datacenters vary significantly in scale—from small, single-rack setups (e.g., 150 sq. ft.) to massive, multi-building facilities like the Utah Datacenter (1.5 million sq. ft., 65 MW power consumption).

Network technicians must understand specific architectural models to ensure performance, scalability, and redundancy. The primary architectures discussed are the **Three-Tiered Hierarchy**, **Collapsed Core**, and **Spine and Leaf**.

## 🛠️ Hardware & Devices
* **Core Routers:** The largest, fastest, and most expensive routers; serve as the network backbone.
* **Layer 3 Switches:** Used primarily at the distribution/aggregation layer to route packets between subnets and VLANs.
* **Access/Edge Switches:** Standard switches used to connect endpoint devices.
* **Servers:** Computing hardware hosted within the datacenter.
* **Firewalls:** Network boundary devices that manage traffic entering or leaving the datacenter.
* **Wireless Access Points (WAPs):** Endpoint devices connected via the access layer.
* **Top-of-Rack (ToR) Switches:** Switches physically installed at the top of a server rack; act as "leaf" switches in a spine-leaf architecture.
* **Main Distribution Frame (MDF):** The primary location for distribution/aggregation layer equipment.
* **Intermediate Distribution Frame (IDF):** Locations housing access/edge layer devices.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Three-Tiered Hierarchy:** A traditional network design consisting of Core, Distribution (Aggregation), and Access (Edge) layers.
* **Core Layer:** The backbone of the network; merges geographically separated networks into a cohesive unit.
* **Distribution/Aggregation Layer:** The layer that defines policies, implements access lists (ACLs), and routes traffic between subnets/VLANs.
* **Access/Edge Layer:** The layer where endpoint devices (computers, printers, etc.) connect to the network; converts packets to frames.
* **Collapsed Core:** A two-tiered architecture where the Core and Distribution layers are merged to simplify management and reduce costs in smaller environments.
* **Spine and Leaf Architecture:** A modern datacenter topology where "leaf" switches (access) connect to a "spine" (backbone) in a full-mesh configuration, optimizing internal server-to-server traffic.
* **North-South Traffic:** Traffic entering (Southbound) or leaving (Northbound) the datacenter.
* **East-West Traffic:** Traffic moving laterally between devices/servers within the datacenter.
* **Software-Defined Networking (SDN):** A network management approach that enables dynamic, programmatically efficient network configuration; often used to optimize spine-leaf traffic.

## 🔄 How It Works (Processes)
* **Three-Tiered Flow:** Data moves from endpoints (Access) $\rightarrow$ Policy/Routing (Distribution) $\rightarrow$ Backbone (Core).
* **Spine-Leaf Operation:** Leaf switches aggregate server traffic and connect to every spine switch. This creates a full-mesh, reducing the number of "hops" required for data to travel between servers.
* **Traffic Flow Classification:**
 * **Northbound:** Data exiting the datacenter (e.g., to the internet).
 * **Southbound:** Data entering the datacenter (e.g., from the internet).
 * **East-West:** Data moving between servers inside the datacenter (e.g., database to web server).

## 📊 Comparisons & Key Differences

| Feature| Three-Tiered Hierarchy| Collapsed Core| Spine and Leaf|
| :---| :---| :---| :---|
| **Layers**| 3 (Core, Dist, Access)| 2 (Core/Dist, Access)| 2 (Spine, Leaf)|
| **Primary Use**| Enterprise/Large Networks| Small/Medium Datacenters| High-performance Server Farms|
| **Complexity**| High| Low| Moderate (High performance)|
| **Traffic Focus**| North-South| North-South| East-West|

## ⚠️ Exam Tips & Important Notes
* **Redundancy:** Always ensure at least two core routers are in a redundant configuration; a single point of failure at the core will crash the entire network.
* **Troubleshooting:** The three-tiered model makes troubleshooting easier because issues can be isolated to a specific access layer device without impacting the rest of the network.
* **East-West Growth:** Due to virtualization and cloud computing, the volume of East-West traffic is increasing, making Spine-Leaf architectures more popular than traditional three-tier models for modern datacenters.
* **Terminology:** Remember that "Southbound" = Entering, "Northbound" = Exiting.

## ❓ Questions to Review
1. What are the three layers of the traditional hierarchical network model?
2. Why would an organization choose a "Collapsed Core" design over a three-tiered model?
3. In a spine and leaf architecture, what is the primary function of the "leaf" switches?
4. How is "East-West" traffic defined in a datacenter environment?
5. What is the benefit of using a full-mesh topology in a spine and leaf design?

## 🔗 Related Topics
* [[VLANs]]
* [[Subnetting]]
* [[Network Topologies]]
* [[Firewalls]]
* [[Software-Defined Networking]]
