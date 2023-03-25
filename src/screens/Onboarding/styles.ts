import styled from 'styled-components/native';
import { Button } from '../../components';
import { getColor, getSpacing } from '../../utils/helpers/getTheme';

type DotProps = {
  active: boolean;
};

// spacing
const small = getSpacing('small');
const large = getSpacing('large');

// color
const primaryColor = getColor('primary');
const textColor = getColor('text');

export const Container = styled.View`
  background-color: ${getColor('background')};
  flex: 1;
`;
export const Main = styled.View`
  flex: 3;

  justify-content: flex-end;
`;

export const Footer = styled.View`
  flex: 1;
  padding: ${small};
`;

export const DotsBox = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Dot = styled.View<DotProps>`
  background-color: ${({ active }) => (active ? primaryColor : textColor)};
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-bottom: ${large};
  margin-right: ${small};
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${primaryColor};
  margin-top: ${small};
`;
