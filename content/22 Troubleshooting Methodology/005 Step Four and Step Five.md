# 005 Step Four and Step Five

**Module/Section:** 22 Troubleshooting Methodology
**Tags:** #troubleshooting #methodology #it-management #🌱seedling

---

![[005 Step Four and Step Five.mp4]]

## 📖 Core Concept
This lesson covers the fourth and fifth steps of the CompTIA troubleshooting methodology: **Establishing a Plan of Action** and **Implementing the Solution (or Escalating)**.

After identifying the probable cause (Step 2) and verifying the theory (Step 3), the technician must determine the best path forward. This involves evaluating the cost, time, and impact of potential solutions. The goal is to resolve the underlying issue while minimizing disruption to the organization.

## 🛠️ Hardware & Devices
* **iPad/Tablet:** Used as an example of a device where the cost of repair (screen replacement) may exceed the value of the device, necessitating a replacement.
* **Laptop:** Used as an example of a device requiring a temporary workaround (external monitor) when the primary display is damaged during travel.
* **External Monitor:** Used as a temporary workaround for a broken laptop screen.
* **Servers:** Includes File Servers, Print Servers, and Domain Controllers. These are critical infrastructure components where downtime must be carefully planned and authorized.
* **Workstations:** End-user devices where minor troubleshooting (like a reboot) often requires less formal authorization than server-side changes.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Plan of Action:** A formal strategy developed to resolve a verified technical issue. It includes the chosen method of resolution, resource requirements, time estimates, and potential impacts on the organization.
* **Repair:** Fixing the specific component that is causing the issue.
* **Replace:** Swapping out an entire device or component rather than attempting a repair, often chosen when repair costs are high or the device is nearing the end of its lifecycle.
* **Workaround:** A temporary solution that allows a user or system to continue functioning while a permanent fix is pending or deemed too costly/time-consuming.
* **Escalation:** The process of passing a problem to a higher level of authority or a more specialized team when the current technician lacks the resources, authorization, or expertise to resolve the issue.
* **Domain Controller:** A server that responds to security authentication requests within a Windows Server domain. Rebooting this has a high impact as it prevents users from logging in.
* **File Server:** A computer responsible for the central storage and management of data files so that other computers on the same network can access them.

## 🔄 How It Works (Processes)
### The Troubleshooting Workflow (Steps 4 & 5)
1. **Establish a Plan of Action:**
 * Determine the resolution method: Repair, Replace, or Workaround.
 * Perform a cost-benefit analysis (e.g., comparing repair costs vs. replacement costs).
 * Identify resources and time required.
 * Assess the impact on users and other systems.
 * Obtain necessary authorization/permissions (especially for critical infrastructure).
2. **Implement the Solution:**
 * Execute the plan exactly as documented.
 * If the plan changes during execution, stop and seek re-authorization.
 * If the issue is beyond the technician's scope or authority, escalate to the appropriate team.

## 📊 Comparisons & Key Differences
| Strategy| When to Use| Consideration|
| :---| :---| :---|
| **Repair**| When the cost is significantly lower than replacement and the device is reliable.| Consider the age of the device and risk of future failures.|
| **Replace**| When repair costs are high or the device is near end-of-life.| Often more cost-effective for long-term reliability.|
| **Workaround**| When an immediate fix is needed but a permanent solution is not yet feasible.| Temporary; should not be considered a permanent fix.|

## ⚠️ Exam Tips & Important Notes
* **Vendor Instructions:** CompTIA emphasizes that you should always refer to the vendor's instructions/documentation for guidance when establishing a plan.
* **Impact Awareness:** Always consider the "blast radius" of your actions. Rebooting a workstation is low impact; rebooting a Domain Controller is high impact.
* **Authorization:** Never skip the authorization step when working on critical network infrastructure.
* **Stick to the Plan:** Once a plan is approved, do not deviate from it without getting new authorization. Changes to the plan can cause unforeseen issues across the network.
* **Fiscal Responsibility:** IT professionals are expected to make decisions that make "fiscal sense" for the organization.

## ❓ Questions to Review
1. What are the three primary options for resolving a technical issue identified in the troubleshooting process?
2. Why might a technician choose to replace a device rather than repair a single component?
3. What is the primary purpose of a "workaround," and why is it sometimes preferred over a permanent fix?
4. Why is it critical to obtain authorization before rebooting a Domain Controller compared to a standard user workstation?
5. What should a technician do if they realize their approved plan of action needs to be changed mid-implementation?

## 🔗 Related Topics
* [[Troubleshooting Methodology]]
* [[Network Infrastructure]]
* [[Server Management]]
