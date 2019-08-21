import React, { Component } from 'react';
import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, StatusBar, Platform } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../page/layout/home'
import Thu from '../page/layout/thu'
import Chi from '../page/layout/chi'
import Chart from '../page/layout/chart'
export default createAppContainer(createStackNavigator({
	Screen1: {
		screen: Home,
	},
	Screen2: {
		screen: Thu,
	},
	Screen3: {
		screen: Chi,
	},
	Screen4: {
		screen: Chart,
	}, ư
}, {
		headerMode: 'none',
	}));

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	paragraph: {
		fontSize: 18,
		fontWeight: 'bold',
	},
})	