# 002 Duplicate Addresses

**Module/Section:** 26 Troubleshooting Network Services
**Tags:** #troubleshooting #layer-2 #layer-3 #mac-address #ip-address #🌱seedling

---

![[002 Duplicate Addresses.mp4]]

## 📖 Core Concept
The lesson focuses on the network instability caused by duplicate identifiers at the Data Link (Layer 2) and Network (Layer 3) layers.
* **Layer 2 (MAC):** Duplicate MAC addresses cause switches to constantly update their CAM tables, leading to "flapping" between ports and intermittent or total loss of connectivity.
* **Layer 3 (IP):** Duplicate IP addresses (IP conflicts) cause routing confusion, where network traffic cannot be reliably delivered to the intended host, resulting in intermittent connectivity for both affected devices.

## 🛠️ Hardware & Devices
* **Network Interface Card (NIC):** The hardware component that possesses a physical, "burnt-in" MAC address.
* **Switch:** A Layer 2 device that uses a CAM table to map MAC addresses to physical ports.
* **Router:** A Layer 3 device that routes traffic based on IP addresses.
* **Virtual Machine (VM):** Software-based computers that use virtual NICs, which require MAC addresses assigned by a hypervisor.

## 📜 Protocols & Standards
* **MAC (Media Access Control) Address:** A 48-bit (6-byte) physical address.
 * **Structure:** 24 bits (OUI/Manufacturer) + 24 bits (Unique NIC identifier).
 * **Format:** 12 hexadecimal digits.
* **IP (Internet Protocol):** Layer 3 addressing used for logical network identification.
* **DHCP (Dynamic Host Configuration Protocol):** A protocol used to dynamically assign IP addresses to network clients.
* **ARP (Address Resolution Protocol):** Used to map IP addresses to MAC addresses.

## 🔑 Key Terminology
* **MAC Address:** A unique, hardware-assigned identifier for a network interface.
* **Locally-Administered Address:** A self-assigned MAC address that overrides the burned-in address; often associated with **MAC Spoofing**.
* **CAM Table (Content Addressable Memory):** A table in a switch that stores the mapping of MAC addresses to specific physical switch ports.
* **Logical Domain Manager:** A system used in virtualized environments to monitor and manage MAC address assignments to prevent duplicates among virtual NICs.
* **Protocol Analyzer:** A tool (e.g., **Wireshark**) used to capture and inspect network traffic to identify address conflicts.
* **Port Security:** A switch feature that limits the number of MAC addresses allowed on a single port to prevent unauthorized access or address conflicts.
* **IP Address Conflict:** A condition where two or more devices on the same network segment are configured with the same IP address.
* **Rogue DHCP Server:** An unauthorized DHCP server on a network that distributes incorrect or conflicting IP configuration information.

## 🔄 How It Works (Processes)
### Troubleshooting Duplicate MAC Addresses
1. **Detection:** Observe intermittent connectivity or total failure on two devices.
2. **Switch Analysis:** The switch detects the same MAC address appearing on two different ports, causing the CAM table to "flap" (continuously update between ports).
3. **Verification:** Use a protocol analyzer (Wireshark) to inspect ARP traffic or use the `show arp` command on a switch to see the same MAC mapped to multiple ports.
4. **Remediation:**
 * Check for manufacturing defects (replace NIC).
 * Check for MAC spoofing (reset to burned-in address).
 * Enable **Port Security** on the switch.

### Troubleshooting Duplicate IP Addresses
1. **Detection:** Intermittent connectivity for devices sharing an IP.
2. **Verification:** Use the `show arp` command on a router to see one IP address associated with multiple physical interfaces.
3. **Remediation:**
 * Check the client's TCP/IP settings.
 * If static, ensure no typos and no overlap with the DHCP scope.
 * If dynamic, ensure the client is set to "Obtain an IP address automatically."
 * Check for a **Rogue DHCP Server**.

## 📊 Comparisons & Key Differences

| Feature| Duplicate MAC Address| Duplicate IP Address|
| :---| :---| :---|
| **OSI Layer**| Layer 2 (Data Link)| Layer 3 (Network)|
| **Primary Symptom**| Switch CAM table flapping| Routing/Delivery failure|
| **Primary Tool**| `show arp` (Switch)| `show arp` (Router)|
| **Common Cause**| Spoofing, Manufacturing error, VMs| Static IP typo, DHCP error, Rogue DHCP|

## ⚠️ Exam Tips & Important Notes
* **MAC Address Structure:** Remember that the first 24 bits are the manufacturer (OUI) and the last 24 bits are the unique device ID.
* **Switch Behavior:** If a switch sees the same MAC address on two ports, it will constantly update the CAM table, which is a major indicator of a duplicate MAC.
* **DHCP Conflicts:** If a device is configured for DHCP but has a conflict, it is often because a static IP was manually assigned to an address already within the DHCP scope.
* **Command:** `show arp` is the go-to command for identifying both MAC and IP conflicts on Cisco hardware.

## ❓ Questions to Review
1. How many bits are in a standard MAC address, and how are they divided?
2. What happens to a switch's CAM table when two devices share the same MAC address?
3. What is the purpose of a Logical Domain Manager in a virtualized environment?
4. What is the most common reason for an IP address conflict on a network?
5. How does Port Security help prevent duplicate MAC address issues?

## 🔗 Related Topics
* [[MAC Address]]
* [[IP Addressing]]
* [[DHCP]]
* [[ARP]]
* [[Switching]]
* [[Virtualization]]
