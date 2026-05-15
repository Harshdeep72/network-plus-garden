# 007 Microwave Connections

**Module/Section:** 12 Wide Area Networks
**Tags:** #WAN #microwave #wireless-networking #🌱seedling

---

![[007 Microwave Connections.mp4]]

## 📖 Core Concept
Microwave links are communication systems that utilize beams of radio waves within the microwave frequency band to transmit data between two fixed locations. They are primarily used for **point-to-point** connections where physical cabling (like fiber) is impractical or too expensive to install.

* **Frequency Range:** 300 MHz to 300 GHz.
 * Includes **UHF** (Ultra High Frequency).
 * Includes **SHF** (Super High Frequency).
 * Includes **EHF** (Extremely High Frequency).
* **Line of Sight (LOS):** Microwave connections require a clear, unobstructed path between the two antennas. Because of the Earth's curvature and the visual horizon, these links are generally limited to a distance of approximately **40 miles (64 kilometers)**.
* **Deployment Scenarios:**
 * **Campus/Business Parks:** Connecting buildings where trenching fiber is not feasible.
 * **ISP Backhaul:** Connecting a client's roof antenna to a central "hub" (like a hospital or tower) which then aggregates traffic onto a high-speed fiber backbone.
* **Performance:** Can provide speeds up to **1 Gbps**, depending on the service tier purchased from the provider.

## 🛠️ Hardware & Devices
* **Microwave Antennas:** Specialized hardware mounted on roofs or towers to transmit/receive microwave signals.
* **Radio Units:** Required to process the microwave signal; these are typically larger and more complex than standard cellular modems.
* **Fiber Optic Infrastructure:** Used at the "hub" or aggregation point to connect the microwave network to the broader internet.

## 📜 Protocols & Standards
* **IEEE 802.16:** The technical standard for microwave access, commonly marketed as **WiMAX**.
 * *Note:* This is distinct from **IEEE 802.11** (Wi-Fi).
* **WiMAX:** Worldwide Interoperability for Microwave Access. A marketing term for the 802.16 standard.

## 🔑 Key Terminology
* **Microwave Link:** A communication system using radio waves in the microwave band to link two fixed points.
* **Line of Sight (LOS):** A requirement for microwave transmission where the transmitting and receiving antennas must be able to "see" each other without physical obstructions.
* **Fixed Location Service:** A service that requires permanent installation of equipment (antennas/radios) at a specific site, as opposed to mobile cellular services.
* **WiMAX:** An abbreviation for Worldwide Interoperability for Microwave Access; the consumer-facing name for IEEE 802.16.

## 🔄 How It Works (Processes)
1. **Installation:** A professional installs a directional antenna on the roof of the client's building.
2. **Alignment:** The antenna is precisely aimed at a receiving antenna located at a high-elevation point (e.g., a hospital roof or tower).
3. **Transmission:** Data is converted into microwave radio waves and beamed across the LOS path.
4. **Aggregation:** The receiving antenna collects signals from multiple clients and aggregates them.
5. **Backhaul:** The aggregated traffic is sent from the hub location to the ISP via a high-speed fiber optic connection.

## 📊 Comparisons & Key Differences

| Feature| Microwave (WiMAX)| Cellular (4G/5G)|
| :---| :---| :---|
| **Installation**| Professional, roof-mounted antenna| Simple, plug-and-play modem|
| **Portability**| Fixed (cannot move easily)| Highly mobile|
| **Cost**| Generally more expensive| Generally cheaper|
| **Use Case**| Business parks, campus backhaul| Consumer internet, mobile devices|

## ⚠️ Exam Tips & Important Notes
* **Distinction:** Remember that WiMAX is **802.16**, while Wi-Fi is **802.11**.
* **Limitation:** The biggest constraint for microwave is the **Line of Sight** requirement and the **40-mile distance limit** due to the Earth's curvature.
* **Evolution:** While WiMAX was once a leader in high-speed wireless, it is losing popularity to 4G/5G cellular due to the ease of installation and mobility of cellular hardware.
* **Use Case:** If a question asks about connecting two buildings in a campus where fiber is not an option, **microwave** is the correct answer.

## ❓ Questions to Review
1. What is the frequency range defined for microwave connections?
2. What is the primary physical constraint that limits the range of a microwave link?
3. Which IEEE standard governs microwave access?
4. Why is a hospital or high-elevation building often chosen as a site for a microwave hub?
5. How does the installation process for microwave differ from modern 5G cellular modems?

## 🔗 Related Topics
* [[Wide Area Networks (WANs)]]
* [[Wireless Networking]]
* [[Fiber Optic Cabling]]
