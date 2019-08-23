import React, { Component } from 'react';
import { Text } from 'react-native'
import { Container, Content, Footer, Header, Body, Title, Label, Form, Item, FooterTab, Button, Icon, SwipeRow, View, Thumbnail, Right, List, ListItem, Left } from 'native-base'

import DataMoney from '../../data/dataAccout.json'
import Uri from '../../image/user.png'



class Home extends Component {
	constructor(props) {
		super(props);
		this.initState();
	}
	initState = () => {

	}

	footerTab = () => {
		// var footerTab = [
		// 	{ title: "Home", screen: "Screen1", icon: "home" },
		// ];
		//	footerTab.map((value, index) => {
		console.log('value', value);
		//return (

		// <Button key={index}>
		// 	<Icon name="home"></Icon>
		// 	<Text style={{ color: "white" }}>Home</Text>
		// </Button>
		//console.log('value', value);
		// <Text style={{ color: "white" }}>Home </Text>
		//)
		//})
	}
	render() {
		// var footerTab = [
		// 	{ title: "Home", screen: "Screen1", icon: "home" },
		// ]
		var index = DataMoney.items.findIndex(t => t.username === "baoho");
		var data = DataMoney.items[index];
		const uri = Uri;
		return (
			<Container style={{ width: "100%" }}>
				<Header>
					<Body>
						<Title style={{ alignSelf: "center" }}>
							Thông Tin Tài Khoản
						</Title>
					</Body>
				</Header>
				<Content>
					<Thumbnail large source={{ uri: uri }} style={{ borderWidth: 1, flex: 1, left: '40%', top: '15%' }} />
					<List style={{ paddingTop: 100 }}>
						<ListItem>
							<Left>
								<Label>Name</Label>
							</Left>
							<Body>
								<Text>:  {data.username}</Text>
							</Body>
						</ListItem>

						<ListItem>
							<Left>
								<Label>So TK Vi</Label>
							</Left>
							<Body>
								<Text>:  {data.TK_Wallet} VND</Text>
							</Body>
						</ListItem>

						<ListItem>
							<Left>
								<Label>So TK Ngan Hang</Label>
							</Left>
							<Body>
								<Text>:  {data.TK_Bank} VND</Text>
							</Body>
						</ListItem>

						<ListItem>
							<Left>
								<Label>Tổng Tài Khoản</Label>
							</Left>
							<Body>
								<Text>:  {data.TK_Bank + data.TK_Wallet} VND</Text>
							</Body>
						</ListItem>
					</List>


				</Content>
				<Footer>
					<FooterTab>
						{this.footerTab}
						{/* <Button  >
							<Icon name="home"></Icon>
							<Text style={{ color: "white" }}>Home</Text>
						</Button>
						<Text style={{ color: "white" }}>Home</Text> */}
						{/* <Button >
							<Icon name="home"></Icon>
							<Text style={{ color: "white" }}>Home</Text>
						</Button>
						<Button  >
							<Icon name="calendar"></Icon>
							<Text style={{ color: "white" }}>Thu</Text>
						</Button>
						<Button  >
							<Icon name="cart"></Icon>
							<Text style={{ color: "white" }}>Chi</Text>
						</Button>
						<Button  >
							<Icon name="ios-stats"></Icon>
							<Text style={{ color: "white" }}>Chart</Text>
						</Button> */}
					</FooterTab>
				</Footer>
			</Container >
		);
	}
}


export default Home;