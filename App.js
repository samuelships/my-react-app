import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Details from './screens/Details';
import Cart from './screens/Cart';
import SignUp from './screens/SignUp';

const Main = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator screenOptions={{ header: () => null }}>
        <Main.Screen
          name='Login'
          component={Login} />
        <Main.Screen
          name='Home'
          component={Home} />
        <Main.Screen
          name='Details'
          component={Details} />
        <Main.Screen
          name='Cart'
          component={Cart} />
        <Main.Screen
          name='SignUp'
          component={SignUp} />
      </Main.Navigator>
    </NavigationContainer>
  );
}