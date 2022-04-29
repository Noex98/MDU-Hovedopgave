import React, { ReactNode } from 'react'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { StyledFrameWrapper, StyledPageWrapper } from './styled'

type Props = {
    children?: ReactNode,
    showHeader?: boolean,
    showNav?: boolean,
    headerUserIcon?: boolean,
    centerPage?: boolean
}

export const PageFrame = (
    {
        children,
        centerPage,
        showHeader = true, 
        headerUserIcon = true,
        showNav = true
    }: Props) => {

    return (
        <StyledFrameWrapper>

            {showHeader && (
                <Header userIcon={headerUserIcon}/>
            )}

            <StyledPageWrapper centerPage={centerPage}>
                {children}
            </StyledPageWrapper>

            {showNav && (
                <Nav />
            )}
        </StyledFrameWrapper>
    )
}
