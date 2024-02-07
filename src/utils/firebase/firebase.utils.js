import { initializeApp } from 'firebase/app';
import { getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider 
    } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "API KEY",
    authDomain: "Auth Domain",
    projectId: "Project Id",
    storageBucket: "Storage Bucket",
    messagingSenderId: "Messaging Sender Id",
    appId: "App Id"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);