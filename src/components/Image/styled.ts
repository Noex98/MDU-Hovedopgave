import styled from "@emotion/styled";

export const StyledImageWrapper = styled.div<{width?: string, height?: string}>(({theme, width, height}) => ({
    width: !!width ? width : undefined,
    height: !!height ? height : undefined,
}));

export const StyledImage = styled.img<{hasWidth: boolean, hasHeight: boolean}>(({theme, hasWidth, hasHeight}) => ({
    width: !!hasWidth ? '100%' : 'auto',
    height: !!hasHeight ? '100%' : 'auto',
}));