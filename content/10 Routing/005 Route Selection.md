# 005 Route Selection

**Module/Section:** 10 Routing
**Tags:** #routing #administrative-distance #metrics #🌱seedling

---

![[005 Route Selection.mp4]]

## 📖 Core Concept
Route selection is the process by which a router determines the best path to forward traffic when multiple potential paths or routing protocols are available. Because routers can support multiple routing protocols simultaneously, they must have a mechanism to decide which source of information is the most "believable" or trustworthy.

* **Believability:** The hierarchy of trust a router assigns to different routing information sources.
* **Administrative Distance (AD):** An index of believability used by routers to select the best path when two or more different routing protocols provide information about the same destination.
* **The "Golf Rule":** In routing, lower numbers are always better. A lower AD indicates a more trustworthy route, and lower metrics generally indicate a more efficient path.

## 🛠️ Hardware & Devices
* **Router:** The primary networking device responsible for making path selection decisions based on routing tables, administrative distance, and metrics.

## 📜 Protocols & Standards
* **RIP (Routing Information Protocol):** An older distance-vector routing protocol. It is considered less believable than modern protocols due to its age and limitations.
* **OSPF (Open Shortest Path First):** A link-state routing protocol. It is considered more modern and more believable than RIP.
* **EIGRP (Enhanced Interior Gateway Routing Protocol):** A proprietary (Cisco) advanced distance-vector protocol. It is considered highly trustworthy and modern.
* **IS-IS (Intermediate System to Intermediate System):** A link-state routing protocol mentioned as part of the routing protocol summary.
* **BGP (Border Gateway Protocol):** An exterior gateway protocol used for routing between autonomous systems.

## 🔑 Key Terminology
* **Administrative Distance (AD):** A value (0–255) assigned to routing protocols to rank their trustworthiness. Lower values are preferred.
* **Directly Connected Route:** A route to a network physically attached to the router's interface. This is the most trusted route (AD of 0).
* **Static Route:** A route manually configured by a network administrator. It is the second most trusted route (AD of 1).
* **Metric:** A value used by a specific routing protocol to determine the "cost" or quality of a path. Examples include hop count, bandwidth, delay, and reliability.
* **Hop Count:** A metric representing the number of routers a packet must pass through to reach its destination.
* **Bandwidth:** The capacity of a link; in routing metrics, higher bandwidth is preferred (often represented as a lower "cost").
* **Delay:** The time it takes for a packet to traverse a path; lower delay is preferred.
* **Distance Vector:** A class of routing protocols that determine the best path based on distance (hops) and direction.
* **Link State:** A class of routing protocols where each router maintains a map of the entire network topology.

## 🔄 How It Works (Processes)
1. **Route Evaluation:** When a packet arrives, the router checks its routing table.
2. **AD Comparison:** If multiple protocols offer a path to the same destination, the router compares the **Administrative Distance**. The route with the lowest AD is installed in the routing table.
3. **Metric Selection:** Once the protocol is chosen, the router uses the specific **Metric** defined by that protocol (e.g., hop count for RIP, cost for OSPF) to select the specific path.
4. **Forwarding:** The router forwards the packet out the interface associated with the best path.
5. **Unreachable/Unbelievable:** If a route has an AD of 255, the router considers the route invalid or unreachable and will not use it.

## 📊 Comparisons & Key Differences

| Feature| Description|
| :---| :---|
| **Directly Connected**| AD 0 (Most trusted)|
| **Static Route**| AD 1 (Highly trusted)|
| **EIGRP**| More modern/trustworthy than OSPF|
| **OSPF**| More modern/trustworthy than RIP|
| **RIP**| Least trustworthy (oldest)|
| **Unknown/Invalid**| AD 255 (Do not use)|

* **Lower Numbers:** Better (higher trust, faster path).
* **Higher Numbers:** Worse (lower trust, slower path).

## ⚠️ Exam Tips & Important Notes
* **Do not memorize the exact AD chart:** You do not need to memorize every single numerical value for the exam, but you **must** understand the hierarchy of trust (Directly Connected > Static > Dynamic Protocols).
* **The "Golf" Analogy:** Always remember that in routing, the lower the number, the better the route.
* **Trust Hierarchy:** Remember the order: The router trusts itself first (Directly Connected), then the administrator (Static), then the most modern protocols (EIGRP), and finally older protocols (RIP).

## ❓ Questions to Review
1. If a router learns about the same network via both RIP and OSPF, which one will it choose and why?
2. What is the Administrative Distance of a directly connected route, and why is it the most trusted?
3. Why does a network administrator configure a static route, and how does it rank in terms of believability compared to dynamic protocols?
4. What does an Administrative Distance of 255 signify to a router?
5. How do metrics differ from Administrative Distance in the route selection process?

## 🔗 Related Topics
* [[Routing Tables]]
* [[Distance Vector vs Link State]]
* [[Interior vs Exterior Gateway Protocols]]
