![image](https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/blob/source/static/img/servicenow-logo.png?raw=true)

[![pages-build-deployment](https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/actions/workflows/pages/pages-build-deployment)

A lab guide website for ServiceNow Creator Workflow Workshops.

Visit: [https://CreatorWorkflowsNow.github.io](https://creatorWorkflowsNow.github.io)

# Table of Contents
- [Table of Contents](#table-of-contents)
- [Got changes?](#got-changes)
- [Want to test locally?](#want-to-test-locally)
  - [How to install Node.js and NPM on MacOS](#how-to-install-nodejs-and-npm-on-macos)
  - [How to install Node.js and NPM on Windows](#how-to-install-nodejs-and-npm-on-windows)
- [How do I run a local version of CreatorWorkflowsNow.github.io?](#how-do-i-run-a-local-version-of-creatorworkflowsnowgithubio)
- [How are my new changes made live?](#how-are-my-new-changes-made-live)
- [Who do I talk to?](#who-do-i-talk-to)
- [Maintainers](#maintainers)

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

Please note that Node.js has a PKG installer for macOS available on its website. However, installing with Homebrew is the recommended approach.

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

Contact one of the maintainers.  They will follow the steps below. 

Deployment is done by pushing the code to the gh-pages branch using this command:
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