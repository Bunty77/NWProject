var utils = require('../pages/utils');
var msg = require('../pages/test')
module.exports = {
'@tags' : ['diabeteslogin'],
before : function (browser)
{
    console.log("Open The Browser")
    utils(browser).openBrowser(msg.mmdiabetes);
},

'Close Cookie Bar': function(browser)
{
utils(browser).closeCookieBar();
},

'Go to login page': function(browser)
{
    utils(browser).loginMainButton();
},

'login as admin': function(browser)
{
    utils(browser).userLogin();
    browser.pause(3000);
},

after: function(browser)
{
   
    utils(browser).closeBrowser();
    console.log("Browser Close")
}

}