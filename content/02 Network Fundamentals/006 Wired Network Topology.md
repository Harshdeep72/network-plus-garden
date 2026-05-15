# 006 Wired Network Topology

**Module/Section:** 02 - Network Fundamentals
**Tags:** #network-topology #physical-topology #logical-topology #point-to-point #ring-topology #bus-topology #star-topology #hub-and-spoke #mesh-topology #FDDI #WAN #LAN #CAN #data-center #network-design #redundancy #scalability #🌱seedling

---

![[006 Wired Network Topology.mp4]]

## 📖 Core Concept
A [[network topology]] refers to the arrangement of various elements within a computer network, including links, nodes, clients, and servers. Understanding different network topologies is crucial for designing efficient and resilient network infrastructures. Topologies are documented using either a [[physical topology]] or a [[logical topology]].

There are six primary types of wired network topologies discussed:
1. [[Point-to-Point Topology]]
2. [[Ring Topology]]
3. [[Bus Topology]]
4. [[Star Topology]]
5. [[Hub-and-Spoke Topology]]
6. [[Mesh Topology]]

Each topology has unique advantages and disadvantages, making them suitable for different network scenarios and scales.

## 🛠️ Hardware & Devices
* **Network Devices**: General term for equipment like computers, routers, switches, printers, scanners, servers.
* **Cables**: Physical media used for connections, including copper and fiber optic cables.
* **Network Switch**: A centralized connection point in a [[Star Topology]] that can also act as a repeater for network data flow. If it fails, the entire star network becomes inoperable.
* **Hub**: The centralized node in a [[Hub-and-Spoke Topology]].
* **Nodes**: Generic term for any device connected to a network.

## 📜 Protocols & Standards
* **FDDI (Fiber Distributed Data Interface)**: A standard for data transmission on fiber optic lines in a [[Local Area Network (LAN)]].
 * **Range**: Can extend up to 200 kilometers (approximately 125 miles).
 * **Structure**: Operates on a dual-ring structure (primary and secondary ring) for redundancy.
 * **Characteristics**: Known for high bandwidth and reliability, suitable for environments with large data transfers and high reliability requirements, such as [[Campus Area Networks (CAN)]] or [[Data Centers]].

## 🔑 Key Terminology
* **Network Topology**: The arrangement of different elements (links, nodes, clients, servers) that constitute a computer network.
* **Physical Topology**: A type of network diagram that illustrates how network devices and components are physically cabled and connected using various types of copper or fiber media. It shows the actual location of devices and cables, often overlaid on a building's floor plan.
* **Logical Topology**: A type of network diagram that shows how data traffic flows through a network. It depicts workstations, routers, switches, and their connections without necessarily indicating their physical location in the real world. The focus is on data flow, not physical layout.
* **Point-to-Point Topology**: The simplest network topology involving a direct connection between two devices.
* **Ring Topology**: A network configuration where each device is connected to two other devices, forming a circular data path. Data travels in one direction (clockwise or counterclockwise).
* **Bus Topology**: A network where all devices are connected to a single central cable, known as the backbone or bus. Data sent by any device is available to all other devices on the bus, but only the intended recipient processes it.
* **Backbone (Bus Topology)**: The single central cable to which all network devices are connected in a bus topology.
* **Star Topology**: A network layout where each node is connected back to a centralized connection point, typically a network switch.
* **Hub-and-Spoke Topology**: A variation of the star topology where a centralized node (the "hub") is connected to multiple other nodes (the "spokes"). Spokes are not directly connected to each other and must transmit data via a hub.
* **Mesh Topology**: A network topology featuring point-to-point connections between devices to create a robust and redundant network.
* **Full-Mesh Topology**: A type of mesh topology where every node is connected directly to every other node in the network.
* **Partial-Mesh Topology**: A less interlinked version of a mesh topology where some nodes are organized in a full-mesh scheme, while others are only connected to one or two devices.
* **WAN (Wide Area Network)**: A network that spans a large geographical area, often connecting multiple [[Local Area Network (LAN)]]s.
* **LAN (Local Area Network)**: A network that connects devices within a limited geographical area, such as a home, office, or campus.
* **CAN (Campus Area Network)**: A network that connects multiple LANs within a limited geographical area, such as a university campus or corporate park.
* **Data Center**: A facility used to house computer systems and associated components, such as telecommunications and storage systems.

## 🔄 How It Works (Processes)
* **Ring Topology Data Flow**: Data travels in one direction (unidirectional flow), either clockwise or counterclockwise, until it reaches its destination. This prevents data collisions.
* **Bus Topology Data Flow**: Data is sent by any device and is available to every other device on the bus. Only the intended recipient, identified by a unique address, processes the message.
* **Hub-and-Spoke Data Flow**: Spokes transmit data to a hub. The hub then forwards the data to another hub (if necessary) and onward to the final destination node in another spoke. This consolidates traffic through central points.
* **Full-Mesh Topology Connection Calculation**: The number of connections required for a full-mesh topology is calculated using the formula: `n * (n - 1) / 2`, where `n` is the number of nodes.
 * Example for 3 nodes: `3 * (3 - 1) / 2 = 3 * 2 / 2 = 3` connections.
 * Example for 6 nodes: `6 * (6 - 1) / 2 = 6 * 5 / 2 = 30 / 2 = 15` connections.

## 📊 Comparisons & Key Differences

| Feature| Physical Topology FDDI is really well known for high bandwidth, and this makes it really suitable for environments with large data transfers and high reliability requirements such as campus area networks or data centers.

## ⚠️ Exam Tips & Important Notes
* **Distinction between Physical and Logical Topologies**: This is a crucial concept. Understand that physical focuses on the actual cabling and device placement, while logical focuses on data flow.
* **Ring Topology Vulnerability**: A single node failure can disrupt the entire network unless redundant connections (like FDDI's dual ring) are present.
* **Bus Topology Limitations**: The entire network can fail if the main cable (backbone) fails. Performance decreases as more devices are added due to increased data collisions.
* **Star Topology Central Point of Failure**: The entire network depends on the functioning of the central switch. If the switch fails, the network becomes inoperable.
* **Mesh Topology Complexity vs. Redundancy**: Full-mesh offers high redundancy but is expensive and complex due to the high number of cables and ports. Partial-mesh balances redundancy with cost and complexity.
* **Older Technologies**: Ring and Bus topologies are generally considered older technologies and are not commonly used in modern home, small office, or enterprise environments, with FDDI being a notable exception for ring.
* **Modern Common Topologies**: Star topology is one of the most common network layouts in use today (e.g., home networks).
* **Hub-and-Spoke Use Cases**: Commonly used in airlines and telecommunication networks for consolidating regional traffic to central hubs.

## ❓ Questions to Review
1. What is the primary difference between a physical topology and a logical topology?
2. Describe the key characteristics of a point-to-point topology and provide an example of its use in a large network.
3. Explain how a ring topology prevents data collisions and what its main vulnerability is. How does FDDI address this vulnerability?
4. What are the advantages and disadvantages of a bus topology? Why is it considered an older technology?
5. In a star topology, what device typically serves as the centralized connection point, and what is the main point of failure for this topology?
6. How does a hub-and-spoke topology differ from a standard star topology? Provide a real-world analogy for its operation.
7. Calculate the number of connections required for a full-mesh topology with 8 nodes.
8. Compare and contrast full-mesh and partial-mesh topologies, highlighting their respective benefits and drawbacks.

## 🔗 Related Topics
* [[Network Topology]]
* [[Physical Topology]]
* [[Logical Topology]]
* [[Point-to-Point Topology]]
* [[Ring Topology]]
* [[Bus Topology]]
* [[Star Topology]]
* [[Hub-and-Spoke Topology]]
* [[Mesh Topology]]
* [[FDDI]]
* [[WAN]]
* [[LAN]]
* [[CAN]]
* [[Data Center]]
* [[Network Design]]
* [[Redundancy]]
* [[Scalability]]
* [[Network Switch]]
* [[Network Hub]]
