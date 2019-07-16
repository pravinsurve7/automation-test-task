'use strict'

class JobDetailsPage {

    constructor() {
        this.currentUrl = "/job/";
        this.timeout = 5000;
    }

    get lblJobName() {
        return $("//h1");
    }

    get btnBack() {
        return $("//span[contains(text(),'Back')]/../..");
    }

    /**
     * Click on back button.
     *
     * @returns {JobDetailsPage} JobDetailsPage object
     */
    clickOnBack() {
        this.btnBack.waitAndClick();
        return this;
    }

    /**
     * Get job name.
     *
     * @returns {string} job name
     */
    getJobName() {
        this.lblJobName.waitForVisible();
        return this.lblJobName.getText();
    }

    /**
     * Get job name.
     *
     * @returns {boolean} url match status
     */
    verifyUrl() {
        let data = browser.getUrlAndTitle();
        return data.url.includes(this.currentUrl);
    }
}

module.exports = new JobDetailsPage();