# 010 Software-Defined Wide Area Network (SD-WAN)

**Module/Section:** 13 Cloud and Datacenter
**Tags:** #sd-wan #wan #cloud-computing #🌱seedling

---

![[010 Software-Defined Wide Area Network (SD-WAN).mp4]]

## 📖 Core Concept
SD-WAN is a virtualized, software-based approach to managing and optimizing Wide Area Network (WAN) connections. It decouples the control plane from the underlying physical hardware, allowing organizations to manage network traffic centrally.

* **Purpose:** To provide an agile, secure, and efficient infrastructure for geographically distributed workforces that rely heavily on cloud-based applications.
* **Evolution:** Traditional WANs were designed for centralized traffic (hub-and-spoke), which creates bottlenecks when accessing cloud services. SD-WAN is designed for "cloud-first" enterprises, enabling direct, intelligent routing to cloud environments (IaaS, PaaS, SaaS) rather than backhauling all traffic through a central headquarters.
* **Key Benefit:** It improves user experience, increases performance, and provides centralized visibility and manageability across the entire enterprise WAN.

## 🛠️ Hardware & Devices
* **Traditional WAN Infrastructure:** Physical routers and circuits (e.g., MPLS) that require manual, device-by-device configuration.
* **Transport Media (Underlying hardware for SD-WAN):**
 * **MPLS (Multiprotocol Label Switching):** A traditional, high-reliability WAN circuit.
 * **Cellular Connections:** 4G/5G links used as transport.
 * **Microwave Links:** Wireless point-to-point or point-to-multipoint connections.
 * **Broadband Internet:** Standard consumer or business-grade internet (e.g., Cable modems).

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **SD-WAN (Software-Defined Wide Area Network):** A virtual WAN architecture that allows enterprises to leverage any combination of transport services to securely connect users to applications.
* **Control Plane:** The part of the network architecture that makes decisions about where traffic is sent; in SD-WAN, this is abstracted from the hardware and centralized.
* **IaaS (Infrastructure as a Service):** A cloud computing model where virtualized computing resources are provided over the internet.
* **PaaS (Platform as a Service):** A cloud computing model that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure.
* **SaaS (Software as a Service):** A software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted.
* **Star Topology:** A network layout where all branch offices connect back to a single central headquarters; the traditional model for WANs.

## 🔄 How It Works (Processes)
1. **Abstraction:** The control logic is removed from individual physical routers and moved to a centralized software controller.
2. **Transport Agnostic:** The SD-WAN layer sits on top of various physical transport methods (MPLS, Broadband, Cellular, etc.).
3. **Intelligent Routing:** The SD-WAN software identifies specific network applications being used by end users.
4. **Dynamic Path Selection:** Based on the application type and network conditions, the SD-WAN intelligently redirects traffic across the most efficient path (e.g., sending critical business traffic over MPLS and general web traffic over broadband).
5. **Centralized Management:** Administrators manage the entire WAN environment from a single point of control rather than configuring individual devices.

## 📊 Comparisons & Key Differences

| Feature| Traditional WAN| SD-WAN|
| :---| :---| :---|
| **Control**| Distributed (device-by-device)| Centralized (software-defined)|
| **Traffic Flow**| Backhauled to HQ (Star topology)| Intelligent, direct-to-cloud/site|
| **Transport**| Rigid (often MPLS-only)| Agnostic (mix of MPLS, Broadband, Cellular)|
| **Cloud Readiness**| Poor (bottlenecks at HQ)| High (optimized for cloud/SaaS/IaaS)|

## ⚠️ Exam Tips & Important Notes
* **The "Why":** Remember that SD-WAN is the solution to the "bottleneck" problem caused by traditional hub-and-spoke WAN architectures when users try to access cloud services.
* **Flexibility:** SD-WAN is "transport agnostic," meaning it doesn't care what the underlying physical link is; it can aggregate multiple types of connections to create one virtual network.
* **Focus:** Think of SD-WAN as a way to increase agility and security for a geographically dispersed workforce.

## ❓ Questions to Review
1. What is the primary purpose of an SD-WAN in a modern enterprise?
2. How does SD-WAN differ from a traditional star-topology WAN regarding cloud traffic?
3. What does it mean for an SD-WAN to be "transport agnostic"?
4. Why does a traditional WAN architecture often result in poor performance for cloud-based applications?
5. What are the three main cloud service models mentioned that benefit from SD-WAN?
6. Where does the "intelligence" of an SD-WAN reside compared to a traditional router?

## 🔗 Related Topics
* [[Wide Area Network (WAN)]]
* [[Cloud Computing Models]]
* [[Network Topologies]]
* [[Multiprotocol Label Switching (MPLS)]]
