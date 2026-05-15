# 002 Wireless Network Types

**Module/Section:** 07 Wireless Networks
**Tags:** #wireless #infrastructure #mesh #ad-hoc #🌱seedling

---

![[002 Wireless Network Types.mp4]]

## 📖 Core Concept
Wireless networking provides flexibility and scalability by eliminating physical cabling. The lesson categorizes wireless networks into four primary types based on their topology and operational requirements:

* **Ad Hoc:** Peer-to-peer, decentralized connections.
* **Infrastructure:** Centralized connections via access points.
* **Point-to-Point:** Dedicated, long-distance links between two fixed locations.
* **Mesh:** Resilient, multi-path networks that are self-healing and dynamic.

## 🛠️ Hardware & Devices
* **Wireless Access Point (WAP):** A device that bridges wireless clients onto a wired local area network (LAN).
* **Directional Antenna:** Used in point-to-point links to focus signal strength toward a specific target.
* **Satellite Dish:** Used for long-range, global wireless connectivity.
* **Portable Cell Phone Towers:** Mobile infrastructure used to provide cellular coverage in disaster zones.
* **Autonomous Access Point:** A standalone WAP that contains all necessary intelligence to function independently.
* **Lightweight Access Point (LWAP):** A "thin" WAP that relies on a centralized controller for management and decision-making.
* **Wireless Controller:** A centralized device used to manage multiple lightweight access points.
* **CAT 6A Cabling:** Mentioned as the wired medium used to connect satellite equipment to local WAPs in a mesh deployment.

## 📜 Protocols & Standards
* **IBSS (Independent Basic Service Set):** The formal name for an ad hoc wireless network.
* **BSSID (Basic Service Set Identifier):** A unique identifier for a WAP, typically the WAP's MAC address.
* **SSID (Service Set Identifier):** The alphanumeric name of a wireless network.
* **ESS (Extended Service Set):** A configuration where multiple WAPs share the same SSID to provide seamless coverage.
* **ESSID (Extended Service Set Identifier):** The SSID used within an Extended Service Set.

## 🔑 Key Terminology
* **Ad Hoc Network:** A decentralized wireless network where devices connect directly to one another without a central access point (peer-to-peer).
* **Infrastructure Network:** A wireless network that uses a centralized WAP to connect clients to a wired network.
* **Point-to-Point:** A wireless link established between two fixed, distinct locations, often using high-gain antennas.
* **Mesh Network:** A network where nodes interconnect dynamically and directly, providing multiple paths for data and self-healing capabilities.
* **Self-Healing:** The ability of a network to automatically reconfigure paths if a node or link fails.
* **Autonomous Access Point:** A "fat" access point that is configured individually and handles its own management tasks.
* **Lightweight Access Point:** An access point that offloads management and processing to a centralized wireless controller.

## 🔄 How It Works (Processes)
* **Ad Hoc Connection:** Devices discover each other and establish a direct link without infrastructure. Ideal for quick, temporary file sharing.
* **Infrastructure Connection:** Clients associate with a WAP. The WAP uses its BSSID to identify itself and broadcasts an SSID for clients to find.
* **ESS Expansion:** Multiple WAPs are deployed with the same SSID. As a user moves, they roam between WAPs while maintaining the same network connection.
* **Mesh Operation:** Nodes communicate with neighbors to determine the best path for data. If one path is blocked, the network dynamically reroutes traffic.
* **Centralized Management (LWAP):** A configuration change is made on the Wireless Controller, which then pushes the update to all connected Lightweight Access Points simultaneously.

## 📊 Comparisons & Key Differences

| Feature| Ad Hoc| Infrastructure| Point-to-Point| Mesh|
| :---| :---| :---| :---| :---|
| **Centralization**| None (Peer-to-Peer)| Centralized (WAP)| Fixed/Dedicated| Decentralized/Dynamic|
| **Primary Use**| Temporary/Quick| Standard LAN Access| Linking Buildings| Large-scale/Resilient|
| **Scalability**| Low| High| Low (Fixed)| Very High|
| **Intelligence**| Distributed| Centralized (if LWAP)| N/A| Distributed|

* **Autonomous vs. Lightweight APs:**
 * **Autonomous:** Standalone, individual configuration, best for small/home environments.
 * **Lightweight:** Managed by a controller, easier to manage at scale, best for enterprise environments.

## ⚠️ Exam Tips & Important Notes
* **BSSID Default:** Remember that the BSSID is typically the MAC address of the WAP.
* **ESSID vs. SSID:** Understand that when you use multiple WAPs with the same SSID (ESS), it is referred to as an ESSID.
* **Mesh Resilience:** The key characteristic of a mesh network is its "self-healing" capability.
* **Controller Benefit:** The primary advantage of using a controller with lightweight access points is the ability to update configuration policies globally across the entire network.

## ❓ Questions to Review
1. What is the primary difference between an IBSS and an Infrastructure network?
2. If you are managing 50 access points in a large office, would you prefer autonomous or lightweight access points? Why?
3. What is the purpose of a BSSID, and what does it usually consist of?
4. How does an Extended Service Set (ESS) improve user experience in a large building?
5. Why is a mesh network considered "self-healing"?
6. In a point-to-point wireless link, why is a directional antenna typically used?

## 🔗 Related Topics
* [[Wireless Access Points]]
* [[Wireless Controllers]]
* [[Network Topologies]]
* [[MAC Addressing]]
