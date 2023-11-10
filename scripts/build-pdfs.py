import subprocess
import os

# Get the current directory name
current_directory = os.path.basename(os.getcwd())

# Check if the current directory is "scripts"
if current_directory != "scripts":
    print("This script must be run from the 'scripts' directory.")
    exit(1)

# Define a list of tasks as dictionaries with keys for directory, URL, and output
tasks = [
    {
        "directory": "../labs/collaborate-utah/downloads",
        "url": "https://creatorworkflowsnow.github.io/labs/collaborate-utah/get_started/intro/",
        "output": "../labs/collaborate-utah/downloads/collaborate-utah-lab.pdf"
    },
    {
        "directory": "../labs/collaborate-vancouver/downloads",
        "url": "https://creatorworkflowsnow.github.io/labs/collaborate-vancouver/0.0-get_started/intro",
        "output": "../labs/collaborate-vancouver/downloads/collaborate-vancouver-lab.pdf"
    },
    {
        "directory": "../labs/complaint/downloads",
        "url": "https://creatorworkflowsnow.github.io/labs/complaint-utah/overview",
        "output": "../labs/complaint/downloads/complaint-lab.pdf"
    },
    {
        "directory": "../labs/deptsvc/downloads",
        "url": "https://creatorworkflowsnow.github.io/labs/deptsvc/lab-introduction/",
        "output": "../labs/deptsvc/downloads/deptsvc-lab.pdf"
    },
    {
        "directory": "../labs/telework-utah/downloads",
        "url": "https://creatorworkflowsnow.github.io/labs/telework-utah/0.0-introduction/overview",
        "output": "../labs/telework-utah/downloads/telework-utah-lab.pdf"
    },
    {
        "directory": "../labs/telework-vancouver/downloads",
        "url": "https://creatorworkflowsnow.github.io/labs/telework-vancouver-101/0.0-introduction/app-engine-overview",
        "output": "../labs/telework-vancouver-101/downloads/telework-vancouver-lab.pdf"
    },
    {
        "directory": "../labs/travelrequest/downloads",
        "url": "https://creatorworkflowsnow.github.io/labs/travelrequest/introduction/",
        "output": "../labs/travelrequest/downloads/travelrequest-lab.pdf"
    }
]


# Check if prince is installed
try:
    subprocess.run(["prince", "--version"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
except subprocess.CalledProcessError:
    print("Prince could not be found. Please install it to proceed.")
    exit(1)

# Iterate through the tasks and run the npx command for each
for task in tasks:
    try:
        subprocess.run(["npx", "docusaurus-prince-pdf", "-d", task["directory"], "-u", task["url"], "--output", task["output"]], check=True)
        print(f"Successfully ran command for {task['directory']}")
    except subprocess.CalledProcessError as e:
        print(f"Error running command for {task['directory']}: {e}")
