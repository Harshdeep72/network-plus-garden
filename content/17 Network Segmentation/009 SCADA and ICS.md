# 009 SCADA and ICS

**Module/Section:** 17 Network Segmentation
**Tags:** #ICS #SCADA #OT #industrial-security #🌱seedling

---

![[009 SCADA and ICS.mp4]]

## 📖 Core Concept
The lesson distinguishes between **Information Technology (IT)** and **Operational Technology (OT)**. While IT focuses on data, business networks, and standard computing (Windows, cloud, servers), OT focuses on communications networks designed to implement industrial control systems that interact with the physical world (e.g., opening valves, power generation, robotics).

* **OT Philosophy:** Unlike IT, which prioritizes the CIA triad (Confidentiality, Integrity, Availability) with a heavy emphasis on Confidentiality, OT prioritizes **Availability** and **Integrity** above all else. Confidentiality is often the lowest priority because these systems were historically isolated within physical factory walls, relying on physical security rather than digital encryption.
* **Integration:** While OT can function as a standalone, "air-gapped" system with manual controls (dials/gauges), it is increasingly integrated with IT networks to allow for remote monitoring and management via Windows or Linux-based interfaces.

## 🛠️ Hardware & Devices
* **Embedded Devices:** Specialized computers designed to perform a specific, dedicated function within an industrial environment.
* **Programmable Logic Controller (PLC):** A digital computer used in industrial settings to enable automation, assembly lines, and robotics. They process inputs from sensors and execute programmed actions.
* **Human-Machine Interface (HMI):** The interface (local control panel, touch screen, or software) that allows a human operator to monitor and provide input to the PLC/ICS.
* **Sensors/Actuators:** Devices that connect the real world to the digital world, providing input to the PLC or executing the PLC's output commands.
* **Smart Meters:** Devices used in utility networks (e.g., electric companies) to track usage and transmit data back to a central server via cellular or other WAN connections.
* **Control Server:** A central system that governs the automation process and the control loop of the ICS.

## 📜 Protocols & Standards
* **Fieldbus:** A family of digital serial data communication protocols used in OT networks to link PLCs, sensors, and I/O devices.
* **WAN Technologies (for SCADA):** Used to interconnect geographically dispersed ICS/DCS plants. Includes:
 * Cellular
 * Microwave
 * Satellite
 * Fiber
 * VPN-based LANs

## 🔑 Key Terminology
* **IT (Information Technology):** Standard business networking, including workstations, servers, and cloud platforms.
* **OT (Operational Technology):** A communications network designed to control physical-world processes (e.g., manufacturing, power grids).
* **ICS (Industrial Control System):** A system providing mechanisms for workflow and process automation by controlling machinery via embedded devices.
* **DCS (Distributed Control System):** A collection of multiple interconnected ICS units, typically contained within a single building or facility.
* **SCADA (Supervisory Control and Data Acquisition):** A type of ICS used to manage large-scale, multi-site equipment spread over a wide geographic region.
* **Control Loop:** The process where a sensor provides input to a PLC, which then performs an action, completing the automation cycle.

## 🔄 How It Works (Processes)
1. **The Control Loop:** A sensor detects a physical state (e.g., temperature or pressure) $\rightarrow$ The PLC receives this input $\rightarrow$ The PLC executes a programmed logic command $\rightarrow$ An actuator (e.g., a valve or pump) performs the physical action.
2. **SCADA Data Collection:** Field devices (PLCs) collect data $\rightarrow$ Data is transmitted over a WAN (cellular, satellite, etc.) $\rightarrow$ Data reaches a central SCADA server $\rightarrow$ The server collates the data for billing or monitoring purposes.

## 📊 Comparisons & Key Differences

| Feature| ICS| DCS| SCADA|
| :---| :---| :---| :---|
| **Scope**| Single plant/system| Small collection of ICS| Large-scale, multi-site|
| **Location**| Single facility| Single facility| Wide geographic region|
| **Primary Focus**| Process automation| Integrated process control| Supervisory management|

* **IT vs. OT Priorities:**
 * **IT:** Confidentiality > Integrity > Availability.
 * **OT:** Availability > Integrity > Confidentiality.

## ⚠️ Exam Tips & Important Notes
* **Exam Tip:** Always remember that in the world of OT/ICS, **Availability is paramount**. If the system goes down, the business loses money or critical infrastructure fails.
* **Exam Tip:** Distinguish between the scope of the systems: ICS (Single), DCS (Group/Facility), SCADA (Wide Area/Geographic).
* **Historical Context:** OT systems were historically isolated (air-gapped), which is why they lack the robust confidentiality features found in modern IT networks.

## ❓ Questions to Review
1. What is the primary priority in an OT environment compared to an IT environment?
2. What is the specific function of a PLC in an industrial network?
3. How does a SCADA system differ from a standard ICS?
4. What is the purpose of a "Fieldbus" in an industrial control system?
5. Why is confidentiality often considered the least important component of the CIA triad in traditional OT environments?

## 🔗 Related Topics
* [[Network Segmentation]]
* [[Wide Area Network (WAN)]]
* [[Virtual Private Network (VPN)]]
* [[CIA Triad]]
