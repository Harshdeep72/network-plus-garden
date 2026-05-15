# 005 Assigning IPv4 Addresses

**Module/Section:** 09 IP Addressing
**Tags:** #ipv4 #dhcp #apipa #🌱seedling

---

![[005 Assigning IPv4 Addresses.mp4]]

## 📖 Core Concept
Network devices require specific configuration to communicate on an IP network. There are two primary methods for assigning this information: **Static Assignment** and **Dynamic Assignment**.

Regardless of the method, every fully configured client requires four essential components:
1. **IP Address**: The unique identifier for the device.
2. **Subnet Mask**: Defines the network portion and host portion of the address.
3. **Default Gateway**: The IP address of the router used to exit the local network.
4. **DNS Server**: The server used to resolve domain names to IP addresses.

*Note: A WINS server is an optional fifth component often used in legacy Windows environments.*

---

## 🛠️ Hardware & Devices
* **Cable/Fiber Modem**: Often acts as a router/DHCP server in SOHO (Small Office/Home Office) environments.
* **Wireless Access Point (WAP)**: Frequently hosts the DHCP server in home networks.
* **Switch**: Used to connect devices locally; allows communication between devices using APIPA addresses.
* **Diskless Unix Workstations**: Historical devices that relied on BOOTP to load boot images over a network.

---

## 📜 Protocols & Standards
* **BOOTP (Bootstrap Protocol)**: Introduced in 1985. Used a static database of MAC-to-IP mappings to assign addresses to diskless workstations.
* **DHCP (Dynamic Host Configuration Protocol)**: Introduced in 1993 to replace BOOTP. Uses a dynamic scope/pool of addresses and leases.
* **APIPA (Automatic Private Internet Protocol Addressing)**: A self-assignment mechanism for when a DHCP server is unreachable.
* **ZeroConf (Zero Configuration)**: A modern evolution of APIPA that includes service discovery and name resolution.
 * **mDNS (multicast Domain Name Service)**: Used by ZeroConf to resolve names without a DNS server.
 * **Bonjour**: Apple’s implementation of ZeroConf.
 * **LLMNR (Link-Local Multicast Name Resolution)**: Microsoft Windows’ implementation of ZeroConf.
 * **systemd-resolved**: Linux implementation of ZeroConf.

---

## 🔑 Key Terminology
* **Static Assignment**: The manual configuration of IP parameters by a technician. Prone to human error and impractical for large networks.
* **Dynamic Assignment**: The automatic configuration of IP parameters via a server (e.g., DHCP).
* **DNS (Domain Name System)**: The "phone book" of the internet; converts human-readable domain names (e.g., diontraining.com) into IP addresses.
* **WINS (Windows Internet Name Service)**: A legacy service used in Windows domains to map NetBIOS names to IP addresses.
* **Scope/Pool**: A defined range of IP addresses that a DHCP server is authorized to distribute.
* **Lease**: The duration for which a client is permitted to use a dynamically assigned IP address.
* **IP Address Management (IPAM)**: The process of tracking and managing IP address assignments, often handled automatically by DHCP logs.

---

## 🔄 How It Works (Processes)
1. **Static Assignment**: Technician manually enters the IP, Subnet Mask, Gateway, and DNS into the device's network settings.
2. **DHCP Process**:
 * Client connects to the network and requests configuration.
 * DHCP server assigns an address from its defined scope.
 * The assignment is granted for a specific **lease** time.
 * Before the lease expires, the client can request a renewal.
 * If the lease expires and is not renewed, the IP returns to the pool.
3. **APIPA Process**:
 * If a client fails to contact a DHCP server, it assigns itself an address in the `169.254.x.x` range.
 * This allows local communication (e.g., gaming on a local switch) but prevents internet access because there is no valid default gateway.

---

## 📊 Comparisons & Key Differences

| Feature| Static Assignment| Dynamic Assignment (DHCP)|
| :---| :---| :---|
| **Configuration**| Manual (per device)| Automatic (via server)|
| **Scalability**| Poor (impractical for large networks)| Excellent (handles thousands of clients)|
| **Error Risk**| High (typos, IP conflicts)| Low (managed by server)|
| **Management**| Time-consuming| Centralized (logs/management)|

---

## ⚠️ Exam Tips & Important Notes
* **The Big Four**: You **must** memorize the four components of a fully configured client: IP Address, Subnet Mask, Default Gateway, and DNS Server.
* **APIPA Range**: Always remember the `169.254.0.0/16` range. If you see this on a test question, the device failed to reach a DHCP server.
* **Internet Access**: APIPA addresses cannot reach the internet because they lack a valid default gateway.
* **DHCP vs. BOOTP**: DHCP is the modern standard; BOOTP is obsolete but historically significant.

---

## ❓ Questions to Review
1. What are the four mandatory configuration items for a network client?
2. Why is static IP assignment considered impractical for large enterprise networks?
3. What is the specific IP range used by APIPA?
4. What is the primary difference between BOOTP and DHCP?
5. If a computer has a `169.254.x.x` address, what is the most likely cause of its connectivity issues?
6. How does ZeroConf differ from standard APIPA?

---

## 🔗 Related Topics
* [[IPv4 Addressing]]
* [[DHCP]]
* [[DNS]]
* [[Subnetting]]
* [[Default Gateway]]
