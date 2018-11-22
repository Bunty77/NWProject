module.exports = {
    'Title is Bing': function(browser) {
      // Browser is the browser that is being controlled
      browser
        .url('https://www.springermedizin.de/') // Navigate to the url
        .waitForElementVisible('body', 1000) // Wait until you can see the body element.
        .verify.title('Springer Medizin – Mein Arztwissen | springermedizin.de') // Verify that the title is 'Bing'
        .end() // This must be called to close the browser at the end
      }
    };