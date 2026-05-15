# 011 Zero-trust Architecture

**Module/Section:** 17 Network Segmentation
**Tags:** #zero-trust #cybersecurity #🌱seedling

---

![[011 Zero-trust Architecture.mp4]]

## 📖 Core Concept
The core philosophy of **Zero-Trust Architecture (ZTA)** is a shift away from traditional perimeter-based security toward a model that assumes no user or device is trusted by default, regardless of their location (inside or outside the corporate network).

* **The "Castle" Analogy:** Traditional security relied on a "moat and wall" approach (firewalls, IPS). Modern networks are **deperimeterized**, meaning devices and data exist outside the physical office. Just as a drone can fly over a castle wall, modern threats can bypass perimeter defenses.
* **The Mantra:** While the 1980s philosophy was "trust but verify," Zero-Trust operates on the mantra: **"Trust nothing and verify everything."**
* **Deperimeterization Drivers:** Cloud migration, remote work, mobile technology adoption, wireless network usage, and increased outsourcing/contracting.
* **Operational Benefits:** Reduced costs, increased agility, and the ability to conduct business from anywhere.

## 🛠️ Hardware & Devices
* **Firewalls:** Perimeter-based defense devices (noted as insufficient on their own).
* **Intrusion Protection Systems (IPS):** Perimeter-based defense systems.
* **Workstations/Endpoints:** Subject systems that must be verified before accessing network resources.

## 📜 Protocols & Standards
* **N/A — not covered in this lesson.** (Note: The instructor mentions the *concept* of encryption and secure protocols but does not list specific RFCs or protocol names).

## 🔑 Key Terminology
* **Zero-Trust Architecture (ZTA):** A security model that requires continuous verification for every device, user, and transaction, regardless of origin.
* **Deperimeterized:** A state where network devices, systems, and data are no longer contained within a single, physically secure perimeter.
* **Control Plane:** The framework responsible for defining, managing, and enforcing security policies.
* **Data Plane:** The mechanism that executes policies to allow or deny the actual flow of data across the network.
* **Adaptive Identity:** A verification method that uses real-time validation based on user behavior, device health, location, and other contextual factors.
* **Threat Scope Reduction:** The practice of limiting user access to only the specific resources required for their tasks to minimize the "blast radius" of a potential breach.
* **Policy-Driven Access Control:** A system that manages access based on roles and responsibilities to ensure users only access pertinent data.
* **Secured Zones:** Isolated network environments designed to house sensitive data, accessible only by authorized users.
* **Subject System:** The individual, entity, workstation, or software application attempting to gain access to a resource.
* **Policy Engine:** The component that cross-references access requests against the organization's rule book (policies).
* **Policy Administrator:** The entity responsible for establishing and managing access policies to ensure they align with business objectives.
* **Policy Enforcement Point (PEP):** The "gatekeeper" that executes the final decision to grant or deny access based on the policy engine's determination.

## 🔄 How It Works (Processes)
The Zero-Trust verification process involves four basic steps, split between the Control Plane and Data Plane:

1. **Subject System Identification:** The entity (user/device) requests access. The system must verify the subject's authenticity.
2. **Policy Engine Evaluation:** The request is cross-referenced against predefined security policies (the "rule book").
3. **Policy Administration:** The policy administrator ensures the request aligns with organizational security protocols and roles.
4. **Policy Enforcement Point (PEP):** The final gatekeeper acts on the decision. If authorized, the PEP allows the data transmission over the Data Plane.

## 📊 Comparisons & Key Differences

| Feature| Traditional Perimeter Security| Zero-Trust Architecture|
| :---| :---| :---|
| **Trust Model**| Trust based on location (inside the network)| Trust nothing; verify everything|
| **Verification**| One-time (at the perimeter)| Continuous (at every access point)|
| **Scope**| Boundary-focused (Castle walls)| Identity and data-focused|
| **Threat Origin**| Assumes threats are external| Assumes threats can be internal or external|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip:** Remember that Zero-Trust is not a single product, but an **architecture** or methodology.
* **Exam Tip:** Know the distinction between the **Control Plane** (policy management/definition) and the **Data Plane** (policy execution/data flow).
* **Exam Tip:** The **Policy Enforcement Point** is considered part of the Data Plane because it is the physical/logical point where data flow is actually permitted or blocked.
* **Important:** Zero-Trust does not mean you stop using firewalls; it means you acknowledge they are insufficient as a *sole* defense.

## ❓ Questions to Review
1. What is the primary difference between "trust but verify" and the Zero-Trust mantra?
2. Why is the term "deperimeterized" used to describe modern network environments?
3. Which Zero-Trust component acts as the "gatekeeper" for data transmission?
4. How does "adaptive identity" differ from traditional static authentication?
5. What is the purpose of "threat scope reduction" in a Zero-Trust model?

## 🔗 Related Topics
* [[Network Segmentation]]
* [[Access Control]]
* [[Identity and Access Management (IAM)]]
* [[Firewalls]]
