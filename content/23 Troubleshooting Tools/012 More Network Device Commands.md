# 012 More Network Device Commands

**Module/Section:** 23 Troubleshooting Tools
**Tags:** #cisco #cli #troubleshooting #vlan #poe #🌱seedling

---

![[012 More Network Device Commands.mp4]]

## 📖 Core Concept
This lesson focuses on four specific Cisco IOS command-line interface (CLI) commands used for network device management and troubleshooting. These commands allow administrators to inspect the state of Layer 2 switching, Layer 3 address resolution, network segmentation, and power delivery.

## 🛠️ Hardware & Devices
* **Cisco Switch:** The primary device used for these commands.
* **IP Phone (VoIP):** Specifically mentioned the Cisco 7960 model, which utilizes Power over Ethernet (PoE).
* **Network Interface Card (NIC):** The hardware component that reports MAC addresses to the switch.

## 📜 Protocols & Standards
* **ARP (Address Resolution Protocol):** Used to map Layer 3 IP addresses to Layer 2 MAC addresses.
* **VLAN (Virtual Local Area Network):** A method for segmenting network traffic for performance and security.
* **PoE (Power over Ethernet):** A technology that passes electric power along with data on twisted-pair Ethernet cabling.
 * **Class 2 PoE:** Mentioned as a specific power classification for connected devices.
 * **Power Specification:** 15.4 watts is cited as the maximum power supported by the specific ports in the example.
* **IP (Internet Protocol):** The Layer 3 protocol used for addressing.

## 🔑 Key Terminology
* **show MAC address table**: A command that displays the mapping of MAC addresses to their corresponding switch ports.
* **show ARP**: A command that displays the ARP table (IP-to-MAC address mappings).
* **show VLAN**: A command used to display VLAN configurations, including IDs, names, status, and port assignments.
* **show power**: A command used to manage and troubleshoot PoE settings and power distribution per port.
* **ARP Cache Poisoning/Spoofing**: A security threat where an attacker sends falsified ARP messages to link their MAC address with the IP address of a legitimate device.
* **Dotted Decimal Notation**: The format used for IPv4 addresses (e.g., 192.168.1.1).
* **Hexadecimal**: A base-16 numbering system used to represent MAC addresses.
* **ARPA**: A type of ARP entry indicating an Internet Protocol version 4 binding using the original ARPANET notation.
* **Default VLAN**: The initial VLAN (VLAN 1) on a Cisco switch; it is recommended to change this to a non-default number for security.

## 🔄 How It Works (Processes)
* **MAC Address Learning**: Switches dynamically read the MAC address from the NIC of a device when it connects to a switch port.
* **ARP Table Display**: The `show ARP` command outputs:
 * **Protocol**: Usually "Internet" (IP).
 * **Address**: The Layer 3 IP address.
 * **Age**: The time (in minutes) since the entry was last updated (a dash indicates no age limit).
 * **Hardware Address**: The MAC address (formatted as three groups of four hex digits).
 * **Type**: The binding type (e.g., ARPA).
 * **Interface**: The physical port (e.g., Ethernet 0/0).
* **PoE Management**: The `show power` command displays:
 * **Admin**: The administrative state (e.g., Auto).
 * **Oper**: The operational state (On/Off).
 * **Power**: Actual wattage being delivered.
 * **Class**: The PoE power classification.
 * **Max**: The maximum wattage the port is configured to provide.

## 📊 Comparisons & Key Differences
| Command| Primary Purpose| Key Data Provided|
| :---| :---| :---|
| `show MAC address table`| Layer 2 Mapping| MAC address to Switch Port|
| `show ARP`| Layer 3 to Layer 2 Mapping| IP address to MAC address|
| `show VLAN`| Segmentation| VLAN ID, Name, Status, Ports|
| `show power`| PoE Management| Power allocation, usage, and status|

## ⚠️ Exam Tips & Important Notes
* **Security Best Practice:** Always change the default VLAN (VLAN 1) to a different, non-standard VLAN ID (e.g., VLAN 100) to make it harder for attackers to guess.
* **MAC Address Formatting:** Note that while standard MAC addresses are usually 12 hex characters separated by colons or dashes, the `show ARP` command displays them as three groups of four hex digits separated by dots.
* **Troubleshooting:** If a PoE device is not powering on, use `show power` to check if the port is "Off" or if the power allocation has been exceeded.

## ❓ Questions to Review
1. Which command would you use to determine which physical port a specific MAC address is connected to?
2. What does a "dash" in the "Age" column of an ARP table indicate?
3. Why is it recommended to change the default VLAN from VLAN 1?
4. If a VoIP phone is not receiving power, which command should you run to check the operational status of the switch port?
5. What are the four columns typically displayed when running the `show VLAN` command?

## 🔗 Related Topics
* [[VLANs]]
* [[ARP]]
* [[Power over Ethernet (PoE)]]
* [[Switching]]
