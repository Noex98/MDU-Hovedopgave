import styled from "@emotion/styled";

export const StyledHeader = styled.div(({theme}) => ({
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '18px 12px 12px 12px',
    background: theme.colors.red,

    'img': {
        width: 'clamp(100px, 50vw, 200px)'
    }
}))