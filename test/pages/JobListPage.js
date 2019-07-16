'use strict'

class JobListPage {

    constructor() {
        this.pageTitle = "Jobs Fabrik | Jobs offers list";
        this.timeout = 5000;
    }

    get lstJobs() {
        return $("//div[@style ='mui-prepared:']");
    }

    get lstJobList() {
        return $$("//main/section[2]/div/a");
    }

    get lblWelcomePage() {
        return $("//h1");
    }

    /**
     * Open the url.
     * @param {string} [url] url
     * @returns {JobListPage} JobListPage object
     */
    get(url) {
        browser.url(url);
        this.lblWelcomePage.waitForExist(this.timeout);
        return this;
    }

    /**
     * Is page loaded.
     *
     * @returns {boolean} page load status
     */
    isLoaded() {
        return this.lblWelcomePage.isExisting();
    }

    /**
     * Click on back button.
     *
     * @returns {boolean} page title match status
     */
    verifyPageTitle() {
        this.isLoaded();
        let data = browser.getUrlAndTitle();
        return this.pageTitle.includes(data.title);
    }

    /**
     * Is job available.
     *
     * @returns {boolean} job available status
     */
    isJobAvailable() {
        return this.lstJobs.isExisting();
    }

    /**
     * Select job from the list.
     * @param {string} [jobName] job name
     * @returns {JobListPage} JobListPage object
     */
    selectJob(jobName) {
        $("//div[text()='" + jobName + "']").click();
        return this;
    }

    /**
     * Get the number of jobs available.
     *
     * @returns {Array} array of job lists
     */
    getNoOfJobsList() {
        return this.lstJobList;
    }
}

module.exports = new JobListPage();