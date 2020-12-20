const { Command, flags } = require('@oclif/command')

class LoginCommand extends Command {
  async run() {
    const {flags} = this.parse(LoginCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/hello.js`)
  }
}

LoginCommand.description = `
log in to stackmate.io
`.trim()

LoginCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = LoginCommand;
