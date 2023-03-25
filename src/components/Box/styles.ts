import styled from 'styled-components/native';
import { getColor, getSpacing } from '../../utils/helpers/getTheme';

export const Container = styled.View`
  flex: 1;
  padding: ${getSpacing('small')};
  background-color: ${getColor('background')};
`;
