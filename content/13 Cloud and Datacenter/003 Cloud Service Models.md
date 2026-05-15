# 003 Cloud Service Models

**Module/Section:** 13 Cloud and Datacenter
**Tags:** #cloud-computing #saas #paas #iaas #datacenter #🌱seedling

---

![[003 Cloud Service Models.mp4]]

## 📖 Core Concept
The lesson focuses on the decision-making process for organizational IT infrastructure, specifically choosing between **On-Premise** solutions and **Hosted (Cloud)** solutions. Once a cloud model is chosen, organizations must select the appropriate service model based on how much control and responsibility they wish to retain versus what they delegate to a third-party provider.

* **On-Premise:** The organization owns, manages, and maintains all hardware, software, personnel, and facility requirements (space, power, cooling).
* **Hosted/Cloud:** A third-party provider manages the physical infrastructure. This often utilizes **Multi-tenancy**, where multiple organizations share the same physical hardware with logical separations to ensure data security.

## 🛠️ Hardware & Devices
* **Physical Servers:** The underlying compute hardware used in both on-premise and hosted environments.
* **Networking Equipment:** Switches, routers, and firewalls required to connect cloud resources.
* **Storage Area Network (SAN):** Specialized high-speed network providing block-level network access to storage.
* **Load Balancers:** Devices used to distribute network or application traffic across a number of servers.
* **Facility Infrastructure:** Includes physical space, power supplies, and cooling systems (HVAC) required for data centers.

## 📜 Protocols & Standards
* **N/A — not covered in this lesson.** (Note: While specific protocols like HTTP/HTTPS are implied for web-based access to SaaS/PaaS, they were not explicitly detailed as protocols in the transcript).

## 🔑 Key Terminology
* **On-Premise:** A deployment model where the organization hosts its own infrastructure, software, and data within its own facility.
* **Hosted Solution:** A model where a third-party provider (e.g., AWS, Azure, Google Cloud) manages the hardware and facilities.
* **Multi-tenancy:** An architecture where a single instance of software or hardware serves multiple customers (tenants), with logical isolation to keep data secure.
* **Elasticity:** The ability of a system to automatically scale resources (up or down) based on demand.
* **SaaS (Software as a Service):** A cloud model where the provider delivers a complete, ready-to-use application via a web browser (e.g., Office 365, Google Workspace, QuickBooks Online).
* **PaaS (Platform as a Service):** A cloud model providing hardware, OS, middleware, and runtime environments, allowing developers to focus on building and deploying their own custom applications.
* **IaaS (Infrastructure as a Service):** A cloud model providing fundamental computing resources (virtual machines, storage, networking) where the customer manages the OS and applications.
* **Middleware:** Software that acts as a bridge between an operating system or database and applications (e.g., web servers like Apache or Nginx, database management systems like MySQL).
* **Runtime:** The environment in which a computer program or application executes.
* **EC2 (Elastic Compute Cloud):** An AWS service that provides resizable compute capacity (virtual machines) in the cloud.
* **AMI (Amazon Machine Image):** A template that contains the software configuration (OS, application server, applications) required to launch an instance.

## 🔄 How It Works (Processes)
* **Provisioning/Deprovisioning:** The process of allocating or releasing server capacity dynamically in a cloud environment.
* **Data Separation in Multi-tenancy:** Providers use logical controls to ensure that one tenant cannot access the data of another, despite sharing the same physical hardware.
* **The "Stack" Hierarchy:**
 * **IaaS:** Hardware + Virtualization.
 * **PaaS:** Hardware + Virtualization + OS + Middleware + Runtime.
 * **SaaS:** Hardware + Virtualization + OS + Middleware + Runtime + Application Data.

## 📊 Comparisons & Key Differences

| Feature| IaaS| PaaS| SaaS|
| :---| :---| :---| :---|
| **Primary Focus**| Hardware/VMs| Development Platform| End-user Application|
| **Management**| Customer manages OS/Apps| Customer manages Apps| Provider manages everything|
| **Example**| AWS EC2| Custom Web App Dev| Office 365, TurboTax|

* **On-Premise vs. Hosted:** On-premise offers maximum control and security but requires high capital expenditure (CapEx) and dedicated staff. Hosted offers scalability and reduced hardware maintenance but introduces concerns regarding data sovereignty, location, and shared-resource security.

## ⚠️ Exam Tips & Important Notes
* **Exam Hint for PaaS:** If a scenario describes something "more than IaaS" (e.g., includes middleware/databases) but "less than SaaS" (you are still writing the code), it is **PaaS**.
* **Operating Systems in IaaS:** Even if a cloud provider installs an OS (like a Linux AMI) on your virtual machine, it is still considered **IaaS**. Do not mistake the presence of an OS for PaaS.
* **Security Considerations:** When choosing a provider, always evaluate their authentication/authorization mechanisms, redundancy, and fault tolerance.
* **Legal/Compliance:** Always consider the physical location of the data center, as local laws (data sovereignty) will apply to your stored data.

## ❓ Questions to Review
1. Which cloud service model would you choose if you need to manage the OS and applications but want the provider to handle the hardware and networking?
2. Why might an organization choose an on-premise solution over a hosted one despite the higher costs?
3. What is the primary risk associated with multi-tenancy environments regarding data?
4. If you are using a provider to host a database and a web server (like Apache) but you are writing the application code yourself, which service model are you using?
5. How does "elasticity" benefit an organization in a cloud environment?

## 🔗 Related Topics
* [[Cloud Computing]]
* [[Virtualization]]
* [[Data Center Security]]
* [[Network Infrastructure]]
