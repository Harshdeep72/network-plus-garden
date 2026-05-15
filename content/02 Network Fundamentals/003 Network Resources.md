# 003 Network Resources

**Module/Section:** 02 - Network Fundamentals
**Tags:** #network-resources #client-server #peer-to-peer #network-models #network-administration #scalability #cost #hardware #software #🌱seedling

---

![[003 Network Resources.mp4]]

## 📖 Core Concept
This lesson focuses on how data is moved around a network by examining two fundamental network models: the [[Client-Server Model]] and the [[Peer-to-Peer Model]]. Understanding these models is crucial for comprehending network architecture, resource sharing, administration, and scalability in various environments, especially business networks. The instructor emphasizes that these two models are largely opposite in their benefits and drawbacks.

## 🛠️ Hardware & Devices
* **Dedicated Server Hardware**: Required for the [[Client-Server Model]]. These are specialized machines designed to host resources and services for clients.
* **Laptops and Desktops**: Used as "peers" in the [[Peer-to-Peer Model]] to directly share resources. No specialized hardware is needed beyond standard computing devices.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Network Resources**: Any item or service on a network that can be shared or accessed by users or other devices, such as files, printers, scanners, applications, and storage.
* **Client-Server Model**: A network architecture where dedicated servers provide centralized access to resources and services for client devices.
* **Peer-to-Peer (P2P) Model**: A network architecture where individual devices (peers) can directly share resources with each other without the need for a dedicated central server.
* **Dedicated Server**: A computer specifically designated to provide services and resources to other computers (clients) on a network, rather than being used as a regular workstation.
* **Centralized Administration**: The management and control of network resources, users, and security from a single, central point, typically a server.
* **Scalability**: The ability of a system, network, or process to handle a growing amount of work or to be easily expanded to accommodate increased demand.
* **Load Balancing**: Distributing network traffic or workload across multiple servers to ensure no single server becomes a bottleneck, improving responsiveness and availability.
* **Dedicated Operating System Software**: Specialized operating systems (e.g., Windows Server, Linux distributions like Unix/Linux builds) designed for server environments, offering features like enhanced security, resource management, and network services.
* **Highly-Specialized Skillset**: The advanced knowledge and expertise required to configure, manage, and troubleshoot complex server hardware, software, and network services.
* **Decentralized Management**: The administration and control of resources are distributed among individual devices or users, rather than being managed from a central point.

## 🔄 How It Works (Processes)
* **Client-Server Model Operation**:
 1. A dedicated server is set up to host resources (files, applications, printer access, etc.).
 2. Client machines (desktops, laptops) connect to this server to request and access these resources.
 3. The server authenticates clients and provides access based on configured permissions.
 4. Administration (user management, permissions, backups) is performed centrally on the server.
* **Peer-to-Peer Model Operation**:
 1. Individual machines (peers) directly share resources (e.g., files, folders) with each other.
 2. Each peer acts as both a client (requesting resources) and a server (providing resources).
 3. Users configure sharing settings and permissions directly on their own machines.
 4. There is no central authority or dedicated server managing all shared resources.
 * **Example (Napster)**: Users would install the Napster software, designate folders on their hard drives to share, and then other users on the Napster network could search for and download files directly from those peers. Each user both gave and received files.

## 📊 Comparisons & Key Differences

| Feature| Client-Server Model
The Client-Server Model is preferred in business networks due to its advantages in centralized management, easier management, and better scalability. The benefits of the client-server model are generally the drawbacks of the peer-to-peer model, and vice-versa.

| Feature| Client-Server Model
