  const firebaseConfig = {
    apiKey: "AIzaSyALlUn8710hQGKOuh02FbJ3Z653W33edxg",
    authDomain: "student-teacher-app-b6bc0.firebaseapp.com",
    projectId: "student-teacher-app-b6bc0",
    storageBucket: "student-teacher-app-b6bc0.firebasestorage.app",
    messagingSenderId: "1064571140195",
    appId: "1:1064571140195:web:24d90eae787b35d022a056"
  };

  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();