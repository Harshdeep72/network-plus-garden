# 008 Physical Security

**Module/Section:** 14 Network Security Fundamentals
**Tags:** #physical-security #security-controls #🌱seedling

---

![[008 Physical Security.mp4]]

## 📖 Core Concept
Physical security is the foundational layer of network security. If an attacker gains physical access to hardware (switches, routers, firewalls), they can bypass logical security by reconfiguring devices or physically patching around them. Security controls are categorized into two primary types:
* **Detective Controls:** Mechanisms used to identify if a malicious event has occurred. These do not stop an event but provide logs or evidence after the fact.
* **Preventive Controls:** Mechanisms designed to stop unauthorized access or malicious activity before it occurs.

## 🛠️ Hardware & Devices
* **Surveillance Cameras:**
 * **Wired:** Connected via coaxial (analog) or UTP (digital) cables to a central station.
 * **Wireless:** Easier to install but susceptible to interference (e.g., 802.11 networks) and jamming.
 * **PTZ (Pan, Tilt, Zoom):** Cameras controllable via joystick to move left/right, up/down, and adjust focal length.
 * **Infrared (IR):** Detects heat signatures; useful for identifying human presence in dark rooms or detecting overheating equipment (hotspots).
 * **Ultrasonic:** Uses sound-based detection to identify minute movements (e.g., a pin dropping).
* **Access Control Hardware:**
 * **Badge Readers:** Utilize magnetic strips, smart chips, or RFID.
 * **Biometric Readers:** Fingerprint, retina, or voice-print scanners.
* **Smart Lockers:** Integrated, vending-machine-style storage for personal electronic devices (PEDs) to prevent data exfiltration.
* **Server/Networking Racks:**
 * **Standard Size:** 48U (Units) high, ~50 inches deep, ~20 inches wide.
 * **Security:** Often feature physical key locks to prevent unauthorized access to ports/cables.

## 📜 Protocols & Standards
* **802.11:** Wireless networking standard; surveillance cameras must be managed to avoid interference with these networks.

## 🔑 Key Terminology
* **MDF (Main Distribution Frame):** The primary hub for network equipment in a building.
* **IDF (Intermediate Distribution Frame):** A secondary distribution point for network equipment, usually serving a specific floor or area.
* **CCTV (Closed-Circuit Television):** A system where video signals are transmitted to a specific, limited set of monitors for surveillance.
* **Access Control Vestibule (Man Trap):** A secure area between two sets of interlocking doors designed to hold individuals until they are identified and authenticated.
* **Two-Factor Authentication (2FA):** A security process requiring two different forms of identification (e.g., "Something you have" like a badge + "Something you know" like a PIN).
* **Data Loss Prevention (DLP):** Strategies and tools used to ensure that sensitive data does not leave the corporate network (e.g., prohibiting smartphones in secure areas).
* **Key Custodian:** The individual responsible for managing physical keys and maintaining logs of who has access to secure areas/cabinets.

## 🔄 How It Works (Processes)
* **Access Control Vestibule Workflow:**
 1. User enters the first door into the vestibule.
 2. User is held in the vestibule until authentication (badge + PIN or manual verification) is successful.
 3. Once authenticated, the second door unlocks, allowing entry into the secure zone.
* **Smart Locker Workflow:**
 1. User scans badge at the locker console.
 2. User selects an available locker on the display.
 3. Locker opens; user deposits devices.
 4. User closes the door, which automatically locks.
 5. To retrieve, user repeats the scan process at the console.

## 📊 Comparisons & Key Differences
| Feature| Detective Controls| Preventive Controls|
| :---| :---| :---|
| **Purpose**| Identify after the fact| Stop before it happens|
| **Examples**| CCTV, Motion sensors| Badge readers, Man traps, Locks|
| **Outcome**| Logging/Evidence| Denied access|

## ⚠️ Exam Tips & Important Notes
* **Exam Tip:** Always remember that physical security is the first line of defense. If an attacker has physical access, all logical security (passwords, encryption) can be bypassed.
* **Exam Tip:** Understand the distinction between "Something you have" (badge) and "Something you know" (PIN). Combining these is a classic 2FA implementation.
* **ROI Note:** Employee training is highly cost-effective, with studies showing significant ROI (69% for SMBs, 248% for enterprises) because users/admins are the "weakest link."
* **Placement:** Cameras should be placed at all entry/exit points of MDFs, IDFs, data centers, and building perimeters.

## ❓ Questions to Review
1. Why is physical security considered the most critical layer of network security?
2. What is the primary difference between a detective control and a preventive control?
3. How does a PTZ camera differ from a standard fixed-view camera?
4. What is the purpose of an access control vestibule, and where is it typically located?
5. Why is employee training considered a high-ROI security investment?

## 🔗 Related Topics
* [[Network Security Fundamentals]]
* [[Access Control]]
* [[Incident Response]]
