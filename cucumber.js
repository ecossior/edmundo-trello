  module.exports = {
    default: {
      //parallel: 2,
      format: ['html:cucumber-report.html',
       'progress-bar'/*,
    './reporter.ts'*/],
      paths: [
        './tests/features/**/*.feature'
      ],
      requireModule:[ 
        'ts-node/register'
      ] ,
     require:[
      './tests/steps/**/*.steps.ts',
      './tests/hooks/**/*.hooks.ts'
      ] ,
    }
  }