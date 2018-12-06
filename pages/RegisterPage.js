module.exports = function(browser)
{
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    this.enterEmail = function()
    {
        console.log("Enter Email")
        browser
        .url('https://www.springermedizin.de/register?returnUrlAfterConfirmation=%2F')
        .waitForElementVisible('body',7000)
        .setValue('#mwf3','navnath.sujgure'+getRandomInt(9999)+'@gmail.com')
        //return browser;
    }

    this.setPassword = function()
    {
        console.log("Set Passoword")
        browser
        .waitForElementVisible('#mwf6')
        .setValue('#mwf6','Admin@12345')
    }

    this.setSalutation = function()
    {
        console.log("Enter Salutation")
        browser
        .waitForElementVisible('#mwf9')
        .click('#mwf9')
        .click('option[value="M"]')
        .click('#mwf9')
        .pause(4000)
    }

    this.titlePrafix = function()
    {
        browser
        .pause(3000)
        .waitForElementVisible('#mwf14')
        .click('#mwf14')
        .click('option[value="Ph.D."]')
        .click('#mwf14')
    }


    this.titleSufix = function()
    {
        browser
        .pause(3000)
        .waitForElementVisible('#mwf43')
        .click('#mwf43')
        .click('option[value="MD"]')
        .click('#mwf43')
    }

    this.firstName = function()
    {
        browser
        .pause(3000)
        .waitForElementVisible('#mwf48')
        .setValue('#mwf48','Navnath')

    }


    this.lastName = function()
    {
        browser
        .pause(3000)
        .waitForElementVisible('#mwf50')
        .setValue('#mwf50','Sujgure')

    }

    this.dateofBirth = function()
    {
        browser
        .pause(3000)
        .waitForElementVisible('#mwf54')
        .setValue('#mwf54','01/12/1970')
    }

    this.street = function()
    {
        browser
        .pause(3000)
        .waitForElementVisible('#mwf60')
        .setValue('#mwf60','SpringerNature Pvt Ltd,5th Floor,Tower 9.')
    }

    this.houseno = function()
    {
        browser
        .pause(3000)
        .waitForElementVisible('#mwf61')
        .setValue('#mwf61','123')
    }

    this.housenoaddition = function()
    {
        browser
        .pause(3000)
        .waitForElementVisible('#mwf63')
        .setValue('#mwf63','Addition house no information')
    }

    this.postalcode = function()
    {
        browser
        .pause(3000)
        .waitForElementVisible('#mwf64')
        .setValue('#mwf64','422401')
    }

    this.city = function()
    {
        browser
        .pause(3000)
        .waitForElementVisible('#mwf65')
        .setValue('#mwf65','Pune')

    }


    this.Country = function()
    {
        console.log("Enter Salutation")
        browser
        .waitForElementVisible('#mwf66')
        .click('#mwf66')
        .click('option[value="IN"]')
        .click('#mwf66')
        .pause(4000)
    }

    this.job = function()
    {
        browser
        .waitForElementVisible(".webform__select[name='professionData.professionGroup']")
        .useCss()
        .click(".webform__select[name='professionData.professionGroup']'")
        .click('option[value="PTA"]')
        .click(".webform__select[name='professionData.professionGroup']'")
        .pause(3000)
    },

    this.workarea = function()
    {
        browser
        .waitForElementVisible(".webform__select[name='professionData.workingArea']")
        .useCss()
        .click(".webform__select[name='professionData.workingArea']")
        .click('option[value="Apotheke"]')
        .click(".webform__select[name='professionData.workingArea']")
        .pause(3000)  
    }

    this.checkbox1 = function()
    {
        browser
        .waitForElementVisible('#acceptTerms_0_9223422')
        .click('#acceptTerms_0_9223422')

    }

    this.submit = function()
    {
        browser
        .waitForElementVisible('#submit_0')
        .click('submit_0')
    }

    return this;

};