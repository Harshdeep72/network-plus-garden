# 003 Routing Tables

**Module/Section:** 10 Routing
**Tags:** #routing #layer3 #🌱seedling

---

![[003 Routing Tables.mp4]]

## 📖 Core Concept
Routers use **Routing Tables** to make forwarding decisions for packets moving between networks. While switches use MAC address tables (CAM tables) for Layer 2, routers operate at Layer 3, mapping logical IP addresses to physical interfaces or next-hop routers.

* **Routing Decision Process:** A router inspects the destination IP address of an incoming packet, consults its internal routing table to find the best match, and forwards the packet out the appropriate interface.
* **Prefix Specificity:** Routing tables prioritize the "longest prefix" (the most specific route).
 * Example: A `/24` network is more specific than a `/8` network.
 * The more octets specified (or the higher the CIDR notation), the more specific the route.
* **Routing Table Contents:**
 * **Destination Network:** The target network address.
 * **Next-Hop:** The IP address or interface of the next router to reach the destination.
 * **Interface:** The physical or logical port used to send traffic out.
 * **Cost (Metric):** A numerical value representing the "best" path, calculated based on link speed, hop count, or other factors.

## 🛠️ Hardware & Devices
* **Router:** The primary Layer 3 device responsible for path determination and packet forwarding.
* **Serial Connection:** Often represented in diagrams as a "zigzag" or "lightning bolt" line; used for WAN connections between routers.
* **Switch:** Mentioned as a Layer 2 device that uses MAC address tables; routers connect to these to reach end-user networks.

## 📜 Protocols & Standards
* **ARP (Address Resolution Protocol):** Used by the router to map Layer 3 (IP) addresses to Layer 2 (MAC) addresses within a local network.
* **CIDR (Classless Inter-Domain Routing):** The notation (e.g., `/24`, `/8`) used to define the prefix length of a network.
* **Dynamic Routing Protocols:** Protocols used to automatically exchange routing information between routers (specific protocols to be covered in future lessons).

## 🔑 Key Terminology
* **Routing Table:** An internal database maintained by a router that lists paths to various network destinations.
* **Directly Connected Route:** A route learned automatically because the network is physically cabled to the router's interface.
* **Static Route:** A route manually configured by a network administrator.
* **Default Route:** A special static route (`0.0.0.0/0`) used as a "gateway of last resort." If no specific route exists for a destination, the router sends the traffic here.
* **Dynamic Routing:** The process where routers automatically learn and update routes by communicating with neighboring routers.
* **Split Horizon:** A loop-prevention technique that prevents a router from advertising a route back out the same interface it learned it from.
* **Poison Reverse:** A loop-prevention technique where a router advertises a route back out the same interface it learned it from, but with an "infinite" or prohibitively high cost to ensure it is never used.
* **Hop:** The act of a packet passing through a router.

## 🔄 How It Works (Processes)
1. **Packet Arrival:** The router receives a packet and inspects the destination IP.
2. **Lookup:** The router searches its routing table for the longest prefix match.
3. **Forwarding:**
 * If a match is found, the packet is sent to the next hop or out the specified interface.
 * If no match is found, the router checks for a **Default Route**.
 * If no route exists, the packet is dropped.
4. **Loop Prevention:**
 * **Split Horizon:** Router A tells Router B about a network. Router B does not tell Router A about that same network.
 * **Poison Reverse:** Router B tells Router A about the network, but sets the cost to a value so high (e.g., 1000 hops) that Router A ignores it as a viable path.

## 📊 Comparisons & Key Differences

| Feature| Directly Connected| Static Route| Dynamic Route|
| :---| :---| :---| :---|
| **Configuration**| Automatic| Manual| Automatic (via protocol)|
| **Scalability**| Low| Low| High|
| **Maintenance**| None| High| Low|
| **Best For**| Local interfaces| Small networks/Default routes| Large, complex networks|

## ⚠️ Exam Tips & Important Notes
* **Longest Prefix Match:** Remember that the router always prefers the most specific route (the one with the longest prefix/highest CIDR number).
* **Default Route:** Know that `0.0.0.0/0` is the universal notation for the default route.
* **Loop Prevention:** Understand the difference between Split Horizon (don't advertise back) and Poison Reverse (advertise back with a high cost).
* **Routing Tables vs. MAC Tables:** Switches use MAC tables (Layer 2); Routers use Routing Tables (Layer 3).

## ❓ Questions to Review
1. What is the primary difference between a static route and a dynamic route?
2. If a router receives a packet for a destination not in its routing table, where does it send the packet?
3. Why is a `/24` route considered more "specific" than a `/16` route?
4. How does Split Horizon prevent routing loops?
5. What is the purpose of the "cost" or "metric" in a routing table?

## 🔗 Related Topics
* [[Routing Protocols]]
* [[Layer 2 vs Layer 3]]
* [[Subnetting]]
* [[Default Gateway]]
