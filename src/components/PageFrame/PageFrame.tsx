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

/**
 * 
 * PageFrame wraps the content in between a header and and nav. This element should be used as the top element in a page.
 * 
 * @param Props
 * * CenterPage -- wraps the children in a flex container that centers the items vertically and horizontally. Direction is column.
 * * ShowHeader -- toggle the header. Defaults to true.
 * * headerUserIcon -- toggle the user icon in the header. Defaults to true.
 * * showNav -- toggle the nav. Defaults to true.
 */

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
