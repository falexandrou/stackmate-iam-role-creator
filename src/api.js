const axios = require('axios');
const { getAwsPermissionsUrl } = require('./urls');

const TIMEOUT = 20000;

const METHOD = {
  GET: 'get',
};

/**
 * Handles API requests to the stackmate.io API
 */
class ApiClientClass {
  constructor() {
    this.apiUrl = process.env.API_URL || 'https://app.stackmate.io';
  }

  /**
   * Returns the list of IAM permissions required for the AWS IAM role
   * @returns {Promise<Array>}
   */
  async getIamPermissions() {
    const permissions = await this._request(
      getAwsPermissionsUrl(), METHOD.GET,
    );

    return permissions;
  }

  /**
   * Performs an API request to the stackmate API
   *
   * @param {String} endpoint the API endpoint to use
   * @param {String} method the HTTP method to use
   * @param {Object}
   * @returns {Promise}
   */
  async _request(endpoint, method, { data = {}, params = {}, headers = {} } = {}) {
    const url = `${this.apiUrl}${endpoint}`;

    const { data: responseData } = await axios.request({
      method,
      url,
      data,
      timeout: TIMEOUT,
      params,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        'X-Client': 'StackmateCLI',
      },
    });

    return responseData;
  }
}

const api = new ApiClientClass();

module.exports = {
  api,
  ApiClientClass,
  METHOD,
};
