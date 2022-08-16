import { ThemeProvider as EmotionThemeProvider, ThemeProviderProps } from '@emotion/react';
import { theme } from './theme';

export const ThemeProvider = (props: Omit<ThemeProviderProps, 'theme'>) => {
    return <EmotionThemeProvider theme={theme} {...props} />;
}


