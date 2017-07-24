'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the glorious ' + chalk.red('generator-lcc-sharepointpnp') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'goCreate',
      message: 'Creating the files in the current diretory, is that ok?',
      default: true
    },
      {
      type: 'input',
      name: 'name',
      message: 'What is the name of this package?',
      default: this.appname
      }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    var _this = this;
    if(_this.props.goCreate) 
    {
      this.fs.copy(
        this.templatePath('dummyfile.txt'),
        this.destinationPath('dummyfile.txt')
      );
    }
  }

  install() {
    //this.installDependencies();
  }
};
