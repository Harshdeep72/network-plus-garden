# 008 File Transfer Ports and Protocols

**Module/Section:** 04 Ports and Protocols
**Tags:** #ports-protocols #file-transfer #ftp #sftp #tftp #smb #security #🌱seedling

---

![[008 File Transfer Ports and Protocols.mp4]]

## 📖 Core Concept
File transfer ports and protocols are specialized rules and procedures essential for the transmission of files across networks and the internet. These protocols operate on designated ports, which act as "doorways" for data transfer activities. Different protocols serve various purposes, offering distinct levels of security and functionality, making it crucial to select the appropriate one based on specific requirements such as security needs, network environment, and desired functionality.

## 🛠️ Hardware & Devices
* **Diskless Workstation**: A computer that relies on a network to load its operating system and applications, often utilizing protocols like TFTP for initial booting.
* **Network Device**: General term for devices connected to a network, such as routers, switches, or other infrastructure components that might use TFTP for configuration or firmware updates.
* **Voice over Internet Protocol (VoIP) Phone**: A telephone that uses internet protocol (IP) for voice communications, which may rely on TFTP for configuration or firmware loading upon startup.
* **Client**: A computer or software application that initiates a connection to a server to request a service, such as file transfer.
* **Server**: A computer or software application that provides services to clients, such as hosting files for transfer.

## 📜 Protocols & Standards
* **File Transfer Protocol (FTP)**
 * One of the oldest protocols used for transferring files between a client and a server over a network.
 * **Ports**:
 * **Port 20**: Used for the actual data transfer.
 * **Port 21**: Used for control commands (e.g., upload, download, authentication, setting up the file transfer).
 * **Functionality**: Widely utilized due to its simplicity and support across many different platforms.
 * **Security Drawbacks**: Transmissions are not encrypted and are sent in plain text. This means sensitive information like usernames and passwords can be intercepted and read by unauthorized parties.

* **Secure File Transfer Protocol (SFTP)**
 * Also known as **SSH File Transfer Protocol**.
 * Created to address the security concerns of FTP.
 * **Port**: **Port 22** (the standard port for [[Secure Shell (SSH)]] connections).
 * **Mechanism**: Tunnels the FTP protocol through an existing [[Secure Shell (SSH)]] connection, which provides encryption.
 * **Security Benefits**: Encompasses the functionalities of FTP while incorporating the robust security features of SSH, encrypting data before it is transferred. This prevents unauthorized disclosure and ensures secure file transmissions.

* **Trivial File Transfer Protocol (TFTP)**
 * **Port**: **Port 69**.
 * **Characteristics**: A simpler, more basic version of FTP. It lacks advanced features such as user authentication, directory browsing, and robust security mechanisms.
 * **Purpose**: Designed for sending files when minimal security is sufficient. It is connectionless, using [[User Datagram Protocol (UDP)]] for transport.
 * **Common Use Cases**:
 * Booting up diskless workstations.
 * Booting network devices (e.g., routers, switches).
 * Booting Voice over Internet Protocol (VoIP) phones.
 * Downloading configuration files or firmware updates to devices.

* **Server Message Block (SMB)**
 * **Port**: **Port 445**.
 * **Functionality**: A network file sharing protocol that allows applications on a computer to read and write to files and request services from server programs within a computer network.
 * **Primary Use**: Predominantly used for Windows file sharing, enabling Windows computers to communicate with each other and share files over a network.
 * **Cross-Platform Support**: A cross-platform version called **Samba** exists on Linux systems, which relies on the SMB protocol, making it accessible beyond just Windows environments.
 * **Network Environment**: Almost exclusively used inside [[Local Area Networks (LANs)]]. It is not designed for sending data across the internet, unlike FTP or SFTP.

## 🔑 Key Terminology
* **File Transfer Ports and Protocols**: Specialized rules and procedures used for transmitting files across networks, operating on designated port numbers.
* **Port**: A logical construct that identifies a specific process or service on a network device, acting as a "doorway" for data transfer activities.
* **FTP (File Transfer Protocol)**: An unencrypted protocol for transferring files between a client and a server.
* **SFTP (Secure File Transfer Protocol / SSH File Transfer Protocol)**: A secure version of FTP that tunnels file transfers over an encrypted SSH connection.
* **SSH (Secure Shell)**: A cryptographic network protocol for operating network services securely over an unsecured network.
* **TFTP (Trivial File Transfer Protocol)**: A simple, unauthenticated, and unencrypted protocol for transferring files, often used for booting network devices.
* **SMB (Server Message Block)**: A network file sharing protocol primarily used in Windows environments for sharing files and services within a local area network.
* **Plain Text**: Data that is not encrypted and can be read easily by anyone who intercepts it.
* **Encrypted**: Data that has been converted into a code to prevent unauthorized access, requiring a key to decrypt and read.
* **Tunneling**: Encapsulating one protocol within another, often to add security or to traverse networks that do not support the encapsulated protocol directly.
* **Authentication**: The process of verifying the identity of a user or device, typically using credentials like a username and password.
* **Directory Browsing**: The ability to view the contents of directories (folders) on a remote server.
* **Samba**: An open-source re-implementation of the SMB/CIFS networking protocol that allows Linux/Unix systems to interoperate with Windows systems for file and print services.
* **Local Area Network (LAN)**: A computer network that interconnects computers within a limited area such as a residence, school, laboratory, university campus, or office building.

## 🔄 How It Works (Processes)
* **FTP Session Initiation and Data Transfer**:
 1. **Control Connection (Port 21)**: The client first initiates a connection to the FTP server using port 21.
 2. **Communication and Authentication**: The client communicates with the server, authenticates if required (e.g., by providing a username and password), and sends control commands to set up the file transfer (e.g., "upload this file," "download that file").
 3. **Data Connection (Port 20)**: Once the commands are sent and the transfer is set up, the actual file data transfer takes place over port 20. This separation allows the control channel to remain open for further commands while data is being transferred.

* **SFTP Secure Transfer**:
 1. **SSH Connection (Port 22)**: An [[Secure Shell (SSH)]] connection is established between the client and the server over port 22. This connection is inherently encrypted.
 2. **FTP Tunneling**: The SFTP protocol "tunnels" the FTP functionalities (like file transfer commands and data) *through* this already encrypted SSH connection.
 3. **Encrypted Data Transfer**: All data, including commands, usernames, passwords, and file contents, is encrypted by SSH before being transmitted, ensuring secure file transmissions and preventing unauthorized disclosure.

## 📊 Comparisons & Key Differences
| Feature/Protocol| FTP (File Transfer Protocol)| SFTP (Secure File Transfer Protocol)| TFTP (Trivial File Transfer Protocol)| SMB (Server Message Block)|
| :---------------| :---------------------------| :-----------------------------------| :------------------------------------| :-------------------------|
| **Primary Ports**| 20 (data), 21 (control)| 22 (SSH)| 69| 445|
| **Security**| No encryption (plain text)| Encrypted (via SSH tunneling)| No encryption, minimal security| Encrypted (modern versions), authentication|
| **Authentication**| Yes (username/password)| Yes (via SSH)| No| Yes|
| **Features**| Full-featured, directory browsing| Full-featured, directory browsing| Basic, no directory browsing| File/print sharing, service requests|
| **Complexity**| Moderate| Moderate (built on SSH)| Simple, lightweight| Complex|
| **Use Cases**| General file transfer| Secure file transfer| Booting diskless devices, firmware updates| Windows file sharing, LAN services|
| **Network Scope**| Internet & LAN| Internet & LAN| LAN (primarily)| LAN (almost exclusively)|

* **FTP vs. SFTP**:
 * **Security**: SFTP addresses FTP's major security flaw by encrypting all transmissions (including credentials and data) through an SSH tunnel, whereas FTP sends everything in plain text.
 * **Port Usage**: FTP uses two ports (20 and 21) for data and control, while SFTP uses a single port (22) which is the standard for SSH.

* **TFTP vs. FTP**:
 * **Simplicity/Features**: TFTP is a much simpler, basic version of FTP, lacking user authentication, directory browsing, and robust security features. FTP is full-featured with authentication and directory browsing.
 * **Security**: TFTP offers minimal security, while FTP, though insecure, does offer authentication.
 * **Use Cases**: TFTP is for highly specific, simple, and often automated transfers (e.g., booting devices), whereas FTP is for general-purpose file transfers.

* **SMB vs. FTP/SFTP**:
 * **Network Scope**: SMB is almost exclusively used within [[Local Area Networks (LANs)]] for internal file sharing. FTP and SFTP are designed for file transfers across both LANs and the internet.
 * **Purpose**: SMB is a network *file sharing* protocol that allows applications to interact with files and services on a server. FTP/SFTP are primarily *file transfer* protocols designed to move entire files between systems.
 * **Platform**: SMB is predominantly associated with Windows, though Samba provides cross-platform support. FTP/SFTP are platform-agnostic.

## ⚠️ Exam Tips & Important Notes
* **Memorize Port Numbers**: It is crucial to know the specific port numbers associated with each file transfer protocol (FTP 20/21, SFTP 22, TFTP 69, SMB 445). These are frequently tested.
* **FTP Port Distinction**: Remember that FTP uses two ports: 21 for control commands and 20 for the actual data transfer. This is a common point of confusion.
* **SFTP Security**: Understand that SFTP's security comes from tunneling FTP over an encrypted [[Secure Shell (SSH)]] connection.
* **TFTP's Simplicity**: TFTP is for simple, unsecured transfers, often for booting devices. It lacks authentication and directory browsing.
* **SMB's LAN Focus**: Emphasize that SMB is primarily for Windows file sharing within a [[Local Area Network (LAN)]] and is generally not used for internet-based file transfers.
* **Protocol Choice**: The instructor stresses that choosing the right protocol depends on aligning security requirements, network environment, and desired functionality.

## ❓ Questions to Review
1. Which two port numbers are associated with the File Transfer Protocol (FTP), and what is the specific function of each port?
2. What is the primary security concern when using FTP, and which protocol was developed to address this concern?
3. Explain how SFTP provides secure file transfers, including the port number it operates on and the underlying protocol it leverages.
4. For what specific types of tasks is TFTP typically used, and what are its key limitations compared to FTP?
5. What is the port number for Server Message Block (SMB), and what is its primary use case in a network environment?
6. Why is SMB generally not used for file transfers across the internet, unlike FTP or SFTP?
7. A network administrator needs to securely transfer sensitive configuration files to a remote server over the internet. Which file transfer protocol would be the most appropriate choice, and why?
8. A new diskless workstation needs to download its boot image from a server on the local network. Which file transfer protocol would likely be used for this purpose?

## 🔗 Related Topics
* [[Ports and Protocols]]
* [[TCP and UDP]]
* [[Secure Shell (SSH)]]
* [[Encryption]]
* [[Local Area Network (LAN)]]
* [[Network Security]]
