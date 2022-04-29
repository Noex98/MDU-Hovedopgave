import React, { ReactNode } from 'react'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { StyledFrameWrapper, StyledPageWrapper } from './styled'

type Props = {
    children?: ReactNode,
    showHeader?: boolean,
    showNav?: boolean,
    headerUserIcon?: boolean
}

export const PageFrame = (
    {
        children, 
        showHeader = true, 
        headerUserIcon = true,
        showNav = true
    }: Props) => {

    return (
        <StyledFrameWrapper>

            {showHeader && (
                <Header userIcon={headerUserIcon}/>
            )}

            <StyledPageWrapper>
                {children}
            </StyledPageWrapper>

            {showNav && (
                <Nav />
            )}
        </StyledFrameWrapper>
    )
}
