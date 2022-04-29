import { useState, useContext } from 'react';
import { signInWithGoogle, signOut } from '../../myFirebase/Auth';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../myFirebase/Auth';
import { Header } from '../../components/Header';
import {
    StyledContentWrapper,
    StyledHeadline,
    StyledPageWrapper 
} from './styled';
import { CtaButton } from '../../components/FormElements/CtaButton';

export const Login = () => {

    const [popUpopen, setPopupOpen] = useState(false);
    const user = useContext(userContext);
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
        <StyledPageWrapper>
            <Header />
            <StyledContentWrapper>
                <div>
                    <StyledHeadline>Login</StyledHeadline>
                    <CtaButton 
                        onClick={() => signIn()} 
                        disabled={popUpopen}
                        color='neutral'
                        size='lg'
                        variant='primary'
                    >
                        Sign in with Google
                    </CtaButton>
                </div>
            </StyledContentWrapper>
        </StyledPageWrapper>
    );
};
