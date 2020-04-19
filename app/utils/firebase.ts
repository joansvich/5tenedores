import firebase from 'firebase/app'
import { firebaseApi } from './social';

const firebaseConfig = {
    apiKey: firebaseApi.apiKey,
    authDomain: "tenedores-18e77.firebaseapp.com",
    databaseURL: "https://tenedores-18e77.firebaseio.com",
    projectId: "tenedores-18e77",
    storageBucket: "tenedores-18e77.appspot.com",
    messagingSenderId: firebaseApi.messagingSenderId,
    appId: firebaseApi.appId
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)