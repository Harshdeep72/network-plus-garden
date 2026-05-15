# 013 Using VPN Connections

**Module/Section:** 17 Network Segmentation
**Tags:** #vpn #security #remote-access #🌱seedling

---

![[013 Using VPN Connections.mp4]]

## 📖 Core Concept
A **Virtual Private Network (VPN)** is a technology used to connect resources from one private network to another over a public network, such as the internet.

* **Purpose:** It allows remote users (e.g., travelers in a hotel) to access internal office resources (file shares, scanners, printers) as if they were physically present on the local network.
* **Security:** Because data travels over public infrastructure, it is vulnerable to interception. A VPN creates a **secure tunnel** that encrypts data, protecting it from unauthorized viewing or theft while in transit.
* **Location Masking:** VPNs can be used to route traffic through a server in a different geographic location, allowing users to bypass regional content restrictions or mask their true IP address.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
The instructor mentions several VPN tunneling protocols used to establish the secure connection:

* **IKEv2 (Internet Key Exchange version 2):** A tunneling protocol often used in conjunction with **IPSec** (Internet Protocol Security) to provide a secure, robust connection.
* **PPTP (Point-to-Point Tunneling Protocol):** An older VPN protocol.
* **L2TP (Layer 2 Tunneling Protocol):** A tunneling protocol often used with IPSec for security.
* **SSTP (Secure Socket Tunneling Protocol):** A protocol that uses SSL/TLS to create a VPN tunnel.

## 🔑 Key Terminology

* **VPN (Virtual Private Network):** A secure, encrypted connection that allows users to access a private network over a public network.
* **Secure Tunnel:** An encrypted path created between the client and the VPN server that encapsulates data packets to ensure privacy during transit over the internet.
* **Metered Network:** A network connection (often cellular or satellite) where data usage is tracked and limited; exceeding the limit may result in extra charges or throttled speeds.
* **Roaming:** The ability to use a mobile device on a network other than the home network, often incurring higher costs or data limitations.
* **IPSec (Internet Protocol Security):** A suite of protocols used to secure IP communications by authenticating and encrypting each IP packet in a communication session.
* **Digital Certificate:** A file used to verify the identity of a device or user during the authentication process.
* **One-Time Password (OTP):** A password that is valid for only one login session or transaction.

## 🔄 How It Works (Processes)
### Establishing a VPN Connection (Windows)
1. **Configuration:** Navigate to **Network and Internet Settings** > **VPN**.
2. **Settings Management:** Configure preferences for "Allow VPNs over metered networks" and "Allow VPNs while roaming" to manage data usage.
3. **Connection Setup:** Click the "Add a VPN connection" button.
4. **Input Details:**
 * **Server Name/Address:** The address of the VPN server (e.g., `NL-free-08.protonvpn.net`).
 * **VPN Type:** Select the protocol (IKEv2, PPTP, L2TP, or SSTP).
 * **Authentication:** Choose the sign-in method (Username/Password, Smart Card, OTP, or Digital Certificate).
5. **Activation:** Save the profile, select the connection, and click **Connect**.
6. **Tunneling:** The client authenticates with the server, establishes the encrypted tunnel, and routes traffic through the remote server.
7. **Verification:** The client's public IP address will reflect the location of the VPN server rather than the user's physical location.

## 📊 Comparisons & Key Differences
* **Home vs. Roaming Data:** The instructor emphasizes that data plans may be unlimited at "home" but strictly capped (e.g., 1GB/month) while roaming. VPN usage consumes significant data, making it risky to use on restricted roaming plans.
* **VPN Purpose:**
 * **Access:** Connecting to a private office network to reach internal resources.
 * **Privacy/Location:** Routing traffic through a foreign server to mask the user's true IP and bypass regional restrictions.

## ⚠️ Exam Tips & Important Notes
* **Data Awareness:** Always consider the cost and data limits of the underlying network (metered vs. unmetered) before initiating a VPN session.
* **Protocol Selection:** The VPN type selected must match the server's configuration; if the server requires IKEv2, the client must be configured for IKEv2.
* **Authentication Methods:** Be aware that VPNs support various authentication methods beyond simple passwords, including smart cards and digital certificates, which are common in enterprise environments.

## ❓ Questions to Review
1. What is the primary purpose of a VPN tunnel when accessing a private network over the internet?
2. Why might a user choose *not* to use a VPN while roaming on a cellular network?
3. Which VPN protocol is specifically mentioned as being a type of IPSec connection?
4. How does a VPN change the "What is my IP" result for a user?
5. What are three common authentication methods for VPNs mentioned in the video?

## 🔗 Related Topics
* [[Network Segmentation]]
* [[IPSec]]
* [[Remote Access]]
* [[Encryption]]
