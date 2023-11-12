# Workflow-CA

#Project Description
This workflow course assignment is a course aimed to help creating workflows for problem solving, methods and strategies. We was given an social media client repo for implementing tests and scripts for practicing workflow.

## Workflow tech stack
 Here is an overview of the different methods that was used for the tests:
 - Jest
 - Babel
 - Eslint
 - Cypress
 - Husky
 - Prettier


## Test status
[![Automated E2E testing](https://github.com/Noroff-Anders/Workflow-CA/actions/workflows/main.yml/badge.svg?branch=workflow-formatting)](https://github.com/Noroff-Anders/Workflow-CA/actions/workflows/main.yml)
[![Automated Unit Testing](https://github.com/Noroff-Anders/Workflow-CA/actions/workflows/unit.yml/badge.svg?branch=workflow-formatting)](https://github.com/Noroff-Anders/Workflow-CA/actions/workflows/unit.yml)
[![Code Review](https://github.com/Noroff-Anders/Workflow-CA/actions/workflows/gpt.yml/badge.svg?branch=workflow-formatting)](https://github.com/Noroff-Anders/Workflow-CA/actions/workflows/gpt.yml)
[![Deploy static content to Pages](https://github.com/Noroff-Anders/Workflow-CA/actions/workflows/pages.yml/badge.svg?branch=workflow-formatting)](https://github.com/Noroff-Anders/Workflow-CA/actions/workflows/pages.yml)

## Project setup
 - clone this repo: https://github.com/Noroff-Anders/Workflow-CA.git

 - In terminal run the following commands:

 - To install all dependecies``` npm install ``` 
 - To run the project run ``` npm start ```
 - For compiling Sass to css run ``` npm run build ```


## How to run project test
 e2e: 
  - To run Cypress tests : ``` npm run test-e2e ```

  Cypress is configurated to check if: 
   -  The user can log in and access their profile
   -  The user cannot submit the login form with invalid credentials and is shown a message
   -  The user can log out with the logout button

   cypress script test file are located in ``` cypress/e2e/Testing/client-user-cy,js ```

 Unit:
  - Jest tests for unti tests: ``` npm run test-unit ```

  Unit tests iplemented: 
   - Unit tests are located in ``` src/js/api/auth/ ``` filenames are ``` login.test.js ``` and ``` logout.test.js ```

   These tests are configurated to check if:
   - The login function fetches and stores a token in browser storage
   - The logout function clears the token from browser storage 


## Formatting 
Worflow / Hooks:  
 This project is configurated to run Prettier and Eslint on commit and push.

The project default branch is master, this branch is protected by running all tests and deploy to github pages. Project is configured to build and deploy to pages on merge to default branch



## Contributions
This is an school project so it is not open for contributions
