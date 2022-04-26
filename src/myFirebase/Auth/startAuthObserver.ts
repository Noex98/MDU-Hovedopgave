import { IUser } from "../../dataModels";
import { onAuthStateChanged } from "firebase/auth";

/**
 * Toggles an observer for the authentication state
 * @param loggedIn callback for a log in
 * @param loggedOut callback for a log out
 * @param loadingComplete callback for when loading is finished
 * @returns a function which unsubscribes 
 */

export const startAuthObserver = (
    auth: any,
    loggedIn: (user: IUser) => void, 
    loggedOut: () => void,
) => {
    

    return onAuthStateChanged(auth, (user) => { 
        if (user) {
            loggedIn(user)
        } else {
            loggedOut()
        }
    });
}