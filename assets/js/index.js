const admin = require("firebase-admin");
const serviceAccount = require("./assets/js/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "shinhan-ekyc.appspot.com" // Thay bằng storageBucket của bạn
});

console.log("Admin SDK initialized successfully");
