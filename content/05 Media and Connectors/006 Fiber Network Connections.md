# 006 Fiber Network Connections

**Module/Section:** 05 Media and Connectors
**Tags:** #fiber-optics #cabling #connectors #🌱seedling

---

![[006 Fiber Network Connections.mp4]]

## 📖 Core Concept
Fiber optic connections utilize light to transmit data. Because fiber cannot be easily spliced directly into equipment, **fiber connectors** are used to facilitate quick connection and disconnection.

* **Transmit/Receive Pairs:** Most fiber connections require two fibers: one for transmitting (Tx) and one for receiving (Rx). Cables may come as single strands or as a pair joined together in a single jacket.
* **Back Reflection:** A phenomenon where light sent through the fiber bounces back toward the transmitter, potentially degrading the signal. The type of **polish** applied to the fiber end-face determines how much back reflection occurs.

## 🛠️ Hardware & Devices
* **Fiber Optic Patch Cable:** Cables used to connect network devices; may contain one or two fiber cores.
* **Fiber Connectors:** Physical interfaces used to terminate fiber cables.
 * **SC (Subscriber Connector):** Square-shaped, push-pull mechanism.
 * **LC (Lucent Connector):** Compact, small form factor, push-pull mechanism.
 * **ST (Straight Tip):** Round, twist-lock mechanism.
 * **MTRJ (Mechanical Transfer Register Jack):** Small, rectangular, dual-fiber connector.
 * **MPO (Multi-fiber Push On):** High-density connector housing 12+ fibers.

## 📜 Protocols & Standards
* **N/A — not covered in this lesson.** (Note: The video focuses on physical layer connectors rather than specific IEEE standards like 10GBASE-SR/LR).

## 🔑 Key Terminology
* **SC (Subscriber Connector):** A square-shaped connector using a push-pull design; often called the "stick and click" connector. Widely used in single-mode fiber and FTTH (Fiber to the Home).
* **LC (Lucent Connector):** A small form factor connector that uses a push-pull mechanism. Often called the "love connector" because they are frequently snapped together in pairs. Ideal for high-density environments like data centers.
* **ST (Straight Tip):** A round connector with a twist-lock mechanism (similar to BNC). Often called the "stick and twist" connector. Primarily used with multi-mode fiber in campus environments.
* **MTRJ (Mechanical Transfer Register Jack):** A small, rectangular connector that houses both Tx and Rx fibers in one unit. Uses an RJ-style latch.
* **MPO (Multi-fiber Push On):** A connector designed to hold 12 or more fibers. Essential for high-density backbone cabling in data centers.
* **PC (Physical Contact):** A polish style with a slight curvature to reduce back reflection compared to a flat cut.
* **UPC (Ultra Physical Contact):** A polish style with a dome-shaped end face, providing better core alignment and lower back reflection than PC.
* **APC (Angled Physical Contact):** A polish style featuring an 8-degree angle to minimize back reflection. Used for high-bandwidth, long-distance applications.

## 🔄 How It Works (Processes)
* **Connector Termination:** Fiber cables are terminated with connectors to allow for modularity.
* **Polishing Process:** The end-face of the fiber is polished to specific geometries (PC, UPC, APC) to manage light reflection.
* **Back Reflection Management:** By shaping the fiber tip (dome or angle), light that would normally reflect back into the transmitter is instead directed into the cladding or out of the fiber, preserving signal integrity.

## 📊 Comparisons & Key Differences

| Connector| Shape| Mechanism| Best Use Case|
| :---| :---| :---| :---|
| **SC**| Square| Push-Pull| FTTH, Single-mode|
| **LC**| Small| Push-Pull| High-density, Data Centers|
| **ST**| Round| Twist-Lock| Campus, Multi-mode, Outdoor|
| **MTRJ**| Rectangular| RJ-style Latch| LAN, Workstations|
| **MPO**| Large| Push-On| Backbone, High-density|

| Polish Style| Back Reflection| Cost| Application|
| :---| :---| :---| :---|
| **PC**| Highest (of the three)| Lowest| Short distance, low speed|
| **UPC**| Medium| Moderate| General broadband/video|
| **APC**| Lowest| Highest| Long-haul, high bandwidth|

## ⚠️ Exam Tips & Important Notes
* **Mnemonics:**
 * **SC:** "Stick and Click"
 * **ST:** "Stick and Twist"
 * **LC:** "Love Connector" (because they are often coupled/joined)
* **Exam Focus:** Know the physical shape and mechanism of each connector (e.g., ST is round/twist-lock, SC is square/push-pull).
* **Polish Importance:** Understand that APC (Angled) is the best for minimizing back reflection due to the 8-degree angle.
* **Density:** If the question mentions "high density" or "space constrained," think **LC** or **MPO**.

## ❓ Questions to Review
1. Which fiber connector uses a twist-lock mechanism similar to a BNC connector?
2. Why is the LC connector preferred in modern data centers?
3. What is the primary difference between PC, UPC, and APC polish styles?
4. Which connector would you choose for a Fiber to the Home (FTTH) deployment?
5. How many fibers are typically found in an MPO connector?

## 🔗 Related Topics
* [[Fiber Optic Cabling]]
* [[Single-mode vs Multi-mode Fiber]]
* [[Network Media]]
