import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { OnboardingStack } from './OnboardingStack';

export const AppRoutes = () => {
  const onFirst = false;
  return (
    <NavigationContainer>
      {onFirst ? <OnboardingStack /> : <AppStack />}
    </NavigationContainer>
  );
};
