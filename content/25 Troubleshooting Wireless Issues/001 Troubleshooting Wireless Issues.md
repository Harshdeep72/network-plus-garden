# 001 Troubleshooting Wireless Issues

**Module/Section:** 25 Troubleshooting Wireless Issues
**Tags:** #wireless #troubleshooting #80211 #🌱seedling

---

![[001 Troubleshooting Wireless Issues.mp4]]

## 📖 Core Concept
The lesson focuses on the foundational knowledge required to troubleshoot wireless (Wi-Fi) networks under CompTIA Network+ Objective 5.4. It distinguishes between theoretical bandwidth and real-world throughput, establishes the importance of signal strength metrics (RSSI), and outlines the primary categories of wireless troubleshooting.

* **Scope:** Specifically refers to the IEEE 802.11 family. Excludes Bluetooth, cellular, satellite, NFC, and RFID, though concepts like interference and attenuation apply to all.
* **Bandwidth vs. Throughput:**
 * **Bandwidth:** The theoretical maximum speed of a connection.
 * **Throughput:** The actual, real-world speed of data transmission.

## 🛠️ Hardware & Devices
* **Wireless Access Point (WAP):** The central device that transmits and receives wireless signals.
* **Wireless Router:** A device combining the functions of a WAP and a router.
* **Antennas:**
 * **Isotropic Antenna:** An ideal, theoretical antenna that radiates power equally in all directions.
 * **Omnidirectional Antenna:** A real-world antenna that distributes power equally in all directions (often treated as an isotropic antenna for measurement purposes).

## 📜 Protocols & Standards
All standards listed below refer to the **IEEE 802.11** family.

| Standard| Max Bandwidth (Theoretical)| Typical Throughput (Real-world)| Indoor Range| Outdoor Range|
| :---| :---| :---| :---| :---|
| **802.11a**| 54 Mbps| 20–30 Mbps| 35m| 100m|
| **802.11b**| 11 Mbps| 5–7 Mbps| 35m| 100m|
| **802.11g**| 54 Mbps| 30–32 Mbps| 35m| 100m|
| **802.11n**| 600 Mbps| 140–150 Mbps| 70m| 250m|
| **802.11ac**| 1.3 Gbps (up to 1.9 Gbps*)| 100–500 Mbps| 50m| 100m|
| **802.11ax**| 10 Gbps| 600–900 Mbps| 50m| 100m|

*\*Note: 1.9 Gbps for 802.11ac is a marketing aggregate of 1.3 Gbps (5GHz) + 600 Mbps (2.4GHz/Wireless N compatibility).*

## 🔑 Key Terminology
* **RSSI (Received Signal Strength Indicator):** An estimated measure of the power level a client device receives from a WAP. Measured in dBm (decibels relative to one milliwatt).
* **EIRP (Effective Isotropic Radiated Power):** The maximum power radiated from an antenna, accounting for antenna gain and the transmitter's power. Measured in **dBi** (decibels over isotropic).
* **Attenuation:** The loss of signal strength as a signal travels over distance or through obstacles.
* **Captive Portal:** A web page that requires user interaction (authentication, terms of service) before granting network access.

## 🔄 How It Works (Processes)
* **Signal Strength Interpretation (RSSI):**
 * **Scale:** Measured from 0 to -100 dB.
 * **Closer to 0:** Stronger signal.
 * **-30 dB or above:** Extremely strong (sitting next to the WAP).
 * **-55 dB:** Strong signal.
 * **-65 dB:** Fairly strong (supports bandwidth-intensive apps like VoIP/Video).
 * **-60 to -65 dB:** Ideal range for strong signal.
 * **-90 dB or lower:** Extremely weak.
* **Troubleshooting Workflow (Obj 5.4):**
 1. **Coverage Issues:** Identify physical obstructions, range limits, or poor WAP placement.
 2. **Interference:** Identify overlapping channels or electronic device interference.
 3. **Client Disassociation:** Address unexpected disconnects caused by distance, power-saving modes, or congestion.
 4. **Configuration Errors:** Check for mismatched SSIDs, security settings, or channel settings.
 5. **Captive Portal Issues:** Troubleshoot authentication, access policies, or timeouts.

## 📊 Comparisons & Key Differences
* **RSSI vs. EIRP:**
 * **RSSI:** Measures signal *received* by the client (Client-side perspective).
 * **EIRP:** Measures signal *sent* by the access point (AP-side perspective).
* **Distance Improvements:** 802.11n doubled the distance of the earlier 802.11a/b/g standards. 802.11ac/ax provide a middle ground for distance but significantly higher throughput.

## ⚠️ Exam Tips & Important Notes
* **Memorization Strategy:** You do not need to memorize every specific distance for every standard, but you *must* know that 802.11n doubled the range of a/b/g.
* **Troubleshooting Logic:** If a client has poor connectivity, check RSSI first. If the AP is suspected of failing to broadcast properly, check EIRP.
* **Real-world vs. Theoretical:** Always distinguish between the "box speed" (bandwidth) and the actual performance (throughput).

## ❓ Questions to Review
1. What is the primary difference between bandwidth and throughput?
2. If a client reports an RSSI of -95 dB, what is the likely user experience?
3. Which 802.11 standard was the first to significantly increase the indoor range to 70 meters?
4. How is the 1.9 Gbps speed for 802.11ac calculated by manufacturers?
5. What are the five main categories of wireless troubleshooting defined in Objective 5.4?

## 🔗 Related Topics
* [[Wireless Networking Standards]]
* [[Radio Frequency Interference]]
* [[Network Troubleshooting Methodology]]
