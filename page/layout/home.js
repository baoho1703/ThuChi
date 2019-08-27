import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Container, Content, Header, Body, Title, Label, Thumbnail, List, ListItem, Left } from 'native-base'

import DataMoney from '../../data/dataAccout.json'
import Uri from '../../image/user.png'

const STORE_KEY = '1234123412341234';

class Home extends Component {
	constructor(props) {
		super(props);
		this.initState();
	}

	initState = () => {
		this.state = {
			loading: true,
		}
	}

	componentWillMount() {
		if (!this.checkData())
			this.save_Data();
		this.load_Data();
	}

	checkData = async () => {
		//check
		var hadData = false;
		const value = await AsyncStorage.getItem(STORE_KEY);
		if (value !== null)
			hadData = true;
		return hadData;
	}

	load_Data = async () => {
		console.log("load_Data")
		try {
			var data = await AsyncStorage.getItem(STORE_KEY);
			var dataAccout = JSON.parse(data);
			this.setState({
				loading: false,
				dataAccout
			});
		} catch (e) {
			console.log('Failed to load_AsyncStorage ', e)
		}
	}

	save_Data = () => {
		console.log('Save_Data')
		try {
			AsyncStorage.setItem(STORE_KEY, JSON.stringify(DataMoney))
				.then(() => { console.log("Save Successfully") })
		} catch (error) {
			console.log('Failed to save_AsyncStorage', error);
		}
	}

	render() {
		console.log('dataAccount', this.state.dataAccount)
		if (!this.checkData() || this.state.loading)
			return null;
		console.log('dataAccount', this.state.dataAccout)
		const { dataAccout } = this.state;
		var index = dataAccout.findIndex(t => t.username === "baoho");
		var data = dataAccout[index];

		var accountInformation = [
			{ name: 'Name', data: data.username },
			{ name: 'So TK Vi', data: data.TK_Wallet },
			{ name: 'So Tk Ngan Hang', data: data.TK_Bank },
			{ name: 'Tong Tai Khoan', data: data.TK_Wallet + data.TK_Bank }
		];

		return (
			<Container  >
				{console.log('retrun')}
				<Header>
					<Body>
						<Title style={{ alignSelf: "center" }}>
							Thông Tin Tài Khoản
						</Title>
					</Body>
				</Header>
				<Content>
					<Thumbnail large source={{ uri: Uri }} style={{ borderWidth: 1, flex: 1, left: '40%', top: '15%' }} />

					{/* List Thông tin người dùng	 */}
					<List style={{ paddingTop: 100 }}>
						{accountInformation.map((value, index) => {
							return (
								<ListItem key={index}>
									<Left>
										<Label>{value.name}</Label>
									</Left>
									<Body>
										<Text>:  {value.data}</Text>
									</Body>
								</ListItem>)
						})}
					</List>
				</Content>
			</Container >
		);
	}
}

export default Home;
