# Test repository Git commands
test repository
<br/>
## Git commands

### Common commands
$ git status -u //show all untracked files <br/>
$ git checkout master // change location from some branch to master<br/>
### How to change the remote repository path to another repository
<br/>1. Show list of current repository
$ git remote -v
<br/>2. Change to remote name. 
$ git remote set-url (name) (newurl) // git remote set-uri origing https:....
<br/> link: https://somedevtips.com/version-control/git-how-to-change-the-remote-repository-of-a-project/
### Show remote repository url
$ git remote show origin
### Create new branch
$ git checkout -b new_branch_name // create lokal new branch
<br/>$ git push origin new_branch_name // push new branch <br/>
<br/>More Info sindeste hier
<br/> link: https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches
### Branch info
$ git branch // show all local branches
<br/>$ git branch -a // show all remote branches
### Update remote repository from local
$ git status
<br/>$ git add .  // add all changed files 
<br/>$ git commit -m "comment"
<br/>$ git push origin branchName
### Update local branch from remote branch
$ git pull origin branch_name
### Checkout local branch from remote branch
link: https://www.youtube.com/watch?v=CdcoSnSaOWs&ab_channel=OSPY</br>
### Delete branch
#### remote branch
$ git push origin --delete branchname
#### local branch
$ git branch -D branchname
### Compare two branches
$ git diff branch1..branch2
### Added new line from remote repository to local repository
$ git pull  // update local repository from remote.
### Update master from another branch
$ git checkout master
<br/>$ git merge origin/FeatureBranch
<br/>$ git status
<br/>$ git push origin master
  
### Add new file into repository
$ touch file.txt

### Better workflow with "rebase"
<br/>add new comment to your lokal bracnh
<br/>1.>$ git checkout master // (switch) change to master branch
<br/>2.>$ git pull // update your local master from the remote master
<br/>3.>$ git checkout my_feature_branch // switch to my_feature_branch
<br/>4.>$ git rebase master // this reenter your changes as last changes ot the top
<br/>5.>$ git checkout master // switched to master branch
<br/>6.>$ git rebase my_feature_branch // set the changes from my_fetaure_branch on the top of your local master
</br>7. $ git push // update your remote repository

<br/>Video A better git workflow with rebase 
<br/>link: https://www.youtube.com/watch?v=f1wnYdLEpgI

### Multiple commits into one with squach
#### Squash bitte nicht die erste Commit-Zeile. Wenn du es machst kommt eine Fehlermeldung zurück und besser mach </br>$ git rebase --abort </br>und fange neue an. Du kannst in zweiten Schritt die Commits-Messages bearbeiten
</br>>$ git rebase -i HEAD~2 // 2 number of last commits
</br> change pick mit s for squash. 
</br> link: https://www.youtube.com/watch?v=2E23I9PzplM&ab_channel=Academind
</br> link: https://www.youtube.com/watch?v=V5KrD7CmO4o&ab_channel=TheModernCoder

### Clone Repository to another repository
<br/>1. Open Git Bash.
<br/>2. Create a bare clone of the repository.
<br/>$ git clone --bare https://github.com/exampleuser/old-repository.git

<br/>3. Mirror-push to the new repository.
<br/>$ cd old-repository.git
<br/>$ git push --mirror https://github.com/exampleuser/new-repository.git

<br/>4. Remove the temporary local repository you created earlier.
<br/>$ cd ..
<br/>$ rm -rf old-repository.git

<br/>link: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository

### Git Commands (reset, add file, add all)
link: https://www.youtube.com/watch?v=qpIvpP1Ag2A

### Revert a git repository to previous commit
$ git checkout commitnummber
<br/>link: https://www.oreilly.com/content/how-do-i-revert-a-git-repo-to-a-previous-commit/

### Log commands
<br/>$ git log --pretty=oneline //show logg in line
<br/>$ git log --oneline //short log info - better

<br/> -- very useful log info 
<br/>$ git log --pretty=format:"date: %cr | Autor: %ae | Commit: %cn"
<br/>$ git log --pretty=format:"Author commiter: %cn E-Mail: %ae Commit Name: %cn"
<br/>link: https://medium.com/@syakirharis25/git-log-files-management-and-its-importance-for-security-monitoring-cdd0f2229e7c
<br/>link: https://www.youtube.com/watch?v=x2hb3LeB-0k&ab_channel=BogdanStashchuk

### git config
<br/>$ git config --global user.name "your user name"  // add user name into global config list
<br/>$ git config --global user.email vonavii@yahoo.com // add user email into global config list

<br/>$ git config --list // show global config list


## Linux commands

pwd - print name of current directory </br>
cd /usr/local/bin - go to bin directory </br>
cd .. // up to parent directory </br>
ls -l //print all directories in newline </br>
find / -name "folder name" // find folder </br>

<br/>sudo -i //auf root umschalten
<br/>dpkg -i
<br/>dpkg -l | grep qt // das Programm gibt am Ende  Name - | Pipe

















