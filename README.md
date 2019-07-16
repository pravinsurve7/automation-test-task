## HeyJobs test automation task
* Write automated tests for the following cases:
    * When users open the job list, they can see a list of 5 jobs with pictures, company names and locations.
    * After users click on a job from the list, they can see job details.
    * Users can navigate back from a job details page to the job list.
    * Users see error message when they visit an unknown URL e.g. `http://localhost:3333/foo`.


## To run the automated tests
This automation framework is using *WebdriverIO* tool with *Mocha* and *Chai*. To run the tests on your machine hit following npm commands.

#### Pre-requisite
##### _setup :_
1. `git clone `
2. `cd automation-test-task`


#### 1. Start the app
```
npm start
```
Application will be available on `localhost:3333`

#### 2. Run the tests
Open new terminal and run below command.
```
npm test
```
