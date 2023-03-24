import styled from 'styled-components/native';
import { getColor, getSpacing } from '../../utils/helpers/getTheme';

export const ButtonComponent = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${getColor('primary')};
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-direction: row;
`;

export const Text = styled.Text`
  margin: 0 ${getSpacing('medium')};
  color: ${getColor('background')};
`;

export const Spacing = styled.View`
  width: 20px;
`;
