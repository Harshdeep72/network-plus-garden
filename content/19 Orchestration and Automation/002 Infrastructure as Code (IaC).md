# 002 Infrastructure as Code (IaC)

**Module/Section:** 19 Orchestration and Automation
**Tags:** #infrastructure-as-code #automation #orchestration #devsecops #🌱seedling

---

![[002 Infrastructure as Code (IaC).mp4]]

## 📖 Core Concept
**Infrastructure as Code (IaC)** is the methodology of managing and provisioning IT infrastructure through machine-readable definition files (code) rather than manual hardware configuration or interactive configuration tools.

* **Purpose:** To replace manual, error-prone processes with scripted, repeatable, and consistent deployments.
* **Scope:** Applies to virtual machines (servers/clients) and virtual network devices (switches, routers, firewalls, security appliances).
* **DevSecOps Integration:** IaC is a cornerstone of the **DevSecOps** (Development, Security, and Operations) team, enabling the rapid, secure deployment of entire network environments.
* **Benefits:**
 * **Speed:** Faster deployment compared to manual configuration.
 * **Consistency:** Eliminates human error; once a script is tested, it performs identically every time.
 * **Scalability:** Essential for **horizontal scaling** (scaling out) and **elasticity** in cloud environments.
 * **Efficiency:** Automates tedious tasks, allowing technicians to focus on higher-level architectural work.

## 🛠️ Hardware & Devices
* **Virtual Machines (VMs):** Servers and clients managed via code.
* **Virtual Network Appliances:** Software-defined versions of physical hardware, including:
 * **Routers**
 * **Switches**
 * **Firewalls**
 * **Security Appliances**

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Infrastructure as Code (IaC):** The process of managing and provisioning infrastructure through code instead of manual processes.
* **Scripted Automation:** The use of computer scripts to perform a series of actions in a specific sequence, often including logic to handle different deployment conditions.
* **Orchestration:** The automated arrangement, coordination, and management of complex computer systems, services, and middleware. It involves running tasks across multiple systems simultaneously.
* **DevSecOps:** A collaborative approach involving Development, Security, and Operations teams to integrate security practices into the DevOps process.
* **Security Templates:** Pre-defined configuration files that enforce security settings (e.g., ACLs, permissions) across deployed devices.
* **Horizontal Scaling (Scaling Out):** The process of adding more nodes or machines to a system to handle increased load, rather than upgrading the hardware of a single node.
* **Elasticity:** The ability of a system to automatically expand or compress resources based on current demand.
* **Special Snowflake:** A derogatory term for a system that is configured uniquely and deviates from the standard configuration template. These systems are not managed by IaC and create significant support and security risks.

## 🔄 How It Works (Processes)
1. **Implementation Pillars:**
 * **Scripting:** Defines the sequence of actions and logic for deployment.
 * **Security Templates:** Defines the configuration files (network settings, ACLs, policies).
 * **Policies:** Defines the rules and permissions applied to the infrastructure.
2. **Orchestration Workflow:**
 * The orchestration engine takes the scripts and templates.
 * It coordinates the deployment across multiple devices simultaneously.
 * It uses logic and machine learning to ensure the correct configuration is applied to the correct device.
3. **Standardization vs. Special Snowflakes:**
 * **Standardization:** All systems are built from the same templates, ensuring consistency and ease of troubleshooting.
 * **Special Snowflake Creation:** Occurs when an individual bypasses standard IaC procedures to create a "one-off" system.
 * **Resulting Risk:** Increased security vulnerability, difficulty in troubleshooting (is the issue the machine or the network?), and high long-term support costs.

## 📊 Comparisons & Key Differences
| Feature| Manual Configuration| Infrastructure as Code (IaC)|
| :---| :---| :---|
| **Speed**| Slow| Fast|
| **Error Rate**| High (Human error)| Low (Scripted consistency)|
| **Scalability**| Difficult| Highly Scalable|
| **Consistency**| Low| High|
| **Supportability**| High effort for unique systems| Low effort (Standardized)|

## ⚠️ Exam Tips & Important Notes
* **Exam Focus:** Understand that IaC is not meant to replace the network technician, but to remove the "boring and tedious" parts of the job.
* **Key Takeaway:** The primary goal of IaC is **consistency**.
* **The "Special Snowflake" Trap:** The instructor emphasizes that "Special Snowflakes" are a major anti-pattern in network administration. They create "one-off" systems that are hard to support, insecure, and break the efficiency of orchestration.
* **Terminology:** Be prepared to distinguish between *automation* (doing a task) and *orchestration* (coordinating multiple tasks across multiple systems).

## ❓ Questions to Review
1. What is the primary benefit of using Infrastructure as Code (IaC) over manual configuration?
2. How does orchestration differ from basic scripted automation?
3. Why are "special snowflake" systems considered a risk to an organization's security posture?
4. In the context of cloud computing, what is the relationship between IaC and elasticity?
5. What are the three key implementation areas of IaC mentioned in the lesson?

## 🔗 Related Topics
* [[Cloud Computing]]
* [[Automation and Orchestration]]
* [[Network Security]]
* [[Virtualization]]
