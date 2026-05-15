# 005 Wireless Frequencies

**Module/Section:** 07 Wireless Networks
**Tags:** #wireless #80211 #frequencies #🌱seedling

---

![[005 Wireless Frequencies.mp4]]

## 📖 Core Concept
Wireless networks transmit and receive data using radio waves at specific frequency bands. These bands are regulated by government agencies to prevent interference between different communication services. The choice of frequency band involves a trade-off between **speed** (throughput) and **coverage/penetration** (distance and ability to pass through solid objects).

* **Frequency Bands:** Wi-Fi networks primarily operate in the 2.4 GHz, 5 GHz, and 6 GHz bands.
* **Channels:** A "virtual cable" or portion of the wireless spectrum used to transmit data.
* **Channel Width:** The range of frequencies a channel occupies.
* **Regulation:** Governments allocate specific spectrum ranges; therefore, available channels can vary by region (e.g., USA vs. Japan).

## 🛠️ Hardware & Devices
* **Wireless Access Points (WAPs):** Devices that manage wireless connections and implement band steering.
* **Client Devices:** Laptops, smartphones, and IoT devices that connect to the wireless network.
* **Radar Systems/Medical Devices:** External systems that share spectrum space with Wi-Fi, necessitating interference mitigation technologies like DFS.

## 📜 Protocols & Standards
* **IEEE 802.11:** The family of standards for wireless local area networks (WLANs).
* **802.11a:** An early standard that utilized the 5 GHz band.
* **802.11h:** A standard developed to comply with European regulations, introducing **DFS** and **TPC** to manage interference with radar and other services in the 5 GHz band.

## 🔑 Key Terminology
* **2.4 GHz Band:** A widely used frequency range (2.400–2.495 GHz) known for long-range and excellent penetration through solid objects.
* **5 GHz Band:** A frequency range (5.725–5.875 GHz) offering higher throughput and more non-overlapping channels, but with shorter range and poorer penetration than 2.4 GHz.
* **6 GHz Band:** The newest spectrum (5.925–7.125 GHz) offering the highest bandwidth, lowest congestion, and fastest speeds, but with the shortest range and weakest penetration.
* **Channel Bonding:** The process of merging two or more neighboring channels into a single, wider channel to increase throughput (e.g., combining two 20 MHz channels into a 40 MHz channel).
* **Dynamic Frequency Selection (DFS):** A mechanism that forces wireless devices to monitor for radar signals and automatically switch channels if interference is detected.
* **Transmit Power Control (TPC):** A feature that adjusts a device's transmission power to the minimum level required for a stable connection, reducing interference and power consumption.
* **Band Steering:** An intelligent management tool that detects client capabilities and "steers" devices capable of 5 GHz or 6 GHz operation away from the crowded 2.4 GHz band.

## 🔄 How It Works (Processes)
* **Channel Overlap:** In the 2.4 GHz band, channels are 22 MHz wide, but the allocated spectrum is only 72 MHz wide. This causes channels to overlap. Only channels **1, 6, and 11** are non-overlapping.
* **Band Steering Logic:** The WAP identifies a client's frequency capabilities. If the client supports 5 GHz or 6 GHz, the WAP encourages or forces the client to connect to those bands, reserving the 2.4 GHz band for legacy or low-power devices.
* **DFS Operation:** WAPs constantly scan the environment. If a radar signal is detected on the current channel, the WAP initiates a channel hop to a clear frequency to maintain compliance and avoid interference.

## 📊 Comparisons & Key Differences

| Feature| 2.4 GHz| 5 GHz| 6 GHz|
| :---| :---| :---| :---|
| **Speed**| Slowest| Fast| Fastest|
| **Range/Distance**| Longest| Shorter| Shortest|
| **Penetration**| Best| Moderate| Poorest|
| **Congestion**| High| Moderate| Low|
| **Channel Widths**| 22 MHz| 20–160 MHz| 20–160 MHz|

## ⚠️ Exam Tips & Important Notes
* **Memorize this:** In the 2.4 GHz band, only channels **1, 6, and 11** are non-overlapping. Always use these to avoid interference.
* **Regional Differences:** Be aware that channel availability (e.g., 1–11 in the US vs. 1–14 in Japan) is dictated by local government regulations.
* **Trade-offs:** Always remember the inverse relationship: Higher frequency = Higher speed but Lower range/penetration.
* **Channel Bonding Downside:** While bonding increases speed, it reduces the total number of non-overlapping channels available, increasing the risk of interference.

## ❓ Questions to Review
1. Why are channels 1, 6, and 11 the only recommended channels for 2.4 GHz networks?
2. What is the primary purpose of the 802.11h standard?
3. How does channel bonding affect the total number of available non-overlapping channels?
4. Which frequency band would you choose for a high-density gaming environment, and why?
5. What is the difference between DFS and TPC?
6. How does band steering improve overall network performance?

## 🔗 Related Topics
* [[802.11 Standards]]
* [[Wireless Interference]]
* [[WAP Configuration]]
