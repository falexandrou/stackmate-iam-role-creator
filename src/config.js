const path = require('path');
const fs = require('fs');

const IS_WINDOWS = process.platform === 'win32';
const APPNAME = 'stackmate';

class ConfigHandler {
  constructor() {
    this.filename = 'stackmate.json';
    this._contents = {};

    this.direcory = IS_WINDOWS
      ? path.join(process.env.USERPROFILE, 'AppData', APPNAME)
      : path.join(process.env.HOME, `.${APPNAME}`);

    this.configPath = path.join(this.direcory, this.filename);
  }

  /**
   * Loads the file's contents and returns it as an Object
   *
   * @param {Object}
   * @returns {Object}
   */
  contents({ refresh = false } = {}) {
    if ((!this._contents || refresh) && fs.existsSync(this.configPath)) {
      this._contents = JSON.parse(
        fs.readFileSync(
          this.configPath,
          { encoding: 'utf-8' },
        ),
      );
    }

    return this._contents;
  }

  /**
   * Reloads the file's contents
   *
   * @returns {Object}
   */
  reload() {
    return this.contents({ refresh: true });
  }

  /**
   * Writes the contents to a file
   *
   * @returns {Object}
   */
  save() {
    if (!fs.existsSync(this.direcory)) {
      fs.mkdirSync(this.direcory);
    }

    fs.writeFileSync(
      this.configPath,
      JSON.stringify(this._contents, null, 2),
      { encoding: 'utf-8' },
    );

    return this.reload();
  }

  /**
   * Adds a role in the configuration file
   */
  storeRole(arn, externalId, roleId, roleName) {
    if (!this._contents.roles) {
      this._contents.roles = [];
    }

    const existing = this._contents.roles.find(r => r.arn === arn);
    const roleAttrs = { arn, externalId, roleId, roleName };

    if (existing) {
      Object.assign(existing, roleAttrs);
    } else {
      this._contents.roles.push(roleAttrs);
    }

    return this.save();
  }
}

const instance = new ConfigHandler();

module.exports = {
  config: instance,
  ConfigHandler,
};
