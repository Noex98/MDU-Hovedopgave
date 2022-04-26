import { initializeApp  } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyAAQO5oT9qu8P-KbI3k-qyfyn6WwtIWwMc",
    authDomain: "daglibrugsen-bager.firebaseapp.com",
    projectId: "daglibrugsen-bager",
    storageBucket: "daglibrugsen-bager.appspot.com",
    messagingSenderId: "887558215535",
    appId: "1:887558215535:web:6f04e93c8ddc9a75cdba9a"
}

export const app = initializeApp(config)
export const db = getFirestore(app)
