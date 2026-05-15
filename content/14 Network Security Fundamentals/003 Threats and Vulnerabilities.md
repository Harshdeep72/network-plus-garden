# 003 Threats and Vulnerabilities

**Module/Section:** 14 Network Security Fundamentals
**Tags:** #security #threats #vulnerabilities #risk-management #🌱seedling

---

![[003 Threats and Vulnerabilities.mp4]]

## 📖 Core Concept
The intersection of **Threats** and **Vulnerabilities** creates **Risk**. Network security is the practice of identifying these components and implementing protective mechanisms to mitigate risk.

* **Risk Equation:** Risk = Threat × Vulnerability.
 * If a vulnerability exists but there is no threat, there is no risk.
 * If a threat exists but there are no vulnerabilities, there is no risk.
* **Mitigation:** The process of reducing the likelihood or impact of a threat exploiting a vulnerability.

## 🛠️ Hardware & Devices
* **Network Infrastructure:** Switches, routers, and servers.
* **Power Redundancy Systems:**
 * Solar power.
 * Full building battery backup (UPS).
 * Diesel generators.
 * Local electric grid.
* **Storage Media:** Thumb drives (often used in data exfiltration scenarios).

## 📜 Protocols & Standards
* **CVE (Common Vulnerabilities and Exposures):** A publicly disclosed list of computer security weaknesses and flaws.
 * *Example:* **CVE-2017-0144** (The vulnerability exploited by the **EternalBlue** exploit/WannaCry ransomware).

## 🔑 Key Terminology
* **Threat:** Any person or event that has the potential to negatively impact a valuable resource. Can be malicious (hackers) or environmental (hurricanes).
* **Vulnerability:** A weakness in system design, implementation, source code, or a lack of preventative mechanisms that allows a threat to be realized.
* **Internal Threat:** A threat originating from within the organization (employees, contractors, business partners). Can be malicious (disgruntled employee) or accidental (unwitting user opening malware).
* **External Threat:** A threat originating from outside the organization, such as hackers, hacktivists, or environmental disasters (wildfires).
* **Environmental Vulnerability:** Weaknesses related to the area surrounding the facility (e.g., susceptibility to natural disasters).
* **Physical Vulnerability:** Weaknesses in the physical building security (e.g., unlocked doors, unmonitored hallways, poor cable management).
* **Operational Vulnerability:** Weaknesses in policies and procedures (e.g., unenforceable security policies).
* **Technical Vulnerability:** System-specific weaknesses (e.g., misconfigurations, outdated hardware, unpatched software).
* **Zero-Day Vulnerability:** A vulnerability that is unknown to the vendor and the public at the time of discovery; no patch exists yet.
* **Exploit:** A piece of software code designed to take advantage of a specific vulnerability.

## 🔄 How It Works (Processes)
1. **Vulnerability Discovery:** A flaw is found in software or hardware.
2. **Disclosure:** The flaw is reported, assigned a **CVE** ID, and made public.
3. **Patching:** The vendor releases a software update to fix the vulnerability.
4. **Reverse Engineering:** Attackers analyze the patch to understand the vulnerability it fixes.
5. **Exploitation:** Attackers create code (the **Exploit**) to target systems that have not yet applied the patch.
6. **Propagation:** The exploit is often bundled into malware to spread automatically across unpatched networks.

## 📊 Comparisons & Key Differences

| Feature| CVE| Zero-Day|
| :---| :---| :---|
| **Status**| Known vulnerability| Unknown vulnerability|
| **Publicity**| Publicly disclosed| Private/Undisclosed|
| **Remediation**| Patches usually available| No patch available|
| **Risk Level**| Manageable via patching| High (no defense exists)|

## ⚠️ Exam Tips & Important Notes
* **Distinction:** Always remember that a threat is the *actor/event*, while a vulnerability is the *weakness*.
* **EternalBlue:** Be familiar with the concept of EternalBlue as a real-world example of a CVE-based exploit that caused global damage.
* **Patching:** The primary defense against known CVEs is timely patching and keeping anti-malware software updated.
* **Internal Threats:** Do not assume all internal threats are malicious; "unwitting" users (accidental threats) are a major category of internal risk.

## ❓ Questions to Review
1. What is the fundamental difference between a threat and a vulnerability?
2. If a server has a known vulnerability but no threat exists to exploit it, is there risk? Why or why not?
3. What is the difference between an internal and an external threat? Provide an example of each.
4. How does a "Zero-Day" vulnerability transition into a "CVE"?
5. Why does the release of a security patch sometimes increase the risk for unpatched systems?

## 🔗 Related Topics
* [[Risk Management]]
* [[Malware]]
* [[Physical Security]]
* [[Patch Management]]
