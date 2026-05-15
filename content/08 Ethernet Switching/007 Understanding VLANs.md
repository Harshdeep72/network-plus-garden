# 007 Understanding VLANs

**Module/Section:** 08 Ethernet Switching
**Tags:** #VLAN #switching #segmentation #🌱seedling

---

![[007 Understanding VLANs.mp4]]

## 📖 Core Concept
The primary purpose of a **VLAN (Virtual Local Area Network)** is to take a single large physical broadcast domain and break it into smaller, logical broadcast domains based on organizational structure (e.g., departments).

* **Logical Separation:** VLANs allow administrators to group devices logically rather than physically. Even if devices are plugged into the same physical switch, they can be isolated from one another.
* **Broadcast Domains:** By default, a switch is one large broadcast domain. Implementing VLANs segments this domain, which improves security and reduces unnecessary traffic (broadcast storms).
* **Security:** By using **Network Isolation**, traffic is restricted so that devices in one VLAN cannot communicate with devices in another VLAN unless explicitly permitted.
* **Scalability:** VLAN numbering schemes (e.g., 100, 200, 300) allow for future growth and sub-departmental organization (e.g., 101 for VOIP, 102 for printers).

## 🛠️ Hardware & Devices
* **Dream Wall / Dream Station:** A Small Office/Home Office (SOHO) router/switch device used for the demonstration. It functions as a **Unified Threat Management (UTM)** system.
* **Switch:** The physical hardware used to connect devices. The video demonstrates a 24-port switch.
* **Endpoints:** Devices such as laptops and VOIP phones connected to specific switch ports.

## 📜 Protocols & Standards
* **IPv4:** Used for network addressing within the VLANs.
* **IPv6:** Mentioned as an alternative addressing scheme (not configured in the demo).
* **DHCP (Dynamic Host Configuration Protocol):** Used to automatically assign IP addresses to devices within the VLANs.
* **VLAN Tagging:** The method of adding a tag to an Ethernet frame to identify which VLAN the traffic belongs to.

## 🔑 Key Terminology
* **VLAN (Virtual Local Area Network):** A logical grouping of devices on a single physical switch that acts as if they are on separate physical networks.
* **Default VLAN:** The native VLAN (usually VLAN 1) that exists on a switch by default; all ports are typically assigned to this VLAN initially.
* **Broadcast Domain:** A logical division of a computer network where all nodes can reach each other by broadcast at the data link layer.
* **Unified Threat Management (UTM):** A security appliance that consolidates multiple security features, such as a firewall, proxy server, and content filtering, into a single device.
* **Network Isolation:** A configuration setting that prevents inter-VLAN communication, ensuring that devices within a specific VLAN can only talk to other devices in that same VLAN.
* **Content Filtering:** A feature that blocks access to specific types of web content (e.g., gambling, pornography) based on defined policies (e.g., "Work" or "Family").
* **Native VLAN:** The VLAN assigned to a port that carries untagged traffic.
* **Tagged VLAN:** Traffic that includes a VLAN ID in the frame header to identify its membership.

## 🔄 How It Works (Processes)
1. **Creation:** Define a new virtual network, assign a name, and choose a VLAN ID (e.g., 100).
2. **Segmentation:** Apply security policies (like content filtering) and enable network isolation.
3. **Port Assignment:**
 * **Native/Default Assignment:** Assign a specific VLAN to a port so that any device plugged into it is automatically part of that VLAN.
 * **Custom/Tagged Assignment:** Configure a port to allow multiple VLANs (e.g., allowing both a Data VLAN and a VOIP VLAN on the same physical port).
4. **Verification:** Use a "VLAN Viewer" or CLI to confirm which ports are assigned to which VLANs and ensure that unauthorized ports are blocked from accessing sensitive VLANs.

## 📊 Comparisons & Key Differences
| Feature| Default Configuration| VLAN-Segmented Configuration|
| :---| :---| :---|
| **Broadcast Domain**| One large domain (all ports)| Multiple smaller, isolated domains|
| **Security**| Low (all devices can talk)| High (logical isolation)|
| **Port Access**| All ports open to all VLANs| Ports restricted to specific VLANs|

## ⚠️ Exam Tips & Important Notes
* **Exam Scope:** The instructor explicitly states that you do **not** need to know how to configure a specific GUI (like the UniFi Dream Wall) for the exam.
* **Conceptual Understanding:** Focus on the *concept* of VLANs, how they segment broadcast domains, and the role of tagging.
* **Real-World Application:** While the GUI is specific to one vendor, the underlying principles (VLAN IDs, tagging, port assignment) apply to all enterprise hardware (Cisco, Juniper, etc.).
* **Security:** Always remember that VLANs provide logical separation, but inter-VLAN routing is required if you *do* want them to communicate (usually via a Layer 3 device).

## ❓ Questions to Review
1. What is the primary benefit of breaking a large broadcast domain into smaller VLANs?
2. What happens to network security when "Network Isolation" is enabled on a VLAN?
3. How does a switch distinguish between traffic belonging to different VLANs on the same physical wire?
4. Why might an administrator choose to use a numbering scheme like 100, 200, 300 instead of 1, 2, 3?
5. In the context of the video, what is the difference between the "Default" VLAN and a "Custom" VLAN assignment on a switch port?

## 🔗 Related Topics
* [[VLAN Tagging]]
* [[Broadcast Domains]]
* [[Layer 2 vs Layer 3 Switching]]
* [[DHCP]]
* [[Firewalls and UTM]]
