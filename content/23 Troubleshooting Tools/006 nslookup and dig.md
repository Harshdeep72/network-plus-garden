# 006 nslookup and dig

**Module/Section:** 23 Troubleshooting Tools
**Tags:** #DNS #troubleshooting #command-line #🌱seedling

---

![[006 nslookup and dig.mp4]]

## 📖 Core Concept
The lesson focuses on three command-line utilities used for network reconnaissance and troubleshooting, specifically regarding [[DNS]] (Domain Name System) and host identification.

* **nslookup**: A versatile tool for querying DNS servers to map domain names to IP addresses and retrieve various DNS records. It supports both non-interactive and interactive modes.
* **dig**: A powerful DNS lookup utility primarily used on Linux/Unix/macOS systems. It is generally considered more flexible and informative than nslookup for DNS troubleshooting.
* **hostname**: A simple utility used to display the local system's hostname.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
* **[[DNS]] (Domain Name System)**: The hierarchical decentralized naming system for computers, services, or other resources connected to the Internet or a private network.
 * **A Record**: Maps a domain name to an IPv4 address.
 * **MX Record (Mail Exchange)**: Specifies the mail servers responsible for receiving email on behalf of a domain.
 * **CNAME (Canonical Name)**: An alias record that maps one domain name to another.

## 🔑 Key Terminology
* **nslookup (Name Server Lookup)**: A network administration command-line tool for querying the Domain Name System to obtain domain name or IP address mapping or for any other specific DNS record.
* **Non-interactive Mode**: A mode where the user enters a single command (e.g., `nslookup [domain]`) and receives the output immediately without entering a shell.
* **Interactive Mode**: A mode entered by typing `nslookup` alone, providing a shell environment where users can perform multiple, detailed queries and change configuration settings (like the target DNS server or query type).
* **dig (Domain Information Groper)**: A command-line tool for querying DNS name servers. It is the standard tool for DNS lookups on Linux/Unix/macOS.
* **hostname**: A command used to display the name of the local host system.
* **FQDN (Fully Qualified Domain Name)**: The complete domain name for a specific computer, or host, on the internet (e.g., `jasonspc.intranet.diontraining.com`).
* **Load Balancing**: A method of distributing network traffic across multiple servers to ensure high availability and reliability.
* **Reconnaissance**: The act of gathering information about a target system or network, often used in cybersecurity and penetration testing.

## 🔄 How It Works (Processes)
### Using nslookup
1. **Non-interactive**: Type `nslookup [domain]` to get the IP address.
2. **Interactive**:
 * Type `nslookup` to enter the shell.
 * Change DNS server: `server [IP_address_or_name]`
 * Change query type: `set q=[record_type]` (e.g., `set q=mx`).
 * Perform query: Type the domain name.

### Using dig
1. **Basic Query**: `dig [domain]` returns the A records.
2. **Specific Record Query**: `dig -t [type] [domain]` (e.g., `dig -t mx diontraining.com`).

### Using hostname
1. Type `hostname` at the command prompt to return the system's configured name.

## 📊 Comparisons & Key Differences

| Feature| nslookup| dig|
| :---| :---| :---|
| **Primary Use**| DNS Troubleshooting/Recon| DNS Troubleshooting/Recon|
| **Interactive Mode**| Yes| No|
| **OS Availability**| Windows, Linux, Unix, macOS| Linux, Unix, macOS (Windows via install)|
| **Syntax (Record Type)**| `set q=[type]`| `dig -t [type]`|

## ⚠️ Exam Tips & Important Notes
* **Platform Differences**: While `nslookup` is consistent across OSs, remember that Linux/Unix/macOS versions may use `set type = [record]` instead of `set q = [record]`.
* **Interactive vs. Non-interactive**: Know that `nslookup` is unique for its interactive shell capabilities, whereas `dig` is strictly command-line argument based.
* **Reconnaissance**: Understand that these tools are not just for network admins; they are primary tools for cybersecurity analysts to map out an organization's infrastructure.
* **MX Preferences**: In DNS, lower preference numbers indicate a higher priority for mail delivery.

## ❓ Questions to Review
1. What is the primary difference between interactive and non-interactive modes in `nslookup`?
2. Which command would you use to change the DNS server being queried while inside the `nslookup` interactive shell?
3. If you are on a Linux system and want to find the MX records for a domain using `dig`, what is the correct command syntax?
4. What does a CNAME record represent in the context of DNS?
5. Why might you see multiple A records returned for a single domain name when using `dig`?

## 🔗 Related Topics
* [[DNS]]
* [[IP Addressing]]
* [[Troubleshooting Methodology]]
