# 006 Captive Portal Issues

**Module/Section:** 25 Troubleshooting Wireless Issues
**Tags:** #wireless #troubleshooting #captive-portal #🌱seedling

---

![[006 Captive Portal Issues.mp4]]

## 📖 Core Concept
A **Captive Portal** is a web page displayed to users before they are granted broader access to a wireless network. It acts as a gatekeeper, requiring interaction—such as authentication, payment, acceptance of an End User License Agreement (EULA), or survey completion—before internet access is permitted.

* **Common Use Cases:** Hotels, restaurants, airports, and in-flight Wi-Fi.
* **Implementation Methods:** Captive portals typically rely on one of three redirection methods to intercept user traffic:
 1. **HTTP Redirect:** Uses HTTP status code 302 to forward traffic to a controlled web server.
 2. **ICMP Redirect:** Uses Internet Control Message Protocol to redirect traffic (less common).
 3. **DNS Redirect:** Intercepts DNS queries and directs the client to the portal page (most common).

## 🛠️ Hardware & Devices
* **MacBook Pro:** Used as the primary client device in the instructor's example.
* **Smartphones (Apple/Android):** Devices that may require manual intervention to trigger captive portal loading.
* **Wireless Access Points/Onboard Servers:** The infrastructure providing the DHCP and DNS services necessary for captive portal redirection.

## 📜 Protocols & Standards
* **HTTP (Hypertext Transfer Protocol):** Used for web traffic; the portal uses a **302 Redirect** status code to force the browser to the login page.
* **ICMP (Internet Control Message Protocol):** A network layer protocol used for error reporting and operational information; occasionally used for redirection.
* **DNS (Domain Name System):** Used to resolve domain names to IP addresses; the primary method for captive portal redirection.
* **DHCP (Dynamic Host Configuration Protocol):** Used to automatically assign IP addresses, subnet masks, gateways, and DNS server addresses to clients.
* **IP (Internet Protocol):** The addressing scheme used for network communication.

## 🔑 Key Terminology
* **Captive Portal**: A web page that intercepts a user's initial web request on a network to enforce authentication or policy acceptance.
* **HTTP 302 Redirect**: A standard response code indicating that the requested resource has been temporarily moved to a different URI (used by captive portals to send users to the login page).
* **DNS Redirection**: A technique where the network's DNS server resolves all domain queries to the IP address of the captive portal page.
* **Static DNS**: A manual configuration where a user sets a specific DNS server (e.g., 8.8.8.8) rather than using the one provided by the network's DHCP server.
* **Default Gateway**: The node on a computer network that serves as the forwarding host to other networks; often used as a fallback address to trigger a captive portal.

## 🔄 How It Works (Processes)
### Troubleshooting Captive Portal Redirection Issues
If a captive portal fails to load, follow these steps in order:

1. **Browser Test:** Open a web browser and attempt to navigate to a common website (e.g., google.com or facebook.com). This often triggers the redirect mechanism.
2. **Gateway Access:** If the browser test fails, identify the **Default Gateway** IP address of the current network connection and type that IP directly into the browser's address bar (e.g., `http://[Gateway_IP]`).
3. **DNS Verification:** Check the client's network settings. If a static DNS (like 8.8.8.8) is configured, the client will bypass the network's DNS redirection. Change the setting to **DHCP** (automatic) to allow the network to provide the correct DNS server, then repeat Step 1.

## 📊 Comparisons & Key Differences
| Redirection Method| Mechanism| Commonality|
| :---| :---| :---|
| **HTTP Redirect**| Uses 302 status code to forward traffic.| Moderate|
| **ICMP Redirect**| Uses network layer error/info packets.| Low|
| **DNS Redirect**| Intercepts DNS queries to resolve to the portal.| High (Most Common)|

## ⚠️ Exam Tips & Important Notes
* **The "Static DNS" Gotcha:** A very common exam scenario involves a user who cannot reach a captive portal because they have manually configured their DNS (e.g., using Google's 8.8.8.8). Always check for static DNS settings when troubleshooting connectivity issues on public Wi-Fi.
* **DHCP is Key:** Captive portals rely on the network's DHCP server to provide the correct DNS server address. If a device is not set to "Obtain DNS server address automatically," the redirection process will fail.
* **Gateway Fallback:** If the DNS redirect fails, manually entering the Default Gateway IP is a standard "pro-tip" for forcing the portal to appear.

## ❓ Questions to Review
1. What is the primary purpose of a captive portal?
2. Which HTTP status code is typically associated with an HTTP redirect for a captive portal?
3. Why would setting a static DNS address (like 8.8.8.8) prevent a captive portal from working?
4. What is the first step you should take if a captive portal page does not automatically appear on your device?
5. If a browser test fails, what specific IP address should you try entering into your browser to trigger the portal?

## 🔗 Related Topics
* [[DHCP]]
* [[DNS]]
* [[Wireless Troubleshooting]]
* [[HTTP Status Codes]]
