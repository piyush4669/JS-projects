const functions = require("firebase-functions");
var admin = require("firebase-admin");
var serviceAccount = require("../pwipbackend-firebase-adminsdk-b1avh-f315feaf0f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pwipbackend.firebaseio.com"
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  let db = admin.firestore();
});
