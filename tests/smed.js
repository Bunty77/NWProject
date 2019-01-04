var utils = require('../pages/utils');
var msg = require('../pages/test')
module.exports = {
'@tags' : ['smedlogin'],
before : function (browser)
{
    console.log("Open The Browser")
    utils(browser).openBrowser(msg.smed);
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