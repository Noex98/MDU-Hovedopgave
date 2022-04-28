import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import { theme } from '../../theme/theme'
import { fontFace } from '../typography/font-face'

export const GlobalStyles = () => (
    <Global 
        styles={css`
            ${emotionReset}
            
            ${fontFace}

            html {
                box-sizing: border-box;
                overflow-y: scroll;
                height: -webkit-fill-available;
                background-color: ${theme.colors.white};
            }

            *,
            *:before,
            *after {
                box-sizing: inherit;
            }
            body {
                height: 100vh;
                height: -webkit-fill-availabe;
                font-family: ${theme.fonts.bold};
                margin: 0,
            }

            *::selection {
                background: ${theme.highlight.background};
                color: ${theme.highlight.color};
            }

            *:focus-visible {
                outline-offset: ${theme.focus.outlineOffset};
                outline-style:  ${theme.focus.outlineStyle};
                outline-color:  ${theme.focus.outlineColor};
                outline-width:  ${theme.focus.outlineWidth};
            }

            *:focus:not(:focus-visible){
                outline:none;
            }
        `}
    />
)