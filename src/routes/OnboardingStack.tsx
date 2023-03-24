import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const OnboardingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
  </Stack.Navigator>
);
