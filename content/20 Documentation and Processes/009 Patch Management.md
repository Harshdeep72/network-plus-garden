# 009 Patch Management

**Module/Section:** 20 Documentation and Processes
**Tags:** #patch-management #security #hardening #compliance #🌱seedling

---

![[009 Patch Management.mp4]]

## 📖 Core Concept
**Patch Management** is a critical network hardening technique involving the planning, testing, implementing, and auditing of software patches. It is essential for maintaining network security, ensuring system uptime, meeting compliance requirements, and providing feature upgrades.

* **Security:** Fixes known vulnerabilities (e.g., CVEs) in servers, clients, routers, switches, and firewalls.
* **Uptime:** Prevents resource exhaustion and system crashes caused by bugs in outdated software code.
* **Compliance:** Demonstrates to auditors that the organization is actively managing and securing its environment.
* **Feature Upgrades:** Provides new functionality and improvements alongside security fixes.

## 🛠️ Hardware & Devices
* **Servers & Clients:** Primary targets for OS and software patching.
* **Network Infrastructure:** Routers, switches, and firewalls require **Firmware Management** to secure their internal operating systems.
* **Mobile Devices:** Managed via **MDM (Mobile Device Management)** solutions to ensure patches are applied to mobile endpoints.
* **Cisco UCS (Unified Computing System) Manager:** Used to centralize management of resources and firmware for server network interfaces and devices.

## 📜 Protocols & Standards
* **CVE (Common Vulnerabilities and Exposures):** A list of publicly disclosed cybersecurity vulnerabilities. Patch management programs are measured by their effectiveness in addressing these.
* **RPM (Red Hat Package Manager):** A package management system used by Red Hat Linux to deploy software patches and updates.
* **Cisco IOS (Internetwork Operating System):** The operating system running on Cisco networking devices; requires periodic firmware updates (flashing).

## 🔑 Key Terminology
* **Patch Management:** The systematic process of managing software updates to ensure systems are secure, stable, and compliant.
* **Firmware Management:** The process of updating the low-level software (firmware) that controls hardware devices like routers and switches.
* **Flashing:** The process of overwriting the existing firmware on a hardware device with a new version.
* **Patch Rings:** A deployment strategy where patches are rolled out in stages to progressively larger groups of users to minimize the impact of potential bugs.
* **MDM (Mobile Device Management):** Software used to manage, monitor, and secure mobile devices, including the deployment of patches.
* **SCCM (Microsoft System Center Configuration Manager):** A centralized management tool used for deploying software and patches across large enterprise networks.

## 🔄 How It Works (Processes)
The patch management lifecycle consists of four critical steps:

1. **Planning:** Creating policies and procedures to track patch availability, verifying compatibility, and determining deployment methods.
2. **Testing:** Validating patches in a lab or test environment before full-scale deployment to ensure they do not break existing configurations.
3. **Implementation:** Deploying the patch to production. This can be done manually for small networks or via automated tools (like SCCM or third-party managers) for large enterprises.
4. **Auditing:** Scanning the network post-deployment to verify that patches were installed successfully on all target systems and are functioning as intended.

**Deployment Strategy (Patch Rings):**
* **Ring 1:** Small pilot group (10–20 machines).
* **Ring 2:** IT staff/Service desk (100–200 machines).
* **Ring 3:** Larger department/segment (1,000–2,000 machines).
* **Ring 4:** Full production rollout (10,000+ machines).

## 📊 Comparisons & Key Differences

| Feature| Manual Patching| Automated Management (e.g., SCCM)|
| :---| :---| :---|
| **Scalability**| Low (Small networks only)| High (Enterprise environments)|
| **Cost**| Low (No tool cost)| Higher (Licensing/Tooling costs)|
| **Control**| High (Per-machine)| High (Centralized/Policy-based)|
| **Efficiency**| Low| High|

## ⚠️ Exam Tips & Important Notes
* **Testing is Mandatory:** Never deploy a patch directly to production without testing. Even manufacturer-provided patches can contain bugs that conflict with unique network configurations.
* **Centralized Management:** For large networks, avoid using individual "Windows Update" settings on each client. Disable the automatic Windows Update service and use a central update server to maintain control.
* **Firmware vs. Software:** Remember that network hardware (routers/switches) requires firmware updates just as servers require OS patches.
* **Auditing:** The process is not complete until you have verified the patch status via an audit/scan.

## ❓ Questions to Review
1. What are the four steps of the patch management process?
2. Why is it recommended to use "patch rings" in an enterprise environment?
3. What is the primary purpose of auditing in the patch management lifecycle?
4. How does firmware management differ from standard software patch management?
5. Why should you disable the Windows Update service on workstations in a large enterprise?

## 🔗 Related Topics
* [[Network Hardening]]
* [[Vulnerability Management]]
* [[Configuration Management]]
* [[Mobile Device Management (MDM)]]
