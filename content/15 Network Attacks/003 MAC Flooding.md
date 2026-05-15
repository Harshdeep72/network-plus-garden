# 003 MAC Flooding

**Module/Section:** 15 Network Attacks
**Tags:** #security #switching #layer-2-attacks #🌱seedling

---

![[003 MAC Flooding.mp4]]

## 📖 Core Concept
**MAC Flooding** is a network attack technique designed to compromise the security and operational integrity of a network switch by overflowing its **MAC Address Table** (also known as the Content Addressable Memory or CAM table).

* **Normal Operation:** A switch maintains a MAC table to map specific MAC addresses to specific physical switch ports. This ensures efficient, unicast data forwarding.
* **The Attack:** An attacker sends a massive volume of frames with spoofed (fake) source MAC addresses to the switch.
* **The Result:** Once the MAC table reaches its capacity, the switch enters a "fail-safe" mode. In this state, the switch can no longer perform intelligent switching and begins to function like a **Hub**, broadcasting all incoming traffic out of every port. This transition is often referred to as "failing open."

## 🛠️ Hardware & Devices
* **Network Switch:** The primary target of a MAC flooding attack. The attack exploits the switch's finite memory capacity for storing MAC-to-port mappings.
* **Hub:** The device type that a switch mimics once its MAC table is flooded. Hubs operate at Layer 1 and broadcast all traffic to all connected ports.
* **Network Interface Card (NIC):** Used by the attacker to send the flood of frames and to capture traffic when the switch is in "hub mode."

## 📜 Protocols & Standards
* **MAC (Media Access Control) Address:** A unique 48-bit hardware identifier assigned to a network interface controller (NIC).
* **VLAN (Virtual Local Area Network):** A logical segmentation of a network used to contain the blast radius of an attack.

## 🔑 Key Terminology
* **MAC Flooding:** An attack that inundates a switch with fake MAC addresses to exhaust its memory.
* **MAC Address Table:** A database on a switch that maps MAC addresses to physical ports.
* **Promiscuous Mode:** A mode of operation for a NIC that allows it to capture all traffic passing through the network segment, regardless of the intended destination MAC address.
* **Data Snooping:** The act of intercepting and viewing sensitive data as it traverses the network.
* **Denial of Service (DoS):** An attack intended to shut down a machine or network, making it inaccessible to its intended users.
* **MAC-based Access Control:** A security feature that restricts network access by permitting or denying devices based on their unique MAC address.
* **Port Security:** A switch feature that limits the number of MAC addresses allowed on a single physical port.
* **Anomaly-based Intrusion Detection System (IDS):** A security system that monitors network traffic for deviations from established "normal" behavior patterns.

## 🔄 How It Works (Processes)
1. **Preparation:** The attacker connects to a switch port and uses specialized software to generate thousands of random, fake MAC addresses.
2. **Inundation:** The attacker sends a rapid stream of frames containing these fake MAC addresses to the switch.
3. **Table Exhaustion:** The switch attempts to learn these addresses and adds them to its MAC table. Eventually, the table reaches its maximum capacity.
4. **Fail-Safe Mode:** Unable to store new entries, the switch stops performing intelligent unicast forwarding and begins broadcasting all incoming frames to all ports (acting as a hub).
5. **Exploitation:**
 * **Snooping:** The attacker puts their NIC into **Promiscuous Mode** to capture all broadcasted traffic.
 * **Disruption:** The network performance degrades due to the massive volume of broadcast traffic.
 * **Bypass:** Security filters (like MAC-based access control) fail because the switch can no longer process the allow/deny lists correctly.

## 📊 Comparisons & Key Differences
| Feature| Normal Switch Operation| MAC Flooding State|
| :---| :---| :---|
| **Traffic Forwarding**| Unicast (to specific port)| Broadcast (to all ports)|
| **MAC Table Status**| Efficiently mapped| Full / Overwhelmed|
| **Security Level**| High (traffic is isolated)| Low (traffic is exposed)|
| **Device Behavior**| Intelligent Layer 2| Hub-like Layer 1|

## ⚠️ Exam Tips & Important Notes
* **The "Why":** Remember the three primary goals of MAC flooding: **Data snooping**, **Disruption of services**, and **Bypassing security measures**.
* **Prevention is Key:** The exam will likely ask how to mitigate this. Key answers include:
 * **Port Security:** Limiting the number of MAC addresses per port.
 * **VLANs:** Segmenting the network to limit the impact of an attack.
 * **IDS:** Monitoring for unusual spikes in broadcast traffic or MAC table entries.
* **The "Fail-Open" Concept:** Understand that when a switch is overwhelmed, it does not necessarily shut down; it often reverts to a less secure, "hub-like" state.

## ❓ Questions to Review
1. What is the primary purpose of a MAC address table in a switch?
2. What happens to a switch's forwarding behavior when its MAC table is full?
3. Why does an attacker put their NIC into "promiscuous mode" during a MAC flooding attack?
4. How does implementing VLANs help mitigate the impact of a MAC flooding attack?
5. Which specific switch feature is designed to limit the number of MAC addresses learned on a single port?

## 🔗 Related Topics
* [[Switching]]
* [[VLANs]]
* [[Intrusion Detection System (IDS)]]
* [[Denial of Service (DoS)]]
* [[Port Security]]
