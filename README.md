# Cypress - Page Objects Automation Framework

An example project demonstrating automated UI tests using JavaScript-based end-to-end testing framework Cypress with Page Object Model pattern.

## Application Under Test

We are using Automation Practice website as the Application Under Test.

* URL : http://automationpractice.com/index.php

### Installation

Install the dependencies and devDependencies to run the test.
- Clone this repo on your local machine
- Navigate to project's directory on terminal and run the following commands:

```sh
npm install
```

### Execute Tests

Run the following command in Terminal to execute tests in Headless mode:

```sh
npm test
```

Run the following command in Terminal to open Cypress Test Runner:

```sh
npm run cypress (OR) npx cypress open
```

### Test Report

You can find the Mochawesome report in the following directory of the Project.

```sh
\cypress\reports\mochareports
```

Open 'report.html' file to view the report.


### Docker 
```sh
docker build -t cypress:v1 .
docker run -it cypress:v1
```

### From Docker Hub
```sh
docker pull jaykishoreduvvuri/cypress:v3
docker run -it jaykishoreduvvuri/cypress:v3
```