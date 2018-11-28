module.exports = {
    'Verifying Login For SpringerMedizin ': function(browser) {
      // Browser is the browser that is being controlled
      browser
        .url('https://nemo-sso-cas-server-staging.dev.cf.springer-sbm.com/login?wt_t=1538545752902&wt_eid=2153484227903755490&service=http%3A%2F%2Fnemo-core-staging-smed.dev.cf.private.springer.com%2Fcallback%3Fclient_name%3DCasClienthttp%3A%2F%2Fnemo-core-staging-smed.dev.cf.private.springer.com&locale=de&webtrekkId=846182373400841') // Navigate to the url
        .waitForElementVisible('body', 1000) // Wait until you can see the body element.
        
        .setValue('input[name=username]','nemo.pune77@gmail.com')
        .setValue('input[name=password]','Admin@12345')
        .click('input[name=submit]')

      }
    };