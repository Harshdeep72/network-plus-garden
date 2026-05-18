#!/bin/bash

# Define paths
SOURCE_DIR="../network-notes-garden-ssd/content"
DEST_DIR="./content"

echo "[Sync] Starting synchronization from Obsidian Vault to Frontend Dashboard..."

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "[Error] Source directory $SOURCE_DIR does not exist. Ensure the external SSD is mounted."
    exit 1
fi

# Use rsync to synchronize the directories
# -a: archive mode (preserves permissions, times, symbolic links, etc.)
# -v: verbose
# --delete: delete extraneous files from destination
rsync -av --delete --exclude='INT245' "$SOURCE_DIR/" "$DEST_DIR/"

# Also sync the INT245 college subject notes
echo "[Sync] Synchronizing INT245 College Subject notes..."
rsync -av ../INT245/ "$DEST_DIR/INT245/"

echo "[Sync] Synchronization complete."

# Show git status
echo ""
echo "[Sync] Checking git status..."
git status
