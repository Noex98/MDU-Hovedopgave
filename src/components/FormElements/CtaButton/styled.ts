import styled from "@emotion/styled";
import { switchProp } from "styled-tools";
import { Props } from "./CtaButton";

export const StyledButton = styled.button<Props>(({theme}) => ({
    textAlign: 'center',
    borderRadius: theme.borderRadius.standard,
    cursor: 'pointer',

    '&:disabled': {
        opacity: .5
    }
}),
    switchProp('color', {
        positive: (({theme}) => ({
            border: `1px solid ${theme.colors.positive}`,
            color: theme.colors.positive,
            background: theme.colors.positive,
        })),
        neutral: (({theme}) => ({
            border: `1px solid ${theme.colors.neutral}`,
            color: theme.colors.neutral,
            background: theme.colors.neutral,
        })),
        negative: (({theme}) => ({
            border: `1px solid ${theme.colors.negative}`,
            color: theme.colors.negative,
            background: theme.colors.negative,
        })),
        
    }),
    switchProp('size', {
        lg: (({theme}) => ({
            padding: 18,
            fontSize: theme.fontSizes.lg
        })),
        md: (({theme}) => ({
            padding: 14,
            fontSize: theme.fontSizes.md
        })),
        sm: (({theme}) => ({
            padding: 10,
            fontSize: theme.fontSizes.sm
        })),
    }),
    switchProp('variant', {
        primary: (({theme}) => ({
            color: theme.colors.white,
        })),
        secondary: (({theme}) => ({
            background: theme.colors.white
        })),
    }),
);