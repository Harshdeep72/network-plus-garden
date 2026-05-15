# 009 Subnetting by Hand

**Module/Section:** 09 IP Addressing
**Tags:** #subnetting #ipv4 #binary #🌱seedling

---

![[009 Subnetting by Hand.mp4]]

## 📖 Core Concept
The "Subnetting by Hand" method is a mental shortcut designed to eliminate the need for complex math or scratch paper during the CompTIA Network+ exam. It relies on memorizing powers of 2 (2, 4, 8, 16, 32, 64, 128, 256) to quickly determine the number of subnets or the number of hosts available in a given CIDR block.

* **The Logic:** By mapping CIDR notation (e.g., /25, /26) to these powers of 2, you can determine network boundaries without performing binary conversion.
* **The "Gloves" Analogy:** The instructor uses the fingers of their hands to represent the progression of CIDR notation. By counting up from a base of /24, you can quickly identify the corresponding power of 2 for either subnets or host counts.

## 🛠️ Hardware & Devices
* **Router:** Mentioned in the context of point-to-point connections where /30 or /31 subnets are utilized to connect two routers.

## 📜 Protocols & Standards
* **IPv4 (Internet Protocol version 4):** The addressing scheme used for these subnetting calculations.
* **CIDR (Classless Inter-Domain Routing):** The notation (e.g., /24, /28) used to define the subnet mask.
* **Cisco Proprietary/Support:** The instructor notes that **/31** subnets are primarily a Cisco-supported standard for point-to-point links, though other vendors are beginning to support them.

## 🔑 Key Terminology
* **Subnet:** A logical subdivision of an IP network.
* **CIDR Notation:** A compact representation of an IP address and its associated routing prefix (e.g., /24).
* **Network ID:** The first address in a subnet, used to identify the network itself.
* **Broadcast Address:** The last address in a subnet, used to communicate with all hosts on that specific subnet.
* **Host:** An individual device (computer, printer, etc.) connected to the network.
* **Usable IPs:** The total number of IP addresses in a subnet minus two (the Network ID and the Broadcast address).
* **Point-to-Point Connection:** A direct connection between two nodes (usually routers).

## 🔄 How It Works (Processes)
### The Hand Calculation Method
1. **Memorize the sequence:** 2, 4, 8, 16, 32, 64, 128, 256.
2. **To find Subnets:** Count up from /24 (the base) towards your target CIDR.
 * Example: For a /26, count /25 (2), /26 (4). Result: 4 subnets.
3. **To find Hosts/IPs:** Count down from /24 (256).
 * Example: For a /29, count /24(256), /25(128), /26(64), /27(32), /28(16), /29(8). Result: 8 total IPs.
4. **Determining Ranges:**
 * **Network ID:** The starting address of the block.
 * **First Host:** Network ID + 1.
 * **Last Host:** Broadcast Address - 1.
 * **Broadcast:** The final address of the block.

## 📊 Comparisons & Key Differences

| Feature| /30 Subnet| /31 Subnet|
| :---| :---| :---|
| **Total IPs**| 4| 2|
| **Usable IPs**| 2| 2 (Cisco specific)|
| **Usage**| Standard point-to-point| Point-to-point (no network/broadcast)|

## ⚠️ Exam Tips & Important Notes
* **Assume Class C:** For the Network+ exam, assume calculations are based on a /24 (256 total IPs) unless otherwise specified.
* **The "Minus Two" Rule:** Always remember that in standard subnets, you lose two addresses (Network ID and Broadcast).
* **The /31 Exception:** Be aware that /31 is used for point-to-point links where the broadcast/network addresses are not needed, effectively allowing 2 usable hosts.
* **The /32 Definition:** A /32 represents a single host IP address.
* **Practice:** The instructor emphasizes that once this "clicks," it becomes the fastest way to solve subnetting questions on the exam.

## ❓ Questions to Review
1. If you are given a /27 network, how many subnets are available within a Class C block?
2. What is the total number of IP addresses in a /28 subnet?
3. Why is a /31 subnet often used in point-to-point router connections?
4. Given the IP 171.129.67.160/25, what is the Network ID?
5. If a subnet has 16 total IP addresses, what is the first usable host IP if the Network ID is .16?

## 🔗 Related Topics
* [[IPv4 Addressing]]
* [[Binary Math]]
* [[Subnet Masks]]
* [[Routing Fundamentals]]
