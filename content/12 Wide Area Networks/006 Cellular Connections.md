# 006 Cellular Connections

**Module/Section:** 12 Wide Area Networks
**Tags:** #cellular #wan #gsm #cdma #5g #🌱seedling

---

![[006 Cellular Connections.mp4]]

## 📖 Core Concept
Cellular technology provides Wide Area Network (WAN) connectivity to mobile devices, including smartphones, tablets, dedicated modems, and cellular hotspots. The technology has evolved through several "Generations" (G), each offering increased data speeds, improved spectral efficiency, and new capabilities. Modern cellular connectivity relies on embedded modems that support specific frequency bands and underlying access technologies (GSM or CDMA).

## 🛠️ Hardware & Devices
* **Cellular Modem:** An embedded component in mobile devices that facilitates communication with cellular towers.
* **Smartphone/Tablet:** Primary mobile devices used for cellular data and voice.
* **Mobile Hotspot:** A dedicated device that acts as a cellular modem and a wireless access point (WAP) combined, allowing multiple devices to share a cellular data connection.
* **Fixed Cellular Service:** Cellular modems used in homes or offices as an alternative to traditional wired internet (e.g., cable or fiber).
* **SIM Card (Subscriber Identity Module):** A physical card used in GSM devices to identify the user to the network.
* **E-SIM (Electronic SIM):** A virtual SIM that allows users to download carrier profiles via an app, eliminating the need for a physical card.

## 📜 Protocols & Standards
* **1G:** Developed in the 1980s; 30 kHz frequency; 2 kbps bandwidth; voice-only.
* **2G:** Late 1990s; GSM network; 1800 MHz frequency; 14.4–64 kbps (GPRS). Introduced SMS, international roaming, and conference calls.
 * **EDGE (Enhanced Data rates for GSM Evolution):** An evolution of 2G reaching up to 1 Mbps.
* **3G:** Minimum 144 kbps; typically 384 kbps (moving) to 2 Mbps (stationary).
 * **WCDMA (Wideband Code Division Multiple Access):** Used by UMTS; up to 2 Mbps.
 * **HSPA (High Speed Packet Access):** "3.5G"; up to 14.4 Mbps.
 * **HSPA+ (High Speed Packet Access Evolution):** "3.75G"; up to 50 Mbps.
* **4G:** Introduced MIMO (Multiple Input, Multiple Output); 100 Mbps (moving) to 1 Gbps (stationary).
 * **LTE (Long Term Evolution):** Standard 4G implementation.
 * **LTE-A (LTE Advanced):** 2–3x faster than standard LTE; up to 1 Gbps under perfect conditions.
* **5G:** Worldwide deployment began 2019; up to 10 Gbps.
 * **Low-band:** 600–850 MHz; long range, 30–250 Mbps.
 * **Mid-band:** 2.5–3.7 GHz; balance of range and speed, 100–900 Mbps.
 * **High-band (Millimeter Wave):** 25–39 GHz; extremely fast (Gbps), very short range, easily blocked by obstacles.

## 🔑 Key Terminology
* **GSM (Global System for Mobile Communications):** A cellular standard that uses time-division multiplexing to assign channels/time slots to users. Widely used globally.
* **CDMA (Code Division Multiple Access):** A cellular standard that encodes data with a unique key, allowing multiple signals to occupy the same channel simultaneously.
* **MIMO (Multiple Input, Multiple Output):** An antenna technology used in 4G/5G to increase data throughput by using multiple antennas for transmission and reception.
* **Tethering:** The process of sharing a smartphone's cellular data connection with another device (e.g., a laptop) via USB or Wi-Fi.
* **Millimeter Wave:** High-frequency radio waves (25–39 GHz) used in 5G that provide high bandwidth but have poor penetration and short range.

## 🔄 How It Works (Processes)
* **GSM Process:** Converts analog voice to digital data. The provider assigns a specific time slot to the user's data stream. The receiver reassembles these slices back into the original voice signal.
* **CDMA Process:** Every call is encoded with a unique key. All calls are transmitted simultaneously over a single channel. The receiver uses the corresponding key to "filter out" only the intended call from the combined signal.
* **5G Deployment Strategy:** Carriers prioritize mid-band frequencies to balance coverage area with high-speed performance. High-band is reserved for high-density areas like stadiums or convention centers.

## 📊 Comparisons & Key Differences

| Feature| GSM| CDMA|
| :---| :---| :---|
| **Identification**| Uses SIM Card| Device-locked (traditionally)|
| **Global Support**| Widely supported worldwide| Limited to specific regions/carriers|
| **Flexibility**| Easier to switch carriers/travel| Harder to switch carriers|
| **Modern Status**| 3G+ adopted CDMA methods| Basis for modern 3G/4G/5G standards|

## ⚠️ Exam Tips & Important Notes
* **Memorization:** You do not need to memorize every specific speed/frequency for every generation. Focus on the trend: **Higher "G" = Newer Standard = Faster Speeds.**
* **5G Bands:** Remember the trade-off: As frequency increases, speed increases, but coverage area decreases.
* **GSM vs. CDMA:** Know that GSM uses SIM cards, making it more convenient for international travel.
* **5G High-Band:** Note that it is easily blocked by physical objects like walls and windows.

## ❓ Questions to Review
1. What is the primary advantage of using a GSM-based device when traveling internationally?
2. Which 5G frequency band offers the best balance between coverage area and data speed?
3. How does CDMA differentiate between multiple simultaneous calls on the same channel?
4. What is the primary limitation of 5G high-band (millimeter wave) technology?
5. What is the difference between tethering and a dedicated mobile hotspot?

## 🔗 Related Topics
* [[Wide Area Networks (WANs)]]
* [[Wireless Access Points (WAP)]]
* [[Network Topologies]]
