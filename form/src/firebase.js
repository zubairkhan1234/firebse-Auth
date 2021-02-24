import firebase from 'firebase/app';
import 'firebase/auth';


const app = firebase.initializeApp({
    apiKey: "AIzaSyAWplOO5ed_x782aL6bZyWGt_0nkX9nTGQ",
    authDomain: "food-loginsignup.firebaseapp.com",
    databaseURL: "https://food-loginsignup-default-rtdb.firebaseio.com",
    projectId: "food-loginsignup",
    storageBucket: "food-loginsignup.appspot.com",
    messagingSenderId: "358437275691",
    appId: "1:358437275691:web:91c084c8e3cc42d662826e"
})


export const auth = app.auth();

export default app;

