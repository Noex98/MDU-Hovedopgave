import { initializeApp  } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
}

export const app = initializeApp(config)
export const db = getFirestore(app)
