import { signOut } from '../../myFirebase'
import { StyledTest } from './styled';
import { Header } from '../../components/Header';

export const HomePage = () => {

    return (
        <div>
            <Header />
            <p>Home Page</p>
            <button onClick={() => signOut()}>Sign out of Firebase</button>
            <StyledTest>asdasdasd</StyledTest>
        </div>
    );
};

