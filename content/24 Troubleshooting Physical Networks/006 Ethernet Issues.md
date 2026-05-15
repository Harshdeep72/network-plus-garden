# 006 Ethernet Issues

**Module/Section:** 24 Troubleshooting Physical Networks
**Tags:** #troubleshooting #ethernet #physical-layer #networking-hardware #🌱seedling

---

![[006 Ethernet Issues.mp4]]

## 📖 Core Concept
The core concept of this lesson is the identification and resolution of physical layer issues in Ethernet networks. Troubleshooting focuses on two primary areas: interpreting physical LED status indicators on network hardware and resolving configuration mismatches, specifically duplexing issues. Understanding these indicators allows a technician to quickly isolate whether a problem lies with the physical cabling, the network interface card (NIC), or the configuration settings of the connected devices.

## 🛠️ Hardware & Devices
* **Network Interface Card (NIC):** The hardware component in a workstation or server that connects the device to the network. It typically features two LED status lights on the back port.
* **Network Switch:** The central connectivity device that connects multiple devices. Like NICs, switches feature LED status indicators for every individual Ethernet port to assist in monitoring link status and activity.
* **Upstream Device:** The device (usually a switch) to which a NIC is connected.

## 📜 Protocols & Standards
* **Ethernet:** The standard technology for wired local area networks (LANs).
* **Auto-Negotiation:** A signaling process that allows two connected devices to automatically choose common transmission parameters, such as speed and duplex mode.

## 🔑 Key Terminology
* **Activity Light:** An LED indicator on a NIC or switch port that displays the status of the data link.
 * **Off:** No link or connection established.
 * **Solid Orange:** A valid link/connection is established with the upstream device, but no data is currently transferring.
 * **Blinking Orange:** A valid link is established, and data activity is occurring.
* **Link Speed Light:** An LED indicator that displays the current transmission speed of the connection.
 * **Green:** 1 Gbps (Gigabit per second) connection.
 * **Orange:** 100 Mbps (Megabit per second) connection.
 * **Off:** 10 Mbps connection.
* **Duplex Mismatch:** A configuration error where two connected devices have different duplex settings (e.g., one is set to full-duplex while the other is set to half-duplex).
* **Full-Duplex:** A communication mode where data can be sent and received simultaneously. This is the standard for switch-based networks.
* **Half-Duplex:** A communication mode where data can only be sent or received in one direction at a time.
* **Collision Domain:** A network segment where data packets can collide with one another. Each switch port creates its own individual collision domain.
* **Runt Packets:** Ethernet frames that are smaller than the minimum allowed size (64 bytes). These are often a symptom of a duplex mismatch.
* **Jitter:** The variation in the delay of received packets.

## 🔄 How It Works (Processes)
* **Troubleshooting via LEDs:**
 1. Check the **Activity Light**: If off, verify physical cabling. If orange (solid/blinking), the physical layer is functional.
 2. Check the **Link Speed Light**: Use the color (Green/Orange/Off) to verify if the connection is operating at the expected speed (1Gbps/100Mbps/10Mbps).
* **Resolving Duplex Mismatches:**
 1. **Prevention:** Ensure both ends of the connection are set to "Auto-Negotiate."
 2. **Manual Configuration:** If auto-negotiation fails, manually set both devices to the same duplex mode (preferably Full-Duplex for switch environments).

## 📊 Comparisons & Key Differences
| Feature| Full-Duplex| Half-Duplex|
| :---| :---| :---|
| **Data Flow**| Simultaneous (Send/Receive)| One-way at a time|
| **Switch Usage**| Standard for switch ports| Generally avoided in modern switches|
| **Collision Domain**| Each port is its own domain| N/A (shared medium)|

## ⚠️ Exam Tips & Important Notes
* **Duplex Mismatch Symptoms:** Be aware that a duplex mismatch is characterized by high packet loss and high receive error rates, specifically including **runt packets**.
* **Distinguishing Mismatch vs. Congestion:** Unlike network congestion, a duplex mismatch will show high error rates *without* the high levels of jitter typically associated with congestion.
* **Best Practice:** Always prefer "Auto-Negotiate" unless there is a specific reason to manually configure the speed and duplex settings.
* **Switch Ports:** Remember that every switch port is its own collision domain, which is why full-duplex is the preferred configuration.

## ❓ Questions to Review
1. What does a blinking orange activity light on a NIC indicate?
2. If your NIC link speed light is green, what is the current connection speed?
3. What are the primary symptoms of a duplex mismatch?
4. Why is it recommended to use full-duplex on switch ports?
5. What is a "runt packet" and why does it occur during a duplex mismatch?

## 🔗 Related Topics
* [[Network Interface Card]]
* [[Network Switches]]
* [[Ethernet Standards]]
* [[Troubleshooting Methodology]]
