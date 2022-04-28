import { colors } from "./colors/colors";

const fallbackFont = ''

export const theme = {
    colors: {
        ...colors
    },
    fonts: {
        /*
        bold:`COOP-BOLD ${fallbackFont}`,
        light: `COOP-Light ${fallbackFont}`,
        medium: `COOP-Medium ${fallbackFont}`,
        regular: `COOP-Regular ${fallbackFont}`,
        semiBold: `COOP-SemiBold ${fallbackFont}`,
        */
    },
    fontSizes: {
        xs: '10px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px',
        xxl: '36px',
        xxxl: '48px'

    },
    fontSizesFluid: {
        
    },
    borders: {
        default: `1px solid ${colors.black}`
    },
    focus: {
        outlineOffset: '1px',
        outlineStyle: 'solid',
        outlineColor: colors.secondary.blue,
        outlineWidth: '2px',
    },
    highlight: {
        background: colors.black,
        color: colors.white
    },
    easings: {
        smooth: 'cubic-bezier(0.35, 0, 0.15, 1)'
    }
};

type ThemeType = typeof theme;

declare module '@emotion/react' {
    export interface Theme extends ThemeType {}
};