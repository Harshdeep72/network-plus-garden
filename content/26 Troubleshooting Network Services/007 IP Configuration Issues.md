# 007 IP Configuration Issues

**Module/Section:** 26 Troubleshooting Network Services
**Tags:** #troubleshooting #ip-addressing #dns #subnetting #🌱seedling

---

![[007 IP Configuration Issues.mp4]]

## 📖 Core Concept
To communicate properly on a network, every client requires four essential pieces of information. If any of these are configured incorrectly, the client will experience connectivity issues:
* **IP Address**: The unique identifier for the device on the network.
* **Subnet Mask**: Defines the network portion of the IP address and determines which IP addresses are local versus remote.
* **Default Gateway**: The IP address of the router used to reach networks outside of the local subnet.
* **DNS Server IP**: The address of the server responsible for resolving domain names (e.g., google.com) into IP addresses.

Troubleshooting involves verifying that the IP address and the Default Gateway reside on the same logical subnet as defined by the Subnet Mask. If a client cannot ping a known external IP (like 8.8.8.8), it indicates a routing or configuration issue.

## 🛠️ Hardware & Devices
* **Router**: The device acting as the Default Gateway. It must be reachable on the local subnet for the client to route traffic to external networks.
* **Client (OS X / Windows)**: The end-user devices being configured.

## 📜 Protocols & Standards
* **DNS (Domain Name System)**: Used for name resolution. If DNS is misconfigured, users cannot access websites via domain names, even if IP-based connectivity (like pinging 8.8.8.8) works.
* **CIDR (Classless Inter-Domain Routing)**: A method for allocating IP addresses and IP routing. Example: `/24` (255.255.255.0) vs `/25` (255.255.255.128).

## 🔑 Key Terminology
* **Static Assignment**: Manually configuring IP settings on a device rather than using a dynamic protocol like DHCP.
* **Subnet Mask**: A 32-bit number that masks an IP address and divides the IP address into network address and host address.
* **Default Gateway**: The node on a computer network that serves as the forwarding host to other networks.
* **DNS Server**: A server that maintains a directory of domain names and translates them to Internet Protocol (IP) addresses.
* **Public DNS**: DNS servers provided by third parties (e.g., Google) that are accessible over the internet.
* **Classful Addressing**: The traditional method of dividing IP addresses into classes (A, B, C). The instructor notes that modern networks often use non-classful subnet masks (like /25).

## 🔄 How It Works (Processes)
### Troubleshooting Workflow for IP Connectivity:
1. **Verify IP/Gateway/Subnet**: Check if the IP address and the Default Gateway are on the same subnet.
 * *Example*: If the IP is 192.168.1.200/24, the gateway must be 192.168.1.x.
2. **Test Connectivity**: Attempt to ping an external IP (e.g., 8.8.8.8).
 * If ping fails: Check for incorrect Default Gateway or Subnet Mask.
 * If ping succeeds but domain names fail: Check DNS server configuration.
3. **Validate Subnet Boundaries**: Calculate the network range based on the subnet mask.
 * *Example*: A /25 mask (255.255.255.128) creates two subnets: 192.168.1.0–127 and 192.168.1.128–255. An IP of 192.168.1.200 cannot communicate with a gateway at 192.168.1.1 because they are in different subnets.

## 📊 Comparisons & Key Differences

| Feature| Class C (/24)| Subnetted (/25)|
| :---| :---| :---|
| **Subnet Mask**| 255.255.255.0| 255.255.255.128|
| **Usable Hosts**| 254| 126|
| **Range**| 192.168.1.0 - 192.168.1.255| 192.168.1.0 - 192.168.1.127 (or .128 - .255)|

## ⚠️ Exam Tips & Important Notes
* **The "Ping 8.8.8.8" Rule**: If you can ping 8.8.8.8 but cannot browse the web, the issue is almost certainly **DNS**. If you cannot ping 8.8.8.8, the issue is **IP configuration/Routing**.
* **Google Public DNS**: Remember the IPs `8.8.8.8` and `8.8.4.4` as common troubleshooting tools for DNS issues.
* **Subnet Math**: Always verify that the IP and Gateway fall within the same range defined by the subnet mask. Do not assume a standard Class C mask (/24) is in use.

## ❓ Questions to Review
1. What are the four pieces of information required for a client to communicate on a network?
2. If a client has an IP of 192.168.1.200 and a subnet mask of 255.255.255.128, why would a gateway of 192.168.1.1 fail?
3. What is the difference between a /24 and a /25 subnet mask in terms of usable host addresses?
4. If a user can ping 8.8.8.8 but cannot load a website, which service is likely misconfigured?
5. What are the two public DNS server IP addresses mentioned for troubleshooting?

## 🔗 Related Topics
* [[DHCP]]
* [[Subnetting]]
* [[DNS]]
* [[Default Gateway]]
