import React, { useContext } from 'react';
import { StyledHeader, StyledLogoWrapper, StyledProfileBtnWrapper } from './styled';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import { Image } from '../Image';
import icon  from '../../assets/icons/user.svg';
import { userContext } from '../../myFirebase';

type Props = {
    userIcon?: boolean
};

export const Header = ({userIcon = true}: Props) => {

    const user = useContext(userContext);

    return (
        <StyledHeader>
            <Link to='/'>
                <StyledLogoWrapper>
                    <Logo />
                </StyledLogoWrapper>
            </Link>

            {user && userIcon && (
                <StyledProfileBtnWrapper>
                    <Link to="profile">
                            <Image src={icon} width="32px" />
                    </Link>
                </StyledProfileBtnWrapper>
            )}
        </StyledHeader>
    );
}
