import styled from "@emotion/styled";

export const StyledPageWrapper = styled.div(({theme}) => ({
    flexGrow: '1',
}));

export const StyledFrameWrapper = styled.div(({theme}) => ({
    display: "flex",
    flexDirection: 'column',
    minHeight: '100vh',
}));
