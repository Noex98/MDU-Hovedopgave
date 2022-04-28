import React, { useImperativeHandle, useRef, useState } from 'react'
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
        const [hasFocus, setHasFocus] = useState(false);
        const inputRef = useRef<HTMLInputElement>(null);

        const onFocusHandler = () => setHasFocus(true);
        const onBlurHandler = () => setHasFocus(false);

        useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [ref]);

    return (
        <>
            <StyledInputWrapper>
                <StyledInput 
                    ref={inputRef}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    {...rest}
                />
            </StyledInputWrapper>
            {isInvalid && <StyledInvalidMessage />}
        </>
    )
})
