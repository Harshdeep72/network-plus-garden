# 009 Network Access Control (NAC)

**Module/Section:** 08 Ethernet Switching
**Tags:** #security #NAC #8021x #🌱seedling

---

![[009 Network Access Control (NAC).mp4]]

## 📖 Core Concept
**Network Access Control (NAC)** is a security methodology used to inspect devices as they attempt to connect to a network. It determines if a device is secure enough to be granted access based on organizational policies.

* **The Analogy:** NAC functions like an international airport customs inspection. The device is the traveler; the NAC system is the customs official. If the "documentation" (security posture/credentials) is valid, the device enters the "country" (production network). If not, it is sent to a "holding area" (quarantine) for remediation.
* **Primary Goal:** To ensure every device and user is verified, compliant, and secure before accessing network resources. It is a proactive security stance.

## 🛠️ Hardware & Devices
* **Network Switch:** The physical infrastructure device that often acts as the "authenticator" in an 802.1x process.
* **Wireless Access Point (WAP):** Acts as an authenticator for wireless network connections.
* **Authentication Server:** A server (typically a RADIUS server) that validates the identity of the user/device.
* **User Devices:** Laptops, smartphones, and desktops that act as "supplicants" during the authentication process.

## 📜 Protocols & Standards
* **802.1x:** An IEEE standard that provides an authentication framework for network access. It ensures only authenticated users/devices can access network services.
* **EAP (Extensible Authentication Protocol):** An authentication framework encapsulated within network frames to enable robust mechanisms like passwords, smart cards, or digital certificates.
* **RADIUS (Remote Access Dialing User Service):** The most common protocol/server type used to perform the actual authentication of the supplicant's credentials.

## 🔑 Key Terminology
* **NAC (Network Access Control):** A method for increasing network security by inspecting devices during connection attempts.
* **Port Security:** A feature on switches that limits the number of devices or specific MAC addresses allowed to connect to a physical port.
* **MAC Filtering:** Controlling access by maintaining a list of approved (allowlist) or blocked (blocklist) MAC addresses.
* **Allowlisting:** A security approach where only known, approved entities are granted access; all others are denied by default.
* **Blocklisting:** A security approach where everyone is allowed access except for those specifically identified as prohibited.
* **Supplicant:** The user device seeking access to the network.
* **Authenticator:** The network device (switch/WAP) that acts as a gatekeeper, blocking traffic until authentication is successful.
* **Authentication Server:** The server that validates the supplicant's credentials.
* **Quarantine Area:** A digital holding area for devices that fail security inspection, where they remain until they meet compliance requirements.
* **Persistent Agent:** Software installed on company-owned devices that continuously monitors and enforces security compliance.
* **Non-persistent Agent:** A temporary, "dissolvable" agent used for BYOD (Bring Your Own Device) scenarios that performs a one-time compliance scan and then removes itself.
* **Captive Portal:** A web page that intercepts network traffic and requires user interaction (like running a non-persistent agent) before granting access.
* **Principle of Least Privilege:** The practice of granting users only the minimum level of access necessary to perform their job functions.

## 🔄 How It Works (Processes)
1. **Connection Attempt:** A device connects to the network.
2. **Isolation:** The authenticator (switch/WAP) blocks all traffic except for authentication traffic.
3. **Inspection:**
 * The device is checked against MAC filtering lists.
 * The device performs 802.1x authentication (supplicant to authenticator to authentication server).
 * The agent (persistent or non-persistent) checks for compliance (e.g., antivirus status, OS patches).
4. **Decision:**
 * **Success:** The authentication server instructs the authenticator to open the "virtual gate," allowing normal data traffic.
 * **Failure:** The device is moved to a quarantine zone for remediation.

## 📊 Comparisons & Key Differences
| Feature| Allowlisting| Blocklisting|
| :---| :---| :---|
| **Security Level**| High (Default Deny)| Lower (Default Allow)|
| **Logic**| Only approved items allowed| Only prohibited items blocked|
| **Use Case**| High-security/Consistent environments| Less restrictive environments|

## ⚠️ Exam Tips & Important Notes
* **NAC vs. Port Security:** Remember that NAC is a broader framework, while Port Security is a specific mechanism often used *within* a NAC implementation.
* **Agent Types:** Know the difference between persistent (installed, continuous) and non-persistent (temporary, scan-and-remove) agents.
* **802.1x Components:** Memorize the three roles: **Supplicant** (user), **Authenticator** (switch), and **Authentication Server** (RADIUS).
* **Contextual Access:** NAC can be configured based on **Time** (hours of operation), **Location** (geolocation), **Role** (job function), or **Rules** (security posture/compliance).
* **Global Considerations:** When using time-based or location-based controls, always account for remote workers, consultants, and global time zones to avoid locking out legitimate users.

## ❓ Questions to Review
1. What are the three primary components of an 802.1x authentication process?
2. How does a non-persistent agent differ from a persistent agent in terms of deployment and lifecycle?
3. Why is allowlisting generally considered more secure than blocklisting?
4. What is the purpose of a quarantine zone in a NAC implementation?
5. How does the "Principle of Least Privilege" relate to Role-Based Access Control (RBAC)?
6. What is the role of the authenticator during the 802.1x handshake?

## 🔗 Related Topics
* [[802.1x]]
* [[RADIUS]]
* [[Port Security]]
* [[MAC Filtering]]
* [[Principle of Least Privilege]]
