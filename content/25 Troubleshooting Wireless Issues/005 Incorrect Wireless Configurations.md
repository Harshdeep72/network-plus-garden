# 005 Incorrect Wireless Configurations

**Module/Section:** 25 Troubleshooting Wireless Issues
**Tags:** #wireless #troubleshooting #security #802-11 #🌱seedling

---

![[005 Incorrect Wireless Configurations.mp4]]

## 📖 Core Concept
The lesson focuses on common configuration errors that prevent wireless clients from successfully connecting to an Access Point (AP). These issues typically stem from human error during manual configuration or software/driver corruption within the operating system. The three primary areas of failure are:
* **SSID Mismatch:** Connecting to the wrong network or mistyping the network name.
* **Passphrase/Pre-Shared Key (PSK) Mismatch:** Providing incorrect authentication credentials.
* **Encryption Protocol Mismatch:** A conflict between the client's expected encryption method and the AP's configured method.

## 🛠️ Hardware & Devices
* **Wireless Access Point (AP):** The central device that broadcasts the wireless signal and manages client authentication and encryption.
* **Wireless Network Adapter:** The hardware component (NIC) within a client device (laptop, printer, etc.) that facilitates communication with the wireless network.
* **Network Printer:** Cited as a common device where manual SSID entry is required, increasing the risk of configuration errors.

## 📜 Protocols & Standards
* **802.11:** The IEEE standard for wireless local area networks (WLANs).
* **WEP (Wired Equivalent Privacy):** An older, insecure encryption protocol using the **RC4** stream cipher.
* **WPA (Wi-Fi Protected Access):** An encryption protocol that utilizes **TKIP** (Temporal Key Integrity Protocol).
* **WPA2 (Wi-Fi Protected Access 2):** The standard encryption protocol that uses **AES** (Advanced Encryption Standard) by default.

## 🔑 Key Terminology
* **SSID (Service Set Identifier):** A natural language name used to identify a specific wireless network.
* **Evil Twin:** A fraudulent wireless access point that mimics a legitimate network's SSID to trick users into connecting, often for the purpose of on-path attacks or malware distribution.
* **Passphrase / Pre-Shared Key (PSK):** A secret string used to authenticate a client to a wireless network and to encrypt/decrypt the data transmitted between the client and the AP.
* **Disassociation:** The process where an AP terminates the connection with a wireless client, often occurring when authentication fails due to an incorrect passphrase.
* **Driver:** Software that allows the operating system to communicate with the wireless network adapter hardware.
* **Network Security Key Mismatch:** An error message indicating that the authentication credentials or the encryption protocol settings do not match the requirements of the AP.

## 🔄 How It Works (Processes)
### Troubleshooting Incorrect Passphrase
1. **Verification:** Double-check the entered passphrase/PSK.
2. **Re-entry:** Attempt to reconnect manually.
3. **Driver Remediation:** If the AP reports an incorrect passphrase despite the user entering the correct one, the wireless adapter drivers may be corrupted. Reinstalling the drivers in the OS can resolve this by ensuring the encryption process functions correctly before the data is sent to the AP.

### Troubleshooting Encryption Mismatch
1. **Manual Protocol Configuration:** Use the "Network and Sharing Center" (in Windows) to manually specify the correct encryption protocol (e.g., WPA2-AES).
2. **Disable Third-Party Interference:** Temporarily disable third-party antivirus or firewall software, as these can interfere with network adapter drivers and encryption handshakes.
3. **Driver Reinstallation:** If the issue persists, reinstalling the wireless network adapter drivers is recommended to fix potential corruption.

## 📊 Comparisons & Key Differences
| Protocol| Encryption Algorithm| Security Level|
| :---| :---| :---|
| **WEP**| RC4| Low (Deprecated)|
| **WPA**| TKIP| Moderate|
| **WPA2**| AES| High (Standard)|

## ⚠️ Exam Tips & Important Notes
* **Manual Entry Risk:** Be aware that manual entry of an SSID (e.g., on a printer) is a common point of failure compared to selecting from a list.
* **Security Warning:** If you see an SSID that looks like yours but is not yours, **do not connect**. This is a hallmark of an "Evil Twin" attack.
* **Driver Corruption:** If a user enters the *correct* password but the system still reports an *incorrect* password, the issue is likely **corrupted drivers**, not the user's input.
* **Error Messages:** A "Network security key mismatch" can mean either a wrong password OR a wrong encryption protocol.

## ❓ Questions to Review
1. What is the primary risk associated with connecting to an SSID that looks similar to your own but is not yours?
2. Which encryption algorithm is used by default in WPA2?
3. If a user enters the correct passphrase but the AP still rejects it, what is the recommended troubleshooting step for the client's software?
4. What are the three main troubleshooting steps for a "Network security key mismatch"?
5. Why might a network printer be more prone to SSID configuration errors than a laptop?

## 🔗 Related Topics
* [[Wireless Security]]
* [[802.11 Standards]]
* [[Network Troubleshooting Methodology]]
* [[On-Path Attacks]]
