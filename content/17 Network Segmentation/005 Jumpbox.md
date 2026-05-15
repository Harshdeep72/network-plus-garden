# 005 Jumpbox

**Module/Section:** 17 Network Segmentation
**Tags:** #security #network-segmentation #jumpbox #🌱seedling

---

![[005 Jumpbox.mp4]]

## 📖 Core Concept
The lesson focuses on managing and securing **Screened Subnets** (often referred to as a DMZ) by utilizing **Internet-Facing Hosts** and **Jumpboxes**. The core objective is to isolate public-facing services from the internal network to prevent unauthorized access and lateral movement by attackers.

* **Internet-Facing Hosts:** Servers or hosts configured to accept inbound connections from the internet (e.g., web servers, email servers).
* **Screened Subnet Strategy:** By placing internet-facing hosts in a screened subnet, the internal network remains invisible to external scanners. Only the screened subnet is exposed to the outside world.
* **The Pivot Risk:** Attackers often compromise a host in the screened subnet and attempt to "pivot" (move laterally) into the internal network. Security measures like firewalls and Intrusion Detection Systems (IDS) are required between the screened subnet and the internal zone to mitigate this.
* **Management via Jumpbox:** To manage these semi-trusted servers, administrators use a **Jumpbox**. This prevents direct management connections from the internal network to the screened subnet, creating a controlled, hardened "gateway" for administrative tasks.

## 🛠️ Hardware & Devices
* **Firewall:** Used to isolate the screened subnet from both the outside (internet) and the inside (private network).
* **Jumpbox:** A hardened server (physical or virtual) used as a secure gateway to manage other hosts within the screened subnet.
* **Management Workstation:** The administrator's computer used to connect to the jumpbox.
* **Servers:** Specifically email, web, proxy, and remote access servers, which are typically placed in the screened subnet.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Internet-Facing Host**: A server or host that accepts inbound connections from the internet.
* **Screened Subnet**: A network segment isolated from the rest of the private network by one or more firewalls, designed to host services that require public access.
* **Bastion Host**: A specialized, hardened server placed in a screened subnet that is stripped of all unnecessary services (e.g., no Active Directory) to minimize the attack surface.
* **Jumpbox**: A hardened server used to provide secure, controlled access to other hosts within a screened subnet. It acts as a pivot point for administrators.
* **Hardening**: The process of securing a system by reducing its surface of vulnerability, typically by removing unnecessary software, services, and accounts.
* **Pivot**: A technique used by attackers where they compromise one system (usually in a less secure zone) to gain access to other systems in a more secure zone.

## 🔄 How It Works (Processes)
### The Jumpbox Administrative Workflow
1. **Connection**: An administrator connects from their **Management Workstation** to the **Jumpbox**.
2. **Authentication**: The jumpbox verifies the administrator's credentials.
3. **Pivoting**: Once authenticated, the administrator uses the jumpbox to connect to the specific target server within the **Screened Subnet**.
4. **Configuration**: The administrator performs necessary management tasks on the target server through the jumpbox.
5. **Isolation**: The firewall rules are configured to ensure that *only* the jumpbox has permission to communicate from the internal network to the screened subnet, preventing direct access from other internal devices.

## 📊 Comparisons & Key Differences
| Feature| Internal Network| Screened Subnet|
| :---| :---| :---|
| **Visibility**| Invisible to the internet| Visible (Internet-facing)|
| **Trust Level**| High| Semi-trusted|
| **Primary Purpose**| Internal operations/data| Public services (Web, Email)|
| **Access Control**| Restricted from outside| Open to specific public ports|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip**: Remember that a **Bastion Host** should never run internal services like Active Directory. It should only run services required for its public-facing role.
* **Exam Tip**: Virtual Machines (VMs) are preferred for jumpboxes because they can be easily destroyed and redeployed from a "known good" image if a compromise is suspected.
* **Security Best Practice**: Both the jumpbox and the management workstation must be heavily hardened with the absolute minimum amount of software installed to perform their duties.
* **Key Concept**: The primary reason for a jumpbox is to create a single, hardened, and auditable point of entry for managing high-risk network segments.

## ❓ Questions to Review
1. What is the primary purpose of a jumpbox in a network architecture?
2. Why should you avoid running Active Directory on a bastion host in a screened subnet?
3. How does a jumpbox prevent an attacker from directly accessing the internal network?
4. What is the difference between an internet-facing host and an internal host?
5. Why are virtual machines often preferred over physical hardware for jumpboxes?

## 🔗 Related Topics
* [[Firewalls]]
* [[Intrusion Detection Systems (IDS)]]
* [[Network Segmentation]]
* [[Virtualization]]
