# 005 Switching and Routing Loops

**Module/Section:** 26 Troubleshooting Network Services
**Tags:** #switching #routing #troubleshooting #STP #layer2 #layer3 #🌱seedling

---

![[005 Switching and Routing Loops.mp4]]

## 📖 Core Concept
Network loops occur when there is more than one path between a source and a destination device. While modern networks require redundant physical connections for fault tolerance and load balancing, these connections create the potential for loops. Loops are categorized by the OSI layer at which they occur:

* **Switching Loops (Layer 2):** Occur when broadcast packets are sent and repeated back through another switch port, leading to "flooding." This causes a **Broadcast Storm**, which can quickly saturate network bandwidth and crash devices.
* **Routing Loops (Layer 3):** Occur due to logical errors in routing tables or misconfigured routing protocols. Data packets travel in a circle between routers indefinitely because of incorrect route entries. Unlike switching loops, these are not caused by physical circular connections, but by logical circular paths.

## 🛠️ Hardware & Devices
* **Switches:** Layer 2 devices that forward traffic based on MAC addresses. They are susceptible to switching loops.
* **Routers:** Layer 3 devices that forward traffic based on IP addresses. They are susceptible to routing loops if routing tables are misconfigured.

## 📜 Protocols & Standards
* **STP (Spanning Tree Protocol):** A Layer 2 protocol used to prevent switching loops by identifying redundant paths and blocking specific ports to ensure only one active path exists between any two nodes.
* **RIP (Routing Information Protocol):** A distance-vector routing protocol that uses hold-down timers to prevent routing loops.
* **OSPF (Open Shortest Path First):** Mentioned as a dynamic routing protocol.
* **BGP (Border Gateway Protocol):** Mentioned as a dynamic routing protocol.
* **EIGRP (Enhanced Interior Gateway Routing Protocol):** Mentioned as a dynamic routing protocol.

## 🔑 Key Terminology
* **Switching Loop (Bridging Loop):** A condition where multiple paths between switches cause broadcast frames to circulate indefinitely.
* **Broadcast Storm:** The result of a switching loop where broadcast traffic multiplies exponentially, consuming all available network bandwidth.
* **Root Port:** In STP, the port on a non-root switch that has the best path to the root bridge.
* **Designated Port:** In STP, a port that is allowed to forward traffic toward the root bridge.
* **Blocking State:** An STP port state where the port does not forward frames to prevent loops.
* **Routing Loop:** A condition where a packet is caught in a circular path between routers due to incorrect routing table entries.
* **Time To Live (TTL):** A field in an IP packet header that decrements by 1 at each router hop. If it reaches 0, the packet is dropped, preventing infinite routing loops.
* **Split-Horizon:** A method to prevent routing loops by ensuring a router does not advertise a route back out of the same interface from which it learned that route.
* **Route Poisoning:** A mechanism where a router, upon detecting a failed route, sets the metric of that route to "infinity" (unreachable) to inform other routers of the failure.
* **Hold-down Timer:** A period during which a router ignores any new information about a route that has recently changed, preventing the propagation of potentially incorrect routing information.

## 🔄 How It Works (Processes)
* **STP Operation:** Switches communicate to elect a Root Bridge. Ports are assigned roles (Root, Designated, or Blocking). If a loop is detected, STP places redundant ports into a "Blocking" state.
* **TTL Mechanism:** When a packet enters a router, the router decrements the TTL value. If the value hits 0, the router discards the packet, effectively killing a routing loop.
* **Split-Horizon Configuration:** Prevents a router from sending routing updates back to the source it learned the route from. (Command: `ip split-horizon`).
* **Route Poisoning:** When a link fails, the router immediately advertises the route with an infinite metric, forcing other routers to remove the route from their tables.
* **Hold-down Timer (RIP):** When a route goes down, the router waits 180 seconds (default) before accepting new information about that route to ensure the network has stabilized.

## 📊 Comparisons & Key Differences

| Feature| Switching Loop| Routing Loop|
| :---| :---| :---|
| **OSI Layer**| Layer 2 (Data Link)| Layer 3 (Network)|
| **Primary Cause**| Physical circular connections| Logical routing table errors|
| **Prevention**| Spanning Tree Protocol (STP)| TTL, Split-Horizon, Poisoning, Hold-down timers|
| **Result**| Broadcast Storm| Packet circularity/TTL expiration|

## ⚠️ Exam Tips & Important Notes
* **STP Command:** You do not need to know how to *configure* STP for the Network+ exam, but you should recognize the `show spanning tree` command and understand that it is used to prevent switching loops.
* **Static Route Danger:** Static routes are highly trusted (Metric = 1). They are more trusted than routes learned via dynamic protocols (OSPF, RIP, etc.). Be extremely careful when adding static routes, as they are the most common cause of manual routing loops.
* **Directly Connected Routes:** These are the only routes more trusted by a router than a static route.
* **Troubleshooting:** If you suspect a switching loop, escalate to a network administrator; do not attempt to reconfigure STP unless authorized.

## ❓ Questions to Review
1. What is the primary purpose of the Spanning Tree Protocol (STP)?
2. What happens to an IP packet when its TTL value reaches zero?
3. Why are static routes considered dangerous if configured incorrectly?
4. How does split-horizon prevent routing loops?
5. What is the default hold-down timer for RIP?
6. What is the difference between a switching loop and a routing loop in terms of the OSI model?

## 🔗 Related Topics
* [[VLANs]]
* [[Routing Protocols]]
* [[OSI Model]]
* [[Static vs Dynamic Routing]]
