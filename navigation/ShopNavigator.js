import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProductEditScreen from '../screens/ProductEditScreen';
import HelpScreen from '../screens/HelpScreen';
import ProductViewScreen from '../screens/ProductViewScreen';
import ShopViewScreen from '../screens/ShopViewScreen';

const Stack = createStackNavigator();

export default function ShopNavigator() {
  return (
    <Stack.Navigator initialRouteName='ShopView'>
      <Stack.Screen
        name='ShopView'
        component={ShopViewScreen}
      />
      <Stack.Screen
        name='ProductView'
        component={ProductViewScreen}

      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});