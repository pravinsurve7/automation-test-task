'use strict'

const expect = require("chai").expect;
const should = require("chai").should();

const jobListPage = require("../pages/JobListPage");
const jobDetailsPage = require("../pages/JobDetailsPage");
const errorPage = require("../pages/ErrorPage");

describe('Automated test cases for Job Fabrik', () => {
    before(() => {
        jobListPage.get("/");
        expect(jobListPage.verifyPageTitle()).to.be.true;
    });

    it('should able to load job list page with 5 jobs', () => {
        expect(jobListPage.isJobAvailable()).to.true;
        jobListPage.getNoOfJobsList().should.have.lengthOf(5);
    });

    // e.g. Frontend Developer, Junior Frontend Engineer
    let jobTitle = "Javascript Engineer";
    it('should able to see job details for ' + jobTitle, () => {
        jobListPage.selectJob(jobTitle);
        expect(jobDetailsPage.verifyUrl()).to.be.true;
        jobDetailsPage.getJobName().should.equal(jobTitle);
    });

    it('should able to navigate back from a job details page to the job list', () => {
        jobDetailsPage.clickOnBack();
        expect(jobListPage.verifyPageTitle()).to.be.true;
    });

    it('should see error message when an unknown URL is entered', () => {
        jobListPage.get("/foo");
        errorPage.getErrorCode().should.equal(errorPage.errorCode);
        errorPage.getErrorMessage().should.equal(errorPage.errorMessage);
    });
});