# 002 Common Documentation

**Module/Section:** 20 Documentation and Processes
**Tags:** #documentation #network-diagrams #site-survey #baseline #🌱seedling

---

![[002 Common Documentation.mp4]]

## 📖 Core Concept
Enterprise network management relies on comprehensive documentation to maintain, troubleshoot, and scale infrastructure. Documentation is categorized into visual representations of the network (physical vs. logical), assessments of the environment (site surveys, audits), and standardized configurations (baselines). These documents ensure that administrators understand both the physical placement of hardware and the abstract flow of data.

## 🛠️ Hardware & Devices
* **IP-based CCTV:** Cameras connected via network cabling.
* **Network Video Recorder (NVR):** Centralized device for recording camera feeds; often includes **Power over Ethernet (PoE)** ports.
* **Patch Panel:** A hardware unit with multiple ports used to organize and manage incoming/outgoing LAN cables.
* **Edge Switch:** A switch that connects end-user devices to the network.
* **Storage Area Network (SAN) Controllers:** Devices managing disk arrays for storage.
* **Firewalls:** Security devices that monitor and control incoming/outgoing network traffic.
* **Virtual Machine (VM) Host Servers:** Servers running hypervisors (e.g., ESXi) to host multiple virtual machines.
* **Tape Backup Library:** Hardware used for long-term data archival.
* **Main Distribution Frame (MDF):** The primary hub or central point for network cabling in a building.
* **Intermediate Distribution Frame (IDF):** A secondary distribution point that connects to the MDF, typically serving a specific floor or area.
* **Wireless Access Point (WAP):** A device that allows wireless devices to connect to a wired network.

## 📜 Protocols & Standards
* **PoE (Power over Ethernet):** A technology that allows network cables to carry electrical power to devices (like cameras or WAPs).
* **QoS (Quality of Service):** A set of technologies used to manage data traffic to reduce packet loss, latency, and jitter on a network.
* **Standardized Symbols (Cisco Notation):**
 * **Router:** Circle with four arrows (two pointing in, two pointing out).
 * **Switch:** Square with four arrows pointing outward.
 * **Server:** Large rectangle.
 * **Firewall:** Brick wall icon.
 * **IDS/IPS:** Rectangle with a circle inside and two crossing arrows.
 * **Access Point:** Rectangle with radio waves.

## 🔑 Key Terminology
* **Physical Network Diagram:** A document showing the actual physical arrangement of components, including cabling, hardware, and floor plans.
* **Logical Network Diagram:** A document illustrating the flow of data, subnets, routing protocols, and communication paths between devices.
* **Wiring Diagram:** A specific document detailing cable runs, port connections, and patch panel assignments.
* **Site Survey (Wireless/RF):** The process of planning and designing a wireless network to ensure coverage, capacity, roaming, and QoS.
* **Site Survey (Wired):** An assessment of physical space, power, cooling (HVAC), and infrastructure readiness for new equipment.
* **Audit and Assessment Report:** A formal document detailing the findings, security posture, and recommendations provided by an audit team.
* **Baseline Configuration:** A documented, stable set of specifications for a system that has been formally reviewed and can only be modified via change control procedures.
* **Change Control:** A formal process for requesting, testing, and approving changes to a baseline configuration.

## 🔄 How It Works (Processes)
* **Wireless Site Survey:** Uses signal strength mapping (often color-coded: Green = Strong, Red = Weak) to determine optimal WAP placement.
* **Baseline Management:**
 1. Establish a stable configuration.
 2. Formally review and agree upon the configuration.
 3. Lock the configuration.
 4. If a change is needed, initiate a **Change Control** request.
 5. Test and approve the change.
 6. Update the documentation to reflect the new baseline.

## 📊 Comparisons & Key Differences

| Feature| Physical Network Diagram| Logical Network Diagram|
| :---| :---| :---|
| **Focus**| Hardware, cables, racks, floor plans| Data flow, subnets, protocols, IPs|
| **View**| "Bird's-eye" or "Rack view"| Abstract/Communication view|
| **Detail**| Port-to-port connections| Interface IDs (e.g., g0/1) and logic|

## ⚠️ Exam Tips & Important Notes
* **Physical vs. Logical:** Always distinguish between *where* a cable is plugged in (Physical) and *how* data travels between subnets (Logical).
* **Baseline Importance:** Remember that a baseline is not just a "current state"; it is a *formally approved* state that requires a change control process to alter.
* **Site Survey:** If the question mentions "HVAC, power, and space," it is referring to a **Wired Site Survey**, not a wireless one.
* **Symbols:** Be familiar with common network symbols (routers vs. switches) as they are frequently used in exam diagrams.

## ❓ Questions to Review
1. Which document would you consult to determine if a data center has enough cooling capacity for new server racks?
2. What is the primary difference between a physical network diagram and a logical network diagram?
3. Why is a formal change control process required for baseline configurations?
4. In a wireless site survey, what do the different colors (Green to Red) typically represent?
5. What is the difference between an MDF and an IDF?

## 🔗 Related Topics
* [[Network Topologies]]
* [[Wireless Networking]]
* [[Change Management]]
* [[Data Center Infrastructure]]
