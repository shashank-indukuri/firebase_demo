import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS1bcIhKkXoT_ExhlWEdN8PzAvBi-r8Eo",
  authDomain: "fir-demo-54ced.firebaseapp.com",
  projectId: "fir-demo-54ced",
  storageBucket: "fir-demo-54ced.appspot.com",
  messagingSenderId: "158453188607",
  appId: "1:158453188607:web:16c54840292a1e31fcc9ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = firestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { app, auth, provider };
