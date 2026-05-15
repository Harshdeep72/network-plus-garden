# 007 Wireless Considerations in Troubleshooting

**Module/Section:** 25 Troubleshooting Wireless Issues
**Tags:** #wireless #troubleshooting #antennas #802-11 #🌱seedling

---

![[007 Wireless Considerations in Troubleshooting.mp4]]

## 📖 Core Concept
Wireless troubleshooting requires a deep understanding of physical layer characteristics (antennas), medium access control (channel utilization/collisions), and the logical handshake process (association).

* **Antenna Theory:** The physical placement, type, and orientation (polarization) of antennas dictate the coverage area and signal quality.
* **Channel Management:** Wireless networks are shared mediums. High channel utilization leads to congestion and collisions.
* **Association Process:** Wireless connectivity is not instantaneous; it involves a multi-step handshake process that can be delayed by high traffic or poor signal strength.

## 🛠️ Hardware & Devices
* **Wireless Access Point (AP):** The central device that bridges wireless clients to the wired network.
* **Omnidirectional Antenna:** The default antenna type for most APs; radiates signal equally in all directions (360 degrees). Usually mounted vertically.
* **Dipole Antenna:** A bi-directional antenna that focuses RF energy in two directions.
* **Yagi Antenna:** A unidirectional antenna that focuses RF energy in a single direction, allowing for longer-range point-to-point links.
* **Parabolic Grid/Disc Antenna:** A high-gain unidirectional antenna used for long-distance, site-to-site wireless links.
* **Patch Antenna:** A type of unidirectional antenna often mounted on walls to direct signal inward.

## 📜 Protocols & Standards
* **802.11:** The IEEE standard for wireless LANs.
* **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):** The protocol used by 802.11 devices to manage access to the wireless medium and avoid data collisions.
* **CCA (Clear Channel Assessment):** A mechanism where a device "listens" to the channel to determine if it is currently in use before transmitting.

## 🔑 Key Terminology
* **RSSI (Received Signal Strength Indicator):** A measurement of the power present in a received radio signal. Expressed in negative decibels (e.g., -30 dBm is stronger than -70 dBm).
* **Polarization:** The orientation of the electric field of the radio wave as it leaves the antenna. Wi-Fi typically uses vertical or horizontal polarization.
* **Channel Utilization:** A metric representing the percentage of airtime currently occupied by traffic on a specific frequency/channel.
* **EIRP (Effective Isotropic Radiated Power):** The total power radiated by an antenna, taking into account the transmitter power and antenna gain.
* **Site Survey (Wireless Survey):** The process of planning and designing a wireless network to ensure coverage, capacity, and quality of service.
* **BSSID (Basic Service Set Identifier):** The MAC address of the wireless access point.
* **Association ID:** A unique identifier assigned by an AP to a client after a successful association request.
* **Deauthentication Frame:** A management frame used to terminate a wireless connection.

## 🔄 How It Works (Processes)

### The 7-Step Wireless Association Process
1. **Probe Request:** Client broadcasts a probe (BSSID `ff:ff:ff:ff:ff:ff`) to discover available networks.
2. **Probe Response:** APs that support the client's requested data rates and frequency respond with their SSID, supported rates, and security capabilities.
3. **Authentication Request:** Client sends an 802.11 authentication frame to the chosen AP.
4. **Authentication Response:** AP sends an acknowledgement. (If the client sends non-authentication data here, the AP sends a **Deauthentication Frame**).
5. **Association Request:** Client sends a request using the supported encryption and 802.11 capabilities.
6. **Association Response:** AP processes the request, creates an Association ID, and sends a "Success" response.
7. **Data Transfer:** The client is now fully connected and can begin transmitting data (after obtaining an IP via DHCP).

### CSMA/CA "Listen Before Talk"
1. **CCA:** Device listens to the frequency.
2. **Back-off:** If the channel is busy, the device waits for a random period.
3. **Retest:** Device performs another CCA check.
4. **Transmit:** If clear, the device sends the frame.

## 📊 Comparisons & Key Differences

| Feature| Omnidirectional| Yagi / Parabolic|
| :---| :---| :---|
| **Direction**| 360 degrees| Single direction|
| **Use Case**| General office coverage| Site-to-site / Long distance|
| **Mounting**| Ceiling/Center of room| Exterior/Roof|

* **2.4 GHz vs 5 GHz:** 2.4 GHz has only 3 non-overlapping channels (1, 6, 11), leading to higher congestion. 5 GHz offers 24 non-overlapping channels, significantly reducing utilization issues.

## ⚠️ Exam Tips & Important Notes
* **Troubleshooting Tip:** If a site-to-site link fails, check for physical obstructions that may have appeared over time (e.g., tree leaves in spring, snow, or heavy rain).
* **Polarization:** If a client has poor RSSI despite being close to the AP, check if the antenna polarization matches (vertical vs. horizontal).
* **Channel Utilization:** Keep utilization under **30%** for optimal performance.
* **Association Delay:** If association takes 30–60 seconds, it is likely due to a busy network or the client waiting for a DHCP address.
* **Collision Domain:** Wireless networks act like an Ethernet hub; all devices on the same channel form a single broadcast/collision domain.

## ❓ Questions to Review
1. Why is a Yagi antenna preferred over an omnidirectional antenna for a building-to-building link?
2. What is the purpose of a Clear Channel Assessment (CCA)?
3. How does the 5 GHz spectrum help mitigate channel utilization issues compared to 2.4 GHz?
4. What happens if a client attempts to send data before the association process is complete?
5. What environmental factors might cause a previously stable outdoor wireless link to deteriorate?

## 🔗 Related Topics
* [[Wireless Standards]]
* [[802.11 Frequency Bands]]
* [[DHCP Process]]
* [[Collision Domains]]
