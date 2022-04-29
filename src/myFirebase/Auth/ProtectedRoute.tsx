import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from './UserContextProvider';

type Props = {
    children: React.ReactChild | React.ReactChild[]
}

/**
 * If no user data is present, redirect to the login page
 * @param Children 
 */

export const ProtectedRoute = ({ children }: Props) => {
    const navigate = useNavigate();
    const user = useContext(userContext)

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <>
            {children}    
        </>
    );
};
