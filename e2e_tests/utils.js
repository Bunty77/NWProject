module.exports = {

'Login in Angler with Username And Password' : function(browser)
{
browser
.url("http://nemo-angler-staging.dev.cf.private.springer.com/login")
.waitForElementVisible('body', 1000)
.setValue('input[name=username]','nso4579')
.setValue('input[name=password]','Vrushali@2017')
.useXpath()
.waitForElementVisible(".//*[@type='submit']")
.click(".//*[@type='submit']")
},

'Select Site From Drop Down' : function(browser)
{
    browser
    .waitForElementVisible(".//*[@id='siteNameDropdown']/a/span")
    .click(".//*[@id='siteNameDropdown']/a/span")
},

'Verify Smed Site is Selected' : function(browser)
{
    browser
    .waitForElementVisible(".//*[@id='siteNameDropdown']/li[9]/a")
    .click(".//*[@id='siteNameDropdown']/li[9]/a")
},


'Verify Debug Menu is Selected' : function(browser)
{
    browser
    .waitForElementVisible(".//*[@id='navbar']/ul[1]/li[2]/a")
    .click(".//*[@id='navbar']/ul[1]/li[2]/a")
},


'Verify Course Menu is Selected' : function(browser)
{
    browser
    .waitForElementVisible(".//*[@id='navbar']/ul[1]/li[2]/ul/li[1]/a")
    .click(".//*[@id='navbar']/ul[1]/li[2]/ul/li[1]/a")
},


'Verify CMS Id is Insert ' : function(browser)
{
    browser
    .waitForElementVisible(".//*[@id='searchInput']")
   .setValue(".//*[@id='searchInput']",'13974108')
},


'Verify Search Button ' : function(browser)
{
    browser
    .waitForElementVisible(".//*[@id='submit-btn']")
    .pause(3000)
    .click(".//*[@id='submit-btn']")
},


'Verify Course Title is Clicked  ' : function(browser)
{
    browser
    .waitForElementVisible(".//*[@id='main']/table/tbody/tr/td[1]/a")
    .pause(3000)
    .click(".//*[@id='main']/table/tbody/tr/td[1]/a")
},

'Verify Course Attempt ' : function(browser)
{
    browser
    .waitForElementVisible(".//*[@id='main']/table/tbody/tr[3]/td[2]/a[1]")
    .pause(3000)
    .click(".//*[@id='main']/table/tbody/tr[3]/td[2]/a[1]")
    .back()
    
},

'Verify Course Outcome ' : function(browser)
{
    browser
    .waitForElementVisible(".//*[@id='main']/table/tbody/tr[3]/td[2]/a[2]")
    .pause(3000)
    .click(".//*[@id='main']/table/tbody/tr[3]/td[2]/a[2]")
    .back()
    
}

};