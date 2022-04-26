import { userContext } from '../../myFirebase'
import { useContext } from 'react'

export const Profile = () => {

    const user = useContext(userContext)

    return (
        <div>
            {user?.photoURL && (<img src={user?.photoURL} alt="" />)}
            {user?.displayName && <div>{user?.displayName}</div>}
            {user?.email && <div>{user?.email}</div>}
            {user?.phoneNumber && <div>{user?.phoneNumber}</div>}
        </div>
    )
}
