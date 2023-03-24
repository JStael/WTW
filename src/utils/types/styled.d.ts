import 'styled-components';

declare type Colors = {
  primary: string;
  primaryHover: string;
  background: string;
  text: string;
  success: string;
  danger: string;
};

declare type Typography = {
  title: string;
  subtitle: string;
  text: string;
  caption: string;
  description: string;
};

declare type Spacing = {
  minimum: string;
  small: string;
  medium: string;
  large: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    typography: Typography;
    spacing: Spacing;
  }
}

declare type ThemeType = DefaultTheme;
