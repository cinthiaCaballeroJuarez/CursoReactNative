import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {
  apiKey: "AIzaSyAy_natn5LwR8S10EKzbLfDfCMW515ltsA",
  authDomain: "restaurant-61d25.firebaseapp.com",
  projectId: "restaurant-61d25",
  storageBucket: "restaurant-61d25.appspot.com",
  messagingSenderId: "759708241873",
  appId: "1:759708241873:web:7aeb58422e166e9c179af0",
  measurementId: "G-7H7WR835WK"
};
 

 
class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.db = app.firestore();
        this.storage = app.storage();
    }
}
 

 
const  firebase =new Firebase();



export default firebase;