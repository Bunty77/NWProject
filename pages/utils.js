module.exports = function(browser)
{

 this.openBrowser = function()
{
    console.log("Url Entered");
    browser
    .windowMaximize()
    .url('https://www.springermedizin.de/')
    .waitForElementVisible('body',7000);
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
    .assert.title('Springer Medizin – Mein Arztwissen | springermedizin.de')
};


this.closeBrowser=function()
{
    browser.pause(3000)
    .end();
};

return this;

};


