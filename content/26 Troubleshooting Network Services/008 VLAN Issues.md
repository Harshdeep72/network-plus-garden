# 008 VLAN Issues

**Module/Section:** 26 Troubleshooting Network Services
**Tags:** #vlan #troubleshooting #routing #broadcast-domain #🌱seedling

---

![[008 VLAN Issues.mp4]]

## 📖 Core Concept
The primary focus of this lesson is identifying and resolving connectivity issues related to [[VLAN]] (Virtual Local Area Network) configurations. The instructor emphasizes two fundamental rules for VLAN functionality:
1. **Inter-VLAN Routing:** VLANs are logically separated broadcast domains. By design, devices in different VLANs cannot communicate with each other unless a Layer 3 device (a router or Layer 3 switch) is configured to route traffic between them.
2. **Logical Subnetting:** Devices within the same VLAN must reside within the same logical IP subnet. If a device is placed in a VLAN but assigned an IP address from a different subnet, it will fail to communicate correctly.

The instructor highlights that the most common cause of VLAN communication failure is the lack of proper routing between the VLANs or the absence of a configured default gateway for the clients.

## 🛠️ Hardware & Devices
* **Switch:** Used to connect devices within the network. The video mentions connecting multiple switches (Switch 1 and Switch 2) to support VLANs across a physical topology.
* **Router:** A Layer 3 device required to route traffic between different VLANs and to provide connectivity to external networks like the internet.
* **Server:** A device that, if left in the default VLAN (VLAN 1), may experience performance degradation due to excessive broadcast traffic.

## 📜 Protocols & Standards
* **VLAN (Virtual Local Area Network):** A logical grouping of devices on a single physical network.
* **Subnetting (IPv4):** The process of dividing a network into smaller segments. The video uses `/24` (255.255.255.0) as the standard subnet mask for the examples.

## 🔑 Key Terminology
* **VLAN (Virtual Local Area Network):** A logical partition of a network that segments broadcast domains at Layer 2.
* **Default VLAN (VLAN 1):** The native VLAN that all ports on a switch are assigned to by default if they are not explicitly configured otherwise.
* **Broadcast Domain:** A logical division of a computer network in which all nodes can reach each other by broadcast at the data link layer.
* **Inter-VLAN Routing:** The process of forwarding network traffic from one VLAN to another using a router or Layer 3 switch.
* **Default Gateway:** The node on a computer network that serves as the forwarding device (router) to connect to other networks.
* **Untagged Port:** A switch port configured to belong to a specific VLAN, where the traffic is not tagged with a VLAN ID; typically used for end-user devices.

## 🔄 How It Works (Processes)
1. **The Problem:** Clients in different VLANs (e.g., IT VLAN 100 and HR VLAN 200) attempt to communicate. Because they are in different broadcast domains and lack a router interface configured for their respective subnets, the traffic is dropped.
2. **The Diagnostic:** Check if the clients have a valid default gateway. If the gateway is on a different subnet (e.g., the router interface is on the default VLAN 1, but the client is on VLAN 100), the client cannot reach the router.
3. **The Solution:**
 * Connect the switch(es) to a router.
 * Configure sub-interfaces or physical interfaces on the router for each VLAN.
 * Assign an IP address to the router interface that belongs to the specific VLAN's subnet.
 * Ensure clients are configured with that router interface IP as their default gateway.

## 📊 Comparisons & Key Differences
| Feature| Default VLAN (VLAN 1)| Dedicated/Segmented VLAN|
| :---| :---| :---|
| **Traffic Load**| High (contains all devices)| Low (contains specific devices)|
| **Broadcasts**| High volume, causes latency| Segregated, reduces congestion|
| **Security**| Low (all devices can see traffic)| High (traffic is isolated)|
| **Performance**| Slower due to broadcast storms| Faster due to smaller domains|

## ⚠️ Exam Tips & Important Notes
* **Number One Cause:** The instructor emphasizes that the #1 cause of VLAN issues is the **lack of proper routing** between the VLANs.
* **Broadcast Domains:** If you do not use VLANs, all devices remain in the default VLAN (VLAN 1), creating one massive broadcast domain. This leads to performance issues, especially for servers.
* **Logical vs. Physical:** Always remember that VLANs are logical. You can have devices physically connected to different switches, but they can still be part of the same logical VLAN if the switches are configured correctly (e.g., via trunking, though not explicitly detailed in this clip).
* **Troubleshooting Step:** If a device cannot reach the internet or another VLAN, verify the IP address, subnet mask, and the default gateway configuration first.

## ❓ Questions to Review
1. Why can't a device in VLAN 100 communicate with a device in VLAN 200 by default?
2. What is the primary performance drawback of keeping all network devices in the default VLAN (VLAN 1)?
3. If a client is in the 192.168.1.0/24 subnet, what must the router interface connected to that VLAN be configured with to allow the client to communicate outside its subnet?
4. What is the purpose of moving a server from the default VLAN to a dedicated "Server VLAN"?
5. True or False: A router is required to allow communication between two devices in the same VLAN.

## 🔗 Related Topics
* [[VLANs]]
* [[Subnetting]]
* [[Broadcast Domains]]
* [[Inter-VLAN Routing]]
* [[Default Gateway]]
