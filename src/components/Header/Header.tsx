import React, { useContext } from 'react'
import { StyledHeader, StyledLogoWrapper, StyledProfileBtnWrapper } from './styled'
import { Logo } from '../Logo'
import { Link } from 'react-router-dom'
import { Image } from '../Image'
import userIcon  from '../../assets/icons/user.svg'
import { userContext } from '../../myFirebase'

export const Header = () => {

    const user = useContext(userContext)

    return (
        <StyledHeader>
            <StyledLogoWrapper>
                <Logo />
            </StyledLogoWrapper>

            {user && (
                <StyledProfileBtnWrapper>
                    <Link to="profile">
                            <Image src={userIcon} width="32px" />
                    </Link>
                </StyledProfileBtnWrapper>
            )}
        </StyledHeader>
    )
}
