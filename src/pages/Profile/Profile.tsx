import { signOut, userContext } from '../../myFirebase'
import { useContext } from 'react'
import { Gutter } from '../../components/Gutter'
import { Image } from '../../components/Image'
import { StyledSignOutWrapper, StyledUserImage, StyledUserInfo } from './styled'
import { CtaButton } from '../../components/FormElements'
import { PageFrame } from '../../components/PageFrame'

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
