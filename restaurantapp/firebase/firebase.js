import app from 'firebase/app';
import 'firebase/firestore';

//import firebaseConfig from './config';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAy_natn5LwR8S10EKzbLfDfCMW515ltsA",
    authDomain: "restaurant-61d25.firebaseapp.com",
    projectId: "restaurant-61d25",
    storageBucket: "restaurant-61d25.appspot.com",
    messagingSenderId: "759708241873",
    appId: "1:759708241873:web:7aeb58422e166e9c179af0",
    measurementId: "G-7H7WR835WK"
  };

class Firebase { // PARA PODER CONECTAR CON FIREBASE Y TRAER LOS DATOS
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig)
            app.firestore().settings({ experimentalForceLongPolling: true });
        }
        this.db = app.firestore();
    }
}

const firebase = new Firebase();

export default firebase;