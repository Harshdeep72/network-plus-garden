# 006 Step Six

**Module/Section:** 22 Troubleshooting Methodology
**Tags:** #troubleshooting #system-administration #🌱seedling

---

![[006 Step Six.mp4]]

## 📖 Core Concept
The sixth step of the CompTIA troubleshooting methodology is **Verify Full System Functionality and, if applicable, Implement Preventative Measures**.

The primary objective of this step is to ensure that the root cause of the reported issue has been resolved and that the system is operating at or above its previous performance level. This step serves as a "quality assurance" phase to confirm that the changes made during the implementation phase (Step 5) did not introduce new issues or leave the system in an inconsistent state.

## 🛠️ Hardware & Devices
* **Power Supply Units (PSU):** When replaced, verify output voltages (12V, 5V, and 3.3V DC).
* **RAM Modules:** When replaced, verify the system recognizes the new capacity and the OS performance improves.
* **Internal Cabling:** Check for accidental disconnections of power cables, fan cables, data cables, and LED indicator cables that may have occurred during maintenance.
* **Peripherals (e.g., Keyboards):** Monitor for physical damage (e.g., liquid spills) and ensure proper connectivity.

## 📜 Protocols & Standards
* **N/A — not covered in this lesson.**

## 🔑 Key Terminology
* **Verify Full System Functionality**: The process of confirming that the original problem is solved and that no new issues were introduced during the repair process.
* **Preventative Measures**: Actions taken to stop a known issue from recurring in the future, such as user education or policy changes.
* **Acceptable Use Policy (AUP)**: A set of rules applied by an organization that restricts the ways in which a computer or network may be used.
* **Root Cause**: The fundamental reason for a problem; the underlying issue that, if removed, prevents the problem from recurring.

## 🔄 How It Works (Processes)
1. **Verify the Fix:** Confirm the original reported problem is resolved.
2. **System Inspection:** Check components not directly related to the repair to ensure nothing was accidentally disconnected or damaged during the process.
3. **Configuration Audit:** Ensure that any services or software disabled during troubleshooting remain in the desired state (and do not re-enable upon reboot).
4. **Log/Diagnostic Review:** Utilize system logs and diagnostic tools to confirm the system is operating within normal parameters.
5. **Update Verification:** Ensure all device drivers and software are updated to the latest versions, including security patches.
6. **Implement Preventative Measures:**
 * **User Education:** Teach end-users safe practices (e.g., avoiding untrusted websites).
 * **Policy Enforcement:** Propose or implement rules (e.g., requiring lids on beverages) to prevent physical or logical damage.
 * **Escalation:** If a preventative measure requires organizational authority, report the recurring issue to management to influence corporate policy.

## 📊 Comparisons & Key Differences
* **Step 5 (Implementation) vs. Step 6 (Verification):**
 * **Step 5:** Focuses on the physical or logical act of fixing the problem (replacing the part, running the patch).
 * **Step 6:** Focuses on testing the environment post-fix to ensure the system is stable and the fix is permanent.

## ⚠️ Exam Tips & Important Notes
* **The "Oops" Factor:** Always check for accidentally disconnected cables (fans, LEDs, data) after working inside a computer case.
* **Persistence:** Some services or settings may revert to default after a reboot; always verify that your changes "stick."
* **Holistic View:** Troubleshooting isn't just about fixing the one broken component; it is about ensuring the *entire system* is healthy.
* **Preventative Measures:** If you identify a recurring issue (e.g., malware infections due to user behavior), you are expected to provide education or suggest policy changes to prevent future occurrences.

## ❓ Questions to Review
1. Why is it important to check cables and connectors after performing a hardware repair?
2. What should a technician do if a service they disabled for troubleshooting automatically restarts after a reboot?
3. What is the primary goal of the "Verify Full System Functionality" step?
4. If you identify a recurring issue caused by user behavior, what is your responsibility as a technician?
5. How do you verify that a power supply replacement was successful?

## 🔗 Related Topics
* [[Troubleshooting Methodology]]
* [[CompTIA Network+ N10-009]]
* [[Security Policies]]
