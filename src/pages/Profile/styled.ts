import styled from "@emotion/styled";

export const StyledUserImage = styled.div(({theme}) => ({
    borderRadius: '50%',
    overflow: 'hidden',
    width: 'fit-content',
}));

export const StyledUserInfo = styled.div(({theme}) => ({
    padding: '12px 0',
    display: 'flex',
    gap: 12,
    alignItems: 'center'
}));