# 011 Virtual Extensible Local Area Network (VXLAN)

**Module/Section:** 13 Cloud and Datacenter
**Tags:** #VXLAN #virtualization #datacenter #🌱seedling

---

![[011 Virtual Extensible Local Area Network (VXLAN) is a network virtualization technology designed to overcome the limitations of traditional network infrastructures, specifically the scalability constraints of VLANs. It functions as a **network overlay technology** that encapsulates Layer 2 Ethernet frames within Layer 4 UDP packets. This allows a virtualized Layer 2 network to span across physical Layer 3 networks (LANs, WANs, or the Internet), effectively decoupling the virtual network topology from the physical network infrastructure.

## 🛠️ Hardware & Devices
* **Hypervisors:** Software platforms that host virtual machines (VMs); often serve as the location for VTEPs to perform encapsulation/de-encapsulation.
* **Physical Network Switches:** Can also act as VTEPs in hardware-based VXLAN implementations.
* **Virtual Machines (VMs):** The endpoints that communicate within the VXLAN segments, perceiving themselves to be on the same Layer 2 network regardless of physical location.

## 📜 Protocols & Standards
* **UDP (User Datagram Protocol):** Used as the transport layer protocol to encapsulate the original Ethernet frames.
* **VXLAN (Virtual Extensible Local Area Network):** The primary technology discussed; utilizes a 24-bit identifier.
* **VLAN (Virtual Local Area Network):** The legacy technology being addressed, limited by a 12-bit identifier.
* **Multicast:** Required within the underlying physical network to support broadcast and unknown unicast traffic within the VXLAN environment.

## 🔑 Key Terminology
* **VXLAN (Virtual Extensible Local Area Network):** A network virtualization technology that extends Layer 2 networks over Layer 3 infrastructures using encapsulation.
* **VTEP (VXLAN Tunnel Endpoint):** An entity (either a hypervisor or a physical switch) responsible for the encapsulation and de-encapsulation of Ethernet frames into VXLAN packets.
* **VNI (VXLAN Network Identifier):** A 24-bit identifier used to distinguish between different VXLAN segments; allows for over 16 million unique virtual networks.
* **Network Overlay:** A virtual network that is built on top of an existing physical network (the underlay).
* **Encapsulation:** The process of wrapping a data frame inside another packet (in this case, putting an Ethernet frame inside a UDP packet).
* **De-encapsulation:** The reverse process where the outer UDP header is stripped away to reveal the original Ethernet frame.

## 🔄 How It Works (Processes)
1. **Encapsulation:** When a VM sends data, the VTEP takes the Layer 2 Ethernet frame and wraps it inside a Layer 4 UDP packet.
2. **Tunneling:** The UDP packet is routed across the physical Layer 3 network (the "tunnel") to the destination VTEP.
3. **VNI Tagging:** The packet is tagged with a 24-bit VNI, ensuring the traffic stays isolated within the correct virtual segment.
4. **De-encapsulation:** The receiving VTEP strips the UDP header and delivers the original Layer 2 Ethernet frame to the destination VM.
5. **Communication:** The VMs communicate as if they are on the same local broadcast domain, even if they are separated by multiple routers or geographic distances.

## 📊 Comparisons & Key Differences

| Feature| VLAN| VXLAN|
| :---| :---| :---|
| **Identifier Size**| 12-bit| 24-bit|
| **Max Networks**| 4,096| ~16 Million|
| **Infrastructure**| Layer 2 dependent| Layer 3 (Overlay)|
| **Scalability**| Limited| Highly Scalable|

## ⚠️ Exam Tips & Important Notes
* **Scalability:** Remember that the jump from 4,096 (VLAN) to 16 million (VXLAN) identifiers is the primary reason for VXLAN's existence in modern cloud environments.
* **Complexity:** VXLANs introduce overhead (larger packet sizes) and potential latency due to the encapsulation process.
* **Requirements:** VXLAN requires multicast support in the underlying network to handle broadcast/unknown unicast traffic.
* **Definition:** Always associate VXLAN with "Layer 2 over Layer 3" and "UDP encapsulation."

## ❓ Questions to Review
1. What is the primary limitation of traditional VLANs that VXLAN was designed to solve?
2. How many bits are used for the VNI, and how many unique networks does this support?
3. What is the function of a VTEP?
4. Why does VXLAN require multicast support in the underlying network?
5. What are the potential downsides or challenges of implementing VXLAN?

## 🔗 Related Topics
* [[VLAN]]
* [[Layer 2 vs Layer 3]]
* [[UDP]]
* [[Network Virtualization]]
