# 002 IPv4 Addressing

**Module/Section:** 09 IP Addressing
**Tags:** #ipv4 #subnetting #cidr #🌱seedling

---

![[002 IPv4 Addressing.mp4]]

## 📖 Core Concept
IPv4 (Internet Protocol version 4) is the most common addressing scheme used in modern networks. It is a 32-bit addressing system that allows for unique identification of devices on a network.

* **Dotted-Decimal Notation**: The human-readable format of an IPv4 address, consisting of four decimal numbers separated by dots (e.g., 192.168.1.4).
* **Binary Representation**: The underlying format computers use. Each decimal number in dotted-decimal notation represents an 8-bit binary number.
* **Structure**: An IPv4 address is composed of two parts:
 * **Network Portion**: Identifies the specific network the device belongs to.
 * **Host Portion**: Identifies the specific device (server, desktop, printer, etc.) on that network.
* **Subnet Mask**: A 32-bit number that determines which part of the IP address is the network portion and which is the host portion. It uses a sequence of binary ones to denote the network and binary zeros to denote the host.

## 🛠️ Hardware & Devices
* **Switch**: Used to connect devices on the same network. It uses MAC addresses to forward data between devices without needing a router.
* **Router/Layer 3 Switch**: Required to move data between different networks (e.g., moving traffic from a 192.168.1.x network to a 172.16.0.x network).
* **End Devices**: Servers, desktops, laptops, tablets, and printers that are assigned IPv4 addresses.

## 📜 Protocols & Standards
* **IPv4 (Internet Protocol version 4)**: The standard protocol for addressing in most networks.
* **Multicast**: A communication method where data is sent to a group of hosts simultaneously. Managed by Class D addresses.
* **CIDR (Classless Inter-Domain Routing)**: A method for allocating IP addresses and IP routing that allows for more flexible subnetting than the original classful system.

## 🔑 Key Terminology
* **Octet**: One of the four parts of an IPv4 address, representing 8 bits of binary data. Values range from 0 to 255.
* **Subnetting**: The process of taking a larger network and subdividing it into smaller, more manageable network segments.
* **Classful Subnet Mask**: A subnet mask that adheres to the default mask associated with the address's class (A, B, or C).
* **Classless Subnet Mask**: A subnet mask that deviates from the default classful mask, typically used to customize network size.
* **CIDR Notation**: A shorthand way of writing an IP address and its subnet mask (e.g., /24). It represents the number of binary '1's in the subnet mask.

## 🔄 How It Works (Processes)
1. **Addressing**: A device is assigned an IPv4 address and a subnet mask.
2. **Masking**: The computer compares its IP address with the subnet mask to determine its network ID.
3. **Communication (Same Network)**: If the destination IP is on the same network, the switch handles the traffic using MAC addresses.
4. **Communication (Different Network)**: If the destination IP is on a different network, the traffic must be sent to a router or Layer 3 switch to be forwarded to the correct destination.
5. **Subnetting**: By borrowing host bits and converting them to network bits (changing a 0 to a 1 in the subnet mask), a network administrator can create smaller, more efficient subnets.

## 📊 Comparisons & Key Differences

| Class| First Octet Range| Default Subnet Mask| CIDR| Total Hosts (Approx)|
| :---| :---| :---| :---| :---|
| **A**| 1–127| 255.0.0.0| /8| 16.7 Million|
| **B**| 128–191| 255.255.0.0| /16| 65,536|
| **C**| 192–223| 255.255.255.0| /24| 256|
| **D**| 224–239| N/A (Multicast)| N/A| N/A|
| **E**| 240–255| N/A (Experimental)| N/A| N/A|

## ⚠️ Exam Tips & Important Notes
* **Class E**: These are reserved for experimental use and should not be used in production environments. Most systems will reject traffic from this range.
* **Class D**: Remember that these are strictly for **multicasting**.
* **Identifying Classes**: Always look at the **first octet** to determine the class.
* **CIDR Calculation**: A /24 means 24 bits are set to '1' in the subnet mask (255.255.255.0). A /26 means 26 bits are set to '1' (255.255.255.192).
* **Human Error**: Dotted-decimal notation is used primarily to reduce human error during configuration compared to raw binary.

## ❓ Questions to Review
1. What is the purpose of a subnet mask in an IPv4 address?
2. If an IP address starts with 150, which class does it belong to, and what is its default subnet mask?
3. Why would an administrator use a classless subnet mask instead of a classful one?
4. What is the function of a Class D address?
5. Convert the CIDR notation /26 into a standard dotted-decimal subnet mask.

## 🔗 Related Topics
* [[Subnetting]]
* [[Routing]]
* [[Binary to Decimal Conversion]]
