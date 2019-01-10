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

this.closeCookieBar=function() {
    console.log('i am in Close cooki bar function')
    browser.useXpath();
    linkSelector = "(//div[@class='optanon-alert-box-button-middle'])[2]",
    abortOnFailure = false,
    time = 7000;
    browser.waitForElementVisible(linkSelector, time, abortOnFailure, function(result){

    if (result.status === 0) {

        browser.click(linkSelector)

    }

});"The cookie bar could not be found.";
};



this.loginMainButton = function()
{
     browser
    .pause(3000)
    .useCss()
    .assert.elementPresent('.personalisation__login')
    .click('.personalisation__login')
   
};

this.userLogin = function()
{
    browser
    .pause(5000)
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


