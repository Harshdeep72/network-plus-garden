# 002 Copper Media

**Module/Section:** 05 Media and Connectors
**Tags:** #copper-media #cabling #ethernet #🌱seedling

---

![[002 Copper Media.mp4]]

## 📖 Core Concept
Copper media remains the foundational infrastructure for modern networks due to its cost-effectiveness, ease of installation, and robustness. The primary standard governing these wired networks is the **IEEE 802.3 Standard**, which defines the physical layer and the Data Link layer's Media Access Control (MAC) for Ethernet.

## 🛠️ Hardware & Devices
* **Twisted Pair Cables:** Wiring where two conductors of a single circuit are twisted to cancel out Electromagnetic Interference (EMI) and crosstalk.
* **Coaxial Cables (Coax):** A cable consisting of a single copper conductor at the core, an insulating layer, and a conductive shield. Used for broadband and high-speed data.
* **Direct Attach Copper (DAC):** Fixed-assembly copper cabling with pre-attached connectors, used for short-range high-speed connections (switches, routers, servers).
* **Twinaxial Cables (Twinax):** A specialized form of cabling consisting of two separate insulated copper conductors running parallel within a single shield. Optimized for short-range, high-speed differential signaling.

## 📜 Protocols & Standards
* **IEEE 802.3:** A collection of standards defining the physical and data link layers for wired Ethernet.
* **TIA/EIA:** Telecommunications Industry Association/Electronic Industries Alliance (Note: CAT 7 is not officially recognized by TIA/EIA).
* **National Fire Protection Association (NFPA) / National Electrical Code (NEC):** Organizations that set fire safety standards for cabling (specifically plenum ratings).

## 🔑 Key Terminology
* **EMI (Electromagnetic Interference):** External noise that disrupts signal quality.
* **Crosstalk:** Interference caused by signals from neighboring cables.
* **UTP (Unshielded Twisted Pair):** Twisted pair cable without additional shielding; lightweight, flexible, and cost-effective.
* **STP (Shielded Twisted Pair):** Twisted pair cable with insulation (copper tape, polymer, or braided mesh) to protect against EMI.
* **Plenum Cable:** Fire-retardant cable (PVC or FEP) designed for use in air-handling spaces (plenum spaces) to minimize smoke and flame spread.
* **Non-Plenum Cable:** Standard cable used in areas without environmental air return (e.g., inside walls/conduit).
* **PVC (Poly Vinyl Chloride):** A material used in cable jackets.
* **FEP (Fluorinated Ethylene Propylene):** A fire-retardant material used in plenum-rated cable jackets.
* **SFP+ (Small Form-factor Pluggable Plus):** A compact, hot-pluggable transceiver used for network communications.
* **QSFP (Quad Small Form-factor Pluggable):** A compact, hot-pluggable transceiver used for high-speed data communications.

## 🔄 How It Works (Processes)
* **Twisting:** By twisting wire pairs, the consistency of data transmission increases, and susceptibility to noise/interference decreases.
* **Plenum vs. Non-Plenum:** Plenum spaces (HVAC return air paths) have high oxygen levels; therefore, cables must be fire-retardant to prevent the rapid spread of fire and toxic smoke. Non-plenum cables are cheaper but produce toxic fumes and are not fire-resistant.
* **DAC Operation:** DAC cables are "fixed assembly," meaning the transceiver and cable are a single unit. They are categorized as **Active** (up to 15m at 100Gbps) or **Passive** (up to 7m at 100Gbps).

## 📊 Comparisons & Key Differences

| Cable Category| Max Speed| Max Distance| Frequency|
| :---| :---| :---| :---|
| **CAT 5**| 100 Mbps| 100m| 100 MHz|
| **CAT 5e**| 1 Gbps| 100m| 100 MHz|
| **CAT 6**| 1 Gbps (10 Gbps @ 55m)| 100m| 250 MHz|
| **CAT 6a**| 10 Gbps| 100m| 500 MHz|
| **CAT 7**| 10 Gbps| 100m| 600 MHz|
| **CAT 8**| 25-40 Gbps| 30m| 2000 MHz (2 GHz)|

* **RG-6 vs. RG-59:** RG-6 has a thicker copper core, making it superior for high-bandwidth/high-frequency applications (cable modems). RG-59 is thinner and largely obsolete, limited to analog video/CCTV.
* **UTP vs. STP:** UTP is cheaper and easier to install but susceptible to EMI. STP is more expensive and bulkier but provides superior signal integrity in high-EMI environments.

## ⚠️ Exam Tips & Important Notes
* **The 100m Rule:** Most copper Ethernet cables (CAT 5 through CAT 6a/7) are limited to 100 meters.
* **CAT 6 Exception:** CAT 6 can reach 10 Gbps, but only if the cable is 55 meters or shorter.
* **CAT 8 Limitation:** CAT 8 is strictly for short-distance, high-speed data center use (30m max).
* **CAT 7 Status:** Remember that CAT 7 is not recognized by the TIA/EIA standards body.
* **Troubleshooting:** If you are in a high-EMI environment (e.g., near heavy machinery), always recommend STP over UTP.

## ❓ Questions to Review
1. Which cable category would you choose if you need 10 Gbps speeds over a full 100-meter run?
2. Why is a plenum-rated cable required in HVAC air return spaces?
3. What is the primary physical difference between a standard coaxial cable and a twinaxial cable?
4. If a technician is experiencing high levels of EMI in a server room, what type of twisted pair cable should they use?
5. What is the maximum distance for a CAT 8 cable, and what is its primary use case?

## 🔗 Related Topics
* [[Ethernet Standards]]
* [[Fiber Optic Media]]
* [[Network Topologies]]
* [[Physical Layer]]
