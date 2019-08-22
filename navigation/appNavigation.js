// import React, { Component } from 'react';
// import { Text, View, StyleSheet, SafeAreaView, Button, StatusBar, Platform } from 'react-native';
// import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Home from '../page/layout/home'
// import Thu from '../page/layout/thu'
// import Chi from '../page/layout/chi'
// import Chart from '../page/layout/chart'
// class SettingsScreen extends React.Component {
// 	render() {
// 		return (
// 			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// 				<Text>Settings!</Text>
// 				<Button
// 					title="Go to Home"
// 					onPress={() => this.props.navigation.navigate('Home')}
// 				/>
// 			</View>
// 		);
// 	}
// }

// const Navigator = createBottomTabNavigator({

// 	Home: {
// 		screen: Home,
// 	},
// 	Thu: { screen: Thu },
// 	Chi: { screen: Chi },
// 	Setting: { screen: SettingsScreen },
// 	Chart: { screen: Chart },
// }, {
// 		defaultNavigationOptions: ({ navigation }) => ({
// 			tabBarIcon: ({ focused, horizontal, tintColor }) => {
// 				const { routeName } = navigation.state;
// 				let IconComponent = Ionicons;
// 				let iconName;
// 				if (routeName === 'Home') {
// 					iconName = `home`;
// 					IconComponent = HomeIconWithBadge;
// 				} else if (routeName === 'Thu') {
// 					iconName = `calendar`;
// 				} else if (routeName === 'Chi') {
// 					iconName = `cart`;
// 				} else if (routeName === 'Chart') {
// 					iconName = `ios-stats`;
// 				}

// 				return <IconComponent name={iconName} size={25} color={tintColor} />;
// 			},
// 		}),
// 	}
// )

// export default createAppContainer(Navigator)

// // const styles = StyleSheet.create({
// // 	container: {
// // 		flex: 1,
// // 		alignItems: 'center',
// // 		justifyContent: 'center'
// // 	},
// // 	paragraph: {
// // 		fontSize: 18,
// // 		fontWeight: 'bold',
// // 	},
// // })	


import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { Icon } from 'native-base'
import { createBottomTabNavigator, createAppContainer, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Home!</Text>
				<Button
					title="Go to Settings"
					onPress={() => this.props.navigation.navigate('Settings')}
				/>
			</View>
		);
	}
}

class SettingsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Settings!</Text>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}

export default createAppContainer(createBottomTabNavigator(
	{
		Home: { screen: HomeScreen },
		Settings: { screen: SettingsScreen },
	}, {
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				if (routeName === 'Home') {
					return (
						<Icon name="home"></Icon>
						// <Image
						// 	source={require('./assets/home.png')}
						// 	style={{ width: 20, height: 20, }} />
					);
				} else {
					return (
						<Icon name="calendar"></Icon>
						// <Image
						// 	source={require('./assets/settings.png')}
						// 	style={{ width: 20, height: 20 }} />
					);
				}
			},
		}),
		tabBarOptions: {
			activeTintColor: '#FF6F00',
			inactiveTintColor: '#263238',
		},
	}
));
