import styled from "@emotion/styled";
import { ifProp } from "styled-tools";

export const StyledTask = styled.div<{completed: boolean}>(({theme}) => ({
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    background: theme.colors.grey30,
    marginBottom: 12,
}), ifProp('completed', ({theme}) => ({
    background: theme.colors.positive,
    color: theme.colors.white
})));

export const StyledContainer = styled.div(({theme}) => ({
    width:'100vw',
    padding: 11,
    boxSizing: 'border-box',
}));

export const StyledMessage = styled.div(() => ({
    width:'100vw',
    display: "flex",
    padding: 11,
    justifyContent: 'center'
}))