# Test repository Git commands

## Utility Conventions
link: https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html
link: https://medium.com/@jaewei.j.w/how-to-read-man-page-synopsis-3408e7fd0e42

test repository

## Git commands

### git config - config your repository
```bash 
$ git config --global user.name "your user name"  // add user name into global config list
```

```bash
$ git config --global user.email vonavii@yahoo.com // add user email into global config list
```

```bash
$ git config --list // show global config list
```
### create local repository
```bash
$ git init .
```
### Common commands
```bash
$ git status -u //show all untracked files
```

```bash
$ git status -s // short
```
```bash
$ git checkout master // change location from some branch to master
```
### How to change the remote repository path to another repository
1. Show list of current repository
```bash
git remote -v
```
2. Change to remote name. 
```bash
git remote set-url (name) (newurl) // git remote set-uri origing http://newserver/myproject.git 
```
link: https://somedevtips.com/version-control/git-how-to-change-the-remote-repository-of-a-project/

### Show remote repository url
```bash
$ git remote show origin
```
### Create new branch
```bash 
$ git checkout -b new_branch_name // create lokal new branch
``` 

```bash 
$ git push origin new_branch_name // push new branch <br/>
```
More Info sindeste hier

link: https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches

### Branch info
```bash 
$ git branch // show all local branches
```

```bash 
$ git branch -a // show all remote branches
```
### Include all files/subfolders

This command includes all files from the current folder, all subfolders and all filies in all subfolders.

```bach
git add ./*
```

### Update remote repository from local
```bash 
$ git status
```

```bash 
$ git add .  // add all changed files from current directory
```
```bash 
$ git commit -m "comment"
```
```bash
$ git push origin branchName
```

### Update local branch from remote branch
```bash 
$ git pull origin branch_name
```

### Checkout local branch from remote branch
link: https://www.youtube.com/watch?v=CdcoSnSaOWs&ab_channel=OSPY</br>
### Delete branch
#### remote branch
```bash 
$ git push origin --delete branchname
```
#### local branch
```bash 
$ git branch -D branchname
```

### Compare old and new file 
```bash 
$ git diff
```

### Amend (nachbessern) commit message
```bash 
$ git commit --amend -m "your new message" <br/>
```

### Compare two branches
```bash 
$ git diff branch1..branch2
```
### Added new line from remote repository to local repository
```bash 
$ git pull  // update local repository from remote.
```

### Update master from another branch
```bash 
$ git checkout master
```

```bash 
$ git merge origin/FeatureBranch
```
```bash 
$ git status
```

```bash 
$ git push origin master
```

### Add new file into repository
```bash 
$ touch file.txt
```

### Better workflow with "rebase"

add new comment to your lokal bracnh
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

Sehr wichtig:<br/>
Squash bitte nicht die erste Commit-Zeile. Wenn du das machst, kommt eine Fehlermeldung zurück. <br/>
Wenn das passiert, mach alle Änderung vollständig rückgängig. Das macht den folgenden Befehl:
``` bash
git rebase --abort
``` 
und fange wieder von vorne an.In zweiten Schritt kann man die Commits-Messages bearbeiten.

```bash 
$ git rebase -i HEAD~2 // 2 number of last commits
```
change pick mit s for squash. 

Tutorials: <br/>
link: https://www.youtube.com/watch?v=2E23I9PzplM&ab_channel=Academind

link: https://www.youtube.com/watch?v=V5KrD7CmO4o&ab_channel=TheModernCoder

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

### Git reset to last commit. Reset is not revert!!!
</br>$ git reset --soft HEAD~1              (#1) 
</br>[edit files if nessesary]              (#2)
</br>$ git add .                            (#3)
</br>$ git commit -m "new commit message"   (#4) 

(#1) remove the last commit but the file changes will stay in your working directory they are stock actually in staging area. That means if you run `git status` the changed file
<br>will be green. That means the are now in staging area. If you want to bring the files down in your working directory (unstage from staging area) use:

```bash
git reset HEAD filename
```

Now your file is unstaged from stagin area.
[Unstage file](https://www.youtube.com/watch?v=s_sAZiZL_3A&ab_channel=thenewboston)

Also the changes will stay on your index.

Using `soft` commant, you will remove the last commit from the current branch, but the file changes will stay in your working tree. Also the changes will stay in your index.
If you get as next command only 'git commit' will create a commit with the exact same changes as the commit you *removed* before.

```bash
git reset --soft HEAD~1
```

```diff
- something is wrong. Work not as expected. Check it! 
- If you want to trash your changes and reset to the HEAD without any changes (undo local changes)
- git reset --hard HEAD
```



### Git Commands (reset, add file, add all)
link: https://www.youtube.com/watch?v=qpIvpP1Ag2A

### Revert a git repository to previous commit
$ git checkout commitnummber
<br/>link: https://www.oreilly.com/content/how-do-i-revert-a-git-repo-to-a-previous-commit/

### Stashing (verstecken) and Cleaning
in arbeit...
```bash
```

link: https://www.youtube.com/watch?v=KLEDKgMmbBI&ab_channel=CoreySchafer

### Log commands
```bash 
$ git log --pretty=oneline //show logg in line
```

```bash 
<br/>$ git log --oneline //short log info - better
```

-- very useful log info 
```bash 
$ git log --pretty=format:"date: %cr | Autor: %ae | Commit: %cn"
```

```bash 
$ git log --pretty=format:"Author commiter: %cn E-Mail: %ae Commit Name: %cn"
```
 
link: https://medium.com/@syakirharis25/git-log-files-management-and-its-importance-for-security-monitoring-cdd0f2229e7c
<br/>link: https://www.youtube.com/watch?v=x2hb3LeB-0k&ab_channel=BogdanStashchuk

## Info
version of control - Versionsverwaltung <br/>
staging area - Sammelpunkt
