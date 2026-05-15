# 011 Basic Network Device Commands

**Module/Section:** 23 Troubleshooting Tools
**Tags:** #cisco #troubleshooting #cli #routing #switching #🌱seedling

---

![[011 Basic Network Device Commands.mp4]]

## 📖 Core Concept
The lesson focuses on "Network Platforms," which CompTIA defines as any **router, switch, or firewall**, regardless of the manufacturer. Because CompTIA exams are vendor-neutral, students must understand that while specific command syntax varies by brand (e.g., Cisco, Juniper, Sidewinder), the functional purpose of these commands remains consistent across the industry. The primary focus is on three essential diagnostic commands: `show interface`, `show config`, and `show route`.

## 🛠️ Hardware & Devices
* **Routers:** Devices that forward data packets between computer networks.
* **Switches:** Devices that connect devices on a computer network by using packet switching to receive and forward data to the destination device.
* **Firewalls:** Security devices that monitor and control incoming and outgoing network traffic based on predetermined security rules.
* **Hubs:** Mentioned as a potential cause of collisions when connected downstream to a switch port.
* **Cabling:**
 * **Cat 3:** Associated with 10 Mbps speeds.
 * **Cat 5/6:** Higher-grade cabling capable of supporting faster speeds (100 Mbps+).
* **Console Port:** The physical port used for local management of a network device (often configured at 9,600 bits per second).

## 📜 Protocols & Standards
* **DHCP (Dynamic Host Configuration Protocol):** Used for dynamic IP assignment. Failure results in **APIPA** (169.254.x.x) addresses.
* **SNMP (Simple Network Management Protocol):** Used for network management and monitoring.
* **TFTP (Trivial File Transfer Protocol):** Used for simple file transfers, such as configuration files or firmware.
* **DNS (Domain Name System):** Used to resolve hostnames to IP addresses.
* **TACACS+ (Terminal Access Controller Access-Control System Plus):** A protocol used for AAA (Authentication, Authorization, and Accounting).
* **IPX (Internetwork Packet Exchange):** An older, legacy networking protocol.
* **VTP (VLAN Trunking Protocol):** A Cisco-proprietary protocol used to propagate VLAN information across a network.
* **STP (Spanning Tree Protocol):** A Layer 2 protocol that prevents loops in network topologies.
* **CGMP (Cisco Group Management Protocol):** A Cisco-specific protocol used to manage multicast traffic on switches (an older form of IGMP).
* **Syslog:** A standard for message logging.
* **NTP (Network Time Protocol):** Used to synchronize the clocks of computer systems.
* **IGMP (Internet Group Management Protocol):** Used by hosts and adjacent routers to establish multicast group memberships.
* **OSPF (Open Shortest Path First):** A link-state routing protocol.
* **RIP (Routing Information Protocol):** A distance-vector routing protocol.
* **BGP (Border Gateway Protocol):** An exterior gateway protocol designed to exchange routing information between autonomous systems.
* **EGP (Exterior Gateway Protocol):** An older routing protocol category.
* **IGRP (Interior Gateway Routing Protocol):** A distance-vector routing protocol developed by Cisco.

## 🔑 Key Terminology
* **Network Platform:** A vendor-neutral term for routers, switches, and firewalls.
* **APIPA (Automatic Private IP Addressing):** A link-local address (169.254.0.0/16) assigned automatically when a DHCP server is unreachable.
* **MTU (Maximum Transmission Unit):** The size of the largest protocol data unit that can be communicated in a single network layer transaction. Default is 1500 bytes; **Jumbo Frames** can be up to 9,000 bytes.
* **Runts:** Ethernet frames that are smaller than the minimum allowed size (64 bytes).
* **Giants:** Ethernet frames that exceed the maximum allowed size (1518 bytes).
* **Collision:** An event where two devices on a shared physical medium transmit data simultaneously.
* **Baud Rate:** The rate at which information is transferred in a communication channel (e.g., 9,600 bps for console).
* **VMPS (VLAN Management Policy Server):** A server that assigns switch ports to VLANs dynamically based on the MAC address of the connected device.
* **Administrative Distance (AD):** A measure of the "trustworthiness" of a routing information source. Lower values are more trusted.
* **Metric:** A value assigned to an IP route by a routing protocol to determine the "cost" or "best path" to a destination.
* **Gateway of Last Resort:** The default route used when no other specific route is found in the routing table.

## 🔄 How It Works (Processes)
* **`show interface`:** Displays statistics for a specific interface. Used to verify if an interface is "up/up," check for errors (runts/giants/collisions), and verify bandwidth settings.
* **`show config`:** Displays the running configuration of the device. Used to audit system settings, SNMP, DNS, VTP, and interface configurations.
* **`show ip route`:** Displays the routing table. It identifies the source of the route (e.g., OSPF, RIP, Static), the Administrative Distance, the Metric, the next-hop IP address, and the exit interface.

## 📊 Comparisons & Key Differences

| Feature| Cisco Command| Juniper Equivalent| Sidewinder Equivalent|
| :---| :---| :---| :---|
| **Interface Stats**| `show interface`| `show interfaces`| `cf interface`|
| **Configuration**| `show config`| `show configuration`| `cf config`|
| **Routing Table**| `show ip route`| `show route`| `cf route status`|

* **Administrative Distance vs. Metric:** AD determines which routing protocol to trust if multiple protocols provide a path to the same network. The Metric determines the best path within a single routing protocol.

## ⚠️ Exam Tips & Important Notes
* **Vendor Neutrality:** CompTIA does not test on specific vendor syntax exclusively. Understand the *concept* of what the command does (e.g., "What command would you use to view interface errors?").
* **Collision Domains:** On a properly configured switch, collisions should be zero. If you see collisions, it indicates a potential issue, such as a hub being connected to the port.
* **APIPA:** If you see an address starting with 169.254, immediately suspect a DHCP failure.
* **MTU:** Remember that 1500 bytes is the standard Ethernet MTU, while 9000 bytes is the standard for Jumbo Frames (often used in SANs).
* **Reading Routing Tables:** Be prepared to identify the "Gateway of Last Resort" and understand that the first number in the brackets `[AD/Metric]` is the Administrative Distance.

## ❓ Questions to Review
1. What does an APIPA address indicate when viewing interface statistics?
2. Why would you see collisions on a switch port, and what does that suggest about the network topology?
3. What is the difference between a "runt" and a "giant" in interface statistics?
4. If a router has two paths to the same network, one via OSPF and one via EGP, which one will it choose based on Administrative Distance?
5. What is the purpose of the "Gateway of Last Resort" in a routing table?

## 🔗 Related Topics
* [[DHCP]]
* [[VLANs]]
* [[Spanning Tree Protocol]]
* [[SNMP]]
* [[Routing Protocols]]
