# 005 Security Principles

**Module/Section:** 16 Logical Security
**Tags:** #security #access-control #least-privilege #RBAC #MAC #DAC #🌱seedling

---

![[005 Security Principles.mp4]]

## 📖 Core Concept
The lesson focuses on foundational logical security principles used to protect network resources. The primary goal is to ensure that only authorized entities (users, devices, or processes) can access specific resources, and only to the extent necessary for their function.

* **Least Privilege:** The foundational principle that users and systems should operate with the minimum level of access permissions required to perform their specific job functions. This applies to both human user accounts and automated devices (e.g., IoT).
* **Access Control Models:** The framework by which a system determines who can access what. The lesson covers three primary models:
 * **DAC (Discretionary Access Control):** Owner-based permissions.
 * **MAC (Mandatory Access Control):** System-enforced, label-based permissions.
 * **RBAC (Role-Based Access Control):** Group/function-based permissions.

## 🛠️ Hardware & Devices
* **IoT Devices (Internet of Things):** Devices such as smart LED lights. The instructor emphasizes that these should be isolated into their own VLANs or subnets to prevent unauthorized access to sensitive network resources like file servers or printers.

## 📜 Protocols & Standards
* **N/A — not covered in this lesson.** (Note: While VLANs are mentioned, specific IEEE standards like 802.1Q are not explicitly detailed in this transcript).

## 🔑 Key Terminology
* **Least Privilege:** A security principle stating that users and processes should be granted only the minimum access rights necessary to perform their assigned tasks.
* **DAC (Discretionary Access Control):** An access control method where the owner of a resource (file/folder) determines who has access and what permissions (read, write, execute) they have.
* **MAC (Mandatory Access Control):** An access control policy where the system (not the user) determines access based on security labels assigned to both subjects (users) and objects (files/data).
* **Data Labels:** In MAC, these are tags assigned to users and objects to define their trust level (e.g., Top Secret, Secret, Confidential, Unclassified).
* **Need to Know:** A security requirement in MAC where, even if a user has the appropriate clearance level, they are only granted access if their specific job function requires that information.
* **RBAC (Role-Based Access Control):** An access control model where permissions are assigned to specific roles (job functions) rather than individual users. Users are then added to these roles.
* **Power Users:** A specific Windows role/group that sits between a standard user and an administrator, allowing for minor configuration changes (like adding printers or changing system time) without full administrative control.

## 🔄 How It Works (Processes)
* **Implementing Least Privilege for IoT:**
 1. Isolate IoT devices into a dedicated VLAN or screened subnet.
 2. Restrict traffic to only necessary ports/services.
 3. Allow internet access only for firmware updates.
 4. Block access to internal resources (file servers, printers).
* **MAC Access Decision Process:**
 1. System checks the user's clearance label.
 2. System checks the object's classification label.
 3. Access is granted if the user's label is equal to or higher than the object's label.
 4. Access is denied if the user lacks the "Need to Know" requirement, even if the clearance level is sufficient.
* **RBAC Management:**
 1. Identify job functions (e.g., Sales, IT, HR).
 2. Create groups corresponding to these roles.
 3. Assign permissions to the groups.
 4. Add/remove users from the groups as their job requirements change.

## 📊 Comparisons & Key Differences

| Feature| DAC| MAC| RBAC|
| :---| :---| :---| :---|
| **Control**| Owner of the resource| The System| The System (via Roles)|
| **Basis**| Discretionary/Individual| Labels/Clearance| Job Function/Groups|
| **Complexity**| Low (but hard to manage)| Very High| Moderate/Best Practice|
| **Primary Use**| General File Sharing| Military/High Security| Corporate/Enterprise|

## ⚠️ Exam Tips & Important Notes
* **Best Practice:** RBAC is considered the industry best practice for enterprise environments.
* **Red Flag:** If you see a scenario where an individual user is assigned permissions directly to a file rather than through a group, this is a sign of poor security practice (DAC) and should be flagged.
* **MAC Logic:** Remember that in MAC, you must meet *both* the clearance level (label) and the "Need to Know" requirement to gain access.
* **Least Privilege:** Always apply this to both human users and non-human entities (like IoT devices).

## ❓ Questions to Review
1. What is the primary difference between DAC and MAC regarding who determines access permissions?
2. Why is RBAC considered superior to DAC in a large corporate environment?
3. In a MAC system, if a user has a "Secret" clearance, can they access a "Top Secret" document? Why or why not?
4. What is the "Need to Know" principle, and how does it function alongside clearance levels in MAC?
5. How can you apply the principle of least privilege to IoT devices on a network?

## 🔗 Related Topics
* [[VLANs]]
* [[Access Control Lists]]
* [[User Account Management]]
