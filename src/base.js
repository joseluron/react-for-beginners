import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAr7N9eEX2ojbXgA941nE5NEkZrpsDt3MM",
    authDomain: "catch-of-the-day-66e05.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-66e05.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
