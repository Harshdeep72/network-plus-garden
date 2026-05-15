# 012 IPv4 and IPv6 Compatibility Requirements

**Module/Section:** 09 IP Addressing
**Tags:** #ipv4 #ipv6 #transition-mechanisms #🌱seedling

---

![[012 IPv4 and IPv6 Compatibility Requirements.mp4]]

## 📖 Core Concept
The transition from IPv4 to IPv6 is a long-term, multi-decade process. Because IPv4 was deeply embedded in global infrastructure by the time IPv6 was introduced, an "overnight" switch was impossible. The industry requires coexistence strategies to allow legacy IPv4 systems and modern IPv6 systems to communicate. The instructor uses the analogy of the transition from gas-powered vehicles to electric vehicles: both infrastructures (gas stations and charging stations) must coexist during a long migration period to ensure service continuity.

## 🛠️ Hardware & Devices
* **Routers:** Configured to process and route both IPv4 and IPv6 traffic.
* **Switches:** Must support dual-stack configurations to handle traffic from both protocols.
* **Hosts (End Devices):** Computers and devices configured to understand both address types.
* **NAT64 Gateway:** A specialized device or service sitting at the edge of an IPv6-only network to translate traffic for IPv4 compatibility.

## 📜 Protocols & Standards
* **IPv4 (Internet Protocol version 4):** The legacy protocol; currently facing address exhaustion.
* **IPv6 (Internet Protocol version 6):** The modern protocol designed to replace IPv4.
* **DNS (Domain Name System):**
 * **A Record:** Used for IPv4 address resolution.
 * **AAAA Record:** Used for IPv6 address resolution.
* **Tunneling Protocols:**
 * **6to4:** A mechanism for sending IPv6 packets over an IPv4 network.
 * **Teredo:** A transition technology that gives full IPv6 connectivity to IPv6-capable hosts that are located behind an IPv4 NAT device.
 * **ISATAP (Intra-Site Automatic Tunnel Addressing Protocol):** A transition mechanism for transmitting IPv6 packets over an IPv4 network within an organization.

## 🔑 Key Terminology
* **Dual Stack:** A network architecture where both IPv4 and IPv6 protocols run simultaneously on the same network infrastructure. Devices are configured with both address types.
* **Tunneling:** A method of enabling communication between two nodes of the same protocol by encapsulating those packets within a different protocol (e.g., wrapping an IPv6 packet inside an IPv4 packet).
* **Encapsulation:** The process of wrapping a packet of one protocol inside the header/payload of another protocol.
* **Decapsulation:** The process of removing the outer "wrapper" (header) to reveal the original packet inside.
* **NAT64 (Network Address Translation 6 to 4):** A translation mechanism that allows IPv6-only devices to communicate with IPv4-only servers by translating addresses and packet headers.
* **Translation Table:** A database maintained by a NAT64 gateway to track mappings between IPv6 and IPv4 addresses to ensure return traffic reaches the correct host.

## 🔄 How It Works (Processes)
* **Dual Stack Communication:**
 1. A device performs a DNS query.
 2. If both **A** (IPv4) and **AAAA** (IPv6) records are returned, the device defaults to **IPv6**.
 3. If the IPv6 connection fails or is unavailable, the device automatically falls back to **IPv4**.
* **Tunneling Process:**
 1. **Entry:** An IPv6 packet is encapsulated within an IPv4 packet at the tunnel source.
 2. **Transit:** The packet traverses the IPv4 network as if it were a standard IPv4 packet.
 3. **Exit:** The packet reaches the tunnel endpoint, where the IPv4 wrapper is removed (decapsulated), and the original IPv6 packet is delivered.
* **NAT64 Operation:**
 1. An IPv6-only device sends traffic to an IPv4 destination.
 2. Traffic is directed to the **NAT64 Gateway**.
 3. The gateway translates the IPv6 address to an IPv4 address and converts the packet.
 4. For return traffic, the gateway uses its **translation table** to convert the IPv4 address back to the original IPv6 address.

## 📊 Comparisons & Key Differences

| Feature| Dual Stack| Tunneling| NAT64|
| :---| :---| :---| :---|
| **Primary Purpose**| Simultaneous operation| Transporting one protocol over another| Enabling IPv6-only to reach IPv4|
| **Complexity**| High (requires dual config)| Moderate (requires endpoints)| Moderate (requires gateway)|
| **Best Use Case**| General network migration| Crossing legacy network segments| IPv6-only environments|

## ⚠️ Exam Tips & Important Notes
* **Preference:** Devices in a dual-stack environment will always attempt to use IPv6 first if the destination supports it.
* **Longevity:** Do not expect IPv4 to disappear soon; experts predict it will remain in use until at least 2040.
* **Transparency:** Tunneling is designed to be transparent to end-users; the devices perceive the connection as native.
* **NAT64 Benefit:** Beyond compatibility, NAT64 helps conserve IPv4 addresses by allowing multiple IPv6 devices to share a single IPv4 address.

## ❓ Questions to Review
1. What is the primary reason for the existence of dual-stack, tunneling, and NAT64?
2. In a dual-stack environment, which protocol does a device prefer to use by default?
3. What happens to an IPv6 packet when it is "tunneled" through an IPv4 network?
4. How does a NAT64 gateway keep track of sessions between IPv6 and IPv4 devices?
5. Which DNS record type is associated with IPv6 addresses?

## 🔗 Related Topics
* [[IPv4 Addressing]]
* [[IPv6 Addressing]]
* [[Network Address Translation (NAT)]]
* [[DNS]]
