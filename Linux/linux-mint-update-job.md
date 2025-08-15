## Weekly update Job Setup

### Step 1: Verify Anacron is installed & enabled
```bash
sudo anacron -v
```
### Step 2: Create the update script:
```bash
sudo nano /usr/local/bin/weekly_update.sh
```
Add:
```code
#!/bin/bash
sudo apt update && sudo apt -y upgrade && sudo apt -y autoremove && sudo apt -y autoclean
```
Save and exit.

### Step 3: Make it executable
```bash
sudo chmod +x /usr/local/bin/weekly_update.sh
```
### Step 4: Add job to Anacron
Open Anacron’s config:
```bash
sudo nano /etc/anacrontab # edit jobs
```
Add this line at the end:
```swift
7   10  weekly_update  /usr/local/bin/weekly_update.sh # add weekly job
```

### Meaning:
* 7 → run every 7 days
* 10 → wait 10 minutes after startup before running
* weekly_update → job name
* /usr/local/bin/weekly_update.sh → your update script

systemctl status anacron
```
If not installed:
```bash
sudo apt install anacron
sudo systemctl enable --now anacron
```
### Step 5: Check logs for execution:
```bash
grep weekly_update /var/log/syslog
```