// import React, { Component } from 'react';
// import { Text } from 'react-native'
// import { Container, Content, Footer, Header, Body, Title, Label, FooterTab, Button, Icon, Thumbnail, List, ListItem, Left } from 'native-base'

// import DataMoney from '../../data/dataAccout.json'
// import Uri from '../../image/user.png'

// class Home extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.initState();
// 	}
// 	initState = () => {

// 	}

// 	render() {
// 		var footerTab = [
// 			{ title: "Home", screen: "Screen1", icon: "home" },
// 		]

// 		var index = DataMoney.items.findIndex(t => t.username === "baoho");
// 		var data = DataMoney.items[index];
// 		const uri = Uri;
// 		var accountInformation = [
// 			{ name: 'Name', data: data.username },
// 			{ name: 'So TK Vi', data: data.TK_Wallet },
// 			{ name: 'So Tk Ngan Hang', data: data.TK_Bank },
// 			{ name: 'Tong Tai Khoan', data: data.TK_Wallet + data.TK_Bank }
// 		];

// 		return (
// 			<Container style={{ width: "100%" }}>
// 				<Header>
// 					<Body>
// 						<Title style={{ alignSelf: "center" }}>
// 							Thông Tin Tài Khoản
// 						</Title>
// 					</Body>
// 				</Header>
// 				<Content>
// 					<Thumbnail large source={{ uri: uri }} style={{ borderWidth: 1, flex: 1, left: '40%', top: '15%' }} />

// 					{/* List Thông tin người dùng	 */}
// 					<List style={{ paddingTop: 100 }}>
// 						{accountInformation.map((value, index) => {
// 							return (
// 								<ListItem>
// 									<Left>
// 										<Label>{value.name}</Label>
// 									</Left>
// 									<Body>
// 										<Text>:  {value.data}</Text>
// 									</Body>
// 								</ListItem>)
// 						})}
// 					</List>

// 				</Content>
// 				<Footer>
// 					<FooterTab>
// 						{/* {footerTab.map((value, index) => {
// 							<Button key={index}>
// 								<Icon name="home"></Icon>
// 								<Text style={{ color: "white" }}>Home</Text>
// 							</Button>
// 						})} */}

// 						<Button >
// 							<Icon name="home"></Icon>
// 							<Text style={{ color: "white" }}>Home</Text>
// 						</Button>
// 						<Button  >
// 							<Icon name="calendar"></Icon>
// 							<Text style={{ color: "white" }}>Thu</Text>
// 						</Button>
// 						<Button  >
// 							<Icon name="cart"></Icon>
// 							<Text style={{ color: "white" }}>Chi</Text>
// 						</Button>
// 						<Button  >
// 							<Icon name="ios-stats"></Icon>
// 							<Text style={{ color: "white" }}>Chart</Text>
// 						</Button>
// 					</FooterTab>
// 				</Footer>
// 			</Container >
// 		);
// 	}
// }


// export default Home;


import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Home!</Text>
			</View>
		);
	}
}

class SettingsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Settings!</Text>
			</View>
		);
	}
}

const TabNavigator = createBottomTabNavigator({
	Home: { screen: HomeScreen },
	Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);