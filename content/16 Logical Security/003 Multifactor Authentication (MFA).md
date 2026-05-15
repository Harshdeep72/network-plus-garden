# 003 Multifactor Authentication (MFA)

**Module/Section:** 16 Logical Security
**Tags:** #security #authentication #MFA #🌱seedling

---

![[003 Multifactor Authentication (MFA).mp4]]

## 📖 Core Concept
**Multifactor Authentication (MFA)** is the process of verifying a user's identity using two or more independent categories of credentials. To be considered "multifactor," the system must require at least two distinct methods from different categories.

* **The "Two-Factor" Misconception:** Using a username and a password is **not** two-factor authentication. Both credentials fall under the "Knowledge" category. True MFA requires combining different categories (e.g., Knowledge + Possession).
* **The Five Categories of Authentication:**
 1. **Something you know (Knowledge):** Information only the user should possess.
 2. **Something you have (Possession):** A physical item the user carries.
 3. **Something you are (Inherence):** Biological or physical traits unique to the individual.
 4. **Something you do (Action):** Behavioral patterns or specific actions.
 5. **Somewhere you are (Location):** Geographic or network-based positioning.

## 🛠️ Hardware & Devices
* **Wireless Router/Access Point:** Often shipped with default credentials that must be changed immediately.
* **Smart Card:** A physical card containing a digital certificate; requires insertion into a reader and a PIN.
* **RSA Key Fob:** A hardware token that generates a rotating numeric code every 30–60 seconds.
* **RFID (Radio Frequency Identification) Tag/Badge:** Used for proximity-based authentication (tapping a badge).
* **Biometric Scanners:** Devices used for "something you are" authentication, such as retina scanners or fingerprint readers.
* **Graphics Cards (GPUs):** Used by attackers to perform high-speed password cracking (brute force/dictionary attacks).

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Knowledge Factor:** Authentication based on information known by the user (e.g., password, PIN, security questions).
* **Possession Factor:** Authentication based on a physical item the user holds (e.g., smart card, key fob, RFID badge).
* **Inherence Factor:** Authentication based on unique biological traits (e.g., fingerprints, retina scans, voiceprints).
* **Action Factor:** Authentication based on how a user performs a task (e.g., signature pressure, typing rhythm).
* **Location Factor:** Authentication based on the user's physical or logical location (e.g., GPS coordinates).
* **Dictionary Attack:** An attack where the user tries to guess a password by iterating through a pre-compiled list of common words and variations (e.g., replacing 'a' with '@').
* **Brute Force Attack:** An attack that attempts every possible combination of characters until the correct password is found.
* **Hybrid Attack:** A combination of dictionary and brute force methods; uses a custom dictionary based on personal information (spouse name, sports team) and then applies brute-force variations to those keywords.
* **Geotagging:** Using GPS or device data to verify a user's location during an authentication attempt.
* **Geofencing:** Establishing a virtual geographic boundary; triggers an alert or policy action if a device crosses that boundary.

## 🔄 How It Works (Processes)
* **Password Cracking Progression:**
 * **8 characters:** Cracked in < few days.
 * **9 characters:** ~5 days.
 * **10 characters:** ~4 months.
 * **11 characters:** ~10 years.
 * **12 characters:** ~200 years.
 * *Note:* These times decrease as computing power (GPUs) improves.
* **MFA Implementation:** To achieve 2FA, combine two categories.
 * *Example:* Smart Card (Possession) + PIN (Knowledge).
 * *Example:* Username/Password (Knowledge) + RSA Key Fob code (Possession).

## 📊 Comparisons & Key Differences
| Factor Category| Examples| Primary Use Case|
| :---| :---| :---|
| **Knowledge**| Password, PIN| General login|
| **Possession**| Key Fob, Smart Card| Secure access tokens|
| **Inherence**| Fingerprint, Retina| High-security areas (server rooms)|
| **Action**| Signature, Typing style| Behavioral verification|
| **Location**| GPS, Geofencing| Mobile device management|

## ⚠️ Exam Tips & Important Notes
* **Exam Trap:** Never identify "Username + Password" as two-factor authentication. It is single-factor (Knowledge).
* **Best Practice:** Always change default credentials on new hardware immediately.
* **Password Complexity:** Use a mix of uppercase, lowercase, numbers, and special characters.
* **Length is King:** A 12-character password is the recommended minimum for modern security.
* **Inherence Intrusiveness:** Biometrics are highly secure but often considered too intrusive for daily workstation logins; they are better suited for physical security (doors).

## ❓ Questions to Review
1. Why is a username and password combination considered single-factor authentication?
2. What is the primary difference between a dictionary attack and a brute force attack?
3. How does a hybrid attack utilize personal information to speed up the cracking process?
4. Why is "something you are" (inherence) less commonly used for standard workstation logins compared to "something you know"?
5. What is the difference between geotagging and geofencing in the context of location factors?

## 🔗 Related Topics
* [[Authentication]]
* [[Authorization]]
* [[Physical Security]]
* [[Mobile Device Management (MDM)]]
