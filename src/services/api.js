import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDiyTHNwk1xPGQLPYzkoKHOcOhJzRe42GI",
  authDomain: "seventh-carport-370301.firebaseapp.com",
  databaseURL: "https://seventh-carport-370301-default-rtdb.firebaseio.com",
  projectId: "seventh-carport-370301",
  storageBucket: "seventh-carport-370301.appspot.com",
  messagingSenderId: "1020286471833",
  appId: "1:1020286471833:web:423c47a8544e406f96b208",
  measurementId: "G-2K0E92Y2P4"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, app };