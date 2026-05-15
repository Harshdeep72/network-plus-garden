# 003 Interference Issues

**Module/Section:** 25 Troubleshooting Wireless Issues
**Tags:** #wireless #interference #attenuation #RF #80211 #🌱seedling

---

![[003 Interference Issues.mp4]]

## 📖 Core Concept
Wireless networks are susceptible to performance degradation due to signal interference and signal loss. Interference occurs when multiple networks operate on the same frequency or overlapping channels, leading to data collisions, retransmissions, and reduced throughput. Proper planning, such as channel selection and strategic placement of Access Points (APs), is essential to maintain network integrity. Additionally, signal strength naturally degrades over distance and through physical obstacles, a phenomenon known as attenuation.

## 🛠️ Hardware & Devices
* **Access Point (AP):** The central device that allows wireless-capable devices to connect to a wired network.
* **Omnidirectional Antenna:** An antenna that radiates radio wave power in all directions equally. Used in scenarios where signals must bounce off surfaces to reach a destination (e.g., around obstacles).
* **Cables/Antenna Components:** The physical medium connecting the radio to the antenna. Low-quality construction or materials in these components increase resistance, leading to signal attenuation.

## 📜 Protocols & Standards
* **2.4 GHz Spectrum:** A common wireless frequency band. To avoid interference, it is standard practice to use only non-overlapping channels: **1, 6, and 11**.
* **5 GHz Spectrum:** A higher-frequency wireless band that supports more non-overlapping channels. It requires a "honeycomb" installation pattern to minimize interference.

## 🔑 Key Terminology
* **Interference:** The disruption of a wireless signal caused by other networks or devices operating on the same frequency or overlapping channels.
* **Extended Service Set (ESS):** A set of multiple connected Basic Service Sets (BSS) that form a single subnetwork, allowing for roaming between access points.
* **Attenuation:** The gradual loss of signal strength as a radio frequency wave travels away from the transmitter or through a medium (like a cable or wall).
* **Multi-path Reception:** A phenomenon where radio signals bounce off physical objects (walls, columns, etc.) and arrive at the receiver at different times, often resulting in a weaker, attenuated signal.
* **RSSI (Received Signal Strength Indicator):** A measurement of the power present in a received radio signal. Lower values indicate a weaker connection.
* **Throughput:** The actual amount of data successfully transferred from one point to another in a given time period.

## 🔄 How It Works (Processes)
* **Channel Planning (2.4 GHz):** To prevent interference in an ESS, APs should be placed in a repeating pattern of channels 1, 6, and 11. No two APs using the same channel should be placed directly next to each other.
* **Overlap Requirement:** When installing multiple APs, a **10% to 15% overlap** is required to ensure consistent coverage and provide enough time for client devices to "hand off" (roam) from one AP to the next without dropping the connection.
* **Channel Planning (5 GHz):** APs should be installed in a honeycomb pattern. Channels should not be repeated until the AP is at least two zones away from an AP using the same channel.
* **Mitigating Cable Attenuation:** If attenuation is caused by poor-quality cabling or antenna components, the solution is to replace them with higher-quality, lower-resistance components.

## 📊 Comparisons & Key Differences
| Feature| 2.4 GHz Planning| 5 GHz Planning|
| :---| :---| :---|
| **Channel Strategy**| Use 1, 6, 11 only| Honeycomb pattern|
| **Repetition**| Adjacent APs must use different channels| Repeat channel only after 2 zones|
| **Primary Goal**| Minimize overlapping interference| Maximize coverage/minimize interference|

## ⚠️ Exam Tips & Important Notes
* **Channel Selection:** Always remember that for 2.4 GHz, the only non-overlapping channels are 1, 6, and 11.
* **Overlap Rule:** You must maintain a 10–15% overlap between APs for successful roaming.
* **Causes of Attenuation:** Remember that attenuation is not just distance; it includes physical obstacles (walls), signal interference (noise), and poor-quality hardware (cables/antennas).
* **Multi-path Impact:** Multi-path reception is a common cause of signal degradation and lower RSSI values.

## ❓ Questions to Review
1. Which three channels should be used in a 2.4 GHz wireless network to avoid interference?
2. What is the recommended percentage of overlap between access points to ensure seamless roaming?
3. How does multi-path reception affect the quality of a wireless signal?
4. What is the primary difference in channel planning between 2.4 GHz and 5 GHz networks?
5. If you are experiencing high attenuation in a wired antenna connection, what is the most likely physical cause?

## 🔗 Related Topics
* [[Wireless Site Survey]]
* [[802.11 Standards]]
* [[Radio Frequency Interference]]
* [[Access Point Placement]]
