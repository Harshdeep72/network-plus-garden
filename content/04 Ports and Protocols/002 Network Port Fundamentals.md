# 002 Network Port Fundamentals

**Module/Section:** 04 Ports and Protocols
**Tags:** #ports #protocols #IANA #well-known-ports #registered-ports #ephemeral-ports #TCP/IP #🌱seedling

---

![[002 Network Port Fundamentals.mp4]]

## 📖 Core Concept
Network ports are fundamental for directing data to specific applications or services on a computer system. While an [[IP Address]] identifies a specific device on a network, a port identifies a specific application or service running on that device. This allows a single device with one IP address to host multiple services simultaneously, each listening on a different port. The concept is analogous to a street address (IP address) identifying a house, and a room number (port) identifying a specific function or activity within that house (e.g., bedroom, home office, living room).

All ports are numerically identified, ranging from 0 to 65,535. This vast range allows for a multitude of services and applications to operate concurrently on a single machine. These ports are categorized into three main groups: [[Well-Known Ports]], [[Registered Ports]], and [[Ephemeral Ports]].

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
* **File Transfer Protocol (FTP)**:
 * Used for transferring files between computers on a network.
 * Operates on [[Port 20]] (for data transfer) and [[Port 21]] (for control connection).
* **Simple Mail Transfer Protocol (SMTP)**:
 * Used for sending email messages between servers.
 * Operates on [[Port 25]].
* **Hypertext Transfer Protocol (HTTP)**:
 * Used for transmitting web pages over the internet.
 * Operates on [[Port 80]].
* **Hypertext Transfer Protocol Secure (HTTPS)**:
 * A secure version of HTTP, using SSL/TLS encryption.
 * Operates on [[Port 443]].
* **Internet Assigned Numbers Authority (IANA)**:
 * An organization responsible for maintaining global coordination of IP addressing, autonomous system numbers, root zone management in the Domain Name System (DNS), and other IP protocol-related symbols and numbers, including port numbers.
 * Both well-known and registered ports are formally registered with IANA.

## 🔑 Key Terminology
* **Port**: A logical opening in a computer that represents a service or application that is listening and waiting for network traffic. It allows a specific application or service on a device to be uniquely identified for communication.
* **IP Address**: A unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It identifies the device on the network.
* **Well-Known Ports**: A category of port numbers ranging from 0 to 1,023. These ports are reserved for common, widely used services and applications (e.g., HTTP, FTP, SMTP). They are registered with IANA.
* **Registered Ports**: A category of port numbers ranging from 1,024 to 49,151. These ports are assigned by IANA to specific applications or services that are not as common as those using well-known ports. Organizations can request IANA to reserve a specific port within this range for their proprietary applications.
* **Ephemeral Ports**: Also known as **Dynamic Ports** or **Private Ports**. These are short-lived, temporary ports used by client applications when initiating a connection to a server. They are chosen randomly from a predefined range (49,152 to 65,535) by the client's operating system. These ports are only open for the duration of the communication session and are closed afterward. They do not require registration with IANA.
* **Service**: A program that runs in the background on a computer, often without a user interface, providing functionality to other programs or users. Services often listen on specific ports for incoming requests.
* **Application**: A software program designed to perform a specific function directly for the user or for another application. Applications can also listen on ports to communicate over a network.

## 🔄 How It Works (Processes)
**Data Transfer and Port Usage:**
1. **Identifying the Destination System**: An [[IP Address]] is used to direct data to the correct computer system on a network.
2. **Identifying the Destination Application/Service**: Once the data reaches the correct system, a port number is used to direct the data to the specific application or service listening on that system.
3. **Client-Server Communication Example (Web Browsing)**:
 * **Client Initiates Connection**:
 * The client (e.g., a web browser on a computer with IP `192.168.1.24`) wants to access a website (server with IP `64.82.46.21`).
 * The client's operating system randomly selects an [[Ephemeral Port]] (e.g., `49163`) from its available range to use as its **source port**.
 * The client sends a request packet from its source IP (`192.168.1.24`) and source port (`49163`) to the destination IP of the web server (`64.82.46.21`).
 * Since it's an insecure website, the client specifies [[Port 80]] as the **destination port** on the web server, as this is the well-known port for HTTP.
 * **Server Responds**:
 * The web server receives the request on [[Port 80]].
 * The web server processes the request and sends a response back to the client.
 * The server's **source IP** is `64.82.46.21`, and its **source port** is [[Port 80]] (the well-known port it was listening on).
 * The server's **destination IP** is the client's IP address (`192.168.1.24`), and its **destination port** is the ephemeral port the client initially used (`49163`).
 * **Two-Way Communication**:
 * A two-way communication session is established: client `192.168.1.24:49163` communicates with server `64.82.46.21:80`.
 * Data flows from the client's ephemeral port to the server's well-known port, and from the server's well-known port back to the client's ephemeral port.
 * **Session Teardown**:
 * Once the data transfer is complete, the communication session is torn down.
 * The randomly selected ephemeral port on the client side is closed and becomes available for future use.
 * **Subsequent Connections**:
 * If the client wants to communicate with the same web server again, it will still send data to the server's well-known [[Port 80]].
 * However, the client will select a *new* randomly generated ephemeral port for its source port for the new communication session.

## 📊 Comparisons & Key Differences
**Port Categories Comparison:**

| Feature| Well-Known Ports| Registered Ports| Ephemeral Ports|
| :---------------| :---------------------------------------------| :----------------------------------------------------| :----------------------------------------------------|
| **Range**| 0 to 1,023| 1,024 to 49,151| 49,152 to 65,535|
| **Purpose**| Reserved for common, widely used services| Assigned to specific applications by request| Short-lived, temporary ports for client-side connections|
| **Registration**| Registered with [[IANA]]| Registered with [[IANA]]| Not registered; dynamically assigned by OS|
| **Usage**| Primarily used by servers/services to listen| Used by specific applications (often proprietary)| Primarily used by clients as source ports|
| **Examples**| HTTP (80), HTTPS (443), FTP (20, 21), SMTP (25)| Custom video game ports (e.g., 33333)| Randomly chosen by client OS (e.g., 49163, 60000)|
| **Lifespan**| Persistent (always listening)| Persistent (as long as the application is running)| Temporary (open only for the duration of a session)|
| **Other Names**| N/A| N/A| Dynamic Ports, Private Ports|

## ⚠️ Exam Tips & Important Notes
* **Analogy**: Remember the house analogy: [[IP Address]] is the street address (the house), and the port is the room number (the specific room/function inside the house). This helps differentiate their roles.
* **Total Port Range**: Know the full range of ports: 0 to 65,535.
* **Port Categories and Ranges**: Memorize the three categories of ports and their specific numerical ranges:
 * [[Well-Known Ports]]: 0-1,023
 * [[Registered Ports]]: 1,024-49,151
 * [[Ephemeral Ports]]: 49,152-65,535
* **IANA's Role**: Understand that [[IANA]] is responsible for registering well-known and registered ports.
* **Ephemeral Port Function**: Emphasize that ephemeral ports are *randomly selected* by the client's operating system for *outgoing* connections and are *temporary*. They are not fixed like well-known ports.
* **Source vs. Destination Ports**: In a communication session, the client typically uses an ephemeral port as its source port and targets a server's well-known or registered port as the destination. The server then uses its well-known/registered port as the source port when responding, targeting the client's ephemeral port as the destination.

## ❓ Questions to Review
1. What is the primary function of a network port in computer networking, and how does it complement an IP address?
2. What is the total range of port numbers available on a computer system?
3. Name the three categories of network ports and specify the numerical range for each category.
4. Which organization is responsible for registering well-known and registered port numbers?
5. Provide two examples of well-known ports and the services associated with them.
6. Explain the concept of an ephemeral port. When and why are these ports used?
7. If a client initiates a web browsing session to an insecure website, what port number would the client typically use as its destination port on the web server, and what type of port would it likely use as its source port?
8. Why might an organization need to request a registered port from IANA?

## 🔗 Related Topics
* [[IP Address]]
* [[TCP/IP Model]]
* [[Network Services]]
* [[Well-Known Ports]]
* [[Registered Ports]]
* [[Ephemeral Ports]]
* [[IANA]]
* [[Port 20]]
* [[Port 21]]
* [[Port 25]]
* [[Port 80]]
* [[Port 443]]
