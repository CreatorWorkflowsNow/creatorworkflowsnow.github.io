![image](https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/blob/source/static/img/servicenow-logo.png?raw=true)

[![Source build and deploy to gh-pages](https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/actions/workflows/source-build-deployment.yml/badge.svg?branch=source)](https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/actions/workflows/source-build-deployment.yml)

[![pages-build-deployment](https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/actions/workflows/pages/pages-build-deployment)

A lab guide website for ServiceNow Creator Workflow Workshops.

Visit: [https://CreatorWorkflowsNow.github.io](https://creatorWorkflowsNow.github.io)


# Pre-requisites to contribute 
- Code editor (VSCode is recommended)
- Knowledge of Markdown syntax
- Knowledge of GitHub source control (repos, branching)

# Got changes?
*Do you have suggestions or want to propose changes to lab guide content?*

1. Clone the repo.
2. Start a new branch. (Ex. xyz-lab-proposed-changes)
3. Make changes to the markdown files for that lab in it's lab folder. (Ex. /labs/logisics/)
4. Push changes to repo.
5. Open Pull Request to merge with "source" branch.

# Want to test locally? 
You'll need to install 'npm' onto your local system.

## How to install Node.js and NPM on MacOS
Here are the steps to install Node.js and NPM on macOS:

1. **Install Homebrew**: Homebrew is a package manager for macOS that simplifies the installation of software. You can install it by visiting the [Homebrew's official website](https://www.youtube.com/watch?v=0i-gstqgjuE) and following the instructions.

2. **Install Node.js and NPM**: Once you have Homebrew installed, you can install Node.js and NPM by typing the following command in your terminal: `brew install node`. This command will download and install the dependencies.

3. **Verify Installation**: After the installation finishes, you can confirm that you successfully installed Node.js by checking its version with the command: `node -v`. Similarly, you can check the installed version of NPM by typing: `npm -v`.

*Please note that Node.js has a PKG installer for macOS available on its website. However, installing with Homebrew is the recommended approach.*

## How to install Node.js and NPM on Windows
1. **Download the installer**: Download the Windows Installer from the Node.js official website. [https://nodejs.org/en/download](https://nodejs.org/en/download)

2. **Run the installer**: Double-click the .msi binary files to initiate the installation process.

3. **Verify Installation**: After the installation finishes, you can confirm that you successfully installed Node.js by checking its version with the command: `node -v`. Similarly, you can check the installed version of NPM by typing: `npm -v`.

# How do I run a local version of CreatorWorkflowsNow.github.io?
This is much better than just viewing as a preview in VSCode as you will be able to see the full styling of the site in your local web browser.

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Open your web browser to http://localhost:3000

# How are my new changes made live? 
When your pull request is approved to merge to the branch 'source', an automated GitHub Action will handle the deployment to the live site by deploying to the branch 'gh-pages'.

## Can I deploy manually from my local machine to gh-pages?  
Yes, but it is not recommended.  The recommended approach is to open a PR to merge with the 'source' branch and let the automated GitHub action take care of it. 

Deployment is done by pushing the code to the gh-pages branch like this: 
- Sync most recent copy of the 'source' branch.
- Run these commands in the repo folder: 
- `npm run build`
- `npm run deploy`

# Who do I talk to?

If you have any questions or problems, please [open an issue](https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/issues) on github and we will do our best to give you a timely answer.

# Maintainers
The lab guides are maintained by:

- Dale Stubblefield - https://github.com/dalestubblefield
- Kristy Merriam - https://github.com/KristyS96
- Marc Mouries - https://github.com/marcmouries