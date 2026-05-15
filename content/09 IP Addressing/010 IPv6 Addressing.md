# 010 IPv6 Addressing

**Module/Section:** 09 IP Addressing
**Tags:** #ipv6 #🌱seedling

---

![[010 IPv6 Addressing.mp4]]

## 📖 Core Concept
The primary driver for **IPv6 (Internet Protocol version 6)** is the exhaustion of the **IPv4 (Internet Protocol version 4)** address space. IPv4 uses a 32-bit address scheme, providing approximately 4.3 billion addresses, which proved insufficient due to inefficient allocation and the growth of the internet.

IPv6, documented in RFCs starting in December 1995 (originally termed **IPNG** or **IP Next Generation**), utilizes a **128-bit address** scheme. This provides roughly 340 undecillion addresses, effectively solving the exhaustion problem. IPv6 is not just a larger address space; it is a more efficient protocol that removes broadcast traffic, eliminates packet fragmentation by the router, and utilizes a simplified header structure (5 fields vs. 12 fields in IPv4).

## 🛠️ Hardware & Devices
* **Network Interface Card (NIC):** In IPv6, a single interface can be assigned multiple addresses of different types (unicast, multicast, anycast) simultaneously.
* **Routers:** In IPv6, routers no longer perform packet fragmentation. If a packet exceeds the **MTU (Maximum Transmission Unit)**, the source must handle it, or the packet is dropped/not sent, preventing the overhead of reassembly at the destination.

## 📜 Protocols & Standards
* **IPv4:** 32-bit addressing, uses dotted-decimal notation.
* **IPv6:** 128-bit addressing, uses hexadecimal notation.
* **DHCPv6 (Dynamic Host Configuration Protocol version 6):** An optional protocol used to assign IPv6 addresses, though often unnecessary due to SLAAC.
* **NDP (Neighbor Discovery Protocol):** A protocol used in IPv6 to learn Layer 2 addresses, discover routers, and manage neighbor relationships.
* **SLAAC (Stateless Address Autoconfiguration):** A method allowing a host to configure its own IPv6 address without a centralized server.

## 🔑 Key Terminology
* **Address Exhaustion:** The depletion of the available pool of unassigned IPv4 addresses.
* **Hexadecimal:** A base-16 numbering system (0-9 and A-F) used to represent IPv6 addresses. Each hex digit represents 4 bits.
* **Shorthand Notation:** Rules to shorten IPv6 addresses:
 * **Leading Zero Rule:** Remove leading zeros in a segment (e.g., `0000` becomes `0`).
 * **Double Colon Rule (`::`):** Replace a single contiguous string of zero-only segments with a double colon. Can only be used **once** per address.
* **Unicast Address:** Identifies a single interface.
 * **Globally-Routed Unicast:** Publicly routable; starts with `2000` through `3999`.
 * **Link-Local Address:** Used for local network communication; always starts with `FE80`.
* **Multicast Address:** Identifies a group of interfaces; always starts with `FF`.
* **Anycast Address:** Identifies a set of interfaces; packets are delivered to the "nearest" member of the set. Allocated from the unicast space.
* **EUI-64 (Extended Unique Identifier):** A process to create a 64-bit interface ID from a 48-bit MAC address by inserting `FFFE` in the middle.
* **OUI (Organizationally Unique Identifier):** The first 24 bits of a MAC address.

## 🔄 How It Works (Processes)
1. **SLAAC Process:**
 * Host generates a **Link-Local address** (starts with `FE80`).
 * Host tests the uniqueness of the address.
 * Host contacts the router via **NDP** to receive network prefix information.
 * Host combines the prefix with its **EUI-64** interface ID to form a global unicast address.
2. **NDP (Neighbor Discovery Protocol) Functions:**
 * **Router Solicitation:** Client asks for local routers.
 * **Router Advertisement:** Router announces its presence.
 * **Neighbor Solicitation:** Host asks "Who has this IP/MAC?"
 * **Neighbor Advertisement:** Host responds "I am here."
 * **Redirection:** Router informs a host of a more efficient first-hop router.

## 📊 Comparisons & Key Differences

| Feature| IPv4| IPv6|
| :---| :---| :---|
| **Address Length**| 32-bit| 128-bit|
| **Notation**| Dotted-decimal| Hexadecimal|
| **Header Fields**| 12| 5 (Simplified)|
| **Fragmentation**| Performed by routers| Not allowed (Source only)|
| **Broadcast**| Yes| No (Uses Multicast)|

## ⚠️ Exam Tips & Important Notes
* **Identification:** IPv4 uses dots (`.`); IPv6 uses colons (`:`).
* **MAC vs. IPv6:** A MAC address has 12 hex digits in 6 pairs (e.g., `12:34:56:78:90:AB`). IPv6 addresses are longer and use the `::` shorthand.
* **Double Colon Rule:** You can only use `::` **once** in an address.
* **Hexadecimal:** Remember that A=10, B=11, C=12, D=13, E=14, F=15.
* **No IPv5:** IPv5 was an experimental protocol and was never standardized for production.

## ❓ Questions to Review
1. How many bits are in an IPv6 address, and how does this compare to IPv4?
2. What are the two rules for shortening an IPv6 address?
3. Which prefix identifies a Link-Local address?
4. What is the purpose of the `FFFE` insertion in the EUI-64 process?
5. Why does IPv6 remove the broadcast data flow type?

## 🔗 Related Topics
* [[IPv4 Addressing]]
* [[Subnetting]]
* [[MAC Address]]
* [[DHCP]]
