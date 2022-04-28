import styled from "@emotion/styled";

export const StyledPageWrapper = styled.div(({theme}) => ({
    minHeight: '100vh',
    display: "flex",
    flexDirection: 'column',
}));

export const StyledContentWrapper = styled.div(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
}));

export const StyledHeadline = styled.h1(({theme}) => ({
    paddingBottom: 48,
    fontSize: theme.fontSizes.xxl,
    textAlign: 'center'
}));