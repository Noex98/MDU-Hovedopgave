import styled from "@emotion/styled";

export const StyledContentWrapper = styled.div(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const StyledHeadline = styled.h1(({theme}) => ({
    paddingBottom: 48,
    fontSize: theme.fontSizes.xxl,
    textAlign: 'center'
}));