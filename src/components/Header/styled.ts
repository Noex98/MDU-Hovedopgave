import styled from "@emotion/styled";

export const StyledHeader = styled.div(({theme}) => ({
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '18px 12px 12px 12px',
    background: theme.colors.red,
}))

export const StyledLogoWrapper = styled.div(({theme}) => ({
    width: 'clamp(100px, 50vw, 200px)'
}))

export const StyledProfileBtnWrapper = styled.div(({theme}) => ({
    position: 'absolute',
    top: '50%',
    right: 24,
    transform: 'translateY(-50%)',
    cursor: 'pointer'
}))