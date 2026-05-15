# 001 Network Segmentation

**Module/Section:** 17 Network Segmentation
**Tags:** #network-segmentation #security #🌱seedling

---

![[001 Network Segmentation.mp4]]

## 📖 Core Concept
Network segmentation is a fundamental security strategy used to divide a network into smaller, isolated segments. The primary goal is to minimize the attack surface, contain potential breaches, and control traffic flow between trusted, untrusted, and semi-trusted zones. As a network technician, this involves configuring hardware and software to enforce security policies, ensuring that only authorized traffic can traverse specific network boundaries.

This section covers the integration of security appliances and architectural philosophies (like Zero Trust) to protect modern, complex network environments.

## 🛠️ Hardware & Devices
* **Firewalls:** Boundary devices used to analyze and filter traffic entering or leaving a network or network segment.
* **Routers:** Used in conjunction with Access Control Lists (ACLs) to route and filter traffic.
* **Jumpboxes:** Trusted, hardened devices used as a secure gateway to connect into semi-trusted zones (e.g., a screened subnet).
* **IoT (Internet of Things) Devices:** Non-traditional network devices that rely on network/internet connectivity, including:
 * Smart glasses
 * Smart watches
 * Smart refrigerators
 * IP cameras
 * Home automation systems
* **SCADA (Supervisory Control and Data Acquisition) / ICS (Industrial Control Systems):** Specialized devices and networks used in Operational Technology (OT) to control physical-world actions (e.g., operating drawbridges, industrial machinery).
* **Proxy Servers:** Intermediary servers that handle requests on behalf of clients, often used for content filtering.

## 📜 Protocols & Standards
* **VPN (Virtual Private Network):** A technology used to create a secure, encrypted tunnel for remote connectivity between sites or from a remote user to a corporate network.
* **URL Filtering:** A method of restricting access to specific websites or categories of web content.

## 🔑 Key Terminology
* **Network Segmentation:** The process of splitting a network into smaller sub-networks to improve performance and security.
* **Access Control List (ACL):** A set of rules applied to an interface or device that determines whether traffic is permitted or denied based on criteria like source/destination IP or port.
* **Screened Subnet:** A network segment (formerly known as a DMZ) that acts as a buffer between a trusted internal network and an untrusted external network.
* **BYOD (Bring Your Own Device):** A policy allowing employees to use personal devices for work; requires strict segmentation to protect corporate resources.
* **Zero Trust Architecture:** A security model based on the principle of "never trust, always verify," requiring continuous authentication and authorization for every user and device, regardless of their location (inside or outside the network).
* **Operational Technology (OT):** Hardware and software that detects or causes a change through the direct monitoring and/or control of physical devices, processes, and events.

## 🔄 How It Works (Processes)
* **Traffic Analysis:** Firewalls inspect incoming and outgoing packets against defined security policies.
* **Remote Access Management:** The process of connecting to network devices remotely to perform configuration and maintenance tasks.
* **VPN Tunneling:** Encapsulating data packets within an encrypted tunnel to ensure secure transit over public networks.
* **Zero Trust Verification:** Every access request is treated as if it originates from an open network; the system verifies identity, device health, and permissions before granting access to a resource.

## 📊 Comparisons & Key Differences
* **Hardware vs. Software Firewalls:** The instructor notes that both types will be configured during the course to demonstrate different deployment scenarios.
* **BYOD vs. Corporate-Owned:** The course focuses on the alternatives to BYOD and how segmentation mitigates the risks associated with personal devices connecting to corporate infrastructure.

## ⚠️ Exam Tips & Important Notes
* **Exam Objectives:** This section covers:
 * **1.2:** Compare/contrast networking appliances, applications, and functions.
 * **1.8:** Summarize evolving use cases for modern network environments.
 * **3.5:** Compare/contrast network access and management methods.
 * **4.1:** Explain the importance of basic network security concepts.
 * **4.3:** Apply network security features, defense techniques, and solutions.
* **Security Mindset:** Always remember that as a technician, you are responsible for implementing the security upgrades defined by the cybersecurity team.

## ❓ Questions to Review
1. What is the primary purpose of a firewall in a network segment?
2. How does a Jumpbox enhance security when accessing a semi-trusted zone?
3. What is the core philosophy of a Zero Trust Architecture?
4. Why is network segmentation critical when implementing a BYOD policy?
5. What is the difference between standard IT devices and SCADA/ICS devices?

## 🔗 Related Topics
* [[Firewalls]]
* [[Access Control Lists]]
* [[Virtual Private Networks]]
* [[Zero Trust]]
* [[Internet of Things]]
* [[SCADA and ICS]]
