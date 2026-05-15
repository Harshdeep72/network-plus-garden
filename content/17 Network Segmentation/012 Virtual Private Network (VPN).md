# 012 Virtual Private Network (VPN)

**Module/Section:** 17 Network Segmentation
**Tags:** #vpn #tunneling #🌱seedling

---

![[012 Virtual Private Network (VPN).mp4]]

## 📖 Core Concept
A **Virtual Private Network (VPN)** is a technology used to extend a private network across a public network (such as the internet). It enables users to send and receive data as if their computing devices were directly connected to the private network, regardless of their physical location.

* **Functionality:** Users connect to a VPN device (at a data center or headquarters) to establish a secure "tunnel." This tunnel encapsulates traffic, allowing remote users to access the corporate intranet securely over untrusted networks.
* **Deployment Models:**
 * **Site-to-Site:** Connects two entire networks (e.g., branch office to headquarters).
 * **Client-to-Site:** Connects a single remote host (laptop, smartphone) to a corporate network.
 * **Clientless:** Uses a web browser to establish a secure connection without requiring specialized client software.

## 🛠️ Hardware & Devices
* **VPN Device/Gateway:** A dedicated appliance or router located at the headquarters/data center that terminates VPN tunnels and decrypts incoming traffic for the internal network.
* **Client Devices:** Laptops, smartphones, and tablets used by remote workers to initiate the VPN connection.
* **Networking Hardware:** Standard ISP-provided equipment (cable modems, fiber modems) used to provide the underlying internet connectivity for the VPN tunnel.

## 📜 Protocols & Standards
* **HTTPS (Hypertext Transfer Protocol Secure):** Used for secure web-based communication.
* **SSL (Secure Sockets Layer):** An older protocol for securing web traffic; operates at layers 5, 6, and 7 of the OSI model. Largely superseded by TLS.
* **TLS (Transport Layer Security):** The modern standard for securing web traffic over HTTPS.
* **DTLS (Datagram Transport Layer Security):** A UDP-based version of TLS. Provides the same security as TLS but with less overhead, making it ideal for real-time traffic like VoIP and video streaming.
* **L2TP (Layer 2 Tunneling Protocol):** An older tunneling protocol that lacks native encryption; often paired with other protocols (like IPsec) to provide security.
* **L2F (Layer 2 Forwarding):** A Cisco-developed protocol for tunneling PPP; lacks native security and is rarely used today.
* **PPTP (Point-to-Point Tunneling Protocol):** An older protocol originally for dial-up; lacks native security, though Microsoft’s implementation adds security layers.
* **IPsec (Internet Protocol Security):** The modern standard for VPNs; provides authentication and encryption for packets to create secure paths over IP networks.
* **PPP (Point-to-Point Protocol):** A data link layer protocol often used in conjunction with tunneling protocols.
* **TCP/UDP:** Transport layer protocols used to carry VPN traffic.

## 🔑 Key Terminology
* **VPN Tunnel:** A secure, encrypted communication path established over a public network.
* **Site-to-Site VPN:** A configuration that connects two geographically separate networks, serving as a cost-effective alternative to dedicated leased lines.
* **Client-to-Site VPN:** A configuration where a single remote user connects to a corporate network.
* **Clientless VPN:** A VPN connection that relies on a web browser rather than installed software.
* **Full Tunnel:** A configuration where *all* traffic (including general internet requests) is routed through the VPN tunnel to the headquarters.
* **Split Tunnel:** A configuration where only traffic destined for the corporate network is sent through the VPN, while general internet traffic bypasses the VPN and goes directly to the ISP.
* **Encryption:** The process of encoding data to ensure that unauthorized parties cannot read the internal network traffic traversing the public internet.
* **Decryption:** The process of reversing encryption once the traffic reaches the corporate network.
* **Pivot:** A security risk where an attacker compromises a device on an unencrypted network (like in a split tunnel) and uses that device to gain access to the secure corporate network.

## 🔄 How It Works (Processes)
1. **Tunnel Establishment:** The client device initiates a connection to the VPN gateway.
2. **Authentication/Encryption:** The VPN protocol (e.g., IPsec, TLS) authenticates the user and establishes an encrypted tunnel.
3. **Encapsulation:** Data packets are wrapped (encapsulated) within the VPN protocol packets.
4. **Transmission:** The encrypted packets travel across the public internet.
5. **Decapsulation:** The VPN gateway at the destination receives the packets, decrypts them, and forwards the original data to the internal corporate network.

## 📊 Comparisons & Key Differences

| Feature| Full Tunnel| Split Tunnel|
| :---| :---| :---|
| **Security**| Higher (all traffic inspected)| Lower (risk of pivoting)|
| **Performance**| Lower (bottleneck at HQ)| Higher (direct internet access)|
| **Configuration**| Default for most orgs| Optional; used for bandwidth efficiency|
| **Local Access**| No (cannot access local home printer)| Yes (can access local devices)|

## ⚠️ Exam Tips & Important Notes
* **Security vs. Performance:** Always remember the trade-off: Full tunnels are more secure, while split tunnels offer better performance.
* **Public Wi-Fi Warning:** Never use a split tunnel when connected to untrusted networks (hotels, coffee shops) due to the risk of attackers pivoting through the unencrypted internet connection.
* **Protocol Evolution:** Note that SSL is outdated; TLS is the modern standard.
* **DTLS Advantage:** Remember that DTLS is UDP-based, making it faster for VoIP and video compared to TCP-based TLS.
* **L2TP/L2F/PPTP:** These are legacy protocols. If the exam asks about them, remember they lack native encryption and often require additional protocols to be secure.

## ❓ Questions to Review
1. What is the primary difference between a full tunnel and a split tunnel configuration?
2. Why is a split tunnel considered less secure than a full tunnel?
3. Which protocol is recommended for video streaming and VoIP over a VPN, and why?
4. What is the main purpose of a site-to-site VPN compared to a leased line?
5. Which VPN type requires no specialized client software to be installed on the user's device?
6. Why must L2TP often be paired with another protocol?

## 🔗 Related Topics
* [[Network Segmentation]]
* [[Encryption]]
* [[OSI Model]]
* [[TCP vs UDP]]
