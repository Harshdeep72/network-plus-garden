# 009 Source Control

**Module/Section:** 19 Orchestration and Automation
**Tags:** #git #version-control #automation #🌱seedling

---

![[009 Source Control.mp4]]

## 📖 Core Concept
The primary focus of this lesson is **Version Control**, specifically the use of **Git**. Version control allows teams to manage different iterations of code, minimize conflicts during collaborative development, and revert to previous states if errors occur.

* **Distributed Version Control:** Git allows multiple developers to have a full copy of the project history locally, enabling offline work and robust backup.
* **Git Repository:** The central storage area for code versions and associated metadata.
* **Branching:** A core feature that allows developers to diverge from the main codebase to work on features or bug fixes in isolation without affecting the "master" branch.
* **Collaboration:** Git facilitates global teamwork by allowing users to synchronize their local changes with a central/remote repository via push and pull operations.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
N/A — not covered in this lesson.

## 🔑 Key Terminology

* **Git:** An open-source, distributed version control system created in 2005 by the creator of the Linux operating system.
* **Repository (Repo):** A storage area where versions of code and related files are kept.
* **Snapshot:** A representation of the state of the files in the repository at a specific moment in time (created via `commit`).
* **Branch:** A pointer to a specific snapshot of changes; used to isolate development work.
* **Master Branch:** The primary or main branch of the project where finalized, integrated code resides.
* **Working Copy:** A local version of the repository that a developer actively modifies.
* **.gitignore:** A configuration file used to identify specific files or directories that Git should ignore and not track during a commit.
* **.git/**: A hidden directory created by `git init` that acts as a database for all Git version control metadata and history.

## 🔄 How It Works (Processes)

### Initializing a Project
1. **Configure:** `git config --global user.name 'Name'` (Sets global user identity).
2. **Create Directory:** `mkdir /dev-project` (Creates the folder).
3. **Navigate:** `cd /dev-project` (Enters the folder).
4. **Initialize:** `git init` (Turns the directory into a Git repository).

### Standard Development Workflow
1. **Clone:** `git clone [repository]` (Creates a local working copy).
2. **Add:** `git add [filename]` (Stages files to be tracked).
3. **Commit:** `git commit -m "[message]"` (Saves the snapshot of staged changes).
4. **Status Check:** `git status` (Displays which files are staged, modified, or untracked).

### Branching and Merging
1. **Create Branch:** `git branch [branch-name]` (Spawns a new pointer for isolated work).
2. **Switch Branch:** `git checkout [branch-name]` (Moves the working environment to the specified branch).
3. **Merge:** `git merge [branch-name]` (Integrates changes from a feature branch back into the master branch).

### Collaboration Workflow
1. **Pull:** `git pull` (Retrieves changes from a remote repository and merges them into the local copy).
2. **Push:** `git push` (Uploads local commits to a remote/central repository).

## 📊 Comparisons & Key Differences

| Command| Purpose|
| :---| :---|
| **git init**| Creates a new local repository.|
| **git clone**| Copies an existing remote repository to the local machine.|
| **git add**| Stages files for the next commit.|
| **git commit**| Saves the snapshot of staged changes.|
| **git push**| Sends local commits to a remote server.|
| **git pull**| Fetches and integrates remote changes into the local copy.|

## ⚠️ Exam Tips & Important Notes
* **Scope:** You do not need to be a Git expert for the Network+ exam. Focus on understanding the *purpose* of Git and the function of the primary sub-commands.
* **The `.git` directory:** Remember that this directory is the "database" for the project.
* **The `.gitignore` file:** This is a common exam topic; remember it is used to exclude files (like logs or temporary text files) from being tracked.
* **Log usage:** You can filter logs by time (e.g., `git log --since=10.days`) to troubleshoot recent changes.

## ❓ Questions to Review
1. Which command is used to initialize a new Git repository in a directory?
2. What is the purpose of the `git commit` command?
3. How does a developer isolate new feature work from the master branch?
4. What is the function of the `.gitignore` file?
5. If you want to see the changes made to a repository in the last week, which command would you use?
6. What is the difference between `git push` and `git pull`?

## 🔗 Related Topics
* [[Orchestration and Automation]]
* [[Linux Command Line Basics]]
