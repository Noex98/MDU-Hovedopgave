import styled from "@emotion/styled";

export const StyledStoreOption = styled.button(({theme}) => ({
    fontWeight: theme.fontWeight.semiBold,
    cursor: 'pointer',
    padding: 18,
    background: theme.colors.grey30,
    borderRadius: theme.borderRadius.standard,
    border: 'none',
    width: '100%'
}));