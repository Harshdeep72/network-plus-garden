# 009 Software Defined Network (SDN)

**Module/Section:** 13 Cloud and Datacenter
**Tags:** #SDN #cloud-computing #infrastructure-as-code #🌱seedling

---

![[009 Software Defined Network (SDN).mp4]]

## 📖 Core Concept
**Software-Defined Networking (SDN)** is an architectural approach to networking that replaces traditional, hardware-bound network control with software-based controllers and APIs. By decoupling the network's intelligence from the underlying physical hardware, SDN allows for centralized management, automation, and application-aware traffic routing.

* **Application-Awareness:** The network makes intelligent decisions based on the specific requirements of the applications it supports, ensuring optimal performance and efficient resource utilization.
* **Infrastructure as Code (IaC):** SDN is a subset of IaC, where network provisioning and management are performed through scripted automation and orchestration rather than manual configuration.
* **Transport Agnostic:** SDN is not limited by the underlying physical medium (e.g., Ethernet, Wi-Fi), allowing for seamless operation across diverse transport types.
* **Cloud Integration:** SDN is critical for cloud environments, enabling horizontal and vertical scaling, high availability, and disaster recovery through automated resource provisioning.

## 🛠️ Hardware & Devices
* **Traditional Network Devices:** Routers, switches, and Quality of Service (QoS) devices (in conventional networks, these contain the control, data, and management planes within their own firmware).
* **Virtualized/Decoupled Devices:** In an SDN environment, physical hardware is abstracted; the device functions are separated into virtualized components that focus on specific plane functions.

## 📜 Protocols & Standards
* **API (Application Programming Interface):** Used to facilitate communication between the three planes (Control, Data, and Management) and to allow interoperability between different vendors.
* **OpenFlow:** An open-source protocol used in Open SDN to communicate between the control plane and the data plane.
* **OpFlex:** An open-source protocol used in Open SDN environments.
* **OpenStack:** An open-source cloud computing platform that utilizes SDN technologies.

## 🔑 Key Terminology
* **Software-Defined Networking (SDN):** An approach to networking that uses software-based controllers or APIs to communicate with underlying hardware and direct traffic.
* **Control Plane:** The portion of the network architecture responsible for signaling, building routing tables, and making decisions on how traffic should be prioritized, secured, and switched.
* **Data Plane (Forwarding Plane):** The portion of the network architecture that carries actual user traffic and implements Access Control Lists (ACLs).
* **Management Plane:** The portion of the network architecture used to administer routers/switches, monitor traffic conditions, and enforce centralized policies.
* **Infrastructure as Code (IaC):** The management and provisioning of infrastructure (networks, servers, databases) through machine-readable definition files rather than manual hardware configuration.
* **Open SDN:** An open-source variant of SDN relying on technologies like OpenFlow, OpFlex, and OpenStack.
* **Hybrid SDN:** A network that employs both traditional SDN protocols and conventional networking protocols.
* **SDN Overlay:** A method of creating network abstraction layers to run multiple separate, discrete virtualized network layers on top of a physical network.
* **Zero Trust Provisioning:** A security model where SDN is configured and maintained with minimal manual intervention, ensuring that access is strictly controlled.

## 🔄 How It Works (Processes)
1. **Policy Definition:** An administrator defines network policies via an SDN application on the **Management Plane**.
2. **Deployment:** These policies are pushed to the **Control Plane** of the network devices.
3. **Execution:** The **Data Plane** receives instructions from the Control Plane to forward, drop, or prioritize traffic based on the defined policies.
4. **Orchestration:** In cloud environments, the system monitors traffic/load and automatically triggers the SDN to spin up or scale down resources (servers/links) as needed.

## 📊 Comparisons & Key Differences

| Feature| Conventional Network| Software-Defined Network (SDN)|
| :---| :---| :---|
| **Control/Data/Mgmt Planes**| Integrated in physical hardware firmware| Decoupled/Virtualized|
| **Configuration**| Manual, device-by-device| Centralized, automated via APIs|
| **Vendor Interoperability**| Often proprietary/vendor-locked| High (mix-and-match via common APIs)|
| **Scalability**| Slow, manual| Rapid, automated (orchestration)|

## ⚠️ Exam Tips & Important Notes
* **The Controller Risk:** The SDN controller is a "single point of failure" and a high-value target for attackers. Hardening the controller is a critical security task.
* **Plane Functions:** Remember the distinction: Control plane *decides*, Data plane *moves*, Management plane *monitors/configures*.
* **Security Benefit:** Because SDN is software-based, it is easier to collect and analyze security data across the entire network to detect deviations from established baselines.
* **Logical Isolation:** SDN overlays are frequently used to implement Zero Trust by creating secure, logical peer-to-peer connections across physical infrastructure.

## ❓ Questions to Review
1. Which plane is responsible for the actual forwarding of user traffic in an SDN?
2. How does SDN contribute to the concept of "Infrastructure as Code"?
3. What is the primary risk associated with a centralized SDN controller?
4. What is the difference between an Open SDN and an SDN Overlay?
5. Why is SDN considered "transport agnostic"?
6. How does SDN improve security monitoring compared to traditional networks?

## 🔗 Related Topics
* [[Cloud Computing]]
* [[Network Segmentation]]
* [[Quality of Service (QoS)]]
* [[Access Control Lists (ACLs)]]
* [[Zero Trust]]
