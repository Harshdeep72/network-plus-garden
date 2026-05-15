# 006 Training and Exercises

**Module/Section:** 21 Disaster Recovery
**Tags:** #disaster-recovery #incident-response #security-testing #🌱seedling

---

![[006 Training and Exercises.mp4]]

## 📖 Core Concept
The primary focus of this lesson is the validation of security controls and incident response procedures through structured training and exercises. Organizations must move beyond theoretical planning to practical testing to ensure that security measures are effective and that personnel are prepared for real-world threats.

* **Training and Exercises:** These are essential for verifying that security controls function as intended and for identifying gaps in both technical architecture and human behavior.
* **The "Magic Wand" Problem:** A critical pitfall in theoretical exercises (like table-tops) where participants assume tasks can be completed significantly faster than they would in reality. This creates "negative training," leading management to have unrealistic expectations regarding incident response times.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology

* **Tabletop Exercise**: A discussion-based exercise where personnel walk through simulated emergency scenarios against a framework of controls. These are simple to set up but are theoretical and lack practical evidence of performance.
* **Penetration Test (Pen Test)**: A security evaluation that uses active tools and utilities to simulate an attack on a system. The goal is to discover vulnerabilities, verify if threats exist, bypass security controls, and exploit weaknesses.
* **Red Team**: The "hostile" or attacking team in an exercise. Their objective is to simulate a real-world attacker to identify system weaknesses.
* **Blue Team**: The defensive team in an exercise. This includes system administrators, network defenders, and cybersecurity analysts who work to protect the infrastructure and respond to the Red Team's attacks.
* **White Team**: The administrative/referee team. They supervise, evaluate, and manage the exercise. They are responsible for building the testing environment and providing the final report/debrief on performance.
* **Negative Training**: A phenomenon where participants (often leadership) are trained to expect unrealistic outcomes (e.g., faster recovery times) during simulations, which leads to poor decision-making during actual incidents.

## 🔄 How It Works (Processes)

### Penetration Testing Workflow
1. **Scoping:** Define specific systems or objectives to be tested (e.g., "Can you gain root access to the Windows domain controller?"). Avoid vague, organization-wide mandates.
2. **Resourcing:** Ensure the team has the necessary tools, access, and authorization.
3. **Execution:**
 * Active testing of vulnerabilities.
 * Bypassing security controls.
 * Exploiting identified weaknesses.
 * Social engineering interviews to test personnel awareness.
4. **Reporting:** Documentation of findings and identified logical weaknesses in the system architecture.

### Team Roles in Exercises
* **Red Team:** Acts as the adversary.
* **Blue Team:** Acts as the defender.
* **White Team:** Acts as the referee/facilitator. They build the environment (if a sandbox is used), monitor the progress, and provide the post-exercise debrief.

## 📊 Comparisons & Key Differences

| Feature| Tabletop Exercise| Penetration Test|
| :---| :---| :---|
| **Nature**| Theoretical/Discussion-based| Practical/Active testing|
| **Complexity**| Simple to set up| Requires scoping and resources|
| **Evidence**| Does not provide practical timing data| Provides real-world evidence of vulnerabilities|
| **Goal**| Reviewing procedures/frameworks| Exploiting vulnerabilities/testing defenses|

* **Internal vs. External Testing:** The instructor strongly recommends using third-party or dedicated internal Red Teams rather than system administrators. System administrators are often biased toward proving the system is secure, whereas a Red Team is focused on finding every possible hole.

## ⚠️ Exam Tips & Important Notes
* **Avoid Bias:** Remember that system administrators are generally not the best choice for penetration testing their own systems because they have a vested interest in proving their work is "good enough."
* **Scope is Critical:** A penetration test must be clearly defined. Testing "the whole organization" is ineffective; testing specific assets (like a domain controller) is highly effective.
* **Management Expectations:** Be wary of the "Magic Wand" effect in tabletop exercises. Always ground simulations in realistic timeframes to avoid setting management up for failure during a real incident.
* **Roles:** Know the difference between Red (Attack), Blue (Defend), and White (Referee) teams for the exam.

## ❓ Questions to Review
1. What is the primary disadvantage of a tabletop exercise compared to a penetration test?
2. Why should you avoid using system administrators to perform a penetration test on their own infrastructure?
3. Which team is responsible for managing the environment and acting as referees during a security exercise?
4. What is "negative training" in the context of disaster recovery exercises?
5. What is the first step that must be taken before beginning a penetration test?

## 🔗 Related Topics
* [[Incident Response]]
* [[Security Controls]]
* [[Social Engineering]]
* [[Vulnerability Assessment]]
