const twilio = require('twilio');
const accountSid = 'ACa7fb3b02fbf760469c7a0d493ad6f29f';
const authToken = '0ea40366c41a8c8b2ef7f5f28cdbd146';

module.exports = new twilio.Twilio(accountSid, authToken);
