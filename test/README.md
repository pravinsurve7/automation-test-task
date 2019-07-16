# Project Summary 
This projcect is build to do UI Automation using WebderiverIO. 
Page Object Model along with mocha tests and chai assertions.



## Project Structure 
* **pages**\
This folder includes _*Page.js_. Every page in application should have one .js file, include all the required elements and methods that can be performed on that page.
* **specs**\
This folder will have mocha tests file _*Test.js_. Create object of the page and call methods to perform tasks.
* **utils**\
Utility folder, files can have common methods that can be used across project.
This has a single class with custom commands.
* **configs**\
This includes wdio config file. e.g. baseUrl, specs location, reports, capabilities, etc.


## Run Tests

```
npm test
```