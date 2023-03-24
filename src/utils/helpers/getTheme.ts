import { Colors, Spacing, Typography } from '../types/styled';
import colorsTheme from '../../theme/colors';
import spacingTheme from '../../theme/spacing';
import typographyTheme from '../../theme/typography';

const { colors } = colorsTheme;
const { spacing } = spacingTheme;
const { typography } = typographyTheme;

export const getColor = (variant: keyof Colors) => {
  return colors[variant];
};

export const getSpacing = (value: keyof Spacing) => {
  return spacing[value];
};

export const getTypography = (value: keyof Typography) => {
  return typography[value];
};
