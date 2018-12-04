var msg = require('../pages/test')
module.exports = function(browser)
{

 this.openBrowser = function(flavor)
{
    console.log("Url Entered");
    console.log("Flavor:"+flavor)
    browser
    .windowMaximize()
    .url(flavor)
    .waitForElementVisible('body',7000);
    console.log("Url Entered");
    return browser;
    
     
};

this.loginMainButton = function()
{
     browser
    .useCss()
    .click('.personalisation__login')
    .waitForElementVisible('body',5000)
};

this.userLogin = function()
{
    browser
    .pause(3000)
    .setValue('input[name=username]','navnath.sujgure@springernature.com')
    .setValue('input[name=password]','Admin@12345')
    .click('input[name=submit]')
    
};


this.closeBrowser=function()
{
    browser.pause(3000)
    .end();
};

return this;

};


