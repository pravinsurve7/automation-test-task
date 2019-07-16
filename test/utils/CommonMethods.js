module.exports = (function () {

    /**
     * Wait and click custom command.
     * use: $(selector).waitAndClick();
     * 
     */
    browser.addCommand("waitAndClick", function () {
        // `this` is return value of $(selector)
        this.waitForVisible();
        this.click();
    }, true);

    /**
     * Get url and title custom command.
     * use: browser.getUrlAndTitle();
     * 
     * @returns {object} json object
     */
    browser.addCommand("getUrlAndTitle", function () {
        // `this` refers to the `browser` scope
        return {
            url: this.getUrl(),
            title: this.getTitle()
        };
    });

    /**
     * Wait for particular and click on element.
     * use: browser.lazyClick($(selector), ms);
     * 
     * @returns {element} element
     */
    browser.addCommand("lazyClick", (element, time) => {
        var ele = $(element);
        browser.pause(time);
        ele.click();
        return ele;
    });

    /**
     * Click on element and set value.
     * use: browser.clickThenSetValue($(selector), value);
     * 
     */
    browser.addCommand("clickThenSetValue", (selector, value) => {
        browser.click(selector);
        browser.setValue(selector, value);
    });
})();