# INtro
git - version control system
it hepl us to track history and also to work together

vrsion control system - has two contegores :
centralized : here all are connected to one server, if that fails we wont able to collaborate or save snapshots of our project
eg: subversion, Team foundation server
distributed : every team member has the copy of their project with its history on their machine. so we can sve the snapshots of our project locally on our machine.
eg:git,mercurial
git is more popular as its free,fast,open source


## using git
1. command line
2. code editors/IDE eg:vs code
3. graphical interfaces specifically for git eg:git kraken ,sourcetree

## configuring git
two levels of setting are there
system level - here settings are applied to all users
global level here settings are applied to all repositories of the current user
local - current repository
eg: git config --global user.name "name"
git config --global user.email name@gmail.com
git config --global core.editor "code --wait"
how to configure end of line : git config --global core.autocrlf input

## getting help
search for git config in google or git config --help

## getting snapshots
1. initializing a repository - git init - this creates a hidden subdirectory called .git
to remove got repositry use  = rm -rf .git

## git workflow
project directory  - git repository /its hidden subdirectory in our project directory
after making changes to project directory, when we want to record the changes we commit those changes to git respositry.
comminting changes means taking a snapshot of out project
in git we have a special area called staging area or index, when we finsh making changes we add modifed files to the staging area and review our changes and if everyting is good will commit changes. 
once we commit changes the staging are wont get emptied, staging area will have the same snapshot that we stored in the repository
each commit produces a unique id, identifier gets genreted by git its like a revison number . 
git compresses the content and doesnt store the duplicate conetent
each git commit contains a complete snapshot of the project so that we can quicklt go back to the previous state.

## staging files
first check status of the file  : git status
adding the files to staging area :
 1. git add file1.txt  // staging a single file
 2. git add fule2.txt  //staging multiple files
 3. git add *.txt // using patters to coomit files or git add .  // this add entire directory recursively

## commiting the snapshot to store it permanently in git repository
git commit -m  "message"
to add multiple lines git commit - then presss enter


commands: 
git add filename
git commit -m "message"
