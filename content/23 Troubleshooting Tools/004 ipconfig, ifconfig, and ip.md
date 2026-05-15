# 004 ipconfig, ifconfig, and ip

**Module/Section:** 23 Troubleshooting Tools
**Tags:** #troubleshooting #command-line #ipconfig #ifconfig #ip-command #🌱seedling

---

![[004 ipconfig, ifconfig, and ip.mp4]]

## 📖 Core Concept
The lesson covers three primary command-line utilities used for network interface configuration and troubleshooting: **ipconfig** (Windows), **ifconfig** (Unix/Linux/macOS - deprecated), and **ip** (the modern Linux replacement). These tools allow administrators to view IP configurations, release/renew DHCP leases, manage interface states (up/down), and perform advanced tasks like MAC address spoofing and promiscuous mode configuration.

## 🛠️ Hardware & Devices
* **Network Interface Card (NIC):** The physical hardware component that connects a device to the network. These tools are used to manage the logical configuration of these interfaces.

## 📜 Protocols & Standards
* **TCP/IP:** The fundamental suite of communication protocols used for network interconnection.
* **DHCP (Dynamic Host Configuration Protocol):** Used for automatic IP assignment. The instructor references the **DORA** process (Discover, Offer, Request, Acknowledge).
* **DNS (Domain Name System):** Used for name resolution; IP addresses of DNS servers are displayed via `ipconfig /all`.
* **IPv4:** 32-bit addressing scheme.
* **IPv6:** 128-bit addressing scheme; includes Link-Local addresses.
* **APIPA (Automatic Private IP Addressing):** A fallback mechanism used when a DHCP server is unreachable. Uses the `169.254.0.0/16` range.

## 🔑 Key Terminology
* **ipconfig (IP Configuration):** A Windows command-line utility used to display current TCP/IP network configuration values and refresh DHCP/DNS settings.
* **ifconfig (Interface Configuration):** A command-line tool for Unix, Linux, and macOS used to display and configure network interfaces. Now considered deprecated.
* **ip (Internet Protocol):** A modern, powerful suite of tools in Linux designed to replace `ifconfig`. It handles interface configuration, routing, and tunneling.
* **APIPA:** A self-assigned IP address (169.254.x.x) indicating a DHCP failure.
* **DORA Process:** The four-step DHCP handshake: **D**iscover, **O**ffer, **R**equest, **A**cknowledge.
* **MAC Spoofing:** The process of changing the physical (MAC) address of a network interface.
* **Promiscuous Mode:** A mode of operation where a network interface captures all traffic on the network segment, regardless of the destination MAC address.
* **Verbose (`-v`):** An option used to display detailed information about an interface (e.g., speed, duplex, QoS).
* **Deprecated:** Software or commands that are obsolete and should be replaced by newer alternatives, though they may still function for compatibility.

## 🔄 How It Works (Processes)
* **DHCP Troubleshooting:**
 1. `ipconfig /release`: Drops the current IP configuration.
 2. `ipconfig /renew`: Initiates the DORA process to request a new IP from the DHCP server.
* **Interface State Management:**
 * **ifconfig:** Use `ifconfig [interface] down` to disable and `ifconfig [interface] up` to enable.
 * **ip:** Use `ip link set [device] down` or `ip link set [device] up`.
* **Static IP Assignment (using `ip` command):**
 1. `ip a add [IP]/[Subnet] dev [device]`
* **MAC Spoofing (using `ip` command):**
 1. `ip link set dev [device] address [new_mac]`

## 📊 Comparisons & Key Differences

| Feature| ipconfig (Windows)| ifconfig (Linux/Unix)| ip (Linux/Modern)|
| :---| :---| :---| :---|
| **Primary OS**| Windows| Unix/Linux/macOS| Linux|
| **Status**| Active| Deprecated| Current/Standard|
| **All Interfaces**| `ipconfig /all`| `ifconfig -a`| `ip a`|
| **Scope**| Basic/Intermediate| Interface focus| Suite (Routing/Tunneling)|

## ⚠️ Exam Tips & Important Notes
* **APIPA Identification:** If you see an IP address starting with `169.254.x.x`, immediately identify this as a DHCP failure/APIPA address.
* **Windows vs. Linux:** Remember that `ipconfig` is Windows-only. If the exam asks about Linux/Unix, look for `ifconfig` or `ip`.
* **Deprecation:** The exam may still test `ifconfig` because it is widely used on legacy systems, but recognize `ip` as the modern standard.
* **Promiscuous Mode:** Remember that this is used for packet sniffing/capturing traffic.
* **Verbosity:** `ifconfig -v` provides detailed info like connection speed and QoS status.

## ❓ Questions to Review
1. What command would you use in Windows to view lease expiration times for your IP address?
2. If a Linux user cannot connect to the network, what command might you use to check if the interface is administratively "down"?
3. What is the significance of an IP address starting with 169.254?
4. Which command replaces `ifconfig` in modern Linux distributions?
5. What is the purpose of enabling "promiscuous mode" on a network interface?

## 🔗 Related Topics
* [[DHCP]]
* [[DNS]]
* [[IPv4 vs IPv6]]
* [[MAC Address]]
* [[Troubleshooting Methodology]]
