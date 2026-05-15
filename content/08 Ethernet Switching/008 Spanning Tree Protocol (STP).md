# 008 Spanning Tree Protocol (STP)

**Module/Section:** 08 Ethernet Switching
**Tags:** #switching #STP #layer2 #🌱seedling

---

![[008 Spanning Tree Protocol (STP).mp4]]

## 📖 Core Concept
The **Spanning Tree Protocol (STP)** is a Layer 2 network protocol designed to prevent loops in Ethernet networks that contain redundant physical paths.

* **The Problem:** In a redundant network (multiple paths between switches), switches can inadvertently create a "switching loop." This happens when MAC address tables become corrupted because a switch sees the same MAC address arriving on multiple ports. This leads to a **broadcast storm**, where broadcast frames are forwarded back and forth between switches, replicating infinitely until the network bandwidth is consumed and the devices crash.
* **The Goal:** To achieve "five nines" of availability (99.999% uptime, or roughly 5 minutes of downtime per year), redundancy is required. STP provides this redundancy by logically blocking redundant paths while keeping them available as backups should the primary path fail.
* **The Result:** STP turns a physical loop into a logical "tree" structure, ensuring there is only one active path between any two points in the network.

## 🛠️ Hardware & Devices
* **Switches:** The primary devices that run STP to manage traffic paths.
* **Cabling:** STP uses cable types to determine "cost."
 * **Cat 3:** 10 Mbps (High cost).
 * **Cat 5 (Fast Ethernet):** 100 Mbps (Medium cost).
 * **Cat 7 / Fiber:** 10 Gbps+ (Low cost).

## 📜 Protocols & Standards
* **IEEE 802.1d:** The original standard for the Spanning Tree Protocol.
* **BPDU (Bridge Protocol Data Unit):** The frames used by switches to exchange information about the spanning tree topology (e.g., bridge IDs, port costs).

## 🔑 Key Terminology
* **Bridge ID (BID):** A unique identifier for a switch in an STP topology, consisting of a priority value and the switch's MAC address.
* **Root Bridge:** The "reference point" switch for the entire network. It is elected based on having the lowest BID.
* **Non-Root Bridge:** Any switch in the network that is not the Root Bridge.
* **Root Port:** The port on a non-root bridge that has the lowest cost path to the Root Bridge. Every non-root bridge must have exactly one root port.
* **Designated Port:** A port that is allowed to forward traffic. Every network segment has one designated port. All ports on a Root Bridge are designated ports.
* **Non-Designated Port:** A port that is blocked (red state) to prevent loops. It does not forward traffic but listens for BPDUs.
* **Broadcast Storm:** A condition where broadcast traffic loops indefinitely, consuming all network resources and causing a crash.
* **Long STP:** A newer standard for calculating path costs that accommodates much higher link speeds (e.g., 10 Gbps and beyond) by using a larger range of cost values.

## 🔄 How It Works (Processes)

### 1. Root Bridge Election
* Switches compare their **Bridge IDs (BID)**.
* The switch with the **lowest priority value** wins.
* If priorities are equal, the switch with the **lowest MAC address** is elected as the Root Bridge.

### 2. Port Role Assignment
* **Root Port:** Selected on non-root bridges based on the lowest path cost to the Root Bridge. If costs are tied, the lowest port number is used.
* **Designated Port:** The port on a segment closest to the root bridge.
* **Non-Designated Port:** The "blocked" port that prevents the loop.

### 3. Port State Transitions
When a link fails or the network initializes, ports transition through these states:
1. **Blocking:** The port is blocked to prevent loops; it only listens for BPDUs.
2. **Listening:** The switch begins to populate its MAC address table but does not yet forward frames.
3. **Learning:** The switch processes BPDUs to determine its role (Root, Designated, or Non-Designated).
4. **Forwarding:** The port is fully operational and forwards data frames.

### 4. Link Cost Logic
* **Inverse Relationship:** Higher speed = Lower cost. Lower speed = Higher cost.
* **Example:** Fast Ethernet (100 Mbps) has a cost of 19. Slower Ethernet (10 Mbps) has a cost of 100.

## 📊 Comparisons & Key Differences

| Feature| Root Bridge| Non-Root Bridge|
| :---| :---| :---|
| **Election**| Lowest BID| All other switches|
| **Port Status**| All ports are Designated| Contains Root, Designated, and Non-Designated ports|
| **Function**| Reference point for topology| Learns path to Root|

## ⚠️ Exam Tips & Important Notes
* **The Golden Rule of Cost:** Remember the inverse relationship: **Faster speed = Lower cost**. You do not need to memorize the specific cost tables (e.g., 19, 100), but you must understand the relationship for exam questions.
* **Troubleshooting:** If a network is crashing due to a loop and STP is not configured, the manual "fix" is to unplug the switch and wait for the MAC table to clear (approx. 30 seconds).
* **Redundancy:** STP is the reason we can have redundant links without crashing the network.
* **BPDU:** Know that BPDUs are the "language" switches use to talk to each other about the spanning tree.

## ❓ Questions to Review
1. What is the primary purpose of the Spanning Tree Protocol (802.1d)?
2. How does a switch determine which other switch becomes the Root Bridge?
3. What is the difference between a Root Port and a Designated Port?
4. Why does a slower link have a higher cost in STP?
5. What are the four states a port transitions through when moving from blocking to forwarding?

## 🔗 Related Topics
* [[Ethernet Switching]]
* [[MAC Address Table]]
* [[Broadcast Domains]]
* [[Network Availability]]
