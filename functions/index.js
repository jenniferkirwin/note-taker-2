// Requires
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// const firebase = require("firebase");
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

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

  // Query Database

  return db.collection('users').doc(`${context.auth.uid}`)
  .get()
  .then((querySnapshot) => {
    console.log(querySnapshot.data())
    return querySnapshot.data();
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
      return error;
  });

});

// Update Notes
// -------------------------------------------------------------------------

exports.setNotes = functions.https.onCall((data, context) => {

  // Ensure user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
        'while authenticated.');
  }

  // Query Database

  console.log(data);
  return data;

  // return db.collection('users').doc(`${context.auth.uid}`)
  // .set({
  //   notes: data.notes
  // })
  // .catch((error) => {
  //     console.log("Error getting documents: ", error);
  //     return error;
  // });

});