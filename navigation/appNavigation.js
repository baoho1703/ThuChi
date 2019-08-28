import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, StatusBar, Platform } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../page/layout/home'
import Thu from '../page/layout/thu'
import Chi from '../page/layout/chi'
import Chart from '../page/layout/chart'

const Navigator = createBottomTabNavigator({

	Home: { screen: Home },
	Thu: { screen: Thu },
	Chi: { screen: Chi },
	Chart: { screen: Chart },
},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				if (routeName === 'Home') {
					return (
						<FontAwesome name="home" size={25} color={tintColor} />
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

	}
)

export default createAppContainer(Navigator)





