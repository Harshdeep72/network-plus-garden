# 010 Understanding WAN Connections

**Module/Section:** 12 Wide Area Networks
**Tags:** #WAN #connectivity #hardware #🌱seedling

---

![[010 Understanding WAN Connections.mp4]]

## 📖 Core Concept
The lesson focuses on the practical, real-world Wide Area Network (WAN) technologies that a network technician will encounter in the field. The core theme is the role of the **modem** as a bridge between the Service Provider's infrastructure (fiber, coax, satellite, cellular) and the local network (Ethernet/Cat6). Regardless of the underlying transmission medium, the goal is to convert incoming signals into a standard format (usually Ethernet) that can be distributed by local routers and switches.

## 🛠️ Hardware & Devices
* **Modem (Modulator-Demodulator):** A device that converts signals from a WAN provider into a format usable by a local network (and vice versa).
* **Media Converter:** A physical layer device used to convert one type of transmission medium to another (e.g., Fiber Optic to Cat6 copper).
* **Verizon Fios Box:** A multi-function device acting as a combination switch, router, wireless access point (WAP), and media converter/modem.
* **Satellite Dish:** An outdoor unit used to transmit and receive radio frequency (RF) signals to and from a satellite.
* **Cellular Device (Phone/Hotspot):** A mobile device that uses cellular radio technology to connect to a WAN and can act as a modem/WAP for other devices.
* **Patch Panel:** A hardware assembly with ports used to connect and manage incoming and outgoing LAN cables.
* **Coaxial Cable:** A type of copper cable used for cable internet and satellite connections, featuring a central conductor, dielectric insulator, metallic shield, and outer jacket.
* **Cat6 (Category 6) Cable:** A standardized twisted-pair cable for Ethernet, capable of high-speed data transmission.
* **RJ-45 Connector:** The standard physical connector used for Ethernet networking (Cat6).

## 📜 Protocols & Standards
* **Ethernet (via Cat6):** The standard for local network connectivity.
* **Radio Frequency (RF):** Used by satellite and cellular technologies to transmit data through the air.
* **Fiber Optic:** Used for high-speed WAN connections (e.g., Verizon Fios).

## 🔑 Key Terminology
* **WAN (Wide Area Network):** A telecommunications network that extends over a large geographical distance.
* **Modem:** A device that performs modulation (converting digital data to analog/carrier signals) and demodulation (converting carrier signals back to digital data).
* **Media Converter:** A networking device that connects two different media types (like fiber and copper) by converting the physical signal.
* **Cellular Hotspot:** A feature on a mobile device that allows it to share its cellular WAN connection with other devices via a local wireless access point.
* **Cat6:** A standardized cable for Gigabit Ethernet and other network physical layers.

## 🔄 How It Works (Processes)
* **Fiber to Ethernet Conversion:**
 1. Fiber optic signal arrives from the provider headquarters.
 2. A **Media Converter** outside the building converts the light-based fiber signal into an electrical signal.
 3. The signal travels over **Cat6** copper cabling into the building.
 4. The signal enters the modem/router, which distributes the internet to the local network.
* **Satellite Connectivity:**
 1. A **Satellite Modem** receives a signal via coaxial cable from a satellite dish on the roof.
 2. The dish converts the signal to **Radio Frequency (RF)** and transmits it to a satellite.
 3. The satellite relays the signal to a ground-based base station.
 4. The modem converts the incoming signal into an Ethernet (RJ-45) format for local use.
* **Cellular Hotspotting:**
 1. A mobile device connects to a cellular tower via radio waves.
 2. The device acts as a modem, receiving the WAN signal.
 3. The device broadcasts a local Wi-Fi signal (WAP), allowing other devices to connect and share the cellular internet connection.

## 📊 Comparisons & Key Differences
| Technology| Transmission Medium| Typical Use Case|
| :---| :---| :---|
| **Fiber**| Light (Fiber Optic)| High-speed, high-bandwidth urban/suburban areas.|
| **Cable**| Electrical (Coax)| Standard residential/small business internet.|
| **Satellite**| Radio Frequency (RF)| Remote areas without fiber/cable/DSL access.|
| **Cellular**| Radio Frequency (RF)| Mobile connectivity and emergency/backup internet.|

## ⚠️ Exam Tips & Important Notes
* **Technician Perspective:** Regardless of the WAN technology (Fiber, Satellite, Cellular), the technician's primary interface is usually a modem that outputs a standard RJ-45/Cat6 connection.
* **Hybrid Setups:** Be aware that providers often convert fiber to coax *outside* the home, meaning the internal wiring might still be coaxial even if the backbone is fiber.
* **Functionality:** Modern ISP-provided boxes are rarely "just" modems; they are usually integrated devices (Modem + Router + Switch + WAP).

## ❓ Questions to Review
1. What is the primary purpose of a media converter in a WAN setup?
2. Why might a technician encounter a coaxial cable connection even when the service provider is using fiber optics?
3. What is the essential difference between how a satellite modem and a fiber modem transmit data to the provider?
4. How does a cellular device function as a WAN gateway for other local devices?
5. What physical connector is typically used to connect a modem to a local router or switch?

## 🔗 Related Topics
* [[Local Area Network (LAN)]]
* [[Fiber Optic Technology]]
* [[Coaxial Cabling]]
* [[Wireless Access Points (WAP)]]
* [[Routers and Switches]]
