class ConfigHandler {
  constructor() {
    this.fileName = 'stackmate.json';
    this.contents = null;
  }

  async json({ force = false } = {}) {
    if (!this.contents || force) {
      this.contents = {};
    }

    return this.contents;
  }

  refresh() {
    return this.json({ force: true });
  }

  async save() {
    return this.refresh();
  }
}

const instance = new ConfigHandler();

module.exports = {
  config: instance,
  ConfigHandler,
};
