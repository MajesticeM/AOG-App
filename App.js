import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { FirebaseProvider } from './src/firebase/FirebaseProvider';

export default function App() {
  return (
    <FirebaseProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </FirebaseProvider>
  );
}
