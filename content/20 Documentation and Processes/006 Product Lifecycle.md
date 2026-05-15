# 006 Product Lifecycle

**Module/Section:** 20 Documentation and Processes
**Tags:** #lifecycle-management #security #operating-systems #🌱seedling

---

![[006 Product Lifecycle.mp4]]

## 📖 Core Concept
The product lifecycle defines the period during which a manufacturer provides support, security patches, and bug fixes for a product (specifically operating systems). Understanding this lifecycle is critical for network security and maintenance.

* **Manufacturer Transparency:** Some vendors (like Microsoft) provide clear, defined lifecycle policies, while others may be less transparent.
* **Support Phases:** Microsoft typically divides support into two phases:
 * **Mainstream Support:** The initial period of support, guaranteed for a minimum of five years for Windows versions.
 * **Extended Support:** An additional period (typically 3–5 years or more) following mainstream support.
* **End of Life (EOL):** The point at which a product is no longer supported by the manufacturer. The product is then considered "abandoned" or "orphaned."
* **Legacy Systems:** Systems running software that has reached EOL. These are dangerous because they no longer receive security patches, leaving them vulnerable to unpatched exploits.
* **Feature Updates:** Periodic updates (every 6–12 months) that add functionality to an existing OS version without replacing the entire OS. These may increase hardware requirements (e.g., storage space) over time.

## 🛠️ Hardware & Devices
* **ICS (Industrial Control Systems):** Specialized systems used in manufacturing/factories. Often run legacy OSs (like Windows XP) because they are expensive to retool and upgrade.
* **SCADA (Supervisory Control and Data Acquisition):** Systems used for monitoring and controlling industrial processes.
* **General Hardware:** The instructor notes that hardware requirements can change; for example, Windows 10 storage requirements increased from 20GB to 32GB over its lifecycle due to feature updates.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Mainstream Support:** The primary support phase provided by a manufacturer, including security updates and bug fixes, typically lasting at least five years for Windows.
* **Extended Support:** A secondary support phase that follows mainstream support, providing additional years of security updates.
* **End of Life (EOL):** The date after which a product is no longer supported, maintained, or patched by the vendor.
* **Legacy Operating System:** An OS that is no longer supported by the manufacturer, making it a significant security risk.
* **Orphaned/Abandoned Software:** Software that has reached EOL and is no longer receiving updates or support.
* **Feature Update:** An update released periodically (6–12 months) that introduces new features and changes to the desktop environment or bundled applications without requiring a full OS upgrade.
* **PC Health Check Application:** A tool used to verify if hardware meets the requirements for the latest version/feature release of an operating system.

## 🔄 How It Works (Processes)
* **Lifecycle Management:**
 1. **Release:** OS is launched with a defined support roadmap.
 2. **Mainstream Support:** Vendor provides active updates and fixes (min. 5 years).
 3. **Extended Support:** Vendor provides critical security patches (additional 3–5+ years).
 4. **End of Life:** Support ceases. The system becomes a "Legacy" system.
* **Security Risk Mitigation for Legacy Systems:** If a legacy system (like Windows XP) must be used for industrial purposes (ICS/SCADA), it should be **air-gapped** (disconnected from the internet) to prevent attackers from exploiting known, unpatched vulnerabilities.

## 📊 Comparisons & Key Differences

| Feature| Mainstream Support| Extended Support|
| :---| :---| :---|
| **Duration**| Minimum 5 years| Typically 3–5+ years|
| **Scope**| Full updates, bug fixes, features| Primarily security patches|
| **Status**| Active/Supported| Limited/Legacy-transition|

## ⚠️ Exam Tips & Important Notes
* **Security Risk:** Never connect a legacy/EOL operating system to the internet if it can be avoided, as it will never receive patches for new vulnerabilities.
* **Corporate Influence:** Large corporate adoption often drives Microsoft to extend support lifecycles for specific OS versions.
* **Hardware Requirements:** Feature updates can change baseline requirements (e.g., storage requirements for Windows 10 increased from 20GB to 32GB). Always check compatibility.
* **Windows XP Example:** Used as a classic example of a legacy system that is still found in industrial environments due to the high cost of retooling.

## ❓ Questions to Review
1. What is the minimum duration for mainstream support on a Windows operating system?
2. What is the primary security danger of running an operating system that has reached its End of Life (EOL)?
3. How can an organization safely continue to use a legacy system that is required for industrial processes?
4. What is the difference between a "Feature Update" and a full OS upgrade?
5. Why might an operating system's storage requirements increase over its lifecycle?

## 🔗 Related Topics
* [[Operating Systems]]
* [[Security Vulnerabilities]]
* [[Industrial Control Systems]]
* [[Patch Management]]
