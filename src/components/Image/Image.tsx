import React from 'react'
import { StyledImage, StyledImageWrapper } from './styled'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

type Props = Omit<ImageProps, 'src'> & {
    src: string,
    width?: string,
    height?: string,
}

export const Image = ({width, height, src, ...rest}: Props) => {
    return (
        <StyledImageWrapper width={width} height={height}>
            <StyledImage hasHeight={!!height} hasWidth={!!width} src={src} {...rest} />
        </StyledImageWrapper>
     )
}
