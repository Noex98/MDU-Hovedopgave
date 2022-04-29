import React, { useImperativeHandle, useRef } from 'react'
import { StyledInput, StyledInputWrapper, StyledInvalidMessage } from './Styled';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

type Props = Omit<InputProps, 'value'> & {
    isInvalid?: boolean;
    invalidMessage?: string;
    isActive?: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement, Props>(
    (
        {isInvalid, invalidMessage, isActive, ...rest}, ref
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    return (
        <>
            <StyledInputWrapper>
                <StyledInput 
                    ref={inputRef}
                    {...rest}
                />
            </StyledInputWrapper>
            {isInvalid && <StyledInvalidMessage />}
        </>
    )
})
