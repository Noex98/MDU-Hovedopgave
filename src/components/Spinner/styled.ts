import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes({
    '0%': {
        transform: 'rotateZ(0deg)'
    },
    '100%': {
        transform: 'rotateZ(360deg)'
    }
})

export const StyledContainer = styled.div(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}));


export const StyledSpinner = styled.div(({theme}) => ({
    margin: 'auto',
    width: 25,
    height: 25,
    borderRadius: '50%',
    border: '2px solid transparent',
    borderTop: `2px solid ${theme.colors.black}`,
    animation: `${spin} 1s infinite ease-in-out` ,
}))


