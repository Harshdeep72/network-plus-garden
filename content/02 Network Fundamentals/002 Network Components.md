# 002 Network Components

**Module/Section:** 02 - Network Fundamentals
**Tags:** #network-components #clients #servers #hubs #switches #wireless-access-points #routers #firewalls #load-balancers #proxies #ids #ips #controllers #nas #san #media #wan-links #network-fundamentals #hardware #security #🌱seedling

---

![[002 Network Components.mp4]]

## 📖 Core Concept
The fundamental purpose of networks is to facilitate the transmission of data—whether voice, video, or general data—from one location to another, specifically between different machines. This lesson introduces the various essential components that collectively form a network, enabling this data transfer. Understanding these components is crucial for designing, managing, troubleshooting, and securing networks in the field of information technology. The instructor emphasizes that while some terms may be familiar, others might be new, and each will be briefly explored, with more in-depth discussions planned for later in the course.

## 🛠️ Hardware & Devices
* **Clients**: Devices used by end-users to access the network.
 * Examples: Workstations, laptops, tablets, smartphones, smart TVs, Wi-Fi enabled thermostats.
 * Any device that connects to the network for user interaction.
* **Servers**: Devices that provide resources to other devices (clients) on the network.
 * Examples: Email servers, file servers, web servers.
 * Can be dedicated hardware or specialized software running on a device.
* **Hubs**: Older networking devices used to connect multiple network devices (clients and servers) together over a [[Local Area Network (LAN)]].
 * **Limitations**: Broadcasts all incoming traffic to all other ports, leading to increased network errors and inefficient bandwidth utilization.
 * Evolution: Evolved into [[Bridges]], and then into [[Switches]].
 * **Exam Relevance**: Not commonly used in modern networks but still relevant for the exam as a potential answer choice.
* **Switches**: Smarter versions of hubs that connect network devices.
 * **Functionality**: Learn which devices are on which ports and only forward traffic to the intended destination port.
 * **Benefits**: Provides more security and more efficient bandwidth utilization by avoiding unnecessary broadcasting.
* **Wireless Access Points (WAPs / APs)**: Devices that allow wireless devices to connect to a wired network.
 * **Prevalence**: Common in homes, businesses, and large networks.
 * **Mechanism**: Broadcasts data over radio frequency waves, unlike hubs that use copper or fiber cables.
* **Routers**: Crucial components used to connect different networks together.
 * **Functionality**: Make intelligent forwarding decisions based on the [[IP addresses]] of communicating devices.
 * **Protocol Reliance**: Modern routers primarily rely on the [[Internet Protocol (IP)]] and various [[Routing Protocols]] to direct traffic.
* **Firewalls**: Security barriers positioned between an internal network and an external network (typically the Internet).
 * **Functionality**: Monitor and control incoming and outgoing network traffic based on predetermined security rules, often using [[Access Control Lists (ACLs)]].
 * **Purpose**: Protect the network from unauthorized access, cyber attacks, and other online threats.
 * **Types**: Can be hardware-based, software-based, or a combination of both.
* **Load Balancers**: Devices or software that distribute network or application traffic across multiple servers.
 * **Purpose**: Increase efficiency, capacity, and reliability of services.
 * **Mechanism**: Prevents any single server from becoming a bottleneck by balancing requested loads.
 * **Benefit**: Improves overall network performance.
* **Proxy Servers**: Act as an intermediary between a user's device and the internet.
 * **Functionalities**: Web filtering, shared network connections, data caching (to improve performance).
 * **Security/Privacy**: Can enhance security and privacy by hiding the user's real [[IP address]] and limiting exposure to the internet.
* **Intrusion Detection Systems (IDS)**: Systems designed to detect unauthorized access or anomalies on a network.
 * **Action**: Alerts system administrators when threats or unusual activities are detected.
* **Intrusion Prevention Systems (IPS)**: Systems that not only detect threats (like an IDS) but also take active measures to prevent intrusions.
 * **Actions**: Blocking traffic from entering the network, dropping harmful packets.
* **Controllers**: Central units primarily used in [[Software-Defined Networking (SDN)]].
 * **Functionality**: Manage the flow control to networking devices (switches and routers).
 * **Benefit**: Allows network administrators to dictate network behavior through software, offering greater flexibility and efficiency.
* **Network-Attached Storage (NAS) Devices**: Dedicated file storage systems connected to a network.
 * **Functionality**: Provide data access to a heterogeneous group of clients.
 * **Purpose**: Centralized data storage and retrieval for authorized network users and clients.
* **Storage Area Networks (SAN)**: High-speed networks that provide access to consolidated block-level data storage.
 * **Purpose**: Designed to handle large volumes of data.
 * **Application**: Used to enhance storage devices (e.g., disk arrays, tape libraries) and make them accessible to servers.
* **Media**: Physical materials used to transmit data in a network.
 * Examples: Copper cable, fiber optic cable, wireless signals.
 * **Characteristics**: Each type has unique properties, strengths, and limitations that influence its use in different network scenarios.
* **WAN Links**: Wide Area Network links used to connect networks over large geographical areas.
 * Examples: Between cities or countries.
 * **Purpose**: Essential for global connectivity and enabling data exchange over long distances.
 * **Technologies**: Lease lines, satellite communications, cellular networks.

## 📜 Protocols & Standards
* **Internet Protocol (IP)**: Modern routers predominantly rely on IP to route traffic across networks.
* **Routing Protocols**: Various protocols used by routers to determine the best paths for data transmission. (Specific protocols not detailed in this lesson, but mentioned as a category).

## 🔑 Key Terminology
* **Clients**: Devices that users access the network with, such as workstations, laptops, tablets, smartphones, smart TVs, and Wi-Fi enabled thermostats.
* **Servers**: Devices that provide resources (e.g., email, files, web pages) to other devices on the network.
* **Hubs**: Older networking devices that connect multiple network devices and broadcast all incoming traffic to all other ports.
* **Switches**: Smarter networking devices that connect network devices and forward traffic only to the intended destination port, based on learned device locations.
* **Wireless Access Points (WAPs / APs)**: Devices that allow wireless devices to connect to a wired network by broadcasting data over radio frequency waves.
* **Routers**: Devices that connect different networks together and make intelligent forwarding decisions based on IP addresses.
* **Firewalls**: Security devices (hardware, software, or both) that monitor and control network traffic based on predetermined security rules to protect against unauthorized access and cyber threats.
* **Load Balancers**: Devices or software that distribute network or application traffic across multiple servers to improve efficiency, capacity, and reliability.
* **Proxy Server**: An intermediary device or server between a user's device and the internet, providing functionalities like web filtering, shared connections, caching, and enhanced security/privacy.
* **Intrusion Detection System (IDS)**: A system designed to detect unauthorized access or anomalies on a network and alert administrators.
* **Intrusion Prevention System (IPS)**: A system that not only detects threats but also actively takes steps to prevent intrusions, such as blocking traffic or dropping harmful packets.
* **Controllers**: Centralized units, especially in Software-Defined Networking (SDN), that manage the flow control to networking devices, allowing software-based network management.
* **Network-Attached Storage (NAS) Devices**: Dedicated file storage systems connected to a network, providing centralized data storage and retrieval for clients.
* **Storage Area Network (SAN)**: A high-speed network providing access to consolidated block-level data storage, typically used to enhance and make accessible large storage devices to servers.
* **Media**: The physical materials used to transmit data in a network, such as copper cable, fiber optic cable, or wireless signals.
* **WAN Links**: Connections used to link networks over large geographical areas, enabling data exchange over long distances.
* **Access Control Lists (ACLs)**: Predetermined security rules used by firewalls to monitor and control network traffic.

## 🔄 How It Works (Processes)
* **Hub Operation**: A hub receives data on one port and broadcasts (sends) that data out to all other connected ports, regardless of the intended recipient. This leads to all devices on the hub receiving traffic not meant for them.
* **Switch Operation**: A switch learns the [[MAC addresses]] of devices connected to its ports. When data arrives, the switch looks up the destination MAC address in its table and forwards the data only to the specific port where the destination device is located. This prevents unnecessary broadcasting.
* **Router Operation**: A router receives data packets and examines their destination [[IP address]]. Based on its routing table and routing protocols, it determines the best path to forward the packet to the correct destination network.
* **Firewall Operation**: A firewall inspects incoming and outgoing network traffic against a set of predefined [[Access Control Lists (ACLs)]] or security rules. It then decides whether to allow or deny the traffic based on these rules.
* **Load Balancer Operation**: A load balancer sits in front of multiple servers. When a request comes in, it intelligently distributes that request to one of the available servers, ensuring no single server is overloaded and optimizing resource utilization.
* **Proxy Server Operation**: A user's device sends a request to the proxy server instead of directly to the internet. The proxy server then forwards the request to the internet on behalf of the user. The response from the internet comes back to the proxy, which then forwards it to the user.
* **IDS Operation**: An IDS continuously monitors network traffic for patterns or signatures indicative of known attacks or unusual activity. When a suspicious event is detected, it generates an alert for an administrator.
* **IPS Operation**: An IPS performs the same monitoring as an IDS but, upon detecting a threat, it can actively intervene. This intervention might include blocking the malicious traffic, dropping harmful packets, or resetting the connection.
* **SDN Controller Operation**: In an SDN environment, the controller acts as the brain. Network administrators configure policies on the controller, which then translates these policies into instructions for the underlying network devices (switches, routers), dictating how they should forward traffic.

## 📊 Comparisons & Key Differences
| Feature| Hub| Switch|
| :------------------| :------------------------------------------| :-------------------------------------------------------------------|
| **Intelligence**| Not intelligent (Layer 1 device)| Intelligent (Layer 2 device, can learn MAC addresses)|
| **Traffic Handling**| Broadcasts all traffic to all ports| Forwards traffic only to the intended destination port|
| **Efficiency**| Inefficient bandwidth utilization| Efficient bandwidth utilization|
| **Security**| Low security (all devices see all traffic)| Higher security (traffic isolated to destination)|
| **Modern Use**| Not commonly used in modern networks| Standard in modern networks|
| **Evolution**| Predecessor to bridges and switches| Evolution of hubs and bridges|

| Feature| IDS (Intrusion Detection System)| IPS (Intrusion Prevention System)|
| :------------------| :------------------------------------------| :-------------------------------------------------------------------|
| **Primary Function**| Detects threats and alerts| Detects threats AND actively prevents them|
| **Action on Threat**| Passive: Alerts administrator| Active: Blocks traffic, drops packets, resets connections|
| **Intervention**| No direct intervention with traffic flow| Direct intervention with traffic flow|
| **Impact on Network**| Minimal impact on network performance| Can introduce latency or block legitimate traffic if misconfigured|

## ⚠️ Exam Tips & Important Notes
* **Hubs**: While an older technology not commonly used today, hubs are still relevant for the [[CompTIA Network+]] exam. The instructor explicitly states they "often are going to be used as one of your answer choices," implying you need to know their characteristics and limitations (e.g., broadcasting nature, increased errors).
* **Understanding Components**: The instructor emphasizes that understanding these network components is "crucial in the field of information technology" for network design, management, problem-solving, and security implementation.
* **Future Lessons**: This lesson provides a brief overview; the course will delve deeper into each component's operation and use cases later.

## ❓ Questions to Review
1. What is the primary difference in how a hub and a switch handle network traffic, and what are the implications of this difference for network performance and security?
2. Explain the role of a router in a network and how it makes forwarding decisions. Which key protocol does it predominantly rely on?
3. Describe the function of a firewall and list at least two types of firewalls mentioned. How do they protect a network?
4. Compare and contrast an [[Intrusion Detection System (IDS)]] and an [[Intrusion Prevention System (IPS)]], highlighting their key difference in responding to detected threats.
5. What is a [[Load Balancer]] and why is it important for network and application reliability and efficiency?
6. Define [[Network-Attached Storage (NAS)]] and [[Storage Area Network (SAN)]]. What is the primary purpose of each in a network environment?
7. What are [[WAN Links]], and why are they essential for modern global connectivity? Provide examples of technologies used for WAN links.
8. In the context of [[Software-Defined Networking (SDN)]], what is the role of a controller?

## 🔗 Related Topics
* [[Local Area Network (LAN)]]
* [[Wide Area Network (WAN)]]
* [[IP Address]]
* [[MAC Address]]
* [[Routing Protocols]]
* [[Access Control Lists (ACLs)]]
* [[Software-Defined Networking (SDN)]]
* [[Network Security]]
* [[Network Design]]
* [[Network Troubleshooting]]
* [[Network Media]]
