
![](https://framerusercontent.com/images/VDOI9Zu8yzJNPNE77mn2dlGJLZ8.png?scale-down-to=512 "Open Cloud Compute")

# ⚡ Open Cloud Compute Frontend
The Frontend for the Open Cloud Compute prototype. Open Cloud Compute (OCC) is an initiative launched by the EkStep Foundation in India to create a decentralized and interoperable cloud computing network. We aim to connect independent micro data centers, enhancing access to computing resources while promoting local data sovereignty. By fostering competition among smaller providers, we seeks to democratize cloud services, making them more accessible and affordable for businesses of all sizes.

## 🛠 Get started

### Getting the API Keys
Create an `.env` and follow the variable name based on `.env.example` and get the GitHub API Key.
Steps to generate the API key:
- [Generate an API key](https://github.com/settings/tokens/new)
- [Add permissions](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token#about-the-token-permissions)
Provide the API key to the `GITHUB_TOKEN` environment variable.
Also add the `GITHUB_ID` and `GITHUB_REPO` to the `.env`

### Starting the Project
1. Clone the repository: `git clone https://github.com/PeoplePlusAI/occ-hack-gui.git`
2. Install the dependencies with `npm i` 
3. Start the project by `npm run dev`

## Publishing Blogs
You can find the steps to publish a blog on the website in the BlogTemplate Folder.

## Overview of the project
1. `pages/index.js`: Homepage of the frontend 
2. `pages/resources/index.js` : Resource Page
3. `pages/about/index.js` : About Page
4. `pages/blog/index.js` : Blog Listing page  
5. `pages/blog/[slug].js` : Blog post page   

## Tech Stack Used
- Next.js
- Chakra UI
- MDX (next-mdx-remote)

## Contributing


We welcome contributions from the community. To contribute to this project, please follow the guidelines outlined in [CONTRIBUTING.md](.github/CONTRIBUTING.md).

## Documentation

Explain where to find and how to use your project's documentation:

The `docs` folder contains project documentation and related documents. To access or contribute to the documentation, please refer to [docs/README.md](docs/README.md).

## Issues
If you encounter any issues with the project, please create a new issue using the [issue template](.github/ISSUE_TEMPLATE.md). Provide as much detail as possible to help us understand and resolve the issue.


## Volunteer & contribute

If you are interested in volunteering for this project, please refer to [this link](https://peopleplus.ai/volunteer) for more information. 

If you would like to contribute to the codebase, please refer to the [CONTRIBUTING.md](.github/CONTRIBUTING.md) file for more information. We appreciate your contributions!


## About Us

People+ai connects do-ers, dreamers, tinkerers and innovators with ideas & resources to build an ecosystem that can empower a billion people to reach their potential - [Know More](https://peopleplus.ai/)

## Acknowledgements
We sincerely thank the following people who's open sourced code has helped us.
- [Abdul Rehman](https://github.com/abdulrcs) for the website structure and code.
Made with ♥️ for 🇮🇳 by Team People+AI


