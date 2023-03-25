import 'styled-components';

declare type Colors = {
  primary: string;
  background: string;
  text: string;
  success: string;
  danger: string;
};

type SubTypography = {
  fontSize: string;
  lineHeight: string;
};

declare type Typography = {
  title: SubTypography;
  subtitle: SubTypography;
  text: SubTypography;
  caption: SubTypography;
  description: SubTypography;
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
