# 010 Using Source Control

**Module/Section:** 19 Orchestration and Automation
**Tags:** #source-control #git #automation #infrastructure-as-code #🌱seedling

---

![[010 Using Source Control.mp4]]

## 📖 Core Concept
The primary focus of this lesson is **Source Control** (also known as Version Control), specifically using **Git**. Source control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

* **Purpose:** It is essential for teams working on code, infrastructure templates, runbooks, and scripts. It allows multiple users to collaborate without overwriting each other's work and provides a history of who made changes and why.
* **Git:** The industry-standard tool for distributed version control.
* **Exam Perspective:** You are not required to memorize specific Git commands for the exam. Instead, you must understand the **capability** and **utility** of source control in an automated network environment (e.g., managing Infrastructure as Code).

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology

* **Source Control (Version Control):** A management system that tracks changes to files, allowing users to revert to previous versions and collaborate on shared projects.
* **Git:** A distributed version control system used to track changes in source code during software development.
* **Repository (Repo):** A storage location for software packages or code; in Git, it contains the project files and the entire history of changes.
* **Commit:** A snapshot of the changes made to the files in the repository. It saves the current state of the project.
* **Branch:** A parallel version of the repository. The default branch in Git is typically called `master` (or `main`).
* **Untracked Files:** Files in your working directory that are not yet being monitored by Git.
* **Staging:** The process of preparing files to be committed. You "add" files to the staging area before committing them.
* **Working Tree:** The directory where you are currently editing files. A "clean" working tree means all changes have been committed and the files match the repository's last state.
* **Vim:** A highly configurable text editor built into most Unix/Linux/macOS systems.

## 🔄 How It Works (Processes)

### Initializing Git
1. **Configuration:** Set global identity so the system knows who is making changes:
 * `git config --global user.name "Name"`
 * `git config --global user.mail "email@example.com"`
2. **Initialization:** Create a directory and turn it into a Git repository:
 * `mkdir TEST-PROJECT`
 * `git init TEST-PROJECT`
 * This creates a hidden `.git` directory which stores all metadata, branches, and version history.

### The Git Workflow
1. **Create/Modify:** Create a file (e.g., `test.txt`) using an editor like `vim`.
2. **Check Status:** Use `git status` to see which files are modified or untracked.
3. **Stage:** Use `git add <filename>` to move files from "untracked" or "modified" to the staging area.
4. **Commit:** Use `git commit -m "message"` to save the staged changes to the repository history.
5. **Verify:** Use `git log` to view the history of commits, showing the most recent changes at the top.

## 📊 Comparisons & Key Differences

| Feature| Description|
| :---| :---|
| **Untracked File**| A file present in the directory that Git is not yet monitoring.|
| **Staged File**| A file that has been added to the index and is ready to be committed.|
| **Committed File**| A file whose changes have been permanently saved in the repository history.|

## ⚠️ Exam Tips & Important Notes
* **Exam Focus:** Do not stress about memorizing the syntax of `git config` or `vim` commands. Focus on the **concept**: Why do we use Git? (To track changes, enable collaboration, and manage Infrastructure as Code).
* **Hidden Directories:** Remember that the `.git` directory is hidden (starts with a dot) and contains the entire repository structure.
* **Linux Basics:** The instructor noted that `.` represents the current directory and `..` represents the parent directory; this is a universal concept across Linux, Unix, and macOS.
* **Clean Working Tree:** If `git status` says "working tree clean," it means there are no uncommitted changes.

## ❓ Questions to Review
1. What is the primary purpose of using a tool like Git in a network automation environment?
2. What command is used to check the current status of files in a Git repository?
3. What is the difference between an "untracked" file and a "staged" file?
4. Why is it important to configure `user.name` and `user.mail` in Git?
5. What does the `git log` command display?
6. If you have modified a file but have not run `git add`, will that change be included in your next `git commit`?

## 🔗 Related Topics
* [[Infrastructure as Code]]
* [[Automation and Orchestration]]
* [[Linux Command Line Basics]]
