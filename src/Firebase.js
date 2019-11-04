import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInsnapshots: true};

const config = {
    apiKey: "AIzaSyDa5r3mxyu3HZpwpG-DkEsWRwX8p00B97c",
    authDomain: "todo-users.firebaseapp.com",
    databaseURL: "https://todo-users.firebaseio.com",
    projectId: "todo-users",
    storageBucket: "todo-users.appspot.com",
    messagingSenderId: "611752989201",
    appId: "1:611752989201:web:237bc5b9600744fe6997b0",
    measurementId: "G-PHHLGHF4MF"
  };

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;