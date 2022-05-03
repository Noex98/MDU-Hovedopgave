import { useContext } from 'react';
import { PageFrame } from '../../components/PageFrame';
import { rutineContext, userContext } from '../../myFirebase';

export const HomePage = () => {

    const user = useContext(userContext)
    const rutines = useContext(rutineContext)

    console.log(rutines);

    return (
        <PageFrame>
            <p>Home Page</p>
        </PageFrame>
    );
};

