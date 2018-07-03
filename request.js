const request = require('requestretry');
const _ = require('lodash');

module.exports = {
  sendRequest(req) {
    request(req).then((response) => {
      console.log(`Complete: ${JSON.stringify(response)}`);
    });
  },
  get(url, auth) {
    const req = {
      uri: url || '',
      json: true,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
      },
    };
    const opts = {
      maxAttempts: 5,
      retryDelay: 5000,
      retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
    };

    _.extend(req, opts);
    this.sendRequest(req);
  },
  post(url, auth, data) {
    const req = {
      uri: url || '',
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
      },
    };
    const opts = {
      maxAttempts: 5,
      retryDelay: 5000,
      retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
    };

    _.extend(req, opts);
    this.sendRequest(req);
  },
}