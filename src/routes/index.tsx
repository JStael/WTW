import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { OnboardingStack } from './OnboardingStack';
import { StatusBar } from 'react-native';
import { getColor } from '../utils/helpers/getTheme';

export const AppRoutes = () => {
  const onFirst = true;
  const backgroundColor = getColor('background');
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={backgroundColor} />
      {onFirst ? <OnboardingStack /> : <AppStack />}
    </NavigationContainer>
  );
};
