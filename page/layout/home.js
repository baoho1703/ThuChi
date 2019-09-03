import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Container, Content, Header, Body, Title, Label, Thumbnail, List, ListItem, Left } from 'native-base'
import { connect } from "react-redux"

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
			dataAccout: [],
			loading: true,
			checked: false,
			save: false
		}
	}

	// componentWillMount() {
	// 	this.get(STORE_KEY);
	// }

	// componentWillReceiveProps(nextProps) {
	// 	console.log('log ')
	// 	if (!this.state.save)
	// 		this.saveDate();
	// }

	// // 	async function set(key, value) {
	// // 	try {
	// // 		await AsyncStorage.setItem(key, JSON.stringify(value));
	// // 	} catch (error) {
	// // 		console.error(error);
	// // 		return false;
	// // 	}

	// // 	return true;
	// // }

	// getAsync = async (key) => {
	// 	try {
	// 		return await AsyncStorage.getItem(key);
	// 	} catch (error) {
	// 		console.error(error);
	// 		return null;
	// 	}
	// }

	// get = (key) => {
	// 	this.setState({ checked: false })
	// 	var items = [];
	// 	this.getAsync(key).then(t => {
	// 		this.setState({
	// 			checked: true,
	// 			save: true,
	// 			loading: false,
	// 			dataAccout: JSON.parse(t)
	// 		})
	// 		items = t;
	// 		console.log('xxxxxxx: ', t)

	// 	});
	// 	return items;
	// }

	// getAsyncStorage = async () => {
	// 	//check
	// 	var hadData = true;
	// 	const value = await AsyncStorage.getItem(STORE_KEY);
	// 	value.then(t => { hadData = t });
	// 	return hadData;
	// }

	componentWillMount() {
		//this.loadData();
		this.setState({ dataAccout: DataMoney })
	}

	loadData = async () => {
		try {
			const data = await AsyncStorage.getItem(STORE_KEY);
			console.log('dâda', data)
			if (data !== null) {
				//	this.setState({ dataAccout: '' })
				this.saveDate();
			}
		} catch (error) {

		}
	}
	saveDate = () => {
		//console.log('Save_Data')
		try {
			AsyncStorage.setItem(STORE_KEY, JSON.stringify(DataMoney))
				.then(() => {
					this.setState({
						save: true,
						dataAccout: DataMoney
					})
					console.log("Save Successfully")
				})
		} catch (error) {
			console.log('Failed to save_AsyncStorage', error);
		}
	}

	render() {
		// console.log('checked: ', this.state)
		// const { checked, dataAccout } = this.state;
		// if (!checked || (!dataAccout) || dataAccout.length == 0) {
		// 	return null;
		// }
		console.log('state', this.state)
		const { dataAccout } = this.state;
		var index = dataAccout.findIndex(t => t.username === this.props.account.username);
		var data = dataAccout[index];

		var accountInformation = [
			{ name: 'Name', data: data.username },
			{ name: 'Money in wallet', data: ' ' + data.TK_Wallet + '  VND' },
			{ name: 'Money in a bank account', data: data.TK_Bank + '  VND' },
			{ name: 'Sum account', data: data.TK_Wallet + data.TK_Bank + '  VND' }
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

const mapStateToProps = state => ({
	account: state.account,
})


export default connect(mapStateToProps, null)(Home);
