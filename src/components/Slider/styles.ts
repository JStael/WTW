import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import {
  getColor,
  getSpacing,
  getTypography,
} from '../../utils/helpers/getTheme';

// spacing
const small = getSpacing('small');

// color
const textColor = getColor('text');

// typography
const subtitle = getTypography('subtitle');

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width};
  justify-content: center;
  flex: 1;
`;

export const ImageBox = styled.View`
  align-items: center;
  padding: ${small};
`;

export const DescriptionBox = styled.View`
  padding: ${small};
`;

export const Description = styled.Text`
  color: ${textColor};
  text-align: center;
  font-size: ${subtitle.fontSize};
  line-height: ${subtitle.lineHeight};
  flex-wrap: wrap;
`;
