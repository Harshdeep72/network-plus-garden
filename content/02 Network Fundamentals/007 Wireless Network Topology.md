# 007 Wireless Network Topology

**Module/Section:** 02 - Network Fundamentals
**Tags:** #wireless #topology #infrastructure #ad-hoc #mesh #🌱seedling

---

![[007 Wireless Network Topology.mp4]]

## 📖 Core Concept
Wireless networks utilize specific physical topologies that differ from wired networks. While logical topologies (like bus or star) still apply, wireless networks are categorized by how devices connect to one another and manage traffic. The three primary wireless modes are:

* **Infrastructure Mode:** The standard, centrally managed wireless network. It functions similarly to a physical star topology, where all clients connect through a central device.
* **Ad Hoc Mode:** A decentralized, peer-to-peer wireless network where devices connect directly to each other without central management.
* **Wireless Mesh:** A complex, interconnected network that combines various radio technologies (Wi-Fi, cellular, satellite, microwave) to create a redundant, wide-reaching, and reliable network, often used in disaster recovery or harsh environments.

## 🛠️ Hardware & Devices
* **Wireless Access Point (WAP):** A central device used in infrastructure mode to manage wireless connections and provide access to the network.
* **Modems (Cable/Fiber):** Devices used to connect the local infrastructure to an outside service provider.
* **Radios/Antennas:** Hardware components used to transmit and receive wireless signals across various frequencies.
* **Gateways:** Devices that act as a bridge between different network segments or technologies within a mesh.
* **Client Devices:** Laptops, mobile devices, or other endpoints that connect to the wireless network.

## 📜 Protocols & Standards
* **Wi-Fi:** Used for short-range wireless communication (typically 100–200 feet).
* **Bluetooth:** A short-range wireless technology used within mesh networks.
* **Microwave:** A long-range wireless technology capable of spanning 30–40 miles.
* **Cellular:** Mobile network technology used for wide-area connectivity.
* **Satellite:** Long-range communication technology capable of spanning hundreds to thousands of miles.

## 🔑 Key Terminology
* **Infrastructure Mode**: A wireless network configuration where all devices communicate through a central Wireless Access Point (WAP). It supports advanced security controls and is the standard for home and office Wi-Fi.
* **Ad Hoc Mode**: A decentralized wireless network configuration where devices connect directly to one another in a peer-to-peer fashion. There is no central WAP or router; routing decisions are made dynamically by the connected devices.
* **Wireless Mesh**: A network topology that interconnects various types of nodes, radios, and technologies (e.g., Wi-Fi, satellite, microwave) to create a single, redundant, and highly reliable network.
* **Peer-to-Peer (P2P)**: A network model where individual devices (peers) communicate directly with each other without the need for a central server or controller.

## 🔄 How It Works (Processes)
* **Infrastructure Mode Process:**
 1. A central WAP is configured with an SSID (name) and security credentials.
 2. Client devices scan for the SSID and authenticate.
 3. All traffic from clients is routed through the WAP to the rest of the network or the internet.
* **Ad Hoc Mode Process:**
 1. Devices discover each other wirelessly.
 2. A direct connection is established between devices.
 3. Routing decisions are made on-the-fly by the devices themselves, allowing for dynamic entry and exit of nodes.
* **Wireless Mesh Process:**
 1. Multiple technologies (e.g., Wi-Fi for local access, microwave for mid-range, satellite for long-range) are integrated.
 2. Nodes act as relays to pass data through the most efficient or available path.
 3. If one link (e.g., a landline) fails, the network automatically reroutes traffic through an alternative wireless path (e.g., satellite or cellular).

## 📊 Comparisons & Key Differences

| Feature| Infrastructure Mode| Ad Hoc Mode| Wireless Mesh|
| :---| :---| :---| :---|
| **Management**| Centralized (WAP)| Decentralized (Peer-to-Peer)| Distributed/Integrated|
| **Complexity**| Low/Standard| Low| High|
| **Redundancy**| Low (Single point of failure)| Low| High|
| **Primary Use**| Home/Office Wi-Fi| Temporary P2P connections| Disaster recovery/Large areas|

## ⚠️ Exam Tips & Important Notes
* **Infrastructure vs. Ad Hoc:** Remember that Infrastructure mode is the "standard" way we connect to Wi-Fi, while Ad Hoc is "peer-to-peer."
* **Mesh Purpose:** If the exam asks about a scenario involving disaster recovery, humanitarian aid, or harsh environments where reliability is key, think **Wireless Mesh**.
* **Range:** Keep in mind the relative ranges mentioned: Wi-Fi (tens/hundreds of feet), Microwave (tens of miles), Satellite (hundreds/thousands of miles).

## ❓ Questions to Review
1. Which wireless mode functions similarly to a physical star topology?
2. What is the primary difference between infrastructure mode and ad hoc mode regarding device management?
3. In what type of scenario would a wireless mesh network be most beneficial?
4. Why is a wireless mesh considered more reliable than a single-link connection in a disaster zone?
5. Which wireless technology mentioned has the longest range?

## 🔗 Related Topics
* [[Wireless Access Point]]
* [[Network Topologies]]
* [[Peer-to-Peer Networking]]
* [[Redundancy]]
