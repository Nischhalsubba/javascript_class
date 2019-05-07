// Remote repository -> github/gitlab

//Local repository -> our project files in our workstation

//Staging area -> the files which area added after adding and before the commit message
// --------------------------------

// tags in github

// git log
// latest changes on the top oldest on the bottom

// git status
// staging area is in green color
// (.) current position (..) upper folder

// git commit -m "Message here"
// git reset HEAD app/ -->> it removes the files from staging area

// git diff (file path)



URL
//HTTPS -> email and password is required every time you push
//SSH(Secure Shell) -> inside ssh folder (id_rsa)   and (id_rsa_pub)

// git remote add origin (URL HERE!!)
// origin= remote 


// to change git clone folder name
// git clone (URL) (NEW FOLDER NAME)






//STEP TO FOLLOW FOR ADDING A REPO TO REMOTE

// git init -> initialize git in project


// Make changes to your files
// git add file_name -< add files to stating area


// after adding the files we add a commit message to let us know what we did
// git commit -m "your message goes here" -> ADD commit message


//Originis the shortcut for getting the url
//WE add remote repository url to push our project to git stations(github/gitlab/gitbucket)
//git remote add origin url_for_remote_repo -> adds the remote link to origin variable

// to list all the remote repository's urls
// git remote -v 

// To push the project to remote repository
// / git push origin master -> master is the name of the branch that we want to pull tp local

// to pull changes committed in remote repository
// git pull





