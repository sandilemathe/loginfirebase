import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA93Flzy7N-jNrEOj9E0F5WBlkXpKa2IuQ",
    authDomain: "fir-tutorial-bf0df.firebaseapp.com",
    projectId: "fir-tutorial-bf0df",
    storageBucket: "fir-tutorial-bf0df.appspot.com",
    messagingSenderId: "999151763800",
    appId: "1:999151763800:web:c3a2d52b2ce7398775e52d",
    measurementId: "G-ZQSLZC8ETZ"
}

const fire = firebase.initializeApp(config);
export default fire;