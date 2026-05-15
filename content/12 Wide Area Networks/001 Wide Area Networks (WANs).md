# 001 Wide Area Networks (WANs)

**Module/Section:** 12 Wide Area Networks
**Tags:** #WAN #infrastructure #🌱seedling

---

![[001 Wide Area Networks (WANs).mp4]]

## 📖 Core Concept
The primary focus of this section is transitioning from local communication to long-distance communication via **Wide Area Networks (WANs)**. While previous sections focused on switching and routing within a [[Local Area Network (LAN)]], this section addresses how to connect those networks to the outside world.

* **The Evolution of Traffic Patterns (The Pareto Principle/80-20 Rule):**
 * **Historical Context (1990s):** The "80/20 rule" suggested that 80% of network traffic remained local, while only 20% traversed the WAN. Consequently, organizations could function with low-bandwidth WAN connections (e.g., 1.44 Mbps).
 * **Modern Context:** The principle has inverted. Today, approximately 80% of traffic leaves the LAN to access cloud-based services (Google Drive, Office 365), streaming media, social media, and [[Voice over IP (VoIP)]] services. This shift necessitates high-bandwidth, reliable WAN connections.
* **Objective 1.5 Focus:** The primary goal is to compare and contrast various transmission media and transceivers used to facilitate these long-distance connections.

## 🛠️ Hardware & Devices
* **Routers:** Used to connect LANs to WANs and manage traffic between subnets.
* **Switches:** Used for internal LAN connectivity.
* **Satellite Equipment:** Includes traditional geosynchronous orbital satellites and newer Low Earth Orbit (LEO) satellite hardware (e.g., Starlink).
* **Cellular Devices:** Smartphones, tablets, mobile hotspots, and fixed cellular home internet devices.
* **Microwave Equipment:** Used for high-speed, point-to-point connections in campus or metropolitan environments.

## 📜 Protocols & Standards
* **DOCSIS (Data Over Cable Service Interface Specification):** The standard used for cable internet connections.
* **MPLS (Multi-Protocol Label Switching):** A routing technique used by Internet Service Providers (ISPs) to direct data across a network based on short path labels rather than long network addresses, increasing efficiency.

## 🔑 Key Terminology
* **Wide Area Network (WAN):** A telecommunications network that extends over a large geographical distance, connecting multiple smaller networks (LANs).
* **Local Area Network (LAN):** A computer network that interconnects computers within a limited area such as a residence, school, or office building.
* **Pareto Principle (80/20 Rule):** In networking, a historical heuristic suggesting that 80% of traffic is internal and 20% is external.
* **Digital Subscriber Line (DSL):** A technology used to transmit digital data over telephone lines.
* **Geosynchronous Orbital Satellite:** Satellites that orbit at the same speed as the Earth's rotation, appearing stationary from the ground.
* **Low Earth Orbit (LEO) Satellite:** Satellites that orbit closer to Earth, providing lower latency compared to traditional geosynchronous satellites.
* **Leased Line:** A private, dedicated bidirectional or symmetric telecommunications line between two or more locations.

## 🔄 How It Works (Processes)
* **WAN Connectivity:** Data is encapsulated at the router level and transmitted over various physical media (fiber, copper, wireless, satellite) to reach remote networks.
* **MPLS Routing:** ISPs use labels to make forwarding decisions, allowing for faster and more efficient data transit compared to traditional destination-based IP routing.
* **Point-to-Point Microwave:** Provides a direct, high-speed wireless link between two specific geographic points, often used to bridge two buildings in a campus setting.

## 📊 Comparisons & Key Differences
* **Historical vs. Modern Traffic:**
 * *Past:* 80% Internal / 20% External (Low bandwidth requirements).
 * *Present:* 20% Internal / 80% External (High bandwidth requirements due to cloud/streaming).
* **Satellite Types:**
 * *Geosynchronous:* Higher latency, traditional coverage.
 * *LEO (Low Earth Orbit):* Lower latency, modern high-speed satellite internet.

## ⚠️ Exam Tips & Important Notes
* **Exam Objective 1.5:** The instructor emphasizes that this section is strictly aligned with CompTIA Network+ Objective 1.5, which focuses on the ability to **compare and contrast transmission media and transceivers**.
* **Real-World Application:** Be prepared to identify the appropriate WAN technology for a Small Office/Home Office (SOHO) environment versus an enterprise environment.

## ❓ Questions to Review
1. How has the "80/20 rule" changed in modern networking compared to the 1990s?
2. What is the primary purpose of a WAN connection in a modern business environment?
3. What is the function of MPLS in an ISP's network?
4. What is the main difference between geosynchronous and LEO satellites?
5. Why is DOCSIS relevant to WAN connectivity?

## 🔗 Related Topics
* [[Local Area Network (LAN)]]
* [[Routing]]
* [[Switching]]
* [[Voice over IP (VoIP)]]
* [[Cloud Computing]]
