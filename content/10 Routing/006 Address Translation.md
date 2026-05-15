# 006 Address Translation

**Module/Section:** 10 Routing
**Tags:** #ipv4 #nat #pat #routing #🌱seedling

---

![[006 Address Translation.mp4]]

## 📖 Core Concept
Address translation was developed as a solution to the exhaustion of **IPv4** addresses. Because IPv4 addresses are limited and the transition to IPv6 was not yet ready, address translation allows multiple internal devices to share a smaller number of public IP addresses.

* **The Problem:** Modern households and businesses have dozens of devices (smartphones, tablets, servers, IoT devices), but typically only one or a few public IP addresses assigned by an ISP.
* **The Solution:** NAT and PAT allow private, non-routable IP addresses to be translated into public, routable IP addresses for communication over the internet.

## 🛠️ Hardware & Devices
* **NAT-Enabled Router:** The boundary device that performs the translation process. It maintains a mapping table to track which internal device corresponds to which public IP or port.

## 📜 Protocols & Standards
* **IPv4 (Internet Protocol version 4):** The primary protocol requiring address translation due to address space exhaustion.
* **IPv6 (Internet Protocol version 6):** Mentioned as the successor to IPv4, though address translation was the stop-gap solution used while IPv6 was being developed.

## 🔑 Key Terminology
* **NAT (Network Address Translation):** A method of remapping one IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device.
* **PAT (Port Address Translation):** A subset of NAT that allows multiple internal devices to share a single public IP address by assigning unique port numbers to each session.
* **DNAT (Dynamic Network Address Translation):** A one-to-one mapping where a private IP is automatically assigned a public IP from a pre-defined pool. The mapping is temporary; once the session ends, the public IP returns to the pool.
* **SNAT (Static Network Address Translation):** A permanent one-to-one mapping between a specific private IP and a specific public IP. Often used for security to hide the identity of internal devices.
* **Inside Local:** The private IP address referencing a device on the internal network.
* **Inside Global:** The public IP address referencing an internal device as seen from the outside (internet).
* **Outside Local:** The private IP address referencing an external device (often the boundary router's interface).
* **Outside Global:** The public IP address referencing an external device (e.g., a web server).

## 🔄 How It Works (Processes)
### Dynamic NAT Process
1. **Request:** An internal device sends a request to the router.
2. **Assignment:** The router pulls an available public IP from its "pool."
3. **Translation:** The router maps the private IP to the public IP (one-to-one).
4. **Communication:** The packet is sent to the internet using the public IP.
5. **Release:** Once the session finishes, the public IP is returned to the pool for other devices to use.
* *Analogy:* Like a family sharing a limited number of car keys. You take a key, use the car, and return the key so someone else can use it.

### PAT Process
1. **Request:** Multiple internal devices send requests to the router.
2. **Tracking:** The router uses the **Source Port** number to distinguish between different internal devices.
3. **Translation:** The router maps all internal requests to its single public IP, but assigns a unique port number to each session.
4. **Return:** When traffic returns from the server, the router checks the port number to determine which internal device the traffic belongs to and forwards it accordingly.

## 📊 Comparisons & Key Differences

| Feature| Dynamic NAT| Static NAT| PAT|
| :---| :---| :---| :---|
| **Mapping**| One-to-One| One-to-One| Many-to-One|
| **Assignment**| Automatic from pool| Manual/Permanent| Automatic via ports|
| **Efficiency**| High (shares pool)| Low (requires 1:1)| Very High (shares 1 IP)|
| **Primary Use**| Business pools| Security/Hiding devices| Home/Small Office|

## ⚠️ Exam Tips & Important Notes
* **Global vs. Local:** Remember this mnemonic: **Global = Public**; **Local = Private**.
* **PAT is Everywhere:** PAT is the standard for home networks (SOHO). If you are at home, you are almost certainly using PAT.
* **Memory Requirement:** You must memorize the four terms: Inside Local, Inside Global, Outside Local, and Outside Global.
* **Security:** Static NAT is sometimes used as a "smokescreen" to prevent external entities from knowing exactly which internal device is communicating.

## ❓ Questions to Review
1. What is the primary difference between how NAT and PAT handle IP address assignment?
2. If a device has an "Inside Global" address of 78.1.45.101, is that address public or private?
3. Why would a company choose Dynamic NAT over Static NAT?
4. How does a router using PAT know which internal device to send incoming traffic to?
5. What is the main security benefit of using Static NAT?

## 🔗 Related Topics
* [[IPv4 Addressing]]
* [[DHCP]]
* [[Routing]]
