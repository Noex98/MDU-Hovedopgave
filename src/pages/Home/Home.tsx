import { signOut } from '../../myFirebase'
import { StyledTest } from './styled';

export const HomePage = () => {

    return (
        <div>
            <p>Home Page</p>
            <button onClick={() => signOut()}>Sign out of Firebase</button>
            <StyledTest>asdasdasd</StyledTest>
        </div>
    );
};

