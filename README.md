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
5. Open [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to merge with "source" branch.

# Want to test locally? 
You'll need to install `node.js` and `npm` onto your local system.

## How do I install Node.js and NPM on MacOS?
Here are the steps to install Node.js and NPM on macOS:

1. **Install Homebrew**: Homebrew is a package manager for macOS that simplifies the installation of software. You can install it by visiting the [Homebrew's official website](https://www.youtube.com/watch?v=0i-gstqgjuE) and following the instructions.

2. **Install Node.js and NPM**: Once you have Homebrew installed, you can install Node.js and NPM by typing the following command in your terminal: `brew install node`. This command will download and install the dependencies.

3. **Verify Installation**: After the installation finishes, you can confirm that you successfully installed Node.js by checking its version with the command: `node -v`. Similarly, you can check the installed version of NPM by typing: `npm -v`.

*Please note that Node.js has a PKG installer for macOS available on its website. However, installing with Homebrew is the recommended approach.*

## How do I install Node.js and NPM on Windows?
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

## Can I deploy manually from my local system to gh-pages?  
The recommended approach is to open a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to merge with the 'source' branch and let the automated GitHub Action take care of it. 

# How are the new changes published?

When new changes are pushed to the branch 'source', this kicks off a series of [GitHub Actions](https://docs.github.com/en/actions).

## 1. [Source build and deploy to gh-pages](https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/blob/source/.github/workflows/source-build-deployment.yml) 
[![Source build and deploy to gh-pages](https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/actions/workflows/source-build-deployment.yml/badge.svg?branch=source)](https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/actions/workflows/source-build-deployment.yml)
   - Uses a GitHub runner to build a new npm site and then deploy to the branch 'gh-pages'

## 2. pages build and deployment
[![pages-build-deployment](https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/actions/workflows/pages/pages-build-deployment)
   - Built-in GitHub Action. When changes are pushed to the branch 'gh-pages', then GitHub will publish these changes to the site [https://creatorworkflowsnow.github.io/](https://creatorworkflowsnow.github.io/).

## 3. [PDFs Build and Deploy](https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/blob/source/gh-actions-to-build/pdfs-build-deployment.yml)
   - This job executes after the 'pages build and deployment' job runs. It's purpose is to use prince-pdf to create new PDF versions of the lab guides and push to the branch 'source'.
   - _As of 2023.10.17, I have still not been able to get this Action to work properly. Please feel free to examine, troubleshoot, and suggest changes. _(Dale Stubblefield)__


# Who do I talk to?

If you have any questions or problems, please [open an issue](https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/issues) on GitHub and we will do our best to give you a timely answer.

# Maintainers
The lab guides are maintained by:

- Dale Stubblefield - https://github.com/dalestubblefield
- Kristy Merriam - https://github.com/KristyS96
- Marc Mouries - https://github.com/marcmouries
- Sarah Yao - https://github.com/syaosnow