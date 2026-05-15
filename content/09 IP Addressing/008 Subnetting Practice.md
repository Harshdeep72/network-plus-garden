# 008 Subnetting Practice

**Module/Section:** 09 IP Addressing
**Tags:** #subnetting #ipv4 #cidr #🌱seedling

---

![[008 Subnetting Practice.mp4]]

## 📖 Core Concept
The lesson focuses on practical application of subnetting skills required for the CompTIA Network+ exam. The instructor emphasizes that speed and accuracy are achieved by memorizing a subnetting reference chart and writing it down on a "dump sheet" (scratch paper) immediately upon starting the exam.

* **The "Plus Two" Rule**: When calculating required subnets, you must always account for the **Network ID** (first address) and the **Broadcast Address** (last address). If a department has $X$ users, you need $X + 2$ addresses to ensure connectivity.
* **Rounding to Powers of Two**: Subnet sizes must align with binary boundaries (factors of 2: 2, 4, 8, 16, 32, 64, 128, 256). Always round up to the nearest power of two to accommodate the required hosts.
* **Unused Subnet Calculation**: When calculating remaining space, round *down* to the nearest power of two to fit the remaining available IP range.
* **Assignable vs. Total IPs**:
 * **Total IPs**: The full range provided by the CIDR notation (e.g., /27 = 32 total).
 * **Assignable/Usable IPs**: The total minus two (Network ID and Broadcast ID).

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
* **CIDR (Classless Inter-Domain Routing)**: A method for allocating IP addresses and IP routing. It uses slash notation (e.g., /24, /27) to define the network prefix.

## 🔑 Key Terminology
* **Subnet**: A logical subdivision of an IP network.
* **CIDR Notation**: A compact representation of an IP address and its associated routing prefix (e.g., 10.10.10.0/24).
* **Network ID**: The first address in an IP subnet, used to identify the network itself.
* **Broadcast Address**: The last address in an IP subnet, used to communicate with all hosts on that specific subnet.
* **Assignable/Usable IP**: An IP address that can be configured on a host interface (Total IPs - 2).

## 🔄 How It Works (Processes)
### Calculating Subnets for Departments
1. **Identify Requirements**: List the number of users per department.
2. **Apply the "Plus Two" Rule**: Add 2 to the user count to account for the Network ID and Broadcast ID.
3. **Round Up**: Find the nearest power of two that satisfies the requirement.
4. **Map to CIDR**: Use the memorized chart to convert the power of two to the correct CIDR notation.
5. **Calculate Unused Space**: Subtract the sum of all allocated IPs from the total available IPs in the parent network, then round *down* to the nearest power of two.

### Calculating Assignable IPs
1. **Identify CIDR**: Determine the total number of IPs for the given prefix (e.g., /27 = 32).
2. **Subtract Overhead**: Subtract 2 (Network ID and Broadcast ID).
3. **Result**: The remaining number is the "assignable" or "usable" host count.

## 📊 Comparisons & Key Differences
| Feature| Total IPs| Assignable/Usable IPs|
| :---| :---| :---|
| **Formula**| $2^h$| $2^h - 2$|
| **Includes Network ID?**| Yes| No|
| **Includes Broadcast ID?**| Yes| No|
| **Purpose**| Defines the full subnet block size| Defines capacity for host devices|

## ⚠️ Exam Tips & Important Notes
* **The Dump Sheet**: Memorize your subnetting chart before the exam. Write it down on your provided scratch paper the moment the exam starts.
* **Ignore Distractors**: In many exam questions, the specific IP address (e.g., 172.16.1.0) is irrelevant. Focus solely on the CIDR notation (/27).
* **Read Carefully**: Pay close attention to whether the question asks for "Total IPs" or "Assignable/Usable IPs." This is a common trap.
* **Rounding Logic**: Always round *up* for host requirements, but round *down* when calculating remaining unused space.

## ❓ Questions to Review
1. If a department requires 54 hosts, why is a /26 subnet (64 IPs) the minimum requirement?
2. What is the difference between a "Total IP" count and an "Assignable IP" count?
3. Why must you add 2 to your host requirements before calculating the subnet size?
4. If you have a /28 network, how many assignable IP addresses are available?
5. When calculating the "unused" portion of a network, do you round up or down to the nearest power of two?

## 🔗 Related Topics
* [[IPv4 Addressing]]
* [[Subnetting]]
* [[Binary Math for Networking]]
