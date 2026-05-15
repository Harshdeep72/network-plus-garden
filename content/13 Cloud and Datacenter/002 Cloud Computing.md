# 002 Cloud Computing

**Module/Section:** 13 Cloud and Datacenter
**Tags:** #cloud-computing #high-availability #scalability #elasticity #🌱seedling

---

![[002 Cloud Computing.mp4]]

## 📖 Core Concept
Cloud computing is a model for delivering computing services over the internet. The instructor identifies six primary characteristics that define the benefits of cloud computing:

* **High Availability:** Systems designed to be reliable and fault-tolerant, ensuring minimal downtime.
* **Scalability:** The ability to increase system capacity (users or resources) at a linear or sub-linear cost.
* **Rapid Elasticity:** The ability to scale resources up or down in real-time based on demand.
* **Metered Utilization:** A "pay-per-use" model where costs are based on actual consumption.
* **Shared Resources:** Pooling physical hardware to host multiple virtual environments, maximizing efficiency.
* **File Synchronization:** The ability to store files in a central cloud location and have them accessible and updated across multiple devices and geographic locations.

## 🛠️ Hardware & Devices
* **Physical Servers:** High-end, expensive hardware (often costing $10k–$30k+) used by cloud providers to host multiple virtual machines.
* **Load Balancer:** A device or service used to distribute network traffic across multiple servers to ensure high availability and handle increased load.
* **Virtual Machines (VMs):** Software-based emulations of physical computers that allow multiple "tenants" to share the resources of a single physical server.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **High Availability (HA):** A system design approach that ensures services remain operational with minimal downtime.
* **Five Nines:** A standard for high availability representing 99.999% uptime. This equates to approximately 5 minutes and 15 seconds of allowable downtime per year.
* **Scalability:** The capacity of a system to handle increased workload by adding resources.
* **Vertical Scaling (Scale Up):** Adding more resources (CPU, RAM, storage, bandwidth) to an existing server or node.
* **Horizontal Scaling (Scale Out):** Adding more individual servers or nodes to a system to work in tandem behind a load balancer.
* **Rapid Elasticity:** The ability of a system to automatically and quickly scale resources up or down in response to real-time demand.
* **Metered Utilization:** A billing model where the user pays for the exact amount of resources consumed (e.g., per request, per GB, per hour).
* **Measured Service:** A billing model where a fixed quantity of resources is purchased upfront; if the limit is reached, service may be throttled or stopped until more is purchased.
* **Shared Resources:** The practice of pooling physical hardware resources among multiple customers to increase cost-efficiency.
* **File Synchronization:** The process of ensuring that files stored in the cloud are updated and accessible across all connected devices and users globally.

## 🔄 How It Works (Processes)
* **High Availability Workflow:** If a primary server fails, traffic is automatically rerouted to a secondary server, preventing end-user disruption.
* **Elasticity Workflow:** When traffic spikes (e.g., a viral event), the system automatically triggers the creation of additional virtual instances. Once demand subsides, the system automatically terminates these instances to reduce costs.
* **Shared Resource Allocation:** A single high-performance physical server is partitioned into multiple virtual machines, allowing different companies to utilize the server's capacity simultaneously.

## 📊 Comparisons & Key Differences

| Feature| Vertical Scaling (Scale Up)| Horizontal Scaling (Scale Out)|
| :---| :---| :---|
| **Method**| Adding resources to one node| Adding more nodes to the pool|
| **Hardware**| More CPU/RAM/Storage| More servers behind a load balancer|

| Feature| Metered Service| Measured Service|
| :---| :---| :---|
| **Billing**| Pay for exact usage| Pay for a set quantity upfront|
| **Analogy**| Utility bill (Water/Electric)| Cell phone plan (Data cap)|

## ⚠️ Exam Tips & Important Notes
* **Five Nines:** Memorize that "five nines" equals 99.999% uptime and allows for only ~5 minutes and 15 seconds of downtime per year.
* **Vertical vs. Horizontal:** Remember that Vertical = "Up" (bigger machine), Horizontal = "Out" (more machines).
* **Elasticity vs. Scalability:** Scalability is the *ability* to grow; Elasticity is the *speed and automation* of that growth/shrinkage in real-time.
* **Metered vs. Measured:** The exam may test the nuance between paying for what you use (metered) vs. paying for a pre-allocated bucket of resources (measured).

## ❓ Questions to Review
1. What is the maximum allowable downtime per year for a system with "five nines" availability?
2. What is the primary difference between vertical and horizontal scaling?
3. Why is "shared resources" considered a cost-saving benefit for cloud providers and customers?
4. How does "rapid elasticity" differ from standard scalability?
5. If you are charged for every 1 million requests to a database, is this a metered or measured service?

## 🔗 Related Topics
* [[Cloud Computing Models]]
* [[Virtualization]]
* [[Load Balancing]]
* [[Data Center Infrastructure]]
