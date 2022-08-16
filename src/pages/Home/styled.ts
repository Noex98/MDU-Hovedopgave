import styled from "@emotion/styled";

export const StyledWrapper = styled.div(({theme}) => ({
    display: 'flex',
    height: '100&',
    overflowX: 'scroll',
    scrollSnapType: 'x mandatory',
    minHeight: '80vh',
    '>*': {
        flexShrink: '0',
        scrollSnapAlign: 'center',
    },
    '&::-webkit-scrollbar': {
        display: 'none',
    },
}));
