# 002 Identity and Access Management (IAM)

**Module/Section:** 16 Logical Security
**Tags:** #iam #security #authentication #authorization #🌱seedling

---

![[002 Identity and Access Management (IAM).mp4]]

## 📖 Core Concept
**Identity and Access Management (IAM)** is a foundational security process that provides the mechanisms for identification, authentication, and authorization. It ensures that users, computers, and other entities can securely interact with organizational assets such as networks, operating systems, and applications.

IAM is essential because it transforms "subjects" (people or devices) into entities that can be tracked, managed, and audited. Without IAM, an organization cannot verify who is accessing its resources or what permissions those entities possess.

## 🛠️ Hardware & Devices
* **Endpoints:** Devices used by personnel to access the network, including desktops, laptops, tablets, and cell phones. These are considered unique subjects in IAM because they often require their own credentials to authenticate to the network.
* **Servers:** Backend systems that facilitate machine-to-machine communication. They are distinct from endpoints and require their own IAM credentials to maintain trust and secure communication.

## 📜 Protocols & Standards
* **Digital Certificates:** Used primarily for software-based identity verification. They allow or disallow a client from interacting with specific software applications based on verified identity.

## 🔑 Key Terminology
* **IAM (Identity and Access Management):** A security process providing identification, authentication, and authorization for subjects to access organizational assets.
* **Subject:** A unique entity within an organization that is associated with an account. Subjects include personnel, endpoints, servers, software, and roles.
* **Identification:** The process of claiming an identity (e.g., providing a username).
* **Authentication:** The process of verifying the identity of the subject (e.g., providing a password).
* **Authorization:** The process of granting or denying access to specific resources based on the verified identity.
* **Provisioning:** The process of creating new accounts for users or entities.
* **Deprovisioning:** The process of disabling or deleting accounts that are no longer needed.
* **Account Auditing:** The process of reviewing activity logs associated with an account to verify the legitimacy of actions taken.
* **User Account:** A standard account with basic permissions; these represent the lowest level of risk but still require management.
* **Privileged Account:** An account with elevated permissions (e.g., Administrator, Root, Superuser). These can install/uninstall software, change other users' passwords, and create new accounts.
* **Shared Account:** A single account used by multiple people. This is considered a **highly dangerous practice** because it prevents effective auditing and accountability.
* **Role:** A function-based definition that assigns specific permissions to an asset (person, server, endpoint, or software).

## 🔄 How It Works (Processes)
1. **Account Lifecycle Management:**
 * **Provisioning:** Creating the account.
 * **Maintenance:** Resetting passwords, updating certificates, and managing permissions.
 * **Deprovisioning:** Disabling or deleting the account when it is no longer required.
2. **Access Control via Roles:**
 * Instead of assigning permissions to individuals, organizations assign individuals to **Groups**.
 * Permissions are then assigned to those groups. This is the standard method for managing access in Windows environments.
3. **Auditing and Compliance:**
 * Analysts review logs to ensure account activity is legitimate.
 * Analysts perform "Identity-based threat evaluation" (e.g., running password strength checks) to ensure the system remains secure against unauthorized access.

## 📊 Comparisons & Key Differences

| Account Type| Risk Level| Primary Use Case|
| :---| :---| :---|
| **User Account**| Low| Standard daily tasks|
| **Privileged Account**| High| Administrative tasks, system configuration|
| **Shared Account**| Critical/Extreme| Not recommended; legacy SOHO environments|

## ⚠️ Exam Tips & Important Notes
* **Personnel Risk:** People are the biggest risk in IAM due to poor password hygiene (writing them down) and careless login practices.
* **Shared Accounts:** Never recommend shared accounts. They destroy the ability to perform non-repudiation (proving who did what), as logs will only show the shared account name, not the individual user.
* **Roles vs. Individuals:** Always favor role-based access control (RBAC) over individual permission assignments to maintain scalability and security.
* **IAM Components:** Remember that IAM is not just software; it includes directory services, repositories, access management tools, and auditing/reporting systems.

## ❓ Questions to Review
1. Why is a shared account considered a major security risk in an enterprise environment?
2. What is the difference between provisioning and deprovisioning?
3. Why are endpoints and servers considered "subjects" in an IAM system?
4. What are the three primary types of accounts, and how do their risk levels differ?
5. How do roles simplify the management of permissions in a large organization?
6. What is the purpose of auditing in the context of IAM?

## 🔗 Related Topics
* [[Authentication and Authorization]]
* [[Role-Based Access Control (RBAC)]]
* [[Directory Services]]
* [[Account Management]]
