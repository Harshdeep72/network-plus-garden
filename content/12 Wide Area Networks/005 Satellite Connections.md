# 005 Satellite Connections

**Module/Section:** 12 Wide Area Networks
**Tags:** #wan #satellite #latency #starlink #🌱seedling

---

![[005 Satellite Connections.mp4]]

## 📖 Core Concept
Satellite internet is a method of accessing the internet via communication satellites orbiting the Earth. It is primarily used to provide connectivity in areas where traditional terrestrial infrastructure (cable, fiber, DSL, cellular) is unavailable or impractical.

* **Primary Use Cases:**
 * **Remote/Rural Areas:** Locations where laying physical cables is not feasible.
 * **Mobile Environments:** Connectivity for users on the move, including airplanes, cruise ships, trucks, and RVs.
* **Requirements:** A clear line of sight to the sky and a mounted antenna (satellite dish).
* **Economic Factors:** Generally more expensive than terrestrial broadband (fiber/cable/DSL).

## 🛠️ Hardware & Devices
* **Satellite Dish:** An antenna mounted on a roof or vehicle used to transmit and receive signals from satellites in space.
* **Satellite Modem:** The device that interfaces between the satellite dish and the local network/computer to provide internet access.
* **Commercial Services Mentioned:**
 * **Hughesnet:** An older, traditional satellite internet provider.
 * **Starlink:** A modern satellite internet provider utilizing Low Earth Orbit (LEO) technology.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Geosynchronous Orbit (GEO):** Satellites positioned approximately 22,000 miles above the Earth. They remain fixed over a single point on the equator.
 * **Advantage:** Only 3–6 satellites are needed to cover 90% of the Earth.
 * **Disadvantage:** High latency due to the extreme distance signals must travel.
* **Low Earth Orbit (LEO):** Satellites positioned much closer to the Earth (e.g., ~340 miles).
 * **Advantage:** Significantly lower latency (25–35ms).
 * **Disadvantage:** Smaller coverage area per satellite, requiring a massive constellation (thousands) of satellites to provide global coverage.
* **Latency:** The time delay between sending a request and receiving a response. In satellite communications, this is often referred to as "lag."
* **Line of Sight:** The requirement for an unobstructed path between the satellite dish and the satellite in space.

## 🔄 How It Works (Processes)
* **GEO Signal Path:**
 1. Data travels from the user to the satellite (~22,000 miles, 1/8 second).
 2. Satellite sends data to the ground station (~22,000 miles, 1/8 second).
 3. Ground station retrieves internet data.
 4. Return trip follows the same path (1/8 second up, 1/8 second down).
 5. **Total Latency:** ~500 milliseconds (0.5 seconds) minimum, excluding processing delays.
* **LEO Signal Path:**
 1. Data travels to a satellite at ~340 miles altitude.
 2. Because the distance is significantly shorter, the round-trip time is reduced to 25–35 milliseconds.

## 📊 Comparisons & Key Differences

| Feature| Geosynchronous (GEO)| Low Earth Orbit (LEO)|
| :---| :---| :---|
| **Altitude**| ~22,000 miles| ~340 miles|
| **Latency**| ~500 ms| 25–35 ms|
| **Coverage per Satellite**| ~1/3 of Earth| ~350 miles (563 km)|
| **Satellites Needed**| 3–6 for global coverage| Thousands (e.g., 12,000+)|

* **Satellite vs. Microwave:** Microwave links can achieve latency as low as 5ms, making them far superior to satellite for latency-sensitive applications like gaming.

## ⚠️ Exam Tips & Important Notes
* **Gaming Warning:** Satellite is generally unsuitable for real-time gaming due to high latency (especially GEO).
* **Cost:** Satellite is consistently more expensive than terrestrial options like cable or fiber.
* **Modern Trend:** The industry is shifting toward LEO constellations (like Starlink) to solve the latency issues inherent in traditional GEO satellite systems.
* **Exam Focus:** Remember that satellite is the go-to solution for remote or mobile connectivity where no other infrastructure exists.

## ❓ Questions to Review
1. Why does a GEO satellite connection have higher latency than a LEO connection?
2. What is the primary physical requirement for a satellite dish to function?
3. How many satellites are typically required for global coverage using GEO vs. LEO?
4. What is the approximate latency of a standard GEO satellite connection?
5. Why is satellite internet generally not recommended for competitive online gaming?
6. What are the main advantages and disadvantages of using satellite internet compared to fiber?

## 🔗 Related Topics
* [[Wide Area Networks (WAN)]]
* [[Latency]]
* [[Network Topologies]]
