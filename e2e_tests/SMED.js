module.exports = {
    'Verifying Login For SpringerMedizin ': function(browser) {
      // Browser is the browser that is being controlled
      browser
        .url('https://nemo-sso-cas-server-staging.dev.cf.springer-sbm.com/login?wt_t=1538545752902&wt_eid=2153484227903755490&service=http%3A%2F%2Fnemo-core-staging-smed.dev.cf.private.springer.com%2Fcallback%3Fclient_name%3DCasClienthttp%3A%2F%2Fnemo-core-staging-smed.dev.cf.private.springer.com&locale=de&webtrekkId=846182373400841') // Navigate to the url
        .waitForElementVisible('body', 1000) // Wait until you can see the body element.
        
        .setValue('input[name=username]','nemo.pune77@gmail.com')
        .setValue('input[name=password]','Admin@12345')
        .click('input[name=submit]')

      },

      'Verifying CME , List of all Course': function(browser)
      {
        browser
        .useXpath()
        .waitForElementVisible("//*[@class='main-navigation-teaser']/li[5]/a/span")
        .click("//*[@class='main-navigation-teaser']/li[5]/a/span")
        .waitForElementVisible(".//*[@id='main']/section[1]/div/div[1]/a/span[1]")
        .pause(1000)
        .click(".//*[@id='main']/section[1]/div/div[1]/a/span[1]")
        .pause(2000)
      },

      'Verifying Course Title on Overview Page' : function(browser)
      {
        browser
        .waitForElementVisible(".//*[@id='main']/section[3]/div[2]/section[1]/div/a/h3")
        .click(".//*[@id='main']/section[3]/div[2]/section[1]/div/a/h3")
        
      },

      'Verifying Course Start on Detail Page' : function(browser)
      {
        browser
        .waitForElementVisible(".//*[@id='main']/div[3]/section/header/ul/li/a/span")
        .click(".//*[@id='main']/div[3]/section/header/ul/li/a/span")
        .pause(3000)
        
      },

'Switch Window' : function(browser)
{
  browser	

		.window_handles(function(result) {
                var newHandle = result.value[1];
                this.switchWindow(newHandle);
            })
            
},

'Verify Course Icon at Top' : function(browser)
{
browser
.pause(7000)
.waitForElementVisible(".//*[@id='root']/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div/div[1]/a")
.click(".//*[@id='root']/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div/div[1]/a")


},

'Verify CME-Fragebogan ' : function(browser)
{
  browser
  .waitForElementVisible(".//*[@id='root']/div/div/div[1]/div[1]/div[1]/div/div[1]/div/div[1]/ul[1]/li[4]/a/div[1]/div/div/div/div/div/div/div/span/span")
  .click(".//*[@id='root']/div/div/div[1]/div[1]/div[1]/div/div[1]/div/div[1]/ul[1]/li[4]/a/div[1]/div/div/div/div/div/div/div/span/span")
  .pause(3000)
},

//Question And Answers Selection 


'Verify Question And Answers 2': function(browser)
{
  browser
  .waitForElementVisible(".//*[contains(text(),'Hyperglykämie')]")
  .pause(5000)
  .click(".//*[contains(text(),'Hyperglykämie')]")
  //.pause(2000)
  .pause(8000)
  .waitForElementVisible(".//*[@class='fUVAUYRWUKWnOVZXnKV8']")
  
  .click(".//*[@class='fUVAUYRWUKWnOVZXnKV8']")

 },
 


'Evalution Questions Started': function(browser)
{
  browser
  .pause(8000)
  .waitForElementVisible(".//*[contains(text(),'4 ausreichend')]")
  .pause(5000)
  .click(".//*[contains(text(),'4 ausreichend')]")
  .pause(8000)
  .waitForElementVisible(".//*[contains(text(),'in meiner Arbeitszeit.')]")
  .pause(5000)
  .click(".//*[contains(text(),'in meiner Arbeitszeit.')]")
  .pause(8000)
  .waitForElementVisible(".//*[contains(text(),'selten')]")
.pause(5000)
  .click(".//*[contains(text(),'selten')]")
  .pause(8000)
  
  .waitForElementVisible(".//*[contains(text(),'noch offene Punkte.')]")
  .pause(5000)
  .click(".//*[contains(text(),'noch offene Punkte.')]")
  .pause(8000)
  .waitForElementVisible(".//*[contains(text(),'anderes.')]")
  .pause(5000)
  .click(".//*[contains(text(),'anderes.')]")
  .pause(5000)
 }


 };