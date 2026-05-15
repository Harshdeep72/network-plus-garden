# 003 Network Devices

**Module/Section:** 08 Ethernet Switching
**Tags:** #layer-1 #layer-2 #layer-3 #switching #routing #🌱seedling

---

![[003 Network Devices.mp4]]

## 📖 Core Concept
The lesson focuses on the evolution and function of network infrastructure devices. The primary goal is to understand how these devices manage traffic, specifically regarding **Collision Domains** and **Broadcast Domains**.

* **Evolution:** Network technology evolved from hubs (Layer 1) to bridges (Layer 2), which eventually merged to create modern switches (Layer 2). Routers (Layer 3) were introduced to connect dissimilar networks and manage traffic at a higher logical level.
* **Performance & Efficiency:** Modern networking relies on switches to isolate traffic to specific ports, reducing unnecessary network noise and collisions, thereby increasing bandwidth efficiency.

## 🛠️ Hardware & Devices
* **Hub:** A physical (Layer 1) device used to connect multiple network devices. It acts as a multi-port repeater.
 * *Types:* Passive (no amplification), Active (signal boosting), Smart (includes management features like SNMP).
* **Bridge:** A Layer 2 device that analyzes source MAC addresses to make forwarding decisions, effectively breaking up collision domains.
* **Switch:** A Layer 2 device that acts as a "multi-port bridge." Each port represents an individual collision domain.
* **Router:** A Layer 3 device used to connect dissimilar networks (e.g., LAN to Internet). It makes forwarding decisions based on IP addresses.
* **Layer 3 Switch (Multi-layer Switch):** A hybrid device that performs both Layer 2 switching and Layer 3 routing functions.
* **Cabling/Connectors:**
 * **Twisted Pair (Cat5):** Has a 100-meter distance limitation.
 * **Router Interfaces:** Serial, RJ45, ST (Fiber), GBIC (Gigabit Interface Converter), SFP (Small Form-factor Pluggable), QSFP (Quad Small Form-factor Pluggable).

## 📜 Protocols & Standards
* **SNMP (Simple Network Management Protocol):** Used in "Smart Hubs" to allow remote configuration and management.
* **ARP (Address Resolution Protocol):** Used to map a known IP address to an unknown MAC address.
* **SSH (Secure Shell):** A protocol used for secure remote control/access to network devices.
* **IPv4/IPv6:** Logical addressing schemes used by routers (Layer 3) to make routing decisions.

## 🔑 Key Terminology
* **Collision Domain:** A network segment where data packets can collide with one another when being sent on a shared medium.
* **Broadcast Domain:** A logical division of a computer network where all nodes can reach each other by broadcast at the data link layer.
* **MAC Address Table:** An internal table in a switch/bridge that maps MAC addresses to specific physical ports.
* **Full Duplex:** The ability of a device to send and receive data simultaneously.
* **Layer 1 (Physical):** Deals with raw bit transmission and physical hardware (Hubs).
* **Layer 2 (Data Link):** Deals with MAC addresses and frame forwarding (Switches/Bridges).
* **Layer 3 (Network):** Deals with IP addresses and routing (Routers).

## 🔄 How It Works (Processes)
1. **Switch Learning:** When a frame enters a switch, the switch records the source MAC address and the port it arrived on into its MAC address table.
2. **ARP Process:**
 * PC1 sends an ARP request to find the MAC address of a server.
 * The switch receives the request, records the sender's location, and broadcasts the request out all other ports (if the destination is unknown).
 * The target device responds, allowing the switch to learn the target's port location.
3. **Forwarding:** Once the MAC address table is populated, the switch performs "unicast" forwarding, sending data only to the specific port associated with the destination MAC, rather than broadcasting to all ports.

## 📊 Comparisons & Key Differences

| Device| Layer| Collision Domain| Broadcast Domain|
| :---| :---| :---| :---|
| **Hub**| 1| One large domain| One large domain|
| **Bridge**| 2| Per port| One large domain|
| **Switch**| 2| Per port| One large domain|
| **Router**| 3| Per port| Per port|
| **L3 Switch**| 3| Per port| Per port|

## ⚠️ Exam Tips & Important Notes
* **The "Switch" Rule:** For the CompTIA Network+ exam, **always** treat a "switch" as a Layer 2 device unless the question explicitly specifies "Layer 3 switch" or "Multi-layer switch."
* **Distance Limitation:** Twisted pair cabling has a 100-meter limit. Active hubs can be used to "restart" this count.
* **Best Practice:** When using hubs to extend distance, it is recommended to use only 60-70% of the maximum cable length (60-70 meters) to account for measurement errors.
* **Device Identification:** Be able to identify icons for these devices on diagrams.

## ❓ Questions to Review
1. Why does a switch improve network performance compared to a hub?
2. At what layer of the OSI model does a standard switch operate?
3. What is the primary difference between a bridge and a router regarding broadcast domains?
4. If you have a 100-meter cable limit, why is an active hub preferred over a passive hub for long-distance runs?
5. How does a switch populate its MAC address table?

## 🔗 Related Topics
* [[OSI Model]]
* [[Ethernet Standards]]
* [[Routing Basics]]
* [[VLANs]] (Implied context for broadcast domains)
