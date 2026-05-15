# 003 Understanding DHCP

**Module/Section:** 11 Network Services
**Tags:** #dhcp #dora #🌱seedling

---

![[003 Understanding DHCP.mp4]]

## 📖 Core Concept
The **Dynamic Host Configuration Protocol (DHCP)** is a network management protocol used to automate the process of configuring devices on IP networks. Instead of manually assigning IP addresses, subnet masks, and default gateways (static assignment), a DHCP server dynamically assigns these parameters to clients.

The video demonstrates this process using a SOHO (Small Office/Home Office) wireless router acting as the DHCP server. The core workflow is known as the **DORA process**, which describes the four-step handshake between a client and a server to lease an IP address.

## 🛠️ Hardware & Devices
* **Wireless Gateway/Router:** Acts as the central network device. It provides routing services, acts as the default gateway, and hosts the DHCP server functionality.
* **PC0 & PC1:** Client devices used to demonstrate the transition from static IP configuration to dynamic (DHCP) configuration.
* **Cable Modem:** Mentioned as a potential upstream connection for the wireless router to provide internet access.

## 📜 Protocols & Standards
* **DHCP (Dynamic Host Configuration Protocol):** The primary protocol used for dynamic IP address assignment.
* **IP (Internet Protocol):** Used for addressing. The video specifically references IPv4 addressing (e.g., `192.168.0.x`).
* **Broadcast Address:** `255.255.255.255`. This is the Layer 3 broadcast address used by clients to locate a DHCP server when they do not yet have an IP address.

## 🔑 Key Terminology
* **DHCP Server:** A network service that automatically assigns IP addresses and other network configuration parameters to devices.
* **Static Assignment:** Manually configuring an IP address, subnet mask, and default gateway on a device.
* **Dynamic Assignment:** Automatically receiving network configuration from a DHCP server.
* **DORA Process:** The four-step process (Discover, Offer, Request, Acknowledge) used by DHCP.
* **Broadcast:** A communication method where a message is sent to all devices on a local network segment.
* **Subnet Mask:** A 32-bit number that masks an IP address and divides the IP address into network address and host address (e.g., `255.255.255.0`).
* **Default Gateway:** The node on the computer network that serves as the forwarding device (router) to connect to other networks (e.g., the Internet).
* **DHCP Reservation:** A permanent IP address assignment for a specific device, mapped to the device's unique **MAC (Media Access Control) address**.
* **Scope:** The range of IP addresses that a DHCP server is configured to lease to clients (e.g., `192.168.0.100` to `192.168.0.149`).

## 🔄 How It Works (Processes)
### The DORA Process
1. **Discover (DHCPDISCOVER):** The client sends a broadcast message (`255.255.255.255`) to the network to find available DHCP servers.
2. **Offer (DHCPOFFER):** The DHCP server receives the discover message and sends a broadcast offer back to the client, proposing an IP address and configuration parameters.
3. **Request (DHCPREQUEST):** The client receives the offer and sends a broadcast request back to the server, formally requesting the offered IP address.
4. **Acknowledge (DHCPACK):** The server sends a final broadcast message to the client, confirming the lease and finalizing the configuration.

*Note: If a client receives an offer but does not request it, it ignores the packet.*

## 📊 Comparisons & Key Differences
| Feature| Static Assignment| Dynamic Assignment (DHCP)|
| :---| :---| :---|
| **Configuration**| Manual| Automatic|
| **Management**| High overhead| Low overhead|
| **Best For**| Servers, Printers, Gateways| Laptops, Mobile devices, Guest PCs|
| **Consistency**| Always the same| Can change (unless reserved)|

## ⚠️ Exam Tips & Important Notes
* **Broadcasts:** Remember that the initial stages of the DORA process rely on **broadcasts**. Because the client does not have an IP address yet, it cannot perform unicast communication.
* **Reservations:** Use DHCP reservations for devices that need a consistent IP address (like printers or file servers) without the administrative burden of full static configuration.
* **Troubleshooting:** If a device has a static IP that conflicts with the DHCP scope or has an incorrect default gateway, it will experience communication issues. Switching to DHCP is a common fix for connectivity problems in home/office environments.
* **Subnetting:** A subnet mask of `255.255.255.0` provides 256 total addresses: 1 for the network, 1 for the broadcast, and 254 for host devices.

## ❓ Questions to Review
1. What does the acronym DORA stand for in the context of DHCP?
2. Why does a client send a DHCPDISCOVER message as a broadcast?
3. What is the purpose of a DHCP reservation, and what unique identifier is required to create one?
4. If a DHCP server is configured with a scope of 50 addresses starting at `192.168.0.100`, what is the last usable IP address in that range?
5. What happens if a client receives a DHCPOFFER that it did not request?

## 🔗 Related Topics
* [[IPv4 Addressing]]
* [[Subnetting]]
* [[MAC Address]]
* [[Default Gateway]]
* [[Network Services]]
