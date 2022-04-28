import React, { ReactNode } from 'react'
import { StyledButton } from './styled'

export type Props = {
    children: ReactNode,
    onClick?: () => void,
    variant?: 'primary' | 'secondary',
    color?: 'positive' | 'neutral' | 'negative',
    size?: 'lg' | 'md' | 'sm'
    disabled?: boolean
}

export const CtaButton = (
    {
        children, 
        onClick, 
        variant = 'primary', 
        color = 'neutral',
        size = 'md',
        disabled
    }: Props) => {
        
    return (
        <StyledButton 
            children={children}
            onClick={onClick}
            variant={variant}
            color={color}
            size={size}
            disabled={disabled}
        />
    )
}