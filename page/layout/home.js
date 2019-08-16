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

	render() {
		var index = DataMoney.items.findIndex(t => t.username === "baoho");
		var data = DataMoney.items[index];
		const uri = Uri;
		console.log('data', data)
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
								<Text>{data.username}</Text>
							</Body>
						</ListItem>

						<ListItem>
							<Left>
								<Label>So TK Vi</Label>
							</Left>
							<Body>
								<Text>{data.TK_Wallet}</Text>
							</Body>
						</ListItem>

						<ListItem>
							<Left>
								<Label>So TK Ngan Hang</Label>
							</Left>
							<Body>
								<Text>{data.TK_Bank}</Text>
							</Body>
						</ListItem>

						<ListItem>
							<Left>
								<Label>Sum</Label>
							</Left>
							<Body>
								<Text>{data.TK_Bank + data.TK_Wallet}</Text>
							</Body>
						</ListItem>
					</List>
					{/* <Item fixedLabel>
							<Label>Name</Label><Label>{data.username}</Label>
							<Body style={{ left: 0, paddingLeft: 0 }}>

							</Body>
						</Item>
						<Item fixedLabel>
							<Label>So TK Vi</Label>
							<Right>
								<Text>{data.TK_Wallet}</Text>
							</Right>
						</Item>
						<Item fixedLabel>
							<Label>So TK Ngan Hang</Label>
							<Body>
								<Text>{data.TK_Bank}</Text>
							</Body>
						</Item>
						<Item fixedLabel>
							<Label>Sum</Label>
							<Body>
								<Text>{data.TK_Bank + data.TK_Wallet}</Text>
							</Body>
						</Item> */}

				</Content>
				<Footer>
					<FooterTab>
						<Button vertical>
							<Icon name="home"></Icon>
							<Text>Home</Text>
						</Button>
						<Button vertical>
							<Icon name="calendar"></Icon>
							<Text>Thu</Text>
						</Button>
						<Button vertical>
							<Icon name="cart"></Icon>
							<Text>Chi</Text>
						</Button>
						<Button vertical>
							<Icon name="ios-stats"></Icon>
							<Text>Chart</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container >
		);
	}
}

export default Home;