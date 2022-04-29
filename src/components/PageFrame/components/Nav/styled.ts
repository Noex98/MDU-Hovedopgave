import styled from "@emotion/styled";

export const StyledNav = styled.nav(({theme}) => ({
    padding: 12,
    position:"sticky",
    bottom: 0,
    background: theme.colors.grey50
}));