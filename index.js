const express = require('express');
const app = express();
const request = require('./request');

app.set('port', '6001');
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}`);
});

// Constants
// you can get this token via POST /api/v1/unauth/login/token
const auth = 'Bearer f76176bfd974879c8e37fcc2e934637ebaeb450c7f771423d8c6cf5f5b473cd6';
const deviceId = 4136;
const deviceMac = '0123456789ABTEST';

// POST token
// Replace null with auth for auth routes
// request.post('https://api.rover.blue/api/v1/unauth/login/token', null, {'secret': 'demoSecret'});

// GET device
request.get(`https://api.rover.blue/api/v1/auth/devices/${deviceMac}`, auth);
// request.get(`https://api.rover.blue/api/v1/auth/devices/${deviceId}`, auth);

// GET static data / state
// request.get(`https://api.rover.blue/api/v1/auth/devices/${deviceId}/data/static`, auth);
// request.get(`https://api.rover.blue/api/v1/auth/devices/${deviceId}/state/static`, auth);

// GET dynamic data / state
// request.get(`https://api.rover.blue/api/v1/auth/devices/${deviceId}/data/dynamic?startTimestamp=1530631515&endTimestamp=1530640515`, auth);
// request.set(`https://api.rover.blue/api/v1/auth/devices/${deviceId}/state/dynamic`, auth);
