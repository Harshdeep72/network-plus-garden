# 012 SASE and SSE

**Module/Section:** 13 Cloud and Datacenter
**Tags:** #SASE #SSE #cloud-security #network-architecture #🌱seedling

---

![[012 SASE and SSE.mp4]]

## 📖 Core Concept
The modern enterprise has moved beyond the traditional "perimeter-based" network model. With the rise of cloud computing, mobile workforces, and BYOD (Bring Your Own Device), the corporate network boundary has effectively dissolved. **SASE** and **SSE** are cloud-centric frameworks designed to provide secure, fast, and reliable access to resources regardless of user location or device type.

* **SASE (Secure Access Secure Edge):** A comprehensive framework that consolidates **Wide Area Networking (WAN)** capabilities with security functions into a single, cloud-native service. It addresses the needs of distributed enterprises by moving security from hardware-based appliances to the cloud.
* **SSE (Security Service Edge):** A subset of the SASE model. It focuses exclusively on the security components required to protect interactions between users, devices, and cloud applications.

## 🛠️ Hardware & Devices
* **Traditional Hardware Appliances:** Refers to physical firewalls, routers, and VPN concentrators that were historically used at the network edge. SASE aims to replace these with cloud-native services.
* **Border Devices:** In the context of SSE, a **CASB** acts as a virtual "border device" that sits between the cloud service consumer and the cloud service provider to enforce policy.

## 📜 Protocols & Standards
* **IPSec (Internet Protocol Security):** Used in VPN tunnels to securely connect on-premise infrastructure to cloud virtual networks (e.g., Google Cloud VPN).
* **SDN (Software-Defined Networking):** The underlying technology that enables SASE to provide networking and security services from the cloud rather than physical hardware.

## 🔑 Key Terminology
* **SASE (Secure Access Secure Edge):** A framework that combines WAN capabilities (like SD-WAN) with cloud-native security services (like SWG, CASB, ZTNA, and FWaaS) to provide secure access to distributed users.
* **SSE (Security Service Edge):** A framework that focuses specifically on the security pillar of SASE, providing secure access to the internet, cloud services, and private applications.
* **SWG (Secure Web Gateway):** A security solution that inspects and filters web/internet traffic to block malware and enforce compliance policies.
* **CASB (Cloud Access Security Broker):** A security policy enforcement point placed between cloud service users and cloud applications to provide visibility, compliance, and threat protection.
* **ZTNA (Zero Trust Network Access):** A security model that assumes no user or device is trusted by default, regardless of whether they are inside or outside the corporate network. Access is granted based on identity and context.
* **BYOD (Bring Your Own Device):** A policy allowing employees to use personal devices for work, which contributes to the dissolution of the traditional network perimeter.
* **VPC (Virtual Private Cloud):** An AWS service that provides a secure, flexible, isolated virtual network in the cloud.
* **Azure Virtual WAN:** A Microsoft service providing global, secure connectivity between branch offices, data centers, and Azure resources.
* **Azure ExpressRoute:** A dedicated private connection between an on-premise data center and Azure.
* **Google Cloud Interconnect:** A dedicated private connection between on-premise infrastructure and the Google Cloud Platform (GCP).

## 🔄 How It Works (Processes)
1. **Traffic Inspection:** Instead of "backhauling" traffic to a central corporate data center (which increases latency), SASE/SSE inspects traffic at the cloud edge.
2. **Policy Enforcement:** Security policies (CASB/SWG) are applied consistently across all users, regardless of whether they are at a branch office, home, or mobile.
3. **Zero Trust Access:** When a user attempts to access an application, ZTNA evaluates the user's identity and device context before granting access, rather than relying on a perimeter firewall.

## 📊 Comparisons & Key Differences

| Feature| SASE| SSE|
| :---| :---| :---|
| **Scope**| Comprehensive (WAN + Security)| Security-focused only|
| **Primary Goal**| Connectivity + Security| Protecting cloud/web interactions|
| **Components**| SD-WAN, SWG, CASB, ZTNA, FW| SWG, CASB, ZTNA|
| **Focus**| Distributed enterprise networking| Secure access to cloud/apps|

## ⚠️ Exam Tips & Important Notes
* **Distinction:** Remember that SASE is the "big picture" (Networking + Security), while SSE is the "subset" (Security only).
* **Cloud Provider Nuance:** Cloud providers (AWS, Azure, GCP) have services that *align* with SASE/SSE, but they are not "SASE providers" by definition. Know the specific services mentioned:
 * **AWS:** VPC
 * **Azure:** Virtual WAN, ExpressRoute
 * **GCP:** Cloud Interconnect, Cloud VPN
* **Latency:** A major benefit of SASE/SSE is the reduction of latency by eliminating the need to backhaul traffic to a central corporate firewall.

## ❓ Questions to Review
1. What is the primary difference between SASE and SSE?
2. Which technology allows SASE to provide services from the cloud instead of physical hardware?
3. How does ZTNA differ from a traditional perimeter-based firewall approach?
4. What is the function of a CASB in a cloud-centric security model?
5. Why is "backhauling" traffic considered a disadvantage in modern network architectures?

## 🔗 Related Topics
* [[Software Defined Networking (SDN)]]
* [[Zero Trust]]
* [[VPN]]
* [[Cloud Computing Models]]
