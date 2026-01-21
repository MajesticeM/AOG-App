import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SermonsScreen from '../screens/SermonsScreen';
import BibleScreen from '../screens/BibleScreen';
import HymnsScreen from '../screens/HymnsScreen';
import EventsScreen from '../screens/EventsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sermons" component={SermonsScreen} />
      <Stack.Screen name="Bible" component={BibleScreen} />
      <Stack.Screen name="Hymns" component={HymnsScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
    </Stack.Navigator>
  );
}
