# 006 Device Hardening

**Module/Section:** 14 Network Security Fundamentals
**Tags:** #security #hardening #endpoint-security #🌱seedling

---

![[006 Device Hardening.mp4]]

## 📖 Core Concept
**Device Hardening** is the systematic process of securing a host system or application by reducing its **attack surface**. The primary goal is to ensure that only necessary services, applications, and ports are active, while simultaneously implementing monitoring and maintenance schedules to protect against malware, intrusions, and software exploits.

As networks become "de-perimeterized" (where the traditional network boundary is less defined), hardening endpoint devices (servers, workstations, mobile devices, and network infrastructure) is critical to maintaining a strong security posture. Hardening requires balancing system usability and access requirements against the risks of leaving services or ports open.

## 🛠️ Hardware & Devices
* **Network Interface Card (NIC):** Physical component for wired network connectivity.
* **Wireless Network Adapter:** Physical component for Wi-Fi connectivity.
* **Trusted Platform Module (TPM):** A specialized hardware chip designed to provide hardware-based security functions, such as secure storage of cryptographic keys.
* **Hardware Security Module (HSM):** A physical device that manages digital keys and performs cryptographic operations, providing a higher level of security than software-based solutions.
* **Self-Encrypting Drive (SED):** Storage hardware that automatically encrypts all data written to the media, ensuring data at rest is protected.
* **Peripheral Devices:** External hardware (USB drives, external hard drives, etc.) that must be restricted to prevent unauthorized data exfiltration or malware introduction.

## 📜 Protocols & Standards
* **HTTP (Hypertext Transfer Protocol):** Standard port **80**. Used for web traffic.
* **HTTPS (Hypertext Transfer Protocol Secure):** Standard port **443**. Used for secure web traffic.
* **Non-Standard Ports:** Ports used for services outside of their default assignments (e.g., using **Port 8080** for a secondary web server).
* **UEFI (Unified Extensible Firmware Interface):** A modern firmware standard that replaces the legacy BIOS, providing more secure boot processes and hardware configuration options.

## 🔑 Key Terminology
* **Device Hardening:** The process of securing a system by disabling unnecessary services, ports, and applications to minimize the attack surface.
* **Attack Surface:** The sum of all points (vulnerabilities) where an unauthorized user can try to enter data to or extract data from an environment.
* **Endpoint Security Software:** Tools installed on a host to protect it, including anti-malware, anti-virus, spam filters, host-based firewalls, and log collection agents.
* **Baseline:** A standardized configuration for an operating system or application that serves as a security benchmark.
* **Allow/Deny List:** Security controls that explicitly permit (allow) or block (deny) specific applications or traffic.
* **Full-Disk Encryption (FDE):** A technology that encrypts all data on a hard drive to protect data at rest.
* **End of Life (EOL):** The date a manufacturer stops selling or marketing a product.
* **End of Support (EOS):** The date a manufacturer stops providing patches, updates, and technical support for a product.
* **CUPS (Common Unix Printing System):** A printing service/daemon in Linux that should be disabled if not required.
* **De-perimeterization:** The shift in network security where the traditional "hard shell" (firewall) is no longer sufficient, necessitating stronger endpoint protection.

## 🔄 How It Works (Processes)
1. **Assessment:** Identify all active network interfaces, services, and open ports.
2. **Reduction:** Disable or remove unnecessary applications, services, and network interfaces (e.g., disabling Bluetooth or print daemons if unused).
3. **Configuration:**
 * Rename default accounts and change default passwords.
 * Apply security/group policies.
 * Restrict command-line interface (CLI) access.
4. **Protection:** Install endpoint security software and enable full-disk encryption.
5. **Maintenance:** Establish a patch management schedule to ensure software remains updated.
6. **Lifecycle Management:** Monitor EOL and EOS dates to ensure systems are replaced before they become unpatchable vulnerabilities.

## 📊 Comparisons & Key Differences

| Feature| End of Life (EOL)| End of Support (EOS)|
| :---| :---| :---|
| **Definition**| Manufacturer stops selling the product.| Manufacturer stops providing updates/patches.|
| **Impact**| Cannot purchase new licenses.| System becomes a security risk due to lack of patches.|
| **Example**| Windows Server 2019 (Jan 9, 2024).| Windows Server 2019 (Jan 9, 2029 - Extended).|

## ⚠️ Exam Tips & Important Notes
* **The Rule of Thumb:** If a service, port, or account is not needed, it must be disabled, deleted, or blocked.
* **Balance:** Hardening is a trade-off between security and usability. Always aim for the "least amount of ports and services" required to perform the function.
* **Default Accounts:** Always rename default accounts and change default passwords immediately upon deployment.
* **Legacy Systems:** Attackers specifically target systems that have passed their EOS date because they are no longer patched, leaving "open attack surfaces" indefinitely.
* **Non-Standard Ports:** Be aware that using a non-standard port (like 8080) does not inherently make a service more secure; it is often a functional necessity for running multiple instances of a service.

## ❓ Questions to Review
1. What is the primary goal of device hardening?
2. Why is it important to disable unused services like the CUPS daemon or Bluetooth on a server?
3. What is the difference between EOL and EOS, and why does it matter for security?
4. How does a host-based firewall contribute to device hardening?
5. What are three examples of specialized hardware manufacturers include to improve host security?
6. Why should you restrict the use of peripheral devices on a hardened host?

## 🔗 Related Topics
* [[Host-based Firewalls]]
* [[Patch Management]]
* [[Endpoint Security]]
* [[Access Control]]
