const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.createUserAccnt = functions.auth.user().onCreate((user) => {
  console.log(user);
});