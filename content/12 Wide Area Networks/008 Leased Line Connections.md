# 008 Leased Line Connections

**Module/Section:** 12 Wide Area Networks
**Tags:** #WAN #leased-line #connectivity #🌱seedling

---

![[008 Leased Line Connections.mp4]]

## 📖 Core Concept
Leased lines are dedicated, private, point-to-point connections provided by a telecommunications carrier. Unlike standard broadband (which is shared among many users), a leased line provides **fixed bandwidth** exclusively to a single subscriber.

* **Exclusivity:** The connection is reserved solely for the subscriber, eliminating congestion from other users.
* **Symmetry:** Unlike residential connections that prioritize download speeds, leased lines offer identical upload and download speeds.
* **Scalability:** Bandwidth can be adjusted at the service provider level, ranging from 2 Mbps up to 10 Gbps or more.
* **Strategic Value:** They are considered a critical operational backbone for large organizations, banks, financial institutions, and healthcare providers that require high uptime and security.

## 🛠️ Hardware & Devices
* **Physical Media:** Connections are typically established using either **Copper** or **Fiber Optic** cabling.
* **Infrastructure:** The connection links the subscriber's premises directly to the telecommunications provider's facility.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Leased Line:** A private, dedicated, bidirectional communication channel between two or more locations provided by a telecommunications carrier.
* **Fixed Bandwidth:** A set amount of data capacity that is guaranteed to be available at all times, regardless of network traffic.
* **Symmetric Connection:** A network connection where the upload speed is equal to the download speed.
* **Asymmetric Connection:** A network connection (common in residential broadband) where the download speed is significantly higher than the upload speed.
* **SLA (Service Level Agreement):** A contract between a service provider and a customer that defines the level of service expected, including guaranteed uptime (often >99.9%) and recovery time objectives.
* **WAN (Wide Area Network):** A telecommunications network that extends over a large geographical distance, often used to connect branch offices.

## 🔄 How It Works (Processes)
1. **Provisioning:** The ISP establishes a physical path (copper or fiber) between the customer's site and the provider's facility.
2. **Dedication:** The line is logically and physically isolated from the public internet pathways, ensuring no shared congestion.
3. **Traffic Flow:** Data travels directly between the two endpoints with fewer hops (routers/switches) than standard internet traffic, reducing latency and security exposure.
4. **Management:** Bandwidth adjustments are performed at the provider's end, allowing for seamless scaling without needing to install new physical infrastructure.

## 📊 Comparisons & Key Differences

| Feature| Leased Line| Broadband (DSL/Cable)|
| :---| :---| :---|
| **Bandwidth**| Dedicated / Fixed| Shared / Variable|
| **Symmetry**| Symmetric (Up = Down)| Asymmetric (Down > Up)|
| **Reliability**| Very High (SLA backed)| Best Effort|
| **Security**| High (Private path)| Lower (Shared path)|
| **Cost**| High (Thousands/mo)| Low|

## ⚠️ Exam Tips & Important Notes
* **Analogy:** Think of a leased line as a "private road" built specifically for your vehicle, allowing you to travel at maximum speed without traffic jams caused by other drivers.
* **Cost Factors:** The price of a leased line is determined by:
 * Required bandwidth.
 * Distance between the customer premise and the provider facility.
 * Contract length (longer contracts generally result in lower monthly costs).
* **Use Case:** If a question asks about a solution for a business that requires high-speed, consistent, and secure data transfer between global offices, the answer is likely a **Leased Line**.
* **Symmetry Importance:** Remember that businesses (especially those creating video content or hosting services) often require high upload speeds, making symmetric leased lines a necessity rather than a luxury.

## ❓ Questions to Review
1. What is the primary difference between a leased line and a standard broadband connection?
2. Why is a symmetric connection critical for certain business operations?
3. What role does an SLA play in the context of a leased line?
4. How does a leased line improve network security compared to public internet connections?
5. What are the three main factors that influence the monthly cost of a leased line?
6. Can a leased line be used to connect branch offices in different countries?

## 🔗 Related Topics
* [[Wide Area Network (WAN)]]
* [[Service Level Agreement (SLA)]]
* [[Bandwidth]]
* [[Fiber Optic vs Copper]]
