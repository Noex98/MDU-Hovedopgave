import styled from "@emotion/styled";

export const StyledInput = styled.input(({theme}) => ({
    border: 'none',
    fontSize: theme.fontSizes.sm,
    width:'100%',
    '&:focus-within': {
        outline: 'none'
    }
}));


export const StyledInvalidMessage = styled.span(({theme}) => ({

}));

export const StyledInputWrapper = styled.div(({theme}) => ({
    borderRadius: 20,
    border: `1px solid ${theme.colors.grey70}`,
    transition: '50ms',
    padding: '10px 20px',
    '&:focus-within': {
        borderColor: theme.colors.grey90
    }
}));

