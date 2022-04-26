import { 
    getAuth, 
    signOut as firebaseSignOut,
    GoogleAuthProvider, 
    signInWithPopup
} from 'firebase/auth';

export const signOut = () => {
    firebaseSignOut(getAuth())
}

/**
 * Starts a google authentication flow in a popup
 * 
 * @returns Returns true if login was successfull, and false if unsuccessfull.
 */

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(getAuth(), new GoogleAuthProvider())
        return true;
    } catch { return false }
};