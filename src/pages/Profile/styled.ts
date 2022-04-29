import styled from "@emotion/styled";

export const StyledUserImage = styled.div(() => ({
    borderRadius: '50%',
    overflow: 'hidden',
    width: 'fit-content',
}));

export const StyledUserInfo = styled.div(() => ({
    padding: '12px 0',
    display: 'flex',
    gap: 12,
    alignItems: 'center'
}));

export const StyledSignOutWrapper = styled.div(() => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'auto'
}))