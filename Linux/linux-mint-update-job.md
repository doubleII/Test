## Weekly update Job Setup

systemctl status anacron

If not installed:
```bash
sudo apt install anacron
sudo systemctl enable --now anacron
```

### Step 1: Verify Anacron is installed & enabled
```bash
sudo anacron -V
```
### Step 2: Create the update script:
```bash
sudo nano /usr/local/bin/weekly_update.sh
```
Add:
```code
#!/bin/bash
# Log start time
echo "=== Weekly update started at $(date) ===" >> /var/log/weekly_update.log 2>&1

# Run updates and log all output
sudo apt-get update >> /var/log/weekly_update.log 2>&1
sudo apt-get -y upgrade >> /var/log/weekly_update.log 2>&1
sudo apt-get -y autoremove >> /var/log/weekly_update.log 2>&1
sudo apt-get -y autoclean >> /var/log/weekly_update.log 2>&1

# Log completion time
echo "=== Weekly update finished at $(date) ===" >> /var/log/weekly_update.log 2>&1
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

### Step 5: Check if works:
run manually

```bash
sudo /usr/local/bin/weekly_update.sh
```

check logs
```bash
cat /var/log/weekly_update.log
```
