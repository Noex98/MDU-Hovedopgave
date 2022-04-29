import { userContext } from '../../myFirebase'
import { useContext } from 'react'
import { Gutter } from '../../components/Gutter'
import { Header } from '../../components/Header'
import { Image } from '../../components/Image'
import { StyledUserImage, StyledUserInfo } from './styled'

export const Profile = () => {

    const user = useContext(userContext)

    return (
        <>
            <Header userIcon={false}/>
            <Gutter>
                <StyledUserInfo>
                    <StyledUserImage>
                        <Image src={user?.photoURL || ''} alt="?" width='72px' height='72px'/>
                    </StyledUserImage>
                    <div>
                        {user?.displayName && <div>{user?.displayName}</div>}
                        {user?.email && <div>{user?.email}</div>}
                        {user?.phoneNumber && <div>{user?.phoneNumber}</div>}
                    </div>
                </StyledUserInfo>
            </Gutter>
        </>
    )
}
