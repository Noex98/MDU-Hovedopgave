import { signOut, userContext } from '../../myFirebase'
import { useContext } from 'react'
import { StyledSignOutWrapper, StyledUserImage, StyledUserInfo } from './styled'
import { 
    PageFrame,
    CtaButton,
    Image,
    Gutter
} from '../../components'

export const Profile = () => {

    const user = useContext(userContext)

    return (
            <PageFrame headerUserIcon={false}>
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
                    <StyledSignOutWrapper>
                        <CtaButton variant='secondary' color='negative' onClick={() => signOut()}>Sign out</CtaButton>
                    </StyledSignOutWrapper>
                </Gutter>
            </PageFrame>
    )
}
