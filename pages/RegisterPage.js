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

    return this;

};