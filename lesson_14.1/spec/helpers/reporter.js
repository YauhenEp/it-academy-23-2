const SpecReporter = require('jasmine-spec-reporter').SpecReporter

jasmine.getEnv().clearReporters() // remove default reporter logs
jasmine.getEnv().addReporter(
    new SpecReporter({
        // add jasmine-spec-reporter
        spec: {
            displayPending: true,
        },
    })
)

const reporters = require('jasmine-reporters');
const junitReporter = new reporters.JUnitXmlReporter({
    savePath: './reporter',
    consolidateAll: false
});
jasmine.getEnv().addReporter(junitReporter)