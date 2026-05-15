# 004 Network Geography

**Module/Section:** 02 - Network Fundamentals
**Tags:** #network-geography #PAN #LAN #CAN #MAN #WAN #bluetooth #USB #ethernet #wifi #IEEE #802.3 #802.11 #🌱seedling

---

![[004 Network Geography.mp4]]

## 📖 Core Concept
Network geography categorizes networks based on their physical size and the geographic area they cover. This classification helps in understanding the scope, technologies, and typical applications of different network types, ranging from very small personal connections to global networks. The instructor emphasizes remembering the relative distances and the stacking order of these network types (smallest to largest) for the CompTIA Network+ exam.

## 🛠️ Hardware & Devices
* **Cell Phone**: Used as an example for Bluetooth connections in a PAN.
* **Car Stereo/Radio**: Connects wirelessly to a cell phone via Bluetooth, forming a PAN.
* **USB Hard Drive**: Connects to a laptop via USB, forming a PAN.
* **Laptop**: Connects to USB devices, forming a PAN; part of a LAN in a home or office.
* **Webcam**: Connects via USB or Firewire, forming a PAN.
* **Printers**: Devices within a home or office LAN.
* **Desktops**: Devices within a home or office LAN.
* **Cat 5 Cabling**: A type of twisted-pair cable used for Ethernet, with a distance limitation of approximately 100 meters per segment.
* **Fiber Optic Cabling**: Can support longer distances than Cat 5 cabling for network connections.
* **File Server**: A server used to store and share files, accessible over a WAN (e.g., the internet).

## 📜 Protocols & Standards
* **Bluetooth**: A wireless technology standard for building personal area networks (PANs). Operates over short distances, typically around 10 feet (3 meters).
* **USB (Universal Serial Bus)**: A serial connection standard used for connecting peripheral devices to computers. Can form a wired personal area network (PAN).
* **Firewire (IEEE 1394)**: An older serial bus standard, similar to USB, used for high-speed data transfer, often with video cameras. Can form a wired personal area network (PAN).
* **Ethernet (IEEE 802.3)**: A family of wired computer networking technologies commonly used in local area networks (LANs).
 * **IEEE 802.3**: The standard defining Ethernet.
* **Wi-Fi (IEEE 802.11)**: A family of wireless networking protocols based on the IEEE 802.11 standards, commonly used for wireless local area networks (WLANs).
 * **IEEE 802.11**: The standard defining Wi-Fi.
* **Leased Lines**: Dedicated, private telecommunication circuits used to connect two or more locations over a wide area network (WAN). (Mentioned, but details deferred to later lessons).
* **Virtual Private Networks (VPNs)**: Secure, encrypted connections over a less secure network (like the internet), used to create private tunnels for WAN connectivity. (Mentioned, but details deferred to later lessons).

## 🔑 Key Terminology
* **Network Geography**: The classification of networks based on their physical size and the geographic area they cover.
* **Personal Area Network (PAN)**:
 * **Definition**: The smallest type of wired or wireless network, designed for connecting personal devices around an individual.
 * **Distance**: Usually covers about 10 feet (3 meters) or less.
 * **Examples**: Bluetooth connections (phone to car stereo), USB connections (hard drive to laptop), Firewire connections (webcam to computer).
* **Local Area Network (LAN)**:
 * **Definition**: A network that connects components within a limited geographical distance, typically within a single building or a small, confined area.
 * **Distance**: Generally up to about 100 meters (300 feet) for a single segment using Cat 5 cabling. Can extend further with fiber optics.
 * **Examples**: Internal wired or wireless networks in an office building, school, classroom, or a home network connecting devices like computers, printers, and laptops.
* **Campus Area Network (CAN)**:
 * **Definition**: A network that connects multiple LANs across several buildings within a specific geographical area, such as a college campus, business park, or industrial park. It is building-centric.
 * **Distance**: Can cover several miles.
 * **Examples**: University campuses, business parks, military bases. Each building has its own LAN, and these LANs are interconnected to form the CAN.
* **Metropolitan Area Network (MAN)**:
 * **Definition**: A network that connects locations scattered across an entire city. It is larger than a CAN but smaller than a WAN.
 * **Distance**: Can cover an area up to about 25 miles or more, depending on the city's size.
 * **Examples**: Multiple campuses of a community college spread across a city, city departments (e.g., Department of Motor Vehicles, police department) with various locations connected together.
* **Wide Area Network (WAN)**:
 * **Definition**: A network that connects geographically disparate internal networks over large distances, spanning across states, countries, or even the world.
 * **Connectivity**: Often uses technologies like leased lines or virtual private networks (VPNs) tunneled over the internet.
 * **Examples**: The Internet (the largest WAN), a company connecting offices in New York and California, a government network connecting offices across all 50 states.
* **Internet**: The largest wide area network available, connecting devices and networks globally.
* **Intranet**: A private network accessible only to an organization's staff, often using WAN technologies to connect geographically separated internal LANs.

## 🔄 How It Works (Processes)
* **Network Scaling**: Networks are categorized by starting from the smallest (PAN) and progressively moving to larger geographic areas (LAN, CAN, MAN, WAN).
 1. **PAN**: Connects devices immediately around an individual (e.g., phone to car stereo via Bluetooth).
 2. **LAN**: Connects devices within a single, limited area like a home or office floor (e.g., computers and printers in a house).
 3. **CAN**: Connects multiple LANs across several buildings in a campus-like setting (e.g., different buildings at a university).
 4. **MAN**: Connects multiple CANs or LANs across an entire city (e.g., multiple college campuses in a city).
 5. **WAN**: Connects geographically separated networks across states, countries, or globally (e.g., the internet, corporate offices across a country).

## 📊 Comparisons & Key Differences
| Network Type| Geographic Scope| Typical Distance / Area| Key Characteristics
The instructor mentions that they will talk about distance limitations when they get to the [[Ethernet]] fundamental section.
The instructor mentions that they will talk specifically about [[IEEE 802.3]] and [[IEEE 802.11]] standards in a future lesson as they dig deeper into the protocols and standards.
The instructor mentions that they will go into both [[Leased Lines]] and [[Virtual Private Networks (VPNs)]] later on in the course in a lot of depth.

## ⚠️ Exam Tips & Important Notes
* **Memorize Network Types and Distances**: The instructor emphasizes remembering the distance involved for each network type (PAN, LAN, CAN, MAN, WAN) from smallest to largest. This is crucial for answering exam questions.
* **Standard Acronyms**: Anytime a standard like [[IEEE 802.11]] or [[IEEE 802.3]] is mentioned, write it down with a word next to it that reminds you what that standard is used for (e.g., "802.11 Wi-Fi", "802.3 Ethernet"). This creates a "cheat sheet" for studying before the exam.
* **Stacking Order**: Understand how these networks "stack up" in terms of size and scope (PAN -> LAN -> CAN -> MAN -> WAN).

## ❓ Questions to Review
1. What is the approximate maximum distance covered by a Personal Area Network (PAN)?
2. Which IEEE standard is associated with Ethernet, and which with Wi-Fi?
3. Provide an example of a Campus Area Network (CAN) and explain how it differs from a Local Area Network (LAN).
4. A city's police department has multiple precinct offices spread across the entire city, all connected to a single network. What type of network does this describe?
5. What is the largest type of network discussed, and what is a common real-world example of it?
6. If you connect a USB hard drive to your laptop, what type of network is formed?
7. What is the typical distance limitation for a single segment of a LAN using Cat 5 cabling?
8. How does a Metropolitan Area Network (MAN) compare in size to a Campus Area Network (CAN) and a Wide Area Network (WAN)?

## 🔗 Related Topics
* [[Ethernet]]
* [[Wi-Fi]]
* [[IEEE 802.3]]
* [[IEEE 802.11]]
* [[Leased Lines]]
* [[Virtual Private Networks (VPNs)]]
* [[Network Topologies]] (Implied by connections)
* [[Network Devices]] (Implied by connections)
