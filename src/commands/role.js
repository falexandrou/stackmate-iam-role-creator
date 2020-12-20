const os = require('os');
const path = require('path');
const { Command, flags } = require('@oclif/command');
const sharedIniFileLoader = require('@aws-sdk/shared-ini-file-loader');
const IAMClient = require('@aws-sdk/client-iam');

class RoleCommand extends Command {
  async run() {
    const homedir = os.homedir();
    const defaultProfile = path.join(homedir, '.aws', 'credentials');
    this.log(`Home ${homedir} - ${defaultProfile}`);
    this.log(`Will use the ${flags.profile} AWS profile`);
    // const creds = new AWS.SharedIniFileCredentials({ filename: defaultProfile });
    // this.log(creds.get())
    const profiles = await sharedIniFileLoader.loadSharedConfigFiles();
    console.log(IAMClient);
  }
}

RoleCommand.description = `
adds an AWS role to stackmate.io
`.trim();

RoleCommand.flags = {
  profile: flags.string({
    char: 'p',
    description: 'The AWS profile to use',
  }),
};

module.exports = RoleCommand;
