import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { getColor } from '../../utils/helpers/getTheme';
import { ButtonComponent, Spacing, Text } from './styles';
import Icon from 'react-native-vector-icons/Feather';

type ButtonTypeProps = {
  text: string;
  onPress: () => void;
  arrow?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Button: FC<ButtonTypeProps> = ({
  arrow = false,
  onPress,
  text,
  style = {},
  ...rest
}) => {
  return (
    <ButtonComponent {...rest} onPress={onPress} style={style}>
      <>
        {arrow ? <Spacing /> : null}
        <Text style={style}>{text.toUpperCase()}</Text>
        {arrow ? (
          <Icon
            name="arrow-right"
            size={20}
            color={getColor('background')}
            style={style}
          />
        ) : null}
      </>
    </ButtonComponent>
  );
};
