module.exports = {
  default: {
    require: ['features/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    publishQuiet: true
  },
  sanity: {
    require: ['features/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'html:reports/sanity-report.html',
      'json:reports/sanity-report.json',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    paths: ['features/sanity/**/*.feature'],
    publishQuiet: true
  },
  regression: {
    require: ['features/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'html:reports/regression-report.html',
      'json:reports/regression-report.json',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    paths: ['features/regression/**/*.feature'],
    publishQuiet: true,
    parallel: 2
  }
};
