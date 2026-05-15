# 007 Internet Protocol Security (IPSec)

**Module/Section:** 16 Logical Security
**Tags:** #security #vpn #ipsec #🌱seedling

---

![[007 Internet Protocol Security (IPSec).mp4]]

## 📖 Core Concept
**IPSec (Internet Protocol Security)** is a secure network protocol suite that provides authentication and encryption of data packets to create a secure, encrypted communication path between two computers over an IP network. It is the most widely used protocol for [[VPN]] (Virtual Private Network) operations.

IPSec provides four critical security services:
* **Confidentiality:** Achieved via data encryption.
* **Integrity:** Ensures data was not modified in transit by comparing hashes before and after transmission.
* **Authentication:** Verifies the identity of both parties.
* **Anti-Replay:** Uses sequence numbers on packets to prevent attackers from capturing and re-sending duplicate packets.

## 🛠️ Hardware & Devices
* **VPN Concentrator:** A dedicated device (or software function) used to terminate VPN tunnels, decrypt traffic, and route it to the internal network.
* **Router:** Used in site-to-site VPNs to initiate and terminate tunnels.
* **Laptop/Client Device:** Used in client-to-site VPNs to initiate connections via software.

## 📜 Protocols & Standards
* **IPSec (Internet Protocol Security):** A suite of protocols for securing IP communications.
* **IKE (Internet Key Exchange):** The protocol used to set up a security association (SA) in the IPsec protocol suite.
* **ISAKMP (Internet Security Association and Key Management Protocol):** Often used interchangeably with IKE; it provides the framework for authentication and key exchange.
* **Diffie-Hellman (DH):** A cryptographic protocol that allows two parties to establish a shared secret key over an insecure channel.

## 🔑 Key Terminology
* **Security Association (SA):** A set of parameters (algorithms, keys, lifetimes) agreed upon by two peers to secure their communication.
* **IKE Phase 1:** The process of authenticating peers and establishing a secure channel (the ISAKMP tunnel) for further negotiation.
* **IKE Phase 2:** The process of negotiating the actual IPSec tunnel parameters (the IPSec SA) used for data transfer.
* **Main Mode:** An IKE Phase 1 mode consisting of three two-way exchanges; it is more secure but slower.
* **Aggressive Mode:** An IKE Phase 1 mode that uses fewer exchanges to establish a connection faster, though it is considered less secure.
* **Quick Mode:** The process used in IKE Phase 2 to negotiate the IPSec SA and derive shared secret keys.
* **Transport Mode:** Encrypts only the payload of the packet; keeps the original IP header. Best for client-to-site VPNs.
* **Tunneling Mode:** Encapsulates the entire original packet inside a new packet with a new header. Best for site-to-site VPNs.
* **MTU (Maximum Transmission Unit):** The largest size packet or frame that can be sent in a network, typically 1,500 bytes.
* **Jumbo Frames:** Frames larger than 1,500 bytes (up to 9,000 bytes).
* **AH (Authentication Header):** Provides integrity and authentication but **no** confidentiality (encryption).
* **ESP (Encapsulating Security Payload):** Provides confidentiality, integrity, and authentication.

## 🔄 How It Works (Processes)

### The 5 Steps of IPSec Tunnel Establishment
1. **Request:** Initiation of the key exchange (automatic for site-to-site, manual/software-initiated for client-to-site).
2. **IKE Phase 1:** Peers authenticate and create a secure channel (IKE SA).
3. **IKE Phase 2:** Peers negotiate the IPSec SA parameters to establish the secure tunnel (using Quick Mode).
4. **Data Transfer:** Encrypted data flows through the established tunnel.
5. **Termination:** Tunnel is torn down via mutual agreement or timeout.

### Diffie-Hellman Exchange Logic
1. Both parties generate a private key.
2. Both parties calculate a public key from their private key.
3. Public keys are exchanged.
4. Both parties use their own private key + the other party's public key to calculate an identical **shared secret key**.

## 📊 Comparisons & Key Differences

| Feature| Transport Mode| Tunneling Mode|
| :---| :---| :---|
| **Primary Use**| Client-to-Site| Site-to-Site|
| **Header**| Original IP Header| New IP Header added|
| **Packet Size**| Does not add padding| Increases size (potential MTU issues)|
| **Security**| Payload only| Entire packet encapsulated|

| Feature| Main Mode| Aggressive Mode|
| :---| :---| :---|
| **Speed**| Slower| Faster|
| **Security**| Higher| Lower|
| **Exchanges**| 3 two-way exchanges| Fewer exchanges|

## ⚠️ Exam Tips & Important Notes
* **MTU Gotcha:** Tunneling mode adds headers, which increases packet size. If the packet exceeds 1,500 bytes, it may fragment or drop. The instructor recommends setting internal router MTU to 1,400 bytes to accommodate the overhead.
* **AH vs. ESP:** Remember that **AH does not provide encryption**. If the question asks for confidentiality, the answer must involve ESP.
* **Tunnel-in-a-Tunnel:** IKE Phase 2 creates the IPSec tunnel *inside* the IKE Phase 1 (ISAKMP) tunnel.
* **Anti-Replay:** IPSec prevents replay attacks by checking packet sequence numbers.

## ❓ Questions to Review
1. What are the four security services provided by IPSec?
2. Which IKE mode is faster but less secure: Main or Aggressive?
3. Why might you need to adjust the MTU size when using Tunneling Mode?
4. What is the primary difference between AH and ESP?
5. In which IKE phase is the actual IPSec tunnel established?
6. What is the purpose of the Diffie-Hellman exchange?

## 🔗 Related Topics
* [[VPN]]
* [[Cryptography]]
* [[Encryption]]
* [[Hashing]]
