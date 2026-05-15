# 010 Understanding Phishing Attacks

**Module/Section:** 15 Network Attacks
**Tags:** #security #phishing #social-engineering #🌱seedling

---

![[010 Understanding Phishing Attacks.mp4]]

## 📖 Core Concept
The lesson focuses on the practical application of **Phishing Campaigns** as a security awareness training tool. By simulating a phishing attack, administrators can identify users who are susceptible to social engineering and provide them with immediate remedial training.

* **Objective:** To test if users can identify malicious emails and to teach them safe practices (e.g., navigating directly to a site rather than clicking email links).
* **Methodology:** Using automated tools to craft realistic-looking emails that mimic legitimate services (like LinkedIn), sending them to employees, and tracking interactions (clicks).
* **Remediation:** If a user clicks a link in a simulated phishing email, they are redirected to a training page explaining that they have been "phished" and providing guidance on how to avoid such scams in the future.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology
* **Phishing:** A form of social engineering where an attacker sends fraudulent communications (usually email) that appear to come from a reputable source. The goal is to trick the recipient into clicking a malicious link, downloading malware, or revealing sensitive information like usernames and passwords.
* **Social Engineering:** The psychological manipulation of people into performing actions or divulging confidential information.
* **Remedial Training:** Educational content provided to users who fail a security test (e.g., clicking a phishing link) to correct their behavior and improve security awareness.
* **Phish Insight:** A free tool provided by Trend Micro used to conduct simulated phishing campaigns for organizational security training.

## 🔄 How It Works (Processes)
### Conducting a Phishing Campaign
1. **Account Setup:** Register and log in to a phishing simulation platform (e.g., `phishinsight.trendmicro.com`).
2. **Target Selection:** Define the recipient list (Name, Title, Email Address).
3. **Template Selection:** Choose a pre-built email template that mimics a common service (e.g., LinkedIn connection request).
4. **Customization:**
 * Modify the "From" address (e.g., using typos like `invitations@linkdin.com` instead of `linkedin.com` to test user vigilance).
 * Adjust branding and content to appear legitimate.
5. **Scheduling:** Set the campaign duration (e.g., over a week or month) to monitor user learning over time.
6. **Triggering Remediation:** Configure the system to redirect users to a training page immediately upon clicking a link within the simulated phishing email.
7. **Analysis:** Review the campaign results to identify which users were "fooled" and require further training.

## 📊 Comparisons & Key Differences
| Feature| Legitimate Email| Phishing Email|
| :---| :---| :---|
| **Sender Address**| Correctly spelled domain (e.g., @linkedin.com)| Often contains typos or misspellings (e.g., @linkdin.com)|
| **Link Destination**| Redirects to the official, expected domain| Redirects to a malicious or unrelated domain (e.g., websitefun.club)|
| **User Action**| Safe to click if verified| Dangerous; should be ignored or reported|

## ⚠️ Exam Tips & Important Notes
* **Best Practice for Users:** If you receive an email requesting an action (like accepting a friend request or resetting a password), **do not click the link**. Instead, open a new browser tab and manually navigate to the official website (e.g., `linkedin.com`) to perform the action.
* **Indicators of Phishing:** Always inspect the "From" address for subtle misspellings and hover over links to see the actual destination URL before clicking.
* **Purpose of Simulations:** Phishing campaigns are not meant to punish employees but to provide **remedial training** to improve the overall security posture of the organization.
* **Threat Vector:** Phishing can be used to deliver **malware** or to **harvest credentials** (usernames and passwords) via fake login pages.

## ❓ Questions to Review
1. What is the primary goal of conducting a simulated phishing campaign within an organization?
2. If a user receives an email that appears to be a LinkedIn connection request, what is the safest way to verify and accept the request?
3. Why might an attacker intentionally misspell a domain name in a phishing email (e.g., `linkdin.com` vs `linkedin.com`)?
4. What happens when a user clicks a link in a well-configured phishing simulation?
5. How does hovering over a hyperlink in an email help a user identify a potential phishing attempt?

## 🔗 Related Topics
* [[Social Engineering]]
* [[Malware]]
* [[Security Awareness Training]]
* [[Credential Harvesting]]
