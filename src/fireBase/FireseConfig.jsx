// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { environment } from './environment.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: environment.firebase.apiKey,
    authDomain: environment.firebase.authDomain,
    projectId: environment.firebase.projectId,
    storageBucket: environment.firebase.storageBucket,
    messagingSenderId: environment.firebase.messagingSenderId,
    appId: environment.firebase.appId
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

export default app;