# 005 VLAN Hopping

**Module/Section:** 15 Network Attacks
**Tags:** #vlan #security #layer2-attacks #switching #🌱seedling

---

![[005 VLAN Hopping.mp4]]

## 📖 Core Concept
**VLAN Hopping** is a network attack technique where an attacker exploits misconfigurations in switch settings to gain unauthorized access to traffic on a VLAN other than the one they are currently connected to.

* **Purpose of VLANs:** VLANs (Virtual Local Area Networks) are used to partition broadcast domains and isolate network segments at Layer 2 (Data Link Layer). This segmentation forces traffic to pass through a Layer 3 device (router or multilayer switch) to move between VLANs, allowing for the application of Access Control Lists (ACLs) for security.
* **The Attacker's Goal:** To bypass this Layer 3 segmentation and gain access to sensitive segments (e.g., a Server VLAN) from a compromised workstation in a less secure VLAN.

## 🛠️ Hardware & Devices
* **Switch:** A Layer 2 device that uses a CAM table to intelligently forward frames only to the destination port.
* **Hub:** A legacy device that lacks intelligence; it repeats all incoming traffic out of every port (broadcasts/floods).
* **Workstation:** The attacker's device, which can be configured to mimic switch behavior to exploit trunking protocols.
* **Packet Sniffer:** A tool used by an attacker to capture and analyze traffic once a switch has been forced to "fail open" and act as a hub.

## 📜 Protocols & Standards
* **802.1Q:** The IEEE standard for VLAN tagging. It allows frames to be tagged with a VLAN ID so switches can identify which VLAN the traffic belongs to.
* **DTP (Dynamic Trunking Protocol):** A Cisco-proprietary protocol used to negotiate trunking between switches. It is the primary target for **Switch Spoofing** attacks.

## 🔑 Key Terminology
* **VLAN Hopping:** A technique used to bypass VLAN segmentation to access traffic in unauthorized VLANs.
* **Double Tagging:** A VLAN hopping method where an attacker sends a frame with two 802.1Q tags. The outer tag matches the native VLAN, and the inner tag matches the target VLAN.
* **Native VLAN:** The VLAN that carries untagged traffic across a trunk link.
* **Switch Spoofing:** A technique where an attacker configures their workstation to negotiate a trunk link with a switch by mimicking a switch using DTP.
* **CAM Table (Content Addressable Memory):** A table in a switch that maps MAC addresses to specific physical switch ports.
* **MAC Table Overflow:** An attack that floods a switch with fake MAC addresses to fill the CAM table, forcing the switch to "fail open" and act as a hub.
* **Blind Attack:** An attack where the attacker sends data to a victim but cannot see the return traffic (common in double tagging).
* **Beaconing:** A process where a compromised host periodically calls out to a Command and Control (C2) server.

## 🔄 How It Works (Processes)

### 1. Double Tagging
1. Attacker connects to a switch port configured in access mode, belonging to the same VLAN as the trunk's **Native VLAN**.
2. Attacker sends a frame with two 802.1Q tags:
 * **Outer Tag:** Matches the Native VLAN.
 * **Inner Tag:** Matches the target (victim) VLAN.
3. The switch receives the frame, strips the outer (Native) tag, and forwards the frame across the trunk.
4. The receiving switch sees the inner tag and delivers the frame to the target VLAN.
5. *Note:* This is a one-way attack; return traffic cannot be routed back to the attacker.

### 2. Switch Spoofing
1. Attacker configures their workstation to use DTP (Dynamic Trunking Protocol) in "dynamic auto" or "dynamic desirable" mode.
2. Attacker connects to a switch port that is set to negotiate trunking.
3. The switch negotiates a trunk link with the attacker's workstation.
4. The attacker now has access to all VLANs permitted on that trunk.

### 3. MAC Table Overflow
1. Attacker floods the switch with a massive volume of frames containing spoofed source MAC addresses.
2. The switch's CAM table fills up.
3. The switch "fails open" and begins acting like a hub, broadcasting all traffic out of every port.
4. Attacker uses a sniffer to capture traffic from other VLANs.

## 📊 Comparisons & Key Differences

| Feature| Switch| Hub|
| :---| :---| :---|
| **Intelligence**| High (MAC-based forwarding)| None (Repeats all traffic)|
| **Security**| Segments traffic| Exposes all traffic to all ports|
| **VLAN Support**| Yes| No|

## ⚠️ Exam Tips & Important Notes
* **Prevention (Double Tagging):** Change the default Native VLAN (VLAN 1) to an unused ID and ensure no user devices are assigned to the Native VLAN.
* **Prevention (Switch Spoofing):** Disable DTP/auto-negotiation on all user-facing switch ports. Manually configure ports as "access" or "trunk" rather than leaving them in dynamic modes.
* **Exam Context:** Remember that double tagging is a **one-way** attack, often used for DoS or to establish a C2 beacon.
* **Exam Context:** MAC Table Overflow causes the switch to "fail open."

## ❓ Questions to Review
1. What is the primary purpose of a VLAN in a network environment?
2. Why is double tagging considered a "one-way" attack?
3. Which protocol is exploited during a switch spoofing attack?
4. What happens to a switch's forwarding behavior when its CAM table is overflowed?
5. What are two specific configuration changes to prevent double tagging attacks?

## 🔗 Related Topics
* [[VLANs]]
* [[Trunking]]
* [[Layer 2 Attacks]]
* [[Switching]]
