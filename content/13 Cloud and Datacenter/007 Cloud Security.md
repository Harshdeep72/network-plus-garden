# 007 Cloud Security

**Module/Section:** 13 Cloud and Datacenter
**Tags:** #cloud-security #vpc #infrastructure-as-code #🌱seedling

---

![[007 Cloud Security.mp4]]

## 📖 Core Concept
Cloud security focuses on protecting virtualized resources within a cloud provider's infrastructure. The primary architecture used to achieve this is the **Virtual Private Cloud (VPC)**.

* **VPC Definition**: A logically isolated section of a cloud provider's network where a consumer can launch resources in a defined virtual network.
* **Infrastructure as Code (IaC)**: The practice of provisioning and managing infrastructure (networks, servers, databases) through machine-readable definition files (scripted automation and orchestration) rather than manual hardware configuration. VPCs are the networking component of IaC.
* **Virtualization vs. Hardware**: VPCs abstract traditional networking functions (routing, switching, firewalling) from physical hardware to software, allowing for greater scalability, flexibility, and automation.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson (The lesson emphasizes that these functions are **abstracted from hardware to software**).

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology

* **VPC (Virtual Private Cloud)**: A logically isolated virtual network environment within a cloud provider's infrastructure.
* **Subnet**: A segment within a VPC used to group instances. Can be **Public** (accessible from the internet) or **Private** (not accessible from the internet).
* **Route Table**: A set of rules (routes) that determine where network traffic is directed within the VPC. Every subnet must be associated with a route table to communicate.
* **Internet Gateway (IGW)**: A horizontally scalable, redundant component that allows communication between VPC instances and the public internet.
* **NAT Gateway (Network Address Translation Gateway)**: A service that allows instances in a private subnet to connect to the internet or other services while preventing the internet from initiating connections to those private instances. It translates private IP addresses to public IP addresses.
* **Network ACL (Network Access Control List)**: A subnet-level firewall that controls inbound and outbound traffic using rules processed in ascending order.
* **Security Group**: An instance-level virtual firewall that controls inbound and outbound traffic at the resource level.
* **VPC Peering**: A networking connection between two VPCs that enables private traffic routing between them without traversing the public internet.
* **VPC Endpoint**: A private connection to services hosted within the cloud provider's network, bypassing the need for an internet gateway, VPN, or public internet.
* **VPN (Virtual Private Network) Connection**: A secure connection between a VPC and an on-premises network, or between two VPCs in different regions.

## 🔄 How It Works (Processes)

* **NAT Gateway Process**: When an instance in a private subnet initiates an outbound request, it sends traffic to the NAT gateway. The gateway replaces the private IP with a public IP and forwards the traffic to the internet.
* **Network ACL Evaluation**: Operates as a **stateless** firewall. Each rule is evaluated independently. If an inbound request is allowed, the return traffic must be explicitly allowed by a separate outbound rule.
* **Security Group Evaluation**: Operates as a **stateful** firewall. If an outbound request is made, the response is automatically allowed back in. If an inbound request is approved, the response is automatically allowed out.
* **VPC Peering**: Connects two VPCs in the same region to keep traffic within the provider's local network, improving performance and security by avoiding the public internet.

## 📊 Comparisons & Key Differences

| Feature| Network ACL| Security Group|
| :---| :---| :---|
| **Scope**| Subnet level| Instance level|
| **State**| Stateless| Stateful|
| **Rule Processing**| Rules processed in order| All rules evaluated|
| **Default**| Allows all traffic (usually)| Denies all inbound / Allows all outbound|
| **Granularity**| Less granular| Highly granular (per port/protocol)|

## ⚠️ Exam Tips & Important Notes

* **Stateless vs. Stateful**: Remember that Network ACLs are **stateless** (require explicit inbound/outbound rules for return traffic), while Security Groups are **stateful** (automatically track return traffic).
* **Default Security Group Behavior**: When a new security group is created, it has **no inbound rules** (denies all) and a **default allow all** outbound rule.
* **VPC as a Single Point of Failure**: If connectivity to the VPC is lost, the entire network environment may go down.
* **Security Auditing**: Always audit ACLs and Security Groups regularly to prevent misconfigurations that could either block legitimate traffic or expose resources to threats.
* **Layered Defense**: Use both Network ACLs and Security Groups together for a "defense-in-depth" approach; do not use one as a replacement for the other.

## ❓ Questions to Review

1. What is the primary difference between a stateless firewall (Network ACL) and a stateful firewall (Security Group)?
2. Why would you use a NAT Gateway instead of an Internet Gateway for a private subnet?
3. How does Infrastructure as Code (IaC) change the way we manage VPCs compared to traditional networking?
4. What happens if a subnet is not associated with a route table?
5. What is the purpose of VPC Peering, and how does it improve security?

## 🔗 Related Topics
[[Cloud Computing]]
[[Firewalls]]
[[Network Address Translation]]
[[VPN]]
[[Subnetting]]
