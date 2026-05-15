# 008 Understanding Wireless Security

**Module/Section:** 07 Wireless Networks
**Tags:** #wireless-security #security-best-practices #🌱seedling

---

![[008 Understanding Wireless Security.mp4]]

## 📖 Core Concept
The video focuses on securing a SOHO (Small Office/Home Office) wireless router. The instructor emphasizes that while consumer-grade devices are designed for ease of use, they require manual configuration to meet modern security standards. The overarching theme is to move away from "convenience-first" features (like WPS) toward "security-first" configurations (like WPA2/AES and disabling unnecessary broadcasts).

## 🛠️ Hardware & Devices
* **Wireless N Router:** A common consumer-grade device containing a Wireless Access Point (WAP), a router, and a network switch.
* **Switch Ports:** The device features four LAN ports and one WAN (Wide Area Network) port for connecting to a cable or fiber modem.
* **Client Device:** A desktop computer used to access the router's web-based configuration interface.

## 📜 Protocols & Standards
* **IEEE 802.11 Standards:**
 * **Wireless B/G:** Operates on channels 1, 6, and 11 (the three non-overlapping channels).
 * **Wireless N:** Supports higher speeds (up to 300 Mbps in this example) and wireless isolation.
* **Encryption Standards:**
 * **WPA (Wi-Fi Protected Access):** An older, less secure encryption standard.
 * **WPA2 (Wi-Fi Protected Access 2):** The recommended standard for home use, utilizing AES encryption.
 * **AES (Advanced Encryption Standard):** The preferred, secure encryption algorithm used with WPA2.
 * **TKIP (Temporal Key Integrity Protocol):** An older encryption protocol used with WPA; less secure than AES.
* **WPS (Wi-Fi Protected Setup):** A standard designed to simplify the pairing of devices via a physical button or PIN. **Note:** It is considered insecure and should be disabled.

## 🔑 Key Terminology
* **SSID (Service Set Identifier):** The human-readable name of a wireless network.
* **SSID Broadcast:** The process where an access point periodically announces its presence to nearby devices.
* **Wireless Isolation:** A feature that prevents wireless clients from communicating directly with each other, forcing traffic through the router/switch (acting like a switch rather than a hub).
* **MAC Filtering:** A security access control method where a device's unique hardware address (MAC address) is either allowed or blocked from the network.
* **Pre-Shared Key (PSK):** A password used to authenticate users on a WPA/WPA2 network.
* **Remote Management:** A feature allowing the router's configuration interface to be accessed over the internet rather than just locally.
* **DHCP (Dynamic Host Configuration Protocol):** A network protocol used to automatically assign IP addresses to devices on a network.

## 🔄 How It Works (Processes)
* **Accessing Configuration:** The user connects via Ethernet to the router, identifies the default gateway (e.g., 192.168.1.1), and enters the IP into a web browser.
* **Securing the Network:**
 1. **Disable SSID Broadcast:** Hides the network name from automatic discovery.
 2. **Enable Wireless Isolation:** Prevents lateral movement between wireless clients.
 3. **Select Security Mode:** Choose WPA2-PSK with AES.
 4. **Set Passphrase:** Create a long, complex string (8–63 characters).
 5. **Disable WPS:** Turn off the "easy-connect" button feature to prevent brute-force attacks.
 6. **Disable Remote Management:** Prevents external access to the router's settings.
* **Guest Network Configuration:** Creates a separate virtual network that provides direct internet access without allowing access to the local private network.

## 📊 Comparisons & Key Differences
| Feature| Security Level| Recommendation|
| :---| :---| :---|
| **WPA2 + AES**| High| Use for home/office|
| **WPA + TKIP**| Low| Avoid if possible|
| **WPS**| Very Low| Disable|
| **MAC Filtering**| Low (Security through obscurity)| Optional/Not recommended as primary defense|

## ⚠️ Exam Tips & Important Notes
* **SSID Broadcast:** The exam expects you to know that disabling SSID broadcast is a standard security hardening step, even if it doesn't provide absolute security.
* **MAC Filtering:** The instructor notes that while it is a "feature," it is easily bypassed by attackers in seconds and is not a robust security measure.
* **WPS:** Always disable WPS if possible; it is a major vulnerability.
* **Remote Management:** Keep this disabled unless absolutely necessary; if enabled, restrict it to specific IP addresses.
* **Passphrase Length:** Use 8–63 characters to increase the difficulty of brute-force attacks.

## ❓ Questions to Review
1. Why is it recommended to disable WPS on a wireless router?
2. What is the primary benefit of enabling "Wireless Isolation" on a network?
3. Which encryption standard should be prioritized when configuring a WPA2 network?
4. Why is disabling SSID broadcast considered a "security through obscurity" measure?
5. What is the difference between a Guest Network and a standard private network?
6. How many non-overlapping channels are available for 802.11b/g networks?

## 🔗 Related Topics
* [[Wireless Security Standards]]
* [[MAC Address Filtering]]
* [[WPS Vulnerabilities]]
* [[Network Segmentation]]
