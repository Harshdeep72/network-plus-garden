# 002 Collisions and Broadcast Storms

**Module/Section:** 27 Troubleshooting Performance Issues
**Tags:** #troubleshooting #ethernet #switching #broadcast-storms #🌱seedling

---

![[002 Collisions and Broadcast Storms.mp4]]

## 📖 Core Concept
The lesson focuses on identifying and mitigating two primary performance-degrading issues: **Collisions** (Layer 1/2 physical medium contention) and **Broadcast Storms** (Layer 2/3 traffic flooding).

* **Collisions:** Occur when two devices transmit simultaneously on a shared medium, causing signals to combine and become unreadable. This results in retransmissions, which exponentially degrade network throughput.
* **Broadcast Storms:** Occur when a network is overwhelmed by continuous broadcast or multicast traffic, potentially leading to a Denial of Service (DoS) condition.

## 🛠️ Hardware & Devices
* **Hub:** A Layer 1 device that connects all devices into a single collision domain and a single broadcast domain.
* **Switch:** A Layer 2 device that breaks up collision domains (each port is its own domain) but does not break up broadcast domains.
* **Bridge:** A Layer 2 device used to segment networks; like switches, they break up collision domains.
* **Router:** A Layer 3 device used to break up broadcast domains.
* **Layer 3 Switch (Multilayer Switch):** A device capable of routing traffic and breaking up broadcast domains.
* **Network Interface Card (NIC):** The physical component in a host that may malfunction and cause excessive collisions.

## 📜 Protocols & Standards
* **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** Used in wired Ethernet to detect and manage collisions.
* **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):** Used in wireless networks to avoid collisions.
* **DHCP (Dynamic Host Configuration Protocol):** Uses the DORA process (Discover, Offer, Request, Acknowledge). The "Discover" phase is a broadcast.
* **BPDU (Bridge Protocol Data Unit):** Frames used by switches to exchange information to prevent loops (e.g., Spanning Tree Protocol).
* **ARP (Address Resolution Protocol):** Frequently the source of broadcast traffic during a storm.

## 🔑 Key Terminology
* **Collision Domain:** A network segment where devices share a medium; if two devices transmit at once, a collision occurs.
* **Broadcast Domain:** A logical division of a network where all nodes can reach each other via Layer 2 broadcast.
* **Deferred Counter:** A statistic indicating the number of times an interface attempted to send a frame but found the carrier busy (carrier sensing).
* **Late Collision:** A collision detected after the 512th bit (5.12 microseconds) of a frame has been transmitted. Usually indicates cabling issues, bad NICs, or too many hubs.
* **Excessive Collision:** Occurs when a frame fails to transmit after 16 attempts; the frame is dropped.
* **Back-off Timer:** A random duration a device waits before attempting to retransmit after a collision.
* **Broadcast Address (Layer 2):** `FF:FF:FF:FF:FF:FF`
* **Broadcast Address (Layer 3):** `255.255.255.255`
* **DORA Process:** The four-step process for DHCP: Discover, Offer, Request, Acknowledge.

## 🔄 How It Works (Processes)
* **Collision Handling:** When a collision is detected, devices pick a random back-off timer and retransmit. If it fails 16 times, the frame is dropped.
* **Broadcast Storm Mitigation:**
 1. **Subnetting:** Dividing large networks into smaller subnets using routers/L3 switches.
 2. **Loop Prevention:** Enabling BPDUs on managed switches.
 3. **Port Security:** Limiting the maximum number of MAC addresses allowed per switch port.
 4. **DHCP Relay:** Properly configuring relays to prevent broadcast flooding during the DORA process.

## 📊 Comparisons & Key Differences

| Feature| Hub-based Network| Switch-based Network|
| :---| :---| :---|
| **Collision Domain**| One large domain| Each port is a separate domain|
| **Broadcast Domain**| One large domain| One large domain (unless using VLANs/Routers)|
| **Performance**| Low (high collision rate)| High (collision-free)|
| **Deferred Counter**| Normal operation| Should be zero|

## ⚠️ Exam Tips & Important Notes
* **Troubleshooting Collisions:** If you see collisions on a switch, something is wrong (e.g., duplex mismatch). If you see them on a hub, it is normal.
* **Late Collisions:** Often caused by incorrect cabling or exceeding distance/hub limitations.
* **Excessive Collisions:** Often caused by full-duplex devices connected to a shared (hub) segment or a faulty NIC.
* **Command Line:**
 * `show interface`: View collision and deferred counters.
 * `show controller ethernet`: View excessive collision counters.
 * `tcpdump -i [interface] ether broadcast and ether multicast`: Capture broadcast/multicast traffic.
* **Exam Gotcha:** Remember that switches **do not** break up broadcast domains; only routers and Layer 3 switches do.

## ❓ Questions to Review
1. What is the primary difference between a collision domain and a broadcast domain regarding the devices that segment them?
2. Why does a "late collision" typically indicate a physical layer issue rather than a standard contention issue?
3. What is the maximum number of retransmission attempts a device will make before dropping a frame due to excessive collisions?
4. How can you distinguish between normal network traffic and a broadcast storm using packet counters?
5. What are three specific ways to prevent broadcast storms in a switched environment?

## 🔗 Related Topics
* [[Ethernet]]
* [[VLANs]]
* [[Spanning Tree Protocol]]
* [[DHCP]]
* [[ARP]]
