var utils = require('../pages/utils');
var register = require('../pages/RegisterPage')
module.exports = {
'@tags' : ['register'],


'Enter Email Address': function(browser)
{
    console.log("Start")
    register(browser).enterEmail();
},

'Enter Password' : function(browser)
{
    console.log("Setting Password")
    register(browser).setPassword();
},


'Enter Salutation * ' : function(browser)
{
    register(browser).setSalutation();
},

'Enter Title Prefix' : function(browser)
{
    register(browser).titlePrafix();
},

'Enter Title Sufix' : function(browser)
{
    register(browser).titleSufix();
},

'Enter First Name' : function(browser)
{
    register(browser).firstName();
},


'Enter Last Name': function(browser)
{
    register(browser).lastName();
},


'Enter Date Of Birth': function(browser)
{
    register(browser).dateofBirth();
},

after: function(browser)
{
   
    utils(browser).closeBrowser();
    console.log("Browser Close")
}

};