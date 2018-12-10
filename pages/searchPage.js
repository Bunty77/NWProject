module.exports = function(browser)
{
    this.searchkeyword = function()
    {
        browser
        .waitForElementVisible('#query',9000)
        .setValue('#query','British History')

    }
   return this;
};