import styled from "@emotion/styled";


export const StyledWrapper = styled.div(() => ({

}));

export const StyledHeadline = styled.h1(({theme}) => ({
    padding: '24px 0',
    fontSize: theme.fontSizes.xxl,
    textAlign: 'center'
}));

export const StyledStoreContainer = styled.div(({theme}) => ({
    display: "flex",
    flexDirection: 'column',
    gap: 24,
    padding: '24px 0'
}));