import { useState, useContext } from 'react';
import { signInWithGoogle, signOut } from '../../myFirebase/Auth';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../myFirebase/Auth';

export const Login = () => {

    const [popUpopen, setPopupOpen] = useState(false);
    const user = useContext(userContext)
    const navigate = useNavigate();

    if (user){
        return (
            <div>
                <p>Already signed in as {user.displayName}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    }
    
    const signIn = async () => {
        setPopupOpen(true)
        const succes = await signInWithGoogle()
        if (succes) {
            navigate('/')
        } else {
            setPopupOpen(false)
            
        }
    }

    return (
        <div>
            <p>Login Page</p>
            <button onClick={() => signIn()} disabled={popUpopen}>
                Sign in with Google
            </button>
        </div>
    );
};
