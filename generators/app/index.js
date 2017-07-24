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
      message: 'Creating the files in the current directory, is that ok?',
      default: true
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of this package?',
      default: this.appname
    },
    {
      type: 'input',
      name: 'url',
      message: 'Dev URL to deploy to? (for readme)'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.attrname = props.name.toUpperCase().split('.').join('');
    });
  }

  writing() {
    var _this = this;
    if (_this.props.goCreate) {
      this.fs.copyTpl(
        this.templatePath('readme.md'),
        this.destinationPath('readme.md'), {
          name: _this.props.name,
          url: _this.props.url
        }
      );

      this.fs.copyTpl(
        this.templatePath('provisioning.xml'),
        this.destinationPath(_this.props.name + '.xml'), {
          name: _this.props.attrname
        }
      );
    }
  }

  install() {
    // this.installDependencies();
  }
};
