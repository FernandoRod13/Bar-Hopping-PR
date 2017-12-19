import * as functions from 'firebase-functions';

var admin = require("firebase-admin");

var serviceAccount = require("./bar-hopping-admin-sdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bar-hopping-55408.firebaseio.com"
});

// Start writing Firebase Functions
// https://firebase.google.com/functions/write-firebase-functions

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
