import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAKyN4b_4ecj8Dby0F9n1JyFR3KAn81V5A",
  authDomain: "tiktok---jornada-20656.firebaseapp.com",
  projectId: "tiktok---jornada-20656",
  storageBucket: "tiktok---jornada-20656.appspot.com",
  messagingSenderId: "969015469285",
  appId: "1:969015469285:web:ecc32bff256a9c7238200c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;