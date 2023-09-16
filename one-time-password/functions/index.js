/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
const createUser = require('./create_user');
const requestOtp = require('./request_otp');
const verifyOtp = require('./verifyOtp');

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://one-time-password-7a73a-default-rtdb.firebaseio.com',
});

exports.createUser = onRequest(createUser);
exports.requestOtp = onRequest(requestOtp);
exports.requestOtp = onRequest(verifyOtp);
