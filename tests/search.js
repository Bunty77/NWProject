var utils = require('../pages/utils');
var msg = require('../pages/test')
var search = require('../pages/searchPage')
module.exports = {
'@tags' : ['search'],
before : function (browser)
{
    console.log("Open The Browser")
    utils(browser).openBrowser(msg.smed);

},

'Search for Keyword' : function(browser)
{
    search(browser).searchkeyword();
    browser.pause(2000)
},

after: function(browser)
{
   
    utils(browser).closeBrowser();
    console.log("Browser Close")
}

}