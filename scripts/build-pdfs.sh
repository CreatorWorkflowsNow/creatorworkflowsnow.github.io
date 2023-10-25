#!/usr/bin/env zsh

# Check if prince is installed
if ! command -v prince &> /dev/null
then
    echo "prince could not be found. Please install it to proceed."
    exit 1
fi

# Get the current directory name
current_directory=${PWD##*/}

# Check if the current directory is "scripts"
if [[ "$current_directory" != "scripts" ]]; then
  echo "This script must be run from the 'scripts' directory."
  exit 1
fi

npx docusaurus-prince-pdf -d '../labs/collaborate/downloads' -u 'https://creatorworkflowsnow.github.io/labs/collaborate/get_started/intro/' --output '../labs/collaborate/downloads/collaborate-lab.pdf'

npx docusaurus-prince-pdf -d '../labs/complaint/downloads' -u 'https://creatorworkflowsnow.github.io/labs/complaint/overview/' --output '../labs/complaint/downloads/complaint-lab.pdf'

npx docusaurus-prince-pdf -d '../labs/travelrequest/downloads' -u 'https://creatorworkflowsnow.github.io/labs/travelrequest/introduction/' --output '../labs/travelrequest/downloads/travelrequest-lab.pdf'

npx docusaurus-prince-pdf -d '../labs/deptsvc/downloads' -u 'https://creatorworkflowsnow.github.io/labs/deptsvc/lab-introduction/' --output '../labs/deptsvc/downloads/deptsvc-lab.pdf'

npx docusaurus-prince-pdf -d '../labs/telework-utah/downloads' -u 'https://creatorworkflowsnow.github.io/labs/telework-utah/0.0-introduction/overview' --output '../labs/telework-utah/downloads/telework-utah-lab.pdf'

npx docusaurus-prince-pdf -d '../labs/telework-vancouver/downloads' -u 'https://creatorworkflowsnow.github.io//labs/telework-vancouver/0.0-introduction/app-engine-overview' --output '../labs/telework-vancouver/downloads/telework-vancouver-lab.pdf'