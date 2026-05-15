# 006 Web Ports and Protocols

**Module/Section:** 04 Ports and Protocols
**Tags:** #ports #protocols #web #http #https #security #encryption #ssl #tls #🌱seedling

---

![[006 Web Ports and Protocols.mp4]]

## 📖 Core Concept
Web ports and protocols are the standardized rules and numerical gateways that govern data transmission and communication over the internet, specifically for websites and web pages. These ports allow computers to differentiate between various types of traffic and services. The two primary ports for web communication are [[Port 80]] and [[Port 443]], each utilizing a distinct protocol for communication. While both are fundamental for web browsing, they offer different levels of security, with [[HTTPS]] over [[Port 443]] being the secure, modern standard, and [[HTTP]] over [[Port 80]] being an older, insecure method. The shift towards HTTPS is driven by the need for data encryption, user trust, and even [[Search Engine Optimization (SEO)]] benefits.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
* **[[HTTP]] (Hypertext Transfer Protocol)**
 * **Port Number**: [[Port 80]]
 * **Description**: The foundation of data communication on the [[World Wide Web]]. It is an [[Application Layer Protocol]] designed to enable communication between clients (e.g., web browsers) and servers.
 * **Functionality**: Sends plain text requests from a client to a server, which then sends back a plain text response containing requested content (e.g., [[HTML]] pages, images, web media).
 * **Security**: Data transferred via HTTP is sent in **plain text** (unencrypted).
 * **Vulnerabilities**: Highly vulnerable to [[eavesdropping]] and [[on-path attacks]] (formerly known as [[man-in-the-middle attacks]]) because data can be read or modified by an attacker during transmission over local or wide area networks.
 * **Usage Warning**: Never enter sensitive information (login credentials, personal data, credit card details) on a webpage using HTTP over Port 80.
 * **Default Behavior**: If a [[URL]] is typed into a browser without specifying a port, the browser defaults to using Port 80 for HTTP requests.
* **[[HTTPS]] (Hypertext Transfer Protocol Secure / HTTP Secure)**
 * **Port Number**: [[Port 443]]
 * **Description**: Essentially the same protocol as HTTP but with an added layer of encryption.
 * **Security Mechanism**: Achieves encryption by sending data through a secure tunnel using either [[SSL]] (Secure Socket Layer) or the more modern [[TLS]] (Transport Layer Security).
 * **Encryption Process**: Data is encrypted before being sent from the client and decrypted upon arrival at the destination server, and vice-versa. This secures data from interception or tampering.
 * **Identification**: Indicated by `https://` in the URL or a padlock icon in the browser's address bar. The 'S' stands for "secure."
 * **Importance**: Crucial for websites handling sensitive data (online banking, e-commerce, login pages).
 * **Modern Practice**: Many websites automatically redirect HTTP (Port 80) requests to their HTTPS (Port 443) version to ensure secure communication.
* **[[SSL]] (Secure Socket Layer)**
 * **Description**: An older protocol that provides cryptographic security for communications over a computer network. It was the predecessor to TLS.
 * **Function**: Used by HTTPS to create an encrypted tunnel for data transfer.
* **[[TLS]] (Transport Layer Security)**
 * **Description**: The modern and more secure successor to SSL.
 * **Function**: Used by HTTPS to create an encrypted tunnel, ensuring data transferred between client and server is secure from interception or tampering.

## 🔑 Key Terminology
* **[[Web Ports and Protocols]]**: Standardized rules and numerical gateways that govern data transmission and communication over the internet for websites and web pages.
* **[[Port]]**: A numerical gateway that allows computers to distinguish between different types of traffic and services.
* **[[Port 80]]**: The default port used for [[HTTP]] (Hypertext Transfer Protocol) communication.
* **[[Port 443]]**: The default port used for [[HTTPS]] (Hypertext Transfer Protocol Secure) communication.
* **[[HTTP]] (Hypertext Transfer Protocol)**: An [[Application Layer Protocol]] that forms the foundation of data communication on the [[World Wide Web]], sending unencrypted data in plain text.
* **[[HTTPS]] (Hypertext Transfer Protocol Secure)**: A secure version of HTTP that encrypts data using [[SSL]] or [[TLS]] protocols, typically operating over [[Port 443]].
* **[[Plain Text]]**: Data that is not encrypted and can be read or understood by anyone who intercepts it.
* **[[Encryption]]**: The process of converting information or data into a code to prevent unauthorized access.
* **[[Eavesdropping]]**: The act of secretly listening to private conversations or communications without permission.
* **[[On-Path Attack]]**: A type of cyberattack where an attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other (formerly known as [[Man-in-the-Middle Attack]]).
* **[[Sensitive Information]]**: Data that, if compromised, could lead to harm or privacy violations, such as login credentials, personal data, or financial details.
* **[[SSL Tunnel]]**: A secure, encrypted connection established using the [[Secure Socket Layer]] protocol.
* **[[TLS Tunnel]]**: A secure, encrypted connection established using the [[Transport Layer Security]] protocol, which is the modern successor to SSL.
* **[[URL]] (Uniform Resource Locator)**: The address of a given unique resource on the World Wide Web.
* **[[Client]]**: A computer program or device that makes requests to a server. In web browsing, this is typically a web browser.
* **[[Server]]**: A computer program or device that provides resources or services to other computer programs or devices (clients). In web browsing, this is a web server hosting websites.
* **[[HTML]] (Hypertext Markup Language)**: The standard markup language for documents designed to be displayed in a web browser.
* **[[Search Engine Optimization (SEO)]]**: The process of improving the quality and quantity of website traffic to a website or a web page from search engines.

## 🔄 How It Works (Processes)
1. **HTTP Communication (Port 80)**:
 * A user types a URL (e.g., `diontraining.com`) into their web browser without specifying a port.
 * The web browser automatically defaults to using [[Port 80]].
 * The client (web browser) sends a plain text [[HTTP]] request to the server.
 * The server receives the request and sends back a plain text [[HTTP]] response containing the requested content (e.g., [[HTML]] pages, images).
 * This data is transmitted unencrypted, making it vulnerable to [[eavesdropping]] and [[on-path attacks]].
2. **HTTPS Communication (Port 443)**:
 * A user types a URL with `https://` (e.g., `https://www.diontraining.com`) or clicks a link to an HTTPS site.
 * The web browser establishes a connection using [[Port 443]].
 * A secure tunnel is established using either [[SSL]] or [[TLS]].
 * Data transferred between the client and server is **encrypted** before transmission and **decrypted** upon arrival.
 * This encryption protects the data from interception or tampering.
3. **Automatic Redirection from HTTP to HTTPS**:
 * A user attempts to access a website using an insecure [[HTTP]] connection (e.g., `http://www.diontraining.com`).
 * The web server detects the insecure request.
 * Instead of serving the insecure version, the server automatically redirects the client to the secure [[HTTPS]] version of the website (e.g., `https://www.diontraining.com`) over [[Port 443]].
 * This ensures that even if a user initially requests an insecure connection, they are directed to the secure version, especially for sites handling [[sensitive information]].

## 📊 Comparisons & Key Differences

| Feature| [[HTTP]] (Port 80)| [[HTTPS]] (Port 443)|
| :----------------------| :------------------------------------------------------| :------------------------------------------------------|
| **Protocol**| Hypertext Transfer Protocol| Hypertext Transfer Protocol Secure|
| **Port Number**| [[Port 80]]| [[Port 443]]|
| **Security & Encryption**| **Unencrypted**, data sent in [[plain text]]| **Encrypted** using [[SSL]] or [[TLS]]|
| **Vulnerabilities**| Vulnerable to [[eavesdropping]] and [[on-path attacks]]| Secure against [[eavesdropping]] and tampering|
| **Sensitive Data**| **NOT recommended** for [[sensitive information]]| **REQUIRED** for [[sensitive information]]|
| **URL Indicator**| `http://`| `https://` (often with a padlock icon)|
| **Default Usage**| Traditional default for web browsing (since 1991)| Modern default for web browsing (since ~2009-2014)|
| **Current Adoption**| Less than 5% of web traffic| Over 95% of all web browsing traffic|
| **[[SEO]] & Trust**| Lower search engine ranking, less user trust| Higher search engine ranking, increased user trust|
| **Introduction Year**| 1991| 1994 (widespread adoption much later)|

## ⚠️ Exam Tips & Important Notes
* **Memorize Port Numbers**: It is critical to remember that [[Port 80]] is for [[HTTP]] and [[Port 443]] is for [[HTTPS]]. This is a fundamental concept for the Network+ exam.
* **Security Distinction**: Understand that the primary difference between HTTP and HTTPS is **security through encryption**. HTTP is insecure (plain text), while HTTPS is secure (encrypted).
* **"S" in HTTPS**: Remember the "S" stands for "Secure" and indicates encryption using [[SSL]] or [[TLS]].
* **Sensitive Data Warning**: Emphasize that sensitive information should **never** be entered on an HTTP site.
* **Modern Web Practices**: Note that HTTPS is the modern standard, favored by browsers, users, and search engines due to its security benefits.
* **Redirection**: Be aware that many websites automatically redirect HTTP requests to HTTPS.
* **Historical Context**: While HTTP over Port 80 was the default for a long time (since 1991), HTTPS over Port 443 has become the dominant standard, especially in the last 10-15 years, now accounting for over 95% of web traffic.

## ❓ Questions to Review
1. What are the two main ports used for web communication, and what protocol does each use?
2. Explain the primary security difference between HTTP and HTTPS.
3. Why is it dangerous to enter sensitive information, such as login credentials or credit card details, on a website using HTTP over Port 80?
4. How does HTTPS achieve its security, and what two protocols are commonly used to provide this encryption?
5. What visual indicators in a web browser tell a user that they are connected to a secure HTTPS website?
6. Describe how [[Search Engine Optimization (SEO)]] is influenced by a website's use of HTTP versus HTTPS.
7. If you type `http://www.example.com` into your browser and are automatically redirected to `https://www.example.com`, what is happening, and why is this a common practice?
8. What percentage of web browsing traffic currently uses HTTPS over Port 443?

## 🔗 Related Topics
* [[Ports and Protocols]]
* [[TCP/IP Model]]
* [[Application Layer Protocols]]
* [[Encryption]]
* [[SSL]]
* [[TLS]]
* [[Network Security]]
* [[On-Path Attack]]
* [[Eavesdropping]]
* [[URL]]
* [[Web Browser]]
* [[Web Server]]
* [[Search Engine Optimization (SEO)]]
