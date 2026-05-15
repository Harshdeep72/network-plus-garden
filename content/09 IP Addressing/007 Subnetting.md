# 007 Subnetting

**Module/Section:** 09 IP Addressing
**Tags:** #subnetting #ipv4 #🌱seedling

---

![[007 Subnetting.mp4]]

## 📖 Core Concept
Subnetting is the process of taking a large network and splitting it into smaller, more manageable, and efficient sub-networks. It is a fundamental concept in logical IP addressing.

* **Purpose of Subnetting:**
 * **Efficiency:** Prevents wasting large blocks of IP addresses (e.g., a Class A network has 16.7 million addresses, which is rarely needed for a single department).
 * **Security:** Allows for the separation of networks, which can be managed via VLANs.
 * **Bandwidth Control:** Limits broadcast traffic by keeping it within smaller segments.
 * **Cost Management:** For public IP addresses, purchasing only what is needed saves significant money.
* **The "Hard Way" (Theory):** Involves borrowing bits from the host portion of an IP address and adding them to the network portion.
* **Classful vs. Classless:**
 * **Classful:** Uses default subnet masks (/8, /16, /24). These are rarely optimal for modern network design.
 * **Classless:** Uses custom subnet masks (e.g., /25 through /30) to create smaller, more specific network segments.

## 🛠️ Hardware & Devices
* **Router:** Essential for moving data between different subnets. Without a router, devices on different subnets cannot communicate.
* **End Devices:** Laptops, desktops, servers, phones, and tablets (used as examples of devices assigned to usable IP addresses).

## 📜 Protocols & Standards
* **CIDR (Classless Inter-Domain Routing):** A method for allocating IP addresses and IP routing that replaces the older classful system. It allows for route aggregation.
* **VLSM (Variable-Length Subnet Mask):** Allows subnets of different sizes to exist within the same network.
* **Routing Protocols (Supporting VLSM):**
 * **RIP** (Routing Information Protocol)
 * **OSPF** (Open Shortest Path First)
 * **IS-IS** (Intermediate System to Intermediate System)
 * **EIGRP** (Enhanced Interior Gateway Routing Protocol)
 * **BGP** (Border Gateway Protocol)

## 🔑 Key Terminology
* **Subnet Mask:** A 32-bit number that masks an IP address and divides the IP address into network address and host address.
* **Network ID:** The first IP address in a subnet range; it identifies the network itself and cannot be assigned to a host.
* **Broadcast ID:** The last IP address in a subnet range; used to communicate with all hosts on that specific subnet.
* **Assignable/Usable IP:** An IP address that can be assigned to a host (server, PC, etc.). Calculated as $2^h - 2$ (where $h$ is the number of host bits).
* **Slash Notation (CIDR Notation):** A shorthand way of writing a subnet mask (e.g., /24).
* **Route Aggregation:** The process of consolidating multiple contiguous network routes into a single, larger route advertisement to reduce routing table size.

## 🔄 How It Works (Processes)
1. **Calculating Number of Subnets:** Use the formula $2^s$, where $s$ is the number of bits borrowed from the host portion.
2. **Calculating Usable Hosts:** Use the formula $2^h - 2$, where $h$ is the number of remaining host bits. The "-2" accounts for the **Network ID** and the **Broadcast ID**.
3. **Determining Subnet Ranges:**
 * Start with the base network address.
 * Add the subnet size (number of IPs) to find the next network ID.
 * The broadcast ID is always one less than the next network ID.
4. **VLSM Implementation:** Instead of dividing a network into equal chunks, you divide it into chunks of varying sizes based on the specific needs of different departments (e.g., IT, HR, Sales).

## 📊 Comparisons & Key Differences
| Feature| Classful| Classless (Subnetting)|
| :---| :---| :---|
| **Masks**| /8, /16, /24| /25 - /30 (and others)|
| **Flexibility**| Rigid, fixed size| Highly flexible, variable size|
| **Efficiency**| Low (often wastes IPs)| High (tailored to needs)|
| **Routing**| Standard| Supports VLSM/Aggregation|

## ⚠️ Exam Tips & Important Notes
* **The "Minus 2" Rule:** Always remember to subtract 2 from the total number of IPs in a subnet to find the *usable* hosts. This is the most common student error.
* **Memorize the Chart:** The instructor emphasizes memorizing the relationship between CIDR notation, number of subnets, and number of IPs (starting from /24 down to /30).
 * *Rule of thumb:* Every time you increase the CIDR number by 1, the number of subnets doubles, and the number of usable IPs per subnet is halved.
* **Troubleshooting:** On the exam, you may be asked to troubleshoot why two computers cannot communicate. Often, the answer is that they are on different subnets and no router is present to bridge them.
* **Scope:** Network+ focuses heavily on /24 through /30.

## ❓ Questions to Review
1. If you have a /26 network, how many bits were borrowed from the host portion?
2. Why must you subtract 2 from the total number of IP addresses in a subnet?
3. What is the difference between a Network ID and a Broadcast ID?
4. If you have a /28 network, how many subnets are created from a /24 block?
5. What is the primary benefit of using VLSM in a large enterprise network?

## 🔗 Related Topics
* [[IP Addressing]]
* [[VLANs]]
* [[Routing Protocols]]
* [[Binary Math for Networking]]
