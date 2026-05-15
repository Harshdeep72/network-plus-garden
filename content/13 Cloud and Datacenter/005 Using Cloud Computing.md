# 005 Using Cloud Computing

**Module/Section:** 13 Cloud and Datacenter
**Tags:** #cloud-computing #aws #lightsail #linux #virtualization #🌱seedling

---

![[005 Using Cloud Computing.mp4]]

## 📖 Core Concept
The lesson focuses on **Cloud Computing** using **Amazon Lightsail**, a simplified, all-in-one cloud service platform designed for beginners. It abstracts complex AWS services (like EC2, Route 53, S3, etc.) into a single, manageable interface. The core theme is the ability to provision, manage, and scale virtualized infrastructure in the cloud, emphasizing the transition from physical on-premises hardware to virtualized, on-demand resources.

## 🛠️ Hardware & Devices
* **Virtual Server (Instance):** A software-based representation of a physical server running on shared physical hardware in a data center.
* **Virtual CPU (vCPU):** A portion of a physical CPU core allocated to a virtual machine.
* **SSD (Solid State Drive):** High-speed storage used for cloud instances.
* **RAM:** Allocated memory for the virtual instance (ranging from 512MB to 32GB in the examples provided).
* **Physical Data Center Infrastructure:** The underlying hardware (managed by AWS) that hosts the virtualized instances.

## 📜 Protocols & Standards
* **SSH (Secure Shell):** Used for secure remote command-line access to the Linux instance (Port 22).
* **IPv4:** Standard 32-bit addressing used for network communication.
* **IPv6:** 128-bit addressing used for modern network communication.
* **HTTP/HTTPS:** Implicitly used if a web server (like Apache or WordPress) is installed to serve content.

## 🔑 Key Terminology
* **Amazon Lightsail:** An AWS service that provides a simplified, bundled package of compute, storage, and networking for beginners.
* **Instance:** A single virtual server running in the cloud.
* **Region:** A specific geographical location where AWS data centers are located (e.g., US East 1 - Virginia).
* **Availability Zone (AZ):** Distinct locations within a region that are engineered to be isolated from failures in other AZs.
* **Blueprint:** A pre-configured template for an instance, which can be an OS only or an App + OS (e.g., WordPress, Node.js).
* **Vertical Scaling:** The process of increasing the capacity of a single server (e.g., moving from a $10/month plan to a $20/month plan) to handle more load.
* **SSH Key Pair:** A security credential used to authenticate remote access to the server.
* **Snapshot:** A point-in-time backup of an entire instance or disk.
* **Bursting/Burstable Zone:** A feature where a virtual instance can temporarily exceed its baseline CPU performance to handle spikes in demand.
* **Sustainability Zone:** The baseline performance level of a CPU under normal, non-peak conditions.
* **Root/Administrative Access:** Full control over the operating system, allowing for the installation of software and system configuration.
* **Symbolic Link (Symlink):** A file that points to another file or directory (appears in light blue in Linux terminal).

## 🔄 How It Works (Processes)
1. **Provisioning:** Select region/AZ, choose OS (Linux/Windows), and select a plan based on hardware requirements.
2. **Accessing:** Connect via a browser-based SSH client or a local SSH client using credentials.
3. **File Management:**
 * `pwd`: Print Working Directory (shows current location).
 * `ls -la`: List all files, including hidden files (starting with `.`) and attributes.
 * `touch`: Create an empty file.
 * `vi`: Text editor used to modify file contents.
 * `cat`: Display file contents to the screen.
4. **Scaling:** To scale vertically, create a snapshot, provision a new, larger instance, and restore the snapshot.
5. **Backup:** Automatic snapshots can be enabled to create a rolling backup (retaining the 7 most recent).

## 📊 Comparisons & Key Differences

| Feature| Linux/Unix| Microsoft Windows|
| :---| :---| :---|
| **Licensing**| Open Source (No cost)| Proprietary (Licensing cost)|
| **Starting Price**| Lower ($3.50/mo)| Higher ($8.00/mo)|
| **Interface**| Primarily CLI (Text-based)| Often GUI (Graphical)|

* **OS Only vs. App + OS:** "OS Only" provides a clean slate (Infrastructure as a Service), while "App + OS" comes pre-configured with software like WordPress or Node.js (Platform as a Service).

## ⚠️ Exam Tips & Important Notes
* **Linux Practice:** The instructor strongly recommends using Linux in the cloud to prepare for CompTIA Linux+ and the Linux commands required in A+ Core 2.
* **Security:** Always enable automatic snapshots. Not doing so is considered a bad security practice.
* **Cost Management:** Remember to delete instances and attached storage disks when finished to avoid recurring monthly charges.
* **CLI vs. GUI:** Cloud servers are typically text-based (CLI) to reduce overhead and resource consumption.
* **Hidden Files:** In Linux, any file or directory starting with a dot (`.`) is hidden.

## ❓ Questions to Review
1. What is the primary difference between "OS Only" and "App + OS" blueprints in Lightsail?
2. Why is Linux generally cheaper to host in the cloud than Windows?
3. What is the difference between vertical scaling and horizontal scaling (implied by the load balancing discussion)?
4. What command would you use to view hidden files in a Linux directory?
5. What is the purpose of the "bursting" capability in cloud instances?

## 🔗 Related Topics
* [[Cloud Computing Models]]
* [[Virtualization]]
* [[Linux Command Line Basics]]
* [[Network Security]]
* [[Backup and Recovery]]
