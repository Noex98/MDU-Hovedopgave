import React, {useContext, useEffect} from 'react'
import { userContext } from '../../../../myFirebase/Auth';
import { useNavigate } from 'react-router-dom';

type Props = {
    children: React.ReactChild | React.ReactChild[]
}

export const RequireAssignedStore = ({children}: Props) => {
    
    const user = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.assignedStore){
            navigate('/storeselector');
        }
    }, [user, navigate])

    return (<>{children}</>)
}
