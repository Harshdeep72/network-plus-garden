# 003 DHCP Issues

**Module/Section:** 26 Troubleshooting Network Services
**Tags:** #DHCP #troubleshooting #🌱seedling

---

![[003 DHCP Issues.mp4]]

## 📖 Core Concept
The lesson focuses on two primary issues encountered when managing [[DHCP]] (Dynamic Host Configuration Protocol) services: **Rogue DHCP Servers** and **DHCP Scope Exhaustion**.

* **DHCP Functionality:** DHCP is a client-server protocol that automatically assigns essential network configuration parameters—IP address, subnet mask, default gateway, and DNS server—to devices joining a network.
* **Rogue DHCP Servers:** Unauthorized DHCP servers operating on a network. These can be malicious (intended to intercept traffic via Man-in-the-Middle attacks) or accidental (caused by employees connecting unauthorized wireless routers/gateways).
* **DHCP Scope Exhaustion:** A state where the DHCP server has no remaining available IP addresses in its defined pool to assign to new clients. This is often caused by high numbers of transient users or excessively long lease times.

## 🛠️ Hardware & Devices
* **Wireless Router/Gateway:** Often the source of accidental rogue DHCP servers when connected to a corporate network by employees.
* **Switch:** Used to implement port security and DHCP snooping to mitigate rogue server threats.
* **Intrusion Detection System (IDS):** Used to detect and identify rogue DHCP server traffic on the network.

## 📜 Protocols & Standards
* **DHCP (Dynamic Host Configuration Protocol):** A network management protocol used to automate the assignment of IP addresses and network parameters.
* **IP (Internet Protocol):** The addressing scheme used for network communication.
* **TCP/IP:** The suite of protocols that DHCP operates within.

## 🔑 Key Terminology
* **Rogue DHCP Server**: A DHCP server on the network that is not under the control of the network administrator.
* **On-Path/Man-in-the-Middle (MitM) Attack**: A security threat where an attacker intercepts communication between two parties; in this context, a rogue DHCP server redirects traffic to malicious sites (e.g., fake banking portals).
* **DHCP Scope**: The range of IP addresses that a DHCP server is configured to lease to clients.
* **Duplicate IP Address**: A network conflict occurring when two devices are assigned the same IP address, typically resulting in connectivity failure.
* **DHCP Snooping**: A security feature on switches that filters untrusted DHCP messages and prevents rogue DHCP servers from operating.
* **Port Security**: A switch feature that limits the number of MAC addresses allowed on a port or restricts access to specific authorized devices.
* **DHCP Scope Exhaustion**: The condition where all available IP addresses in a defined DHCP scope have been leased out.
* **Lease Time**: The duration for which a client is assigned an IP address by the DHCP server. Default is often 86,400 seconds (24 hours).
* **Network Access Control (NAC)**: A solution that restricts network access to authorized devices, helping to reduce the number of devices requesting IP addresses.

## 🔄 How It Works (Processes)
* **Mitigating Rogue DHCP Servers:**
 1. **DHCP Snooping:** Configure switches to identify and block traffic from unauthorized DHCP servers.
 2. **Port Security:** Restrict switch ports to known MAC addresses to prevent unauthorized devices from connecting.
 3. **IDS/Monitoring:** Use an Intrusion Detection System to flag rogue DHCP activity for manual removal.
* **Resolving DHCP Scope Exhaustion:**
 1. **Adjust Lease Times:** Shorten lease times (e.g., from 7 days to 24 hours) to reclaim IP addresses from transient users more quickly.
 2. **Increase Scope Size:** Change the subnet mask (e.g., moving from a `/24` to a `/22`) to provide a larger pool of available IP addresses.
 3. **NAC/Port Security:** Limit the number of devices allowed on the network to reduce the demand for IP addresses.

## 📊 Comparisons & Key Differences
| Feature| Small Scope (/24)| Large Scope (/22)|
| :---| :---| :---|
| **Available IPs**| 254| 1,022|
| **Use Case**| Small/Static environments| High-density/Transient environments|
| **Risk**| High risk of exhaustion| Lower risk of exhaustion|

## ⚠️ Exam Tips & Important Notes
* **Lease Time Trade-off:** Longer lease times make log correlation easier for security analysts but increase the risk of scope exhaustion in high-turnover environments.
* **Rogue Server Symptoms:** If a rogue server uses the *same* scope as the legitimate server, expect duplicate IP address errors and intermittent connectivity. If it uses a *different* scope, connectivity might work, but traffic will be routed through the rogue gateway.
* **Math Check:** Remember that a `/24` network provides 254 usable addresses (256 total minus 1 for gateway and 1 for broadcast). A `/22` provides 1,022 usable addresses.

## ❓ Questions to Review
1. What is the primary difference between a malicious rogue DHCP server and an accidental one?
2. How does DHCP snooping protect a network?
3. Why would a network administrator choose to decrease the DHCP lease time?
4. If you have a `/24` network and 300 users, what is the most efficient way to resolve the resulting scope exhaustion?
5. What security feature can be used to prevent unauthorized devices from connecting to a switch port to act as a rogue DHCP server?

## 🔗 Related Topics
* [[DHCP]]
* [[Subnetting]]
* [[Port Security]]
* [[Network Access Control (NAC)]]
* [[Intrusion Detection System (IDS)]]
