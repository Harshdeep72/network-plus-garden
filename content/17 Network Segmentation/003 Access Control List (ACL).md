# 003 Access Control List (ACL)

**Module/Section:** 17 Network Segmentation
**Tags:** #security #acl #firewall #cisco #ipv6 #🌱seedling

---

![[003 Access Control List (ACL).mp4]]

## 📖 Core Concept
An **Access Control List (ACL)** is a set of permissions associated with a network resource or system. It acts as a filter to control traffic flow based on specific criteria such as IP addresses, ports, or applications.

* **Processing Logic:** ACLs are processed sequentially from **top to bottom**.
* **Rule Ordering:** The most specific rules must be placed at the top, while the most generic rules must be placed at the bottom.
* **Device Agnostic:** While examples may use Cisco syntax, the concept of ACLs applies to any packet-filtering device, including routers, Layer 3 switches, and firewalls.
* **Security Strategy:** Use ACLs to block unauthorized traffic (e.g., spoofed internal IPs from the internet, local-only protocols like SMB, or unmanaged IPv6 traffic).

## 🛠️ Hardware & Devices
* **Router:** A Layer 3 device that can apply ACLs to filter traffic between networks.
* **Layer 3 Switch:** A switch capable of routing and applying ACLs.
* **Firewall:** A security device used to filter traffic at the network perimeter or between segments.

## 📜 Protocols & Standards
* **TCP (Transmission Control Protocol):** Connection-oriented protocol often filtered by ACLs.
* **UDP (User Datagram Protocol):** Connectionless protocol often filtered by ACLs.
* **ICMP (Internet Control Message Protocol):** Often used for echo requests/replies; should be restricted at the perimeter.
* **DHCP (Dynamic Host Configuration Protocol):** Should be blocked at the network border.
* **OSPF (Open Shortest Path First):** A routing protocol that should be blocked at the network border.
* **SMB (Server Message Block):** Used for Windows file sharing; should be restricted to internal networks only.
* **DNS (Domain Name System):** Referred to as `domain` in Cisco syntax; operates on port **53** (TCP/UDP).
* **HTTP/HTTPS:** Web traffic; `www` refers to port **80**; HTTPS typically uses port **443**.
* **IPv6:** A protocol that requires explicit configuration; if not managed, it can provide an unfiltered backdoor into the network.

## 🔑 Key Terminology
* **Access Control List (ACL):** A list of rules applied to a device to permit or deny traffic based on criteria.
* **Wildcard Mask:** A bitmask used in ACLs to determine which IP address bits to check. In Cisco syntax, a `0` means "match this bit" and a `255` means "ignore this bit" (the inverse of a subnet mask).
* **Implicit Deny:** A default rule at the end of an ACL that blocks any traffic not explicitly permitted by previous rules.
* **Explicit Allow:** A rule that specifically permits a defined type of traffic.
* **Explicit Deny:** A rule that specifically blocks a defined type of traffic.
* **Role-Based Access:** A security model where administrative privileges are assigned based on job function (e.g., firewall admin vs. switch technician).
* **DMZ (Demilitarized Zone):** A physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted network (usually the internet).
* **Dual-Stack:** An implementation where a host runs both IPv4 and IPv6 simultaneously.

## 🔄 How It Works (Processes)
1. **Packet Arrival:** A packet hits the interface of a filtering device.
2. **Sequential Evaluation:** The device checks the packet against the first rule in the ACL.
3. **Match/Action:**
 * If the packet matches the criteria, the device performs the action (**permit** or **deny**).
 * If the packet does not match, the device moves to the next line.
4. **Implicit Deny:** If the packet reaches the end of the list without matching any rule, the **Implicit Deny** rule drops the packet.

## 📊 Comparisons & Key Differences

| Feature| Description|
| :---| :---|
| **Explicit Allow**| Specifically permits traffic; listed in the ACL.|
| **Explicit Deny**| Specifically blocks traffic; listed in the ACL.|
| **Implicit Deny**| The "catch-all" at the end of an ACL that blocks everything not explicitly allowed.|
| **Subnet Mask**| Standard mask (e.g., 255.255.255.0).|
| **Wildcard Mask**| Inverse mask used in Cisco ACLs (e.g., 0.0.0.255).|

## ⚠️ Exam Tips & Important Notes
* **Ordering Matters:** Always put specific rules (e.g., "Block John Smith") before generic rules (e.g., "Block all men").
* **IPv6 Warning:** Many devices have IPv6 enabled by default. If your organization is IPv4-only, you must explicitly block IPv6 to prevent security gaps.
* **Cisco Syntax:** Remember that `0.0.0.255` is equivalent to a `/24` subnet mask.
* **Device Agnostic:** CompTIA does not require you to be a Cisco expert, but you must be able to interpret the logic of an ACL regardless of the vendor.
* **Security Best Practice:** Never allow internal protocols (SMB, DHCP, OSPF) to traverse the internet.

## ❓ Questions to Review
1. Why must specific rules be placed at the top of an ACL?
2. What is the purpose of an "Implicit Deny" statement at the end of an ACL?
3. If a Cisco ACL uses a wildcard mask of `0.0.0.0`, what does that signify?
4. Why is it dangerous to leave IPv6 enabled on a network that is primarily using IPv4?
5. How does Role-Based Access Control (RBAC) improve network security?

## 🔗 Related Topics
* [[Firewalls]]
* [[Network Segmentation]]
* [[IPv4 vs IPv6]]
* [[Routing Protocols]]
* [[Port Security]]
