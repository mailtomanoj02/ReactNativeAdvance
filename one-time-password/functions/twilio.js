const twilio = require('twilio');
const accountSid = 'ACa7fb3b02fbf760469c7a0d493ad6f29f';
const authToken = 'd447314f9df2a8ac6f12b51e55c980a1';

module.exports = new twilio.Twilio(accountSid, authToken);
