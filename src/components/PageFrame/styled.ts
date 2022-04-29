import styled from "@emotion/styled";
import { ifProp } from "styled-tools";

export const StyledPageWrapper = styled.div<{centerPage?: boolean}>(({theme}) => ({
    flexGrow: '1',
    position: 'relative'
}), 
ifProp('centerPage', () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})));

export const StyledFrameWrapper = styled.div(() => ({
    display: "flex",
    flexDirection: 'column',
    minHeight: '100vh',
}));
