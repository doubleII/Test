# Test repository Git commands
test repository
<br/>
## Git commands

$ git status -u //show all untracked files
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
$ git branch -d branchname
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
1.>$ git pull // update your local master from remote master
<br/>2.>$ git checkout -b newbranch_name  //create new branch
<br/>3.>$ git add . // add all changes into feature branch
<br/>4.>$ git commit -m "comment"  // add new comment
<br/>5.>$ git checkout master // (switch) change to master branch
<br/>6.>$ git pull // update your local master from the remote master
<br/>7.>$ git checkout my_feature_branch // switch to my_feature_branch
<br/>8.>$ git rebase master
<br/>9.>$ git checkout master // switched to master branch
<br/>10.>$ git rebase my_feature_branch // set the changes from my_fetaure_branch on the top of your local master

<br/>Video A better git workflow with rebase 
<br/>link: https://www.youtube.com/watch?v=f1wnYdLEpgI


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


### Delete branch
#### remoter branch
$ git push origin --delete branchname
#### local branch
$

### Git Commands (reset, add file, add all)
link: https://www.youtube.com/watch?v=qpIvpP1Ag2A

### Revert a git repository to previous commit
$ git checkout commitnummber
<br/>link: https://www.oreilly.com/content/how-do-i-revert-a-git-repo-to-a-previous-commit/

### Log commands
<br/>$ git log --pretty=oneline //show logg in line
<br/>$ git log --oneline //short log info - better

<br/> -- very useful log info 
$ git log --pretty=format:"Author commiter: %cn E-Mail: %ae Commit Name: %cn"
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

















