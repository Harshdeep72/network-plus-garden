# 008 Power of Ethernet (PoE) Issues

**Module/Section:** 24 Troubleshooting Physical Networks
**Tags:** #PoE #troubleshooting #physical-layer #🌱seedling

---

![[008 Power of Ethernet (PoE) Issues.mp4]]

## 📖 Core Concept
Power over Ethernet (PoE) is a technology that enables network cables (specifically copper) to transmit both electrical power and data simultaneously over a single line. This simplifies cabling infrastructure by eliminating the need for separate power sources for endpoint devices.

* **Primary Use Cases:** IP cameras, VoIP (Voice over IP) phones, and Wi-Fi access points.
* **Core Issues:** Troubleshooting typically revolves around two main categories:
 * **Power Budget Exceeded:** The total power demand of all connected devices exceeds the switch's capacity.
 * **Incorrect Standard:** A mismatch between the power requirements of the endpoint device and the capabilities of the power source (switch or injector).

## 🛠️ Hardware & Devices
* **PoE-enabled Switch:** A network switch capable of injecting power into Ethernet cables.
* **PoE Injector:** A standalone device used to add electrical power to a standard Ethernet data cable when the switch does not support PoE or lacks sufficient power budget.
* **Endpoint Devices:** Devices receiving power and data, such as:
 * IP Cameras
 * VoIP Phones
 * Wi-Fi Access Points

## 📜 Protocols & Standards
* **IEEE 802.3af (PoE):**
 * **Max Power Output (at switch):** 15.4 Watts DC.
 * **Guaranteed Power (at device):** 12.95 Watts DC (accounts for power loss over the cable).
* **IEEE 802.3at (PoE+):**
 * **Max Power Output (at switch):** 30 Watts DC.
 * **Guaranteed Power (at device):** 25.5 Watts DC (accounts for power loss over the cable).

## 🔑 Key Terminology
* **Power over Ethernet (PoE):** A technology that allows a single copper Ethernet cable to carry both data and electrical power to a device.
* **Power Budget:** The total cumulative DC power capacity that a PoE switch or injector can provide to all connected devices simultaneously.
* **Power Loss:** The reduction in electrical power that occurs as electricity travels across the length of a copper network cable.
* **PoE Injector:** A device that bridges a non-PoE switch and a PoE-capable endpoint, injecting power into the data stream.

## 🔄 How It Works (Processes)
### Troubleshooting Power Budget Exceeded
1. **Identify Symptoms:** Devices restart randomly, refuse to power on, or behave erratically.
2. **Audit Requirements:** Calculate the total power draw of all connected endpoint devices.
3. **Compare:** Compare the sum of the requirements against the switch's total power budget.
4. **Remediate:**
 * Remove non-essential devices from the switch.
 * Upgrade the switch to a model with a higher total power budget.

### Troubleshooting Incorrect Standard
1. **Identify Symptoms:** Device fails to power up or functions improperly when connected to a specific port.
2. **Verify Compatibility:** Check the IEEE standard supported by the endpoint device versus the standard supported by the switch port.
3. **Remediate:**
 * Replace the switch with one that supports the required standard (e.g., upgrading from 802.3af to 802.3at).
 * Use a PoE+ compliant injector to provide the necessary power if the switch is insufficient.

## 📊 Comparisons & Key Differences

| Feature| IEEE 802.3af (PoE)| IEEE 802.3at (PoE+)|
| :---| :---| :---|
| **Max Power (at Source)**| 15.4 Watts| 30 Watts|
| **Guaranteed Power (at Device)**| 12.95 Watts| 25.5 Watts|

## ⚠️ Exam Tips & Important Notes
* **Power Loss is Real:** Always remember that the power available at the device is lower than the power output at the switch due to resistance/loss in the copper cabling.
* **Cumulative Budget:** The "Power Budget" is not per-port; it is the total capacity of the entire switch. If you have a 100W budget and connect five 20W devices, you are at capacity.
* **Symptoms:** If a device is acting "erratic," "randomly restarting," or "not booting," always check the PoE power budget first.
* **Standard Mismatch:** If a device requires 30W (PoE+) but is plugged into a 15.4W (PoE) switch, it will likely fail to boot entirely.

## ❓ Questions to Review
1. What is the guaranteed power available at the device for an IEEE 802.3af connection?
2. Why does the power available at the device differ from the power output at the switch?
3. If a VoIP phone is randomly restarting, what is the most likely physical layer issue?
4. What is the difference between a PoE switch and a PoE injector?
5. How do you calculate if a power budget has been exceeded?
6. Which IEEE standard defines PoE+?

## 🔗 Related Topics
* [[Ethernet Standards]]
* [[Network Troubleshooting Methodology]]
* [[Copper Cabling]]
