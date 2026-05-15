# 008 Configuration Management

**Module/Section:** 20 Documentation and Processes
**Tags:** #configuration-management #documentation #asset-management #baselining #🌱seedling

---

![[008 Configuration Management.mp4]]

## 📖 Core Concept
Configuration management is the formalized process of maintaining up-to-date documentation and tracking of a network's components, lifecycle, and state. It ensures that the current state of the network is accurately reflected in documentation, which is critical for incident response, troubleshooting, and daily operations. Without accurate documentation, administrators cannot distinguish between "normal" network behavior and malicious activity or technical failures.

## 🛠️ Hardware & Devices
* **Network Infrastructure Components:** Routers, switches, firewalls, and desktop/laptop computers.
* **Physical Connectivity:** Cables, punch-down blocks, and patch panels.
* **Documentation Storage:** Physical binders, shared network drives, and knowledge base platforms (e.g., SharePoint).

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Configuration Management**: A formalized system of tracking network components and managing their lifecycle to ensure the network is documented, efficient, and reliable.
* **Asset Management**: The process of tracking network components, including budgeting, planning, purchasing, installing, and maintaining the lifecycle of hardware and software.
* **Baselining**: The process of collecting performance data under "normal" operating conditions to establish a reference point for future troubleshooting and incident response.
* **Cable Management**: The practice of documenting, labeling, and organizing the physical cable infrastructure, including diagrams, patch panels, and cable runs.
* **Standard Naming Convention**: A consistent, logical method for labeling devices (e.g., `Department_DeviceType_RoomNumber_ID`) to allow for easy identification and tracking.
* **Network Documentation**: A collection of essential records including network maps, wiring schematics, contact lists for administrators, vendor support information, warranties, and Standard Operating Procedures (SOPs).
* **Standard Operating Procedure (SOP)**: A set of step-by-step instructions compiled by an organization to help workers carry out complex routine operations (e.g., upgrading a switch).

## 🔄 How It Works (Processes)
### The Asset Management Lifecycle
1. **Requirements Gathering**: Identifying what is needed and when.
2. **Planning/Design**: Determining the best configuration and purchasing strategy.
3. **Implementation**: Purchasing, installing, and configuring devices into the production environment.
4. **Operations & Maintenance**: The longest phase (approx. 70% of time); involves daily support, optimization, and ensuring reliability.
5. **Improvement**: Reconfiguring existing devices or introducing new ones to improve network design.

### Cable Labeling Strategy
* **Goal**: Create a unique serial ID for every device.
* **Example Format**: `HR_D_RM102_0012`
 * **HR**: Department
 * **D**: Device Type (Desktop)
 * **RM102**: Room Number
 * **0012**: Connection/Device ID
* **Device Codes**: S (Switch), R (Router), F (Firewall), D (Desktop), L (Laptop).

## 📊 Comparisons & Key Differences
| Feature| Small Network| Large Network|
| :---| :---| :---|
| **Cable Management**| Less critical; can be traced manually.| Essential; requires strict labeling and documentation.|
| **Documentation**| Often informal or mental.| Must be formalized, accessible, and updated.|
| **Troubleshooting**| Easier to identify physical issues.| Requires diagrams and baselines to locate faults.|

## ⚠️ Exam Tips & Important Notes
* **The "Normal" Baseline**: If you do not know what "normal" looks like, you cannot identify "abnormal" behavior. This is a common theme in troubleshooting questions.
* **Documentation Accuracy**: Always keep documentation updated. If a change is made (e.g., adding a new machine), the topology and vulnerability profile change; therefore, the documentation must be updated immediately.
* **Accessibility**: Documentation is useless if the technician cannot find it during an emergency. Ensure it is stored in a centralized, known location (e.g., a SharePoint site or shared drive).
* **Incident Response**: If an attacker knows your network better than you do (because your diagrams are outdated), they will have a significant advantage during an incident.

## ❓ Questions to Review
1. Why is it critical to establish a baseline before an incident occurs?
2. What are the five stages of the asset management lifecycle mentioned in the lesson?
3. How does a standard naming convention assist a technician in a large-scale enterprise environment?
4. What specific types of documentation should be included in a network's knowledge base beyond just network maps?
5. Why is "Operations and Maintenance" considered the most time-consuming phase of the asset lifecycle?

## 🔗 Related Topics
* [[Incident Response]]
* [[Network Topology]]
* [[Troubleshooting Methodology]]
