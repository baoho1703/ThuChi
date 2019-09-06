import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Container, Content, Header, Body, Title, Label, Thumbnail, List, ListItem, Left, Spinner, Footer, FooterTab, Button } from 'native-base'
import { connect } from 'react-redux'
//import DataMoney from '../data/dataAccout.json'
import Uri from '../../image/user.png'
import { KEY_BANK_ACCOUNT } from '../../action/actionType';


class Home extends Component {
	constructor(props) {
		super(props);
		this.initState();
	}

	initState = () => {
		this.state = {
			dataAccout: {
				username: this.props.username,
				TK_Wallet: 1000,
				TK_Bank: 0,
			},
			loading: true,

		}
	}

	componentWillMount() {
		this.loadData();
		// AsyncStorage.removeItem(KEY_BANK_ACCOUNT)
	}

	componentDidMount() {
		this.props.navigation.addListener('willFocus', (route) => { //tab changed });
			console.log('changed: hhh', route)
			this.loadData();
		});
		//	this.loadData();
	}

	loadData = async () => {
		console.log('LOAD_DATA_+_+:')
		try {
			var data = JSON.parse(await AsyncStorage.getItem(KEY_BANK_ACCOUNT) || 'null');
			console.log('data null', data)
			if (data == null) {
				console.log('lu nam nay lon qua', data)
				this.setState({
					loading: false,
					dataAccout: {
						...this.state.dataAccout,
						TK_Bank: 0
					},
				})
			} else {
				console.log('mot mua lu ve', data)
				this.setState({
					loading: false,
					dataAccout: data,
				})
			}
		} catch (error) {
			console.log('Error Home -=> :', error)
		}
	}

	saveData = () => {
		AsyncStorage.setItem(KEY_BANK_ACCOUNT, JSON.stringify(this.state.dataAccout));
		//	this.props.total(this.state.)

	}

	content_UI = () => {
		console.log('redux-home-tkbank: ', this.props.TK_Bank)
		console.log('STATE=:=:', this.state)
		if (this.state.loading) {
			return <Spinner color='green' />;
		}
		else {


			this.saveData();
			var data = this.state.dataAccout;
			var accountInformation = [
				{ name: 'Name', data: data.username },
				{ name: 'Money in wallet', data: ' ' + data.TK_Wallet + '  VND' },
				{ name: 'Money in a bank account', data: data.TK_Bank + '  VND' },
				{ name: 'Sum account', data: data.TK_Wallet + data.TK_Bank + '  VND' }
			];

			return (
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
										<Text>:{value.data}</Text>
									</Body>
								</ListItem>)
						})}
					</List>
				</Content>
			)
		}
	}

	render() {
		const { navigate } = this.props.navigation;
		console.log('data can dung', this.state)
		console.log('data da co', this.props.TK_Bank)


		return (
			<Container >
				<Header>
					<Body>
						<Title style={{ alignSelf: "center" }}>
							Thông Tin Tài Khoản
						</Title>
					</Body>
				</Header>
				{this.content_UI()}
				{/* <Footer>
					<FooterTab>
						<Button onPress={() => navigate('Home', {})}>
							<Text>Home</Text>
						</Button>
						<Button onPress={() => navigate('Thu', {})}>
							<Text>Thu</Text>
						</Button>
						<Button onPress={() => navigate('Chi', {})}>
							<Text>Chi</Text>
						</Button>
						<Button onPress={() => navigate('Chart', {})}>
							<Text>Chart</Text>
						</Button>
					</FooterTab>
				</Footer> */}
			</Container >
		);
	}
}

const mapStateToProps = state => (
	console.log('Money', state.income.total),
	{
		username: state.account.username,
		TK_Bank: state.income.total,
	})

export default connect(mapStateToProps, null)(Home);
