const { Command, flags } = require('@oclif/command')

class InitCommand extends Command {
  async run() {
    this.log('Create project');
  }
}

InitCommand.description = `
initialize a project in stackmate.io
`.trim();

InitCommand.flags = {
};

module.exports = InitCommand;
