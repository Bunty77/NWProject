// Get Selenium and the drivers
var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');
var geckodriver = require('geckodriver');


var config = {
    src_folders: [
        "e2e_tests/SMED.js"
    ],
    output_folder: "e2e_test_reports",
    selenium: {
        // Information for selenium, such as the location of the drivers ect.
        start_process: true,
        server_path: seleniumServer.path,
        port: 4444, // Standard selenium port
        cli_args: {
            'webdriver.chrome.driver': chromedriver.path,
            'webdriver.gecko.driver': geckodriver.path
        }
    },
    test_workers: {
        // This allows more then one browser to be opened and tested in at once
        enabled: false,
        workers: 'auto'
    },
    test_settings: {
        default: {
            screenshots: {
                enabled: true,
                path: "./Screenshot",
                on_failure: true,
                on_error: true,
                
                
            },
            globals: {
                // How long to wait (in milliseconds) before the test times out
                waitForConditionTimeout: 5000
            },
            desiredCapabilities: {
                // The default test
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                nativeEvents: true
            }
        },
        // Here, we give each of the browsers we want to test in, and their driver configuration
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                nativeEvents: true,
                chromeOptions: {
                    args: [ 'window-size=1480,950','headless' ]
                    }

            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                nativeEvents: true,
                marionette:true
            }
        },
        safari: {
            desiredCapabilities: {
                browserName: 'safari',
                javascriptEnabled: true,
                acceptSslCerts: true,
                nativeEvents: true
            }
        }
    }
};

module.exports = config;