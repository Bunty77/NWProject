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

'Enter Street': function(browser)
{
    register(browser).street();
},

'Enter Houseno': function(browser)
{
register(browser).houseno();
},

'Enter Addition house no Information': function(browser)
{
    register(browser).housenoaddition();
},

'Enter Postal Code' : function(browser)
{
register(browser).postalcode();
},

'Enter City' : function(browser)
{
    register(browser).city();

},

'Enter Country' : function(browser)
{
    register(browser).Country();
},

'Enter Job' : function(browser)
{
   register(browser).job();
   browser
   .pause(3000)
},

'Enter Work Area' : function(browser)
{
   register(browser).workarea();
   browser
   .pause(3000)
},

'Checkbox first' : function(browser)
{
    register(browser).checkbox1();
},

'click on submit':function(browser)
{
register(browser).submit();
},

after: function(browser)
{
   
   // utils(browser).closeBrowser();
    console.log("Browser Close")
}

};