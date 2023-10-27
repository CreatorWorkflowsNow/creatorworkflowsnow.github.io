<!--
*** Thanks for checking out creatorworkflowsnow.github.io. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
*** Go here to learn more about the shields
*** https://shields.io/
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]

[![Source Build][source-build-shield]][source-build-url]

[![Pages Build][pages-build-shield]][pages-build-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io">
    <img src="static/img/servicenow-logo.png" alt="Logo" >
  </a>

  <h3 align="center">Creator Workshops Lab Guides</h3>

  <p align="center">
    An awesome repository of Lab Guides for ServiceNow Creator Workflows!
    <br />
    <a href="https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io">View Demo</a>
    ·
    <a href="https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/issues">Report Bug</a>
    ·
    <a href="https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

[![creatorworkflowsnow.github.io Screen Shot][creatorworkflowsnow.github.io-screenshot]](https://creatorworkflowsnow.github.io)

A lab guide website for ServiceNow Creator Workflow Workshops. The lab guides are designed to be used with a pre-configured ServiceNow instance provided to you at a live Workshop event. Results may vary trying on your own instance. 

### Built With
[![Docusaurus][Docusuarus-tiny]][Docusaurus-url]<br/>
[Docusaurus][Docusaurus-url]


<!-- GETTING STARTED -->
## Getting Started

This is of how to list things you need to know to contribute to the lab guides. 

### Pre-requisites 
- **Knowledge of Markdown**
  - _New to Markdown? Try the [Communicate using Markdown](https://github.com/skills/communicate-using-markdown) GitHub Skills course_
  - _In this course you will work with pull requests as well as edit files. If these things aren't familiar to you, we recommend you take the [Introduction to GitHub](https://github.com/skills/introduction-to-github) course, first!_
- **Code editor ([Visual Studio Code](https://code.visualstudio.com/Download) is recommended)**
- **[GitHub Desktop](https://desktop.github.com/)**
- **[Node.js](#how-do-i-install-nodejs-and-npm-on-macos)**


## Creating or Updating content

_Below is an example of how setup your local system to edit the lab guides and contribute back to this project ._

1. Clone this repo by clicking the green code button above, then click **Open with GitHub Desktop**.

   ![Open with GitHub Desktop](static/img/2023-10-27_16-45-20.png)

2. In GitHub Desktop, Create a new Branch.

   ![Create a new Branch](static/img/gh-desktop-new-branch.png)

3. Pick a unique name for your branch, then click Create Branch.

   ![Create a new Branch](static/img/branch-name.png);

4. In GitHub Desktop, go to Repository >> Open in Visual Studio Code

   ![Open in VS Code](static/img/github_desktop_open_in_vscode.png)

5. Open a terminal in VS Code. 

   ![Open a terminal](static/img/open-terminal.png)

6. Install NPM packages with this command: 
   ```sh
   npm install
   ```

7. Run a local server to see your changes locally before you publish back to the repo:
   ```sh
   npm run start
   ```

8. Your desktop should open a new browser tab to the URL: http://localhost:3000/

9. Edit the markdown files in the labs/ folder as needed. Pay close attention to the frontmatter at the top of the file. Refer to to existing lab files for guidance or the [Docusuarus documentation](https://docusaurus.io/docs/markdown-features).

10. When you are done editing and ready to commit back to the repo, go back to GitHub Desktop.

11. Check the blue box next to each file and add a cool commit message like this:
    
    ![Add commit message](static/img/add-commit-message.png)



# Got changes?
*Do you have suggestions or want to propose changes to lab guide content?*

1. Clone the repo.
2. Start a new branch. (Ex. xyz-lab-proposed-changes)
3. Make changes to the markdown files for that lab in it's lab folder. (Ex. /labs/logisics/)
4. Push changes to repo.
5. Open [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to merge with "source" branch.

# Want to test locally? 
You'll need to install `node.js` and `npm` onto your local system.


## FAQs

### How do I install Node.js and NPM on MacOS?
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


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CreatorWorkflowsNow/creatorworkflowsnow.github.io?style=for-the-badge
[contributors-url]: https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CreatorWorkflowsNow/creatorworkflowsnow.github.io.svg?style=for-the-badge
[forks-url]: https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/network/members
[stars-shield]: https://img.shields.io/github/stars/CreatorWorkflowsNow/creatorworkflowsnow.github.io?style=for-the-badge
[stars-url]: https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/stargazers
[source-build-shield]: https://img.shields.io/github/actions/workflow/status/CreatorWorkflowsNow/creatorworkflowsnow.github.io/source-build-deployment.yml?label=Source%20branch%20build%20and%20deploy%20to%20gh-pages%20branch
[source-build-url]: https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/actions/workflows/source-build-deployment.yml
[pages-build-shield]: https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages
[pages-build-url]: https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/actions/workflows/pages/pages-build-deployment
[creatorworkflowsnow.github.io-screenshot]: static/img/creatorworkflowsnow.github.io_site.png

[Docusuarus]: https://docusaurus.io/img/docusaurus.svg
[Docusuarus-tiny]: static/img/docusaurus_tiny.png
[Docusaurus-url]: https://docusaurus.io/