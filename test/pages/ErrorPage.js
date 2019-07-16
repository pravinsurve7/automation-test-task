'use strict'

class ErrorPage {

    constructor() {
        this.errorCode = "404";
        this.errorMessage = "Sorry, this url is not pointing anywhere";
    }

    get lblErrorCode() {
        return $("//h1");
    }

    get lblErrorMessage() {
        return $("//p");
    }

    get btnGoToHomePage() {
        return $("//span[contains(text(),'Go back to homepage')]");
    }

    /**
     * Get error code.
     *
     * @returns {string} error code
     */
    getErrorCode() {
        return this.lblErrorCode.getText();
    }

    /**
     * Get error message.
     *
     * @returns {string} error message
     */
    getErrorMessage() {
        return this.lblErrorMessage.getText();
    }

    /**
     * Go to home page.
     *
     * @returns {ErrorPage} ErrorPage object
     */
    clickOnGoToHomePage() {
        this.btnGoToHomePage.click();
        return this;
    }
}

module.exports = new ErrorPage();