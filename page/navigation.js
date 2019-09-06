
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createBottomTabNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createStackNavigator} from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';
import Home from './layout/home';
import Thu from './layout/thu';
import Chi from './layout/chi';
import Chart from './layout/chart';

const App = createBottomTabNavigator(
  {
    Home: { screen: Home, },
    Thu: { screen: Thu },
    Chi: { screen: Chi },
    Chart: { screen: Chart },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        // console.log('routerName', routeName)
        // console.log('navigation.state', navigation.state)
        if (routeName === 'Home') {
          return (

            <FontAwesome name="home" size={25} color={tintColor}  >

              {/* () => { this.props.navigation.navigate('Home', { TK_Bank: this.state.dataAccout }) }  */}
            </FontAwesome>

          );
        } if (routeName === 'Thu') {
          return (
            <FontAwesome name="calendar" size={25} color={tintColor} />
          );
        }
        if (routeName === 'Chi') {
          return (
            <FontAwesome name="shopping-cart" size={25} color={tintColor} />
          );
        } else {
          return (
            <FontAwesome name="pie-chart" size={25} color={tintColor} />
          );
        }
      },
    }),

  },
);
export default createAppContainer(App);