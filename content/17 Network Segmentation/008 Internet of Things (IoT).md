# 008 Internet of Things (IoT)

**Module/Section:** 17 Network Segmentation
**Tags:** #iot #segmentation #🌱seedling

---

![[008 Internet of Things (IoT).mp4]]

## 📖 Core Concept
The **Internet of Things (IoT)** refers to a global network of appliances and personal devices equipped with sensors, software, and network connectivity. These devices report state and configuration data and are managed remotely over IP networks.

* **Primary Goal:** To increase efficiency, save money on utilities, and improve occupant comfort.
* **Key Security Principle:** **Segmentation.** IoT devices should never reside on the primary business network. They must be isolated via VLANs or physical separation to prevent lateral movement by attackers.
* **The "Target" Lesson:** In 2014, hackers breached Target’s business network by exploiting a vulnerability in an HVAC controller, eventually pivoting to the Point of Sale (PoS) network to steal credit card data. This serves as the primary justification for segmenting IoT devices.

## 🛠️ Hardware & Devices
* **Building/Home Automation Systems:** Manage lighting, HVAC, water, and security.
* **IP Video Systems:** Video teleconferencing suites and remote collaboration tools.
* **Audio/Video (AV) Systems:** High-definition displays and digital video switching systems used in Security Operation Centers (SOCs).
* **Physical Access Control Systems:** Proximity readers, biometric scanners, and security cameras.
* **Scientific/Industrial Equipment:** Specialized hardware in hospitals, factories, and labs.
* **Hub and Control Systems:** Central points of communication (e.g., Amazon Echo) that bridge different protocols (Z-Wave/Zigbee) to the IP network.
* **Smart Devices:** IoT endpoints (e.g., smart light bulbs, video doorbells, Nest thermostats, smart outlets).
* **Wearables:** Accessories with network connectivity (e.g., smartwatches, fitness trackers, smart glasses, headsets).
* **Sensors:** Devices measuring environmental/physical data (temperature, humidity, motion, smoke, heart rate, etc.).

## 📜 Protocols & Standards
* **IP (Internet Protocol):** The foundational protocol for remote management and data reporting.
* **Z-Wave:** A wireless communication protocol used for home automation.
* **Zigbee:** A low-power wireless mesh network protocol used for IoT devices.
* **Wi-Fi:** Standard wireless networking used for high-bandwidth IoT devices.
* **Bluetooth:** Short-range wireless technology often used for wearables and smart devices.
* **PoE (Power over Ethernet):** A technology for providing electrical power to network devices over Ethernet cabling.
* **HD-SDI (High-Definition Serial Digital Interface):** Used for streaming live video productions across buildings or globally.

## 🔑 Key Terminology
* **Internet of Things (IoT):** A network of physical objects ("things") embedded with sensors and software for the purpose of connecting and exchanging data with other devices and systems over the internet.
* **QoS (Quality of Service):** A set of technologies used to manage data traffic to reduce packet loss, latency, and jitter, critical for smooth IP video operations.
* **VLAN (Virtual Local Area Network):** A logical grouping of devices on a single physical network that isolates traffic; essential for IoT security.
* **Subnet:** A logical subdivision of an IP network.
* **Physical Isolation:** Keeping devices on a completely separate physical network (separate switches/cables) from the production network.
* **Logical Isolation:** Using VLANs to separate traffic on the same physical infrastructure.
* **Security Posture:** The overall security status of an organization's software, hardware, services, and networks.

## 🔄 How It Works (Processes)
1. **Data Collection:** Sensors/Smart devices collect data (temperature, motion, etc.).
2. **Communication:** Data is sent to a **Hub/Control System** using protocols like Zigbee or Z-Wave.
3. **Transmission:** The Hub translates this data and sends it over the **IP Network** to a management server or cloud interface.
4. **Action:** The system triggers an automated response (e.g., turning off lights, adjusting HVAC).

## 📊 Comparisons & Key Differences
| Feature| Business Network| IoT Network|
| :---| :---| :---|
| **Security Risk**| High (contains sensitive data)| High (often unpatchable/insecure)|
| **Traffic Type**| Standard data/applications| Real-time/Sensor data|
| **Management**| Centralized IT control| Often vendor-specific/Hub-based|
| **Isolation**| Production environment| Segmented (VLAN/Physical)|

## ⚠️ Exam Tips & Important Notes
* **Default Credentials:** Always change default usernames and passwords on IoT devices immediately. They are the #1 target for automated botnets.
* **Patching:** Many IoT devices cannot be patched. If a patch isn't available, you must perform **Risk Management** and implement compensating controls (like strict VLAN segmentation).
* **Testing:** Never connect an IoT device directly to production. Always test in a lab environment first to evaluate security vulnerabilities.
* **Bandwidth:** IP video systems are bandwidth-intensive; always factor this into network architecture design.
* **Interference:** Be aware of wireless interference between IoT devices and existing Wi-Fi/business wireless infrastructure.

## ❓ Questions to Review
1. Why is it considered a best practice to place IoT devices on a separate VLAN?
2. What is the primary risk associated with industrial or scientific IoT equipment regarding security?
3. Which protocols are commonly used by IoT hubs to communicate with sensors instead of Wi-Fi?
4. What is the significance of the 2014 Target breach in the context of network segmentation?
5. What are the four categories of IoT components mentioned in the lesson?

## 🔗 Related Topics
* [[Network Segmentation]]
* [[VLANs]]
* [[Quality of Service (QoS)]]
* [[Power over Ethernet (PoE)]]
* [[Risk Management]]
