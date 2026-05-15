# 004 Cloud Deployment Models

**Module/Section:** 13 Cloud and Datacenter
**Tags:** #cloud-computing #deployment-models #security #🌱seedling

---

![[004 Cloud Deployment Models.mp4]]

## 📖 Core Concept
Cloud computing provides organizations with increased availability, higher resiliency, and elasticity compared to traditional network architectures. However, these benefits introduce unique security challenges. The instructor identifies six primary cloud deployment models that organizations must evaluate based on their specific security requirements, cost restrictions, and risk tolerance.

## 🛠️ Hardware & Devices
* **Servers:** Physical hardware used to host cloud resources.
 * **Multi-tenancy hardware:** Shared physical resources used by multiple organizations.
 * **Single-tenancy hardware:** Dedicated physical resources assigned to a single organization.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Public Cloud**: A cloud model where a service provider makes resources available to end users over the internet (e.g., Google Drive, AWS, Azure). It is often the most inexpensive and efficient option.
* **Private Cloud**: A cloud environment created and managed by a single organization for its own internal use. The organization is responsible for design, implementation, and operation (e.g., GovCloud). Chosen when security is prioritized over cost.
* **Hybrid Cloud**: A model that combines public and private cloud resources. Organizations host confidential data in the private portion while utilizing public resources for other needs.
* **Community Cloud**: A model where resources and costs are shared among several organizations with common service needs. It functions like multiple private clouds connected together to reduce costs.
* **Multi-tenancy**: A model where the same physical resources are shared by multiple organizations. While highly efficient, it introduces security risks such as "collateral damage" from attacks (e.g., a DoS attack on one tenant affecting others on the same server).
* **Single-tenancy**: A model where a single organization is assigned to a specific resource. It is more secure but less efficient and more expensive than multi-tenancy due to hardware requirements.
* **Elasticity**: The ability of a cloud environment to scale resources up or down based on demand.
* **Denial of Service (DoS) Attack**: An attack intended to shut down a machine or network, making it inaccessible to its intended users.

## 🔄 How It Works (Processes)
* **Hybrid Cloud Data Management**: Organizations must apply strict rules to determine which data is hosted in the private portion (confidential information) versus the public portion.
* **Risk Inheritance**: When connecting networks (as seen in Community Clouds), an organization inherits the security risks of the other connected networks.
* **Resource Allocation**:
 * **Multi-tenancy**: Resources are partitioned or shared logically, allowing multiple entities to run on the same physical hardware.
 * **Single-tenancy**: Resources are dedicated solely to one entity, ensuring no resource overlap with other organizations.

## 📊 Comparisons & Key Differences

| Model| Cost| Security/Risk| Efficiency|
| :---| :---| :---| :---|
| **Public**| Low| Higher Risk| High|
| **Private**| High| Lower Risk| Lower|
| **Multi-tenancy**| Low| Higher (Collateral Risk)| High|
| **Single-tenancy**| High| Lower| Lower|

## ⚠️ Exam Tips & Important Notes
* **Security Trade-off**: There is no "perfect" model. Security practitioners must balance the benefits (cost/efficiency) against the drawbacks (security risks/availability).
* **Collateral Damage**: In a multi-tenancy environment, if one customer is targeted by a DoS attack, other customers on the same physical server may experience downtime.
* **Inherited Risk**: Connecting your network to another (e.g., Community Cloud) means you are also connecting to their security vulnerabilities.

## ❓ Questions to Review
1. Which cloud deployment model is best suited for an organization that prioritizes security over cost?
2. What is the primary security risk associated with a multi-tenancy environment?
3. How does a hybrid cloud model differ from a community cloud model?
4. Why is a single-tenancy model generally more expensive than a multi-tenancy model?
5. What is the main advantage of utilizing a public cloud service?

## 🔗 Related Topics
* [[Cloud Computing]]
* [[Network Security]]
* [[Data Center Architecture]]
