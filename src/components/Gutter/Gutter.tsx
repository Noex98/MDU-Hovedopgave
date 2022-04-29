import React, { ReactNode } from 'react'
import { StyledGutter } from './styled'

type Props = {
    children: ReactNode
}

export const Gutter = ({children}: Props) => {
    return (
        <StyledGutter>{children}</StyledGutter>
    )
}
