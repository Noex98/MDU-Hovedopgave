import { colors } from "./colors/colors";

const fallbackFont = ', Montserrat'

export const theme = {
    colors: {
        ...colors
    },
    fonts: {
        bold:`COOP-BOLD ${fallbackFont}`,
        light: `COOP-Light ${fallbackFont}`,
        medium: `COOP-Medium ${fallbackFont}`,
        regular: `COOP-Regular ${fallbackFont}`,
        semiBold: `COOP-SemiBold ${fallbackFont}`,
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
    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
    },
    fontSizesFluid: {
        // TBD
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
        background: colors.black + ' !important',
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