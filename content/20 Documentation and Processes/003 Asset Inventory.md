# 003 Asset Inventory

**Module/Section:** 20 Documentation and Processes
**Tags:** #asset-management #documentation #inventory #🌱seedling

---

![[003 Asset Inventory.mp4]]

## 📖 Core Concept
**Asset Management** is a systematic approach to the governance and realization of value from an entity's assets throughout their entire lifecycle. It involves developing, operating, maintaining, upgrading, and disposing of assets in the most cost-effective manner while managing associated risks and attributes.

* **Tangible Assets:** Physical items such as buildings, equipment, computers, servers, printers, mobile devices, and IoT devices.
* **Intangible Assets:** Non-physical items such as human capital, intellectual property, goodwill, and reputation.
* **Scope:** In IT, asset management focuses on tracking hardware and software. As organizations grow, manual tracking (spreadsheets) becomes ineffective, necessitating automated **Database Systems** or **Asset Management Suites**.

## 🛠️ Hardware & Devices
* **Computing Hardware:** Workstations, laptops, desktops, servers, tablets, and smartphones.
* **Peripherals/Other:** Printers, mice, keyboards, and IoT (Internet of Things) devices.
* **Network Infrastructure:** Switches and routers.
* **Tracking Hardware:** Handheld barcode scanners and RFID (Radio Frequency Identification) readers.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Asset Management:** The systematic process of managing an organization's assets from procurement to disposal.
* **Asset Tag:** A physical label (barcode or RFID) attached to a device to provide a unique identifier for inventory and tracking purposes.
* **Asset ID:** A unique numerical or alphanumeric identifier assigned to an asset within a database.
* **Procurement Lifecycle:** The "birth to death" process of an asset, encompassing change requests, purchasing, deployment, maintenance, and disposal.
* **Change Management:** A formal process for requesting, assessing, and approving changes to the network or infrastructure to minimize risk.
* **Sanitization:** The process of removing data remnants from a device (e.g., hard drive wiping) to ensure security before reuse, sale, or destruction.
* **Baseline:** A secure, hardened configuration applied to a device before it is deployed onto the network.

## 🔄 How It Works (Processes)
### The Procurement Lifecycle
1. **Change Request:** Propose the acquisition; assess business impact and security risks.
2. **Procurement:** Determine budget and identify a trusted vendor/supplier.
3. **Deployment:** Install the asset with a secure, hardened configuration (baseline) before connecting to the network.
4. **Maintenance (Operations):** Monitor, support, and track the asset (upgrades, repairs) during its useful life (typically 2–5 years).
5. **Disposal:** Sanitize data; reuse, sell, donate, recycle, or physically destroy the hardware.

### Inventory Tracking
* **Database Integration:** Asset management systems often integrate with ticketing systems to link users to specific hardware, track repair history (e.g., memory upgrades, power supply replacements), and monitor warranty status.
* **Annual Inspections:** Despite automated systems, physical inspections are required to verify that assets are physically located where the database claims they are.

## 📊 Comparisons & Key Differences
| Feature| Asset Assignment|
| :---| :---|
| **User-Assigned**| Common for mobile devices (laptops, phones, tablets) that leave the office.|
| **Location-Assigned**| Common for fixed assets (desktops in cubicles, shared workstations in call centers).|

## ⚠️ Exam Tips & Important Notes
* **Security First:** Never connect a new device directly to the network without first applying a secure, hardened baseline configuration.
* **Lifecycle Awareness:** Understand that asset management is not just about buying; it includes the "end-of-life" disposal process, which must include data sanitization to prevent data leaks.
* **Tracking:** Use unique identifiers (Asset Tags/IDs) to track assets even when they are moved between offices or users.
* **Licensing:** Software licenses are often tied to specific assets; ensure you have enough licenses for the number of devices running the software.

## ❓ Questions to Review
1. What are the five stages of the asset procurement lifecycle?
2. Why is it dangerous to connect a new device to a network immediately after purchase?
3. What is the primary difference between an asset tag and an asset ID?
4. How does integrating an asset management database with a ticketing system improve IT operations?
5. What are the two main methods of data disposal mentioned for end-of-life hardware?
6. In a shared-use environment like a call center, how should assets typically be assigned?

## 🔗 Related Topics
* [[Change Management]]
* [[Security Baselines]]
* [[Data Sanitization]]
