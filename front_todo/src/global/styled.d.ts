import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeTypes = typeof theme;
  export type DefaultTheme = ThemeTypes;
}
