import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
//import { Spinner } from 'components/Spinner';
import { IUser } from '../../dataModels';
import { db, startAuthObserver } from '../../myFirebase';
import { doc, onSnapshot } from "firebase/firestore";
import { Spinner } from '../../components/Spinner';

export const userContext = createContext<IUser | null>(null)

type Props = {
    children: React.ReactChild | React.ReactChild[]
}

/**
 * Enables children to access user data
 * @param children
 */

export const UserContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<IUser | null>(null)
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const logInHandler = (user: IUser) => {
        console.log(user);
        
        setLoading(true)
        setUser({
            uid: user.uid,
            email: user.email,
            phoneNumber: user.phoneNumber,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    }

    const logOutHandler = () => {
        setUser(null)
        setLoading(false)
    }

    useEffect(() => {
        const unsubscribeAuthObserver = startAuthObserver(auth, logInHandler, logOutHandler)
        return () => unsubscribeAuthObserver()
    }, [auth]);

    useEffect(() => {
        if (user?.uid) {
            onSnapshot(doc(db, "users", user.uid),
                (doc) => {
                    setUser(prev => {
                        return prev != null ? {...prev, ...doc.data()} : null;
                    })
                    setLoading(false)
                },
                (error) => console.log(error)
            );
        }
    }, [user?.uid])

    if (loading) return (
        <Spinner />
    );

    return (
        <>
            <userContext.Provider value={user}>
                {children}    
            </userContext.Provider>
        </>
    );
};
