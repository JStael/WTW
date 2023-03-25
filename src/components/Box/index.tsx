import React, { FC, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Container } from './styles';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Box: FC<Props> = ({ children, style = {} }) => {
  return <Container style={style}>{children}</Container>;
};
