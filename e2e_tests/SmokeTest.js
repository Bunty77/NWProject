module.exports = {
    'Verifying Login For pflegenzuhause ': function(browser) {
      // Browser is the browser that is being controlled
      browser
        .url('https://www.pflegenzuhause.de/') // Navigate to the url
        .waitForElementVisible('body', 1000) // Wait until you can see the body element.
        browser.assert.equal(response.statusCode,200);
        

      }

    };



