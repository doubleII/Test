# Git Commands

## Table of content
* Workflow
* Texteditor
* Config repository
* Create lokal repository

## Workflow 

commit -> pull -> push


## Texteditor

FOR WINDOWS

Insert or edit commit. `I` for Insert some text.

Save the file in the text editor and exit. `ESC` `:` `W` `Q` `ENTER`

## Utility Conventions

**Utility Argument Syntax**

Utility Convention follow standard conventions for argument syntax and behavior. The conventions are based on the utility conventions outlined in POSIX 1003.1-2017. Utility convention will help you to understand the git synopsis.


[Link to website:](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html)

[how to read it:](https://medium.com/@jaewei.j.w/how-to-read-man-page-synopsis-3408e7fd0e42)


## Git commands

## Config your repository
```bash 
git config --global user.name "your user name"  // add user name into global config list
```

```bash
git config --global user.email vonavii@yahoo.com // add user email into global config list
```

```bash
git config --list // show global config list
```
## Create local repository
```bash
git init .
```
## Status
```bash
git status -u //show all untracked files
```

```bash
git status -s // short
```
```bash
git checkout master // change location from some branch to master
```
## How to change the remote repository path to another repository
1. Show list of current repository
```bash
git remote -v
```
2. Change to remote name. 
```bash
git remote set-url (name) (newurl) // git remote set-uri origing http://newserver/myproject.git 
```
link: https://somedevtips.com/version-control/git-how-to-change-the-remote-repository-of-a-project/

## Show remote repository url
```bash
git remote show origin
```

## Branch info
```bash 
git branch // show all local branches
```

```bash 
git branch -a // show all remote branches
```

## Create new branch
```bash 
git checkout -b new_branch_name // create lokal new branch
``` 

```bash 
git push origin new_branch_name // push new branch <br/>
```
Mehr Information findest du hier:

link: https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches

## Include all files/subfolders

This command includes all files from the current folder, all subfolders and all filies in all subfolders.

```bach
git add ./*
```

## Update remote repository from local
```bash 
git status
```

```bash 
git add .  // add all changed files from current directory
```
```bash 
git commit -m "comment"
```
```bash
git push origin branchName
```

## Update local branch from remote branch
```bash 
git pull origin branch_name
```

## Checkout local branch from remote branch

....

link: https://www.youtube.com/watch?v=CdcoSnSaOWs&ab_channel=OSPY</br>

## Delete branch

#### remote branch
```bash 
git push origin --delete branchname
```
#### local branch
```bash 
git branch -D branchname
```

## Compare old and new file 

Show changes between commits

```bash 
git diff
```

### Compare two branches

```bash 
git diff branch1..branch2
```

## Amend (nachbessern) commit message

...

```bash 
git commit --amend -m "your new message" <br/>
```

## Update local repository from remote
```bash 
git pull  // update local repository from remote.
```

### Update master from another branch
```bash 
git checkout master
```

...

```bash 
git merge origin/FeatureBranch
```
```bash 
git status
```

... 

```bash 
git push origin master
```

## Add new file into repository
```bash 
touch file.txt
```

## Better workflow with "rebase"

1. What is git rebase?

Rebasing is the process of moving or combining a sequence of commits to a new base commit.

Add new comment to your lokal branch:

(#1). (Switch) Change to master branch.
```bash
git checkout master
```
(#2). Update your local master from remote master.
```bash
git pull
```
(#3). Switch to my_feature_branch.
```bash
git checkout my_feature_branch
```
(#4). This command reenter your changes as last changes on the top.
```bash
git rebase master
```
(#5). Switch to master branch.
```bash
git checkout master
```
(#6). Set the changes from my_feature_branch on the top of your lokal master branch.
```bash
git rebase my_feature_branch
```
(#7). Update your remote repository.
```bash
git push
```
<br/>Video A better git workflow with rebase 
<br/>link: https://www.youtube.com/watch?v=f1wnYdLEpgI

if you move `rebase` to many sequences at once you need first to expand the `merge Limit`. The default value is 7000. 

```bash
git config merge.renameLimit 999999
```

## Squach - Multiple commits into one with squach

Sehr wichtig:<br/>
Squash bitte nicht die erste Commit-Zeile. Wenn du das machst, kommt eine Fehlermeldung zurück. <br/>
Wenn das passiert, mach alle Änderung vollständig rückgängig. Das macht den folgenden Befehl:
``` bash
git rebase --abort
``` 
und fange wieder von vorne an.In zweiten Schritt kann man die Commits-Messages bearbeiten.

```bash 
git rebase -i HEAD~2 // 2 number of last commits
```
change pick mit s for squash. 

Tutorials: <br/>
link: https://www.youtube.com/watch?v=2E23I9PzplM&ab_channel=Academind

link: https://www.youtube.com/watch?v=V5KrD7CmO4o&ab_channel=TheModernCoder

## Clone Repository to another repository
<br/>(#1). Open Git Bash.
<br/>(#2). Create a bare clone of the repository.
<br/>`git clone --bare https://github.com/exampleuser/old-repository.git`

<br/>(#3). Mirror-push to the new repository.
```bash
cd old-repository.git
git push --mirror https://github.com/exampleuser/new-repository.git
```


<br/>(#4). Remove the temporary local repository you created earlier.
```bash
cd ..
rm -rf old-repository.git
```

<br/>link: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository

## Change the local last commit message.

Change the local commited message using `git`.

```bash 
git commit --amend
```
## Reset to origin/master

If you want to reset (get back) your local branch to same commit on remote master branch, you need to use:

```bash
git reset --hart origin/master
```
In this case you will loose all local changes on this branch.

You can use this command for every remote branch, that need to be reset.

```bash
git reset --hart origin/yourselectedbranch
```


## Reset to last commit. 

```diff
- Reset is not revert!!!
```

</br>(#1) `git reset --soft HEAD~1` 
</br>(#2) [edit files if nessesary]
</br>(#3) `git add .`
</br>(#4) `git commit -m "new commit message"` 

Also the changes will stay on your index.

Using `soft` commant, you will remove the last commit from the current branch, but the file changes will stay in your working tree and in the staging area to. Also the changes will stay in your index. If you get as next command only 'git commit' will create a commit with the exact same changes as the commit you *removed* before.

```bash
git reset --soft HEAD~1
```

(#1) Remove the last commit but the file changes will stay in your working directory they are stocked actually in the staging area. That means if you run `git status` the changed file will be green. That means all reseted files are now in staging area. If you want to bring it down in your working directory  (red) (unstage from staging area) use:

```bash
git reset HEAD filename.end
```

Now is your file removed from stagin area as working copy. If you check the status. You will see your file is down as working copy. That is how to unstage or remove a file from staging area. [Unstage file](https://www.youtube.com/watch?v=s_sAZiZL_3A&ab_channel=thenewboston)

Undo changes over git command

```bash
git checkout filename.end
```

<br>
<br>

```diff
- something is wrong. Work not as expected. Check it! 
- If you want to trash your changes and reset to the HEAD without any changes (undo local changes)
- git reset --hard HEAD
```



## reset, add file, add all
link: https://www.youtube.com/watch?v=qpIvpP1Ag2A

## Revert a git repository to previous commit

```bash
git checkout commitnummber
```

<br/>link: https://www.oreilly.com/content/how-do-i-revert-a-git-repo-to-a-previous-commit/

## Stashing (verstecken) and Cleaning
in arbeit...
```bash
```

link: https://www.youtube.com/watch?v=KLEDKgMmbBI&ab_channel=CoreySchafer

## Log commands
```bash 
git log --pretty=oneline //show logg in line
```

```bash 
git log --oneline //short log info - better
```

-- very useful log info 
```bash 
git log --pretty=format:"date: %cr | Autor: %ae | Commit: %cn"
```

```bash 
git log --pretty=format:"Author commiter: %cn E-Mail: %ae Commit Name: %cn"
```
 
link: https://medium.com/@syakirharis25/git-log-files-management-and-its-importance-for-security-monitoring-cdd0f2229e7c
<br/>link: https://www.youtube.com/watch?v=x2hb3LeB-0k&ab_channel=BogdanStashchuk

## Info
version of control - Versionsverwaltung <br/>
staging area - Sammelpunkt
