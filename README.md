# Test
test repository
<br/>
## Update remote repository from local
<br/>git status
<br/> git add .  // add all changed files 
<br/> git commit -m "comment"
<br/> git push origin branchName
<br/>
## Added new line from remote repository to local repository
<br/> git pull  // update local repository from remote.
## Update master from another branch
<br/> git checkout master
<br/> git merge origin/FeatureBranch
<br/> git status
<br/> git push origin master
## Add new file into repository
<br/> touch file.txt
## Better workflow with "rebase"
<br/>1. git pull // update your local master from remote master
<br/>2. git checkout -b newbranch
<br/>3. git add . // add all changes into feature branch
<br/>4. git commit -m "comment"
<br/>5. git checkout master // change to master branch
<br/>6. git pull // update your local master from the remote master
<br/>7. git checkout my_feature_branch
<br/>8. git rebase master
<br/>9. git checkout master
<br/>10. git rebase my_feature_branch  // // set the changes from my_fetaure_branch on the top of your local master

----
<br/>[Video "A better git workflow with rebase"]: https://www.youtube.com/watch?v=f1wnYdLEpgI
