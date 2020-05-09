import Rebase from 're-base';
import firebase from 'firebase';

// firebase app
const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAlTyfn9O3mmSyLBy0RNPTvDQYcVLgjgPo",
        authDomain: "catch-of-the-day-6733d.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-6733d.firebaseio.com",
        projectId: "catch-of-the-day-6733d"
    }
)
// rebase bindings
const base = Rebase.createClass(firebaseApp.database());

// named export 
export { firebaseApp };

// default export
export default base;