# 003 IPv4 Address Types

**Module/Section:** 09 IP Addressing
**Tags:** #ipv4 #addressing #🌱seedling

---

![[003 IPv4 Address Types.mp4]]

## 📖 Core Concept
IPv4 (Internet Protocol version 4) uses a 32-bit addressing scheme, providing approximately 4.3 billion unique addresses. These addresses are represented in **dotted-decimal notation** (four octets separated by periods). Because of the limited address space and security/management needs, IPv4 addresses are categorized into specific types:

* **Public (Routable) Addresses:** Globally unique addresses used for internet communication.
* **Private (Non-routable) Addresses:** Used internally within local networks; they do not require global registration and are not routable on the public internet.
* **Loopback/Localhost:** Reserved for internal system testing and diagnostics.
* **APIPA:** A fallback mechanism for devices that fail to receive a dynamic IP address.

## 🛠️ Hardware & Devices
* **Router:** Acts as an agent between the public internet and a private network, performing **NAT** (Network Address Translation) to map private internal IPs to a single public IP.
* **Workstation/Computer:** The end-user device that requests IP assignments via DHCP.

## 📜 Protocols & Standards
* **IPv4:** 32-bit addressing protocol.
* **DHCP (Dynamic Host Configuration Protocol):** Used for dynamic IP assignment.
* **NAT (Network Address Translation):** A method for remapping IP address space.
* **RFC 1918:** The standard defining private IP address ranges for internal networks.
* **ICANN (Internet Corporation for Assigned Names and Numbers):** The global authority managing IP address space.
* **RIRs (Regional Internet Registries):** Organizations that manage IP addresses for specific global regions:
 * **ARIN:** North America
 * **LACNIC:** Latin America
 * **AFNIC:** Africa
 * **APNIC:** Asia Pacific
 * **RIPE:** Europe

## 🔑 Key Terminology
* **Public IP:** A globally unique, routable IP address assigned by an ISP.
* **Private IP:** A non-routable IP address used within a local network (defined by RFC 1918).
* **NAT (Network Address Translation):** A process where a router converts private internal IP addresses into a single public IP address to facilitate internet access.
* **Loopback Address:** A special address (127.0.0.1) used by a host to communicate with itself for testing network software.
* **Localhost:** The human-readable name that resolves to the loopback address (127.0.0.1).
* **APIPA (Automatic Private IP Addressing):** A feature that allows a device to self-assign an IP address in the 169.254.x.x range when a DHCP server is unreachable.
* **DORA:** The four-step DHCP process: **D**iscover, **O**ffer, **R**equest, **A**cknowledge.
* **Octet:** One of the four 8-bit sections of an IPv4 address.

## 🔄 How It Works (Processes)
* **NAT Process:**
 1. Internal device sends a request to the router using a private IP.
 2. Router translates the private IP and port to a public IP and port.
 3. Router forwards the request to the internet.
 4. Response returns to the router; the router translates the public IP/port back to the internal private IP and forwards it to the original device.
* **APIPA Process:**
 1. Device attempts to contact a DHCP server (DORA process).
 2. If the DHCP server is unreachable or fails to provide an address, the device automatically assigns itself an address from the 169.254.0.0/16 range.

## 📊 Comparisons & Key Differences

| Address Type| Range| Routable?| Purpose|
| :---| :---| :---| :---|
| **Private Class A**| 10.0.0.0 – 10.255.255.255| No| Large internal networks|
| **Private Class B**| 172.16.0.0 – 172.31.255.255| No| Medium internal networks|
| **Private Class C**| 192.168.0.0 – 192.168.255.255| No| Small/Home networks|
| **Loopback**| 127.0.0.0/8| No| Internal testing|
| **APIPA**| 169.254.0.0/16| No| DHCP failure fallback|

## ⚠️ Exam Tips & Important Notes
* **Memorize RFC 1918 Ranges:** CompTIA frequently tests the distinction between private and public ranges.
* **The 172 Trap:** Students often mistake any 172.x.x.x address for a private IP. Remember: **Only 172.16.x.x through 172.31.x.x are private.** 172.12.x.x is a public IP.
* **Troubleshooting:** If you see a 169.254.x.x address, the device has failed to communicate with a DHCP server. Check the DHCP server status first.
* **Loopback:** While 127.0.0.1 is the standard, the entire 127.0.0.0/8 range is reserved for loopback.

## ❓ Questions to Review
1. What is the specific range for Class B private IP addresses?
2. Which protocol is responsible for the DORA process?
3. If a computer has an IP address of 172.20.5.1, is it a public or private address?
4. What is the primary purpose of NAT?
5. What should a technician investigate if a workstation is assigned an IP address starting with 169.254?
6. Which organization is responsible for global IP address management?

## 🔗 Related Topics
* [[IPv4 Addressing]]
* [[DHCP]]
* [[NAT]]
* [[Subnetting]]
