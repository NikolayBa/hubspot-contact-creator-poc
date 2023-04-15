
# HubSpot API Contact Creator with TypeScript and Node.js
This repository contains a simple function that utilizes the HubSpot API to create a new contact in your HubSpot account using typescript.

## Prerequisites
### Node.js
Before you can run the repository, make sure you have Node.js installed on your machine. You can download Node.js from the official website: `https://nodejs.org/en/download/`
### HubSpot API key
1.  Log in to your HubSpot account.
2.  Navigate to the Settings page by clicking the gear in the upper right corner
3.  Click on Integrations > Private Apps
4.  Create a Private App and give it a name
5.  Provide the following Scope:

```crm.objects.contacts.write```

6.  Copy the Access Token

## Installation
1.  Clone the repository to your local machine.
```bash
git clone https://github.com/NikolayBa/hubspot-contact-creator-poc
```
2.  Install the project dependencies:

`npm install` 


## Running the project

1.  Paste your HubSpot access token into the `accessToken.txt` file by replacing the default token.
2.  Save the `accessToken.txt` file.
3.  Run the project using the following command:
`npm start` 

This will compile the TypeScript code and run the `index.js` file, which will create a new contact in your HubSpot account.
