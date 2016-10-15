'use strict';

module.exports = function (config) {

    /* eslint-disable indent */
    var configuration = {

            basePath: '../../',

            files: [
                'src/module.js',
                {
                    included: false,
                    pattern: 'test/fixtures/**',
                    served: true,
                    watched: true
                },
                'test/integration/**/*.js'
            ],

            frameworks: [
                'browserify',
                'leche',
                'mocha',
                'sinon-chai'
            ],

            preprocessors: {
                'src/module.js': 'browserify',
                'test/integration/**/*.js': 'browserify'
            }

        };
    /* eslint-enable indent */

    if (process.env.TRAVIS) {
        configuration.browsers = [
            'ChromeSauceLabs',
            'FirefoxSauceLabs'
        ];

        configuration.captureTimeout = 120000;

        configuration.customLaunchers = {
            ChromeSauceLabs: {
                base: 'SauceLabs',
                browserName: 'chrome',
                platform: 'OS X 10.11'
            },
            FirefoxSauceLabs: {
                base: 'SauceLabs',
                browserName: 'firefox',
                platform: 'OS X 10.11'
            }
        };

        configuration.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
    } else {
        configuration.browsers = [
            'ChromeCanary',
            'FirefoxDeveloper'
        ];
    }

    config.set(configuration);

};
