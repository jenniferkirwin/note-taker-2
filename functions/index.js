// Requires
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
const firebase = require("firebase");
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Callable Functions
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// Create a user in Firestore when a new account is made
// -------------------------------------------------------------------------
exports.createUserAccnt = functions.auth.user().onCreate((user) => {

  db.collection('users').doc(`${user.uid}`)
  .set(
    {
      notes:[]
    }
  )
  .then((newDoc) => {
    console.log(`User account created with UID ${newDoc.id}`);
    return {user: newDoc.id}
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });

});

// Get user's saved notes
// -------------------------------------------------------------------------
exports.getNotes = functions.https.onCall((data, context) => {

  // Ensure user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
        'while authenticated.');
  }

  // Constants

  // Query Database

  db.collection('users').doc(`${context.auth.uid}`)
  .get()
  .then((querySnapshot) => {
    console.log(querySnapshot)
    return querySnapshot;
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
      return error;
  });


  // // [START readMessageData]
  // const text = data.text;
  // // [END readMessageData]

  // // [START messageHttpsErrors]
  // if (!context.auth) {
  //   throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
  //       'while authenticated.');
  // }
  // // [END messageHttpsErrors]

  // // [START authIntegration]
  // const uid = context.auth.uid;
  // const name = context.auth.token.name || null;
  // const picture = context.auth.token.picture || null;
  // const email = context.auth.token.email || null;
  // // [END authIntegration]

  // // [START returnMessageAsync]
  // const sanitizedMessage = sanitizer.sanitizeText(text); // Sanitize the message.

  // return admin.database().ref('/messages').push({
  //   text: sanitizedMessage,
  //   author: { uid, name, picture, email },
  // }).then(() => {
  //   console.log('New Message written');
  //   return { text: sanitizedMessage };
  // }).catch((error) => {
  //     throw new functions.https.HttpsError('unknown', error.message, error);
  //   });
  // // [END_EXCLUDE]


});