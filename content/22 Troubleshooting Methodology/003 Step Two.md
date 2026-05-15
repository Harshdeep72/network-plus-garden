# 003 Step Two

**Module/Section:** 22 Troubleshooting Methodology
**Tags:** #troubleshooting #OSI-model #methodology #🌱seedling

---

![[003 Step Two.mp4]]

## 📖 Core Concept
Step two of the CompTIA troubleshooting methodology focuses on **establishing a theory of probable cause**. The goal is to move from the symptoms identified in step one to a logical, systematic hypothesis of what is causing the issue.

* **Question the Obvious:** Always check the most likely, simplest solutions first (e.g., is the device plugged in? Is the service actually down?).
* **Probable Cause vs. Possible Cause:** A "possible" cause could be anything (e.g., aliens scrambling bits), but a "probable" cause is the most statistically likely explanation based on symptoms.
* **Systematic Approach:** Technicians should test theories one by one. If the first theory is incorrect, move to the next most likely one, ensuring no stone is left unturned while maintaining efficiency.
* **Research:** If the cause is not immediately apparent, use internal resources (logs, manuals, diagnostic tools) and external resources (search engines, community forums, status trackers like Downdetector).

## 🛠️ Hardware & Devices
* **Physical Inspection:** Technicians must physically examine the hardware.
 * **Fans:** Check for spinning (indicates power/cooling status).
 * **Hard Drives:** Listen for clicking or grinding sounds (indicates mechanical failure in traditional HDDs).
 * **Smell:** Burning odors indicate potential processor or motherboard component failure.
* **Cabling:** Copper or fiber connections (Layer 1) are often the first point of failure in a bottom-up approach.

## 📜 Protocols & Standards
* **HTTP (Hypertext Transfer Protocol):** Port 80.
* **HTTPS (Hypertext Transfer Protocol Secure):** Port 443.
* **ICMP (Internet Control Message Protocol):** Used for `ping` traffic to test connectivity.
* **DNS (Domain Name System):** Mentioned in the context of testing connectivity to `8.8.8.8` (Google Public DNS).

## 🔑 Key Terminology
* **Probable Cause:** The most likely explanation for a technical issue based on observed symptoms, prioritized over less likely scenarios.
* **Top-to-Bottom Approach:** A troubleshooting method that starts at the Application layer (Layer 7) of the OSI model and works down to the Physical layer (Layer 1).
* **Bottom-Up Approach:** A troubleshooting method that starts at the Physical layer (Layer 1) and works up to the Application layer (Layer 7).
* **Divide and Conquer:** A troubleshooting method that starts at the middle of the OSI model (e.g., testing connectivity via `ping` at Layer 3/4) to determine if the issue lies in the layers above or below the test point.
* **Intermittent Problem:** A fault that does not occur constantly, making it difficult to diagnose.
* **Workaround:** A temporary fix or bypass used to restore functionality while a permanent root cause is being investigated.

## 🔄 How It Works (Processes)
### Troubleshooting Approaches
1. **Top-to-Bottom:** Start at Layer 7 (Application). If the app fails, check Layer 6 (Presentation/Encryption), then Layer 5, and so on.
2. **Bottom-Up:** Start at Layer 1 (Physical). Verify cable connections, then Layer 2 (MAC/Switching), then Layer 3 (IP/Routing), etc.
3. **Divide and Conquer:** Start at the middle (e.g., Layer 3/4). Perform a `ping` to a known IP (like `8.8.8.8`).
 * If `ping` succeeds: The issue is likely in Layers 5–7.
 * If `ping` fails: The issue is likely in Layers 1–4.

### Research Workflow
* **External:** Use sites like **Downdetector** to see if a service (like Netflix) is experiencing a widespread outage. Use search engines (Google) to look up specific error codes.
* **Internal:** Consult system documentation, check **Event Logs**, and run built-in **Diagnostic Tools**.
* **Collaborative:** If a ticket has been passed between technicians, review previous notes to avoid repeating ineffective troubleshooting steps.

## 📊 Comparisons & Key Differences

| Approach| Starting Point| Best Used For|
| :---| :---| :---|
| **Top-to-Bottom**| Layer 7 (App)| Issues specific to software or application configuration.|
| **Bottom-Up**| Layer 1 (Physical)| Issues involving hardware, cabling, or local connectivity.|
| **Divide and Conquer**| Middle (Layer 3/4)| Rapidly isolating whether the issue is network-based or application-based.|

## ⚠️ Exam Tips & Important Notes
* **Reproduce the Problem:** If the symptom is gone, try to recreate it. If you cannot reproduce it, you may not have found the root cause.
* **Don't Overlook the Obvious:** The instructor emphasizes that technicians often overcomplicate issues; always rule out the simplest explanations first.
* **Documentation:** Always check what previous technicians have already tried to avoid wasting time and frustrating the user.
* **OSI Model:** You must know the layers of the OSI model to effectively use the Top-to-Bottom, Bottom-Up, and Divide and Conquer methods.

## ❓ Questions to Review
1. What is the primary difference between a "possible" cause and a "probable" cause?
2. If you are using a "Divide and Conquer" approach and your `ping` to `8.8.8.8` is successful, which layers of the OSI model should you focus on next?
3. Why is it important to consult previous technicians' notes before beginning your own troubleshooting?
4. What are three physical signs you should look for when performing a hardware inspection?
5. What is the main advantage of using a site like Downdetector during the troubleshooting process?

## 🔗 Related Topics
* [[OSI Model]]
* [[Troubleshooting Methodology]]
* [[Network Diagnostic Tools]]
