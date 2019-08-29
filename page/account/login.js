import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Title, Thumbnail } from 'native-base';

import taccounts from '../../data/taccounts.json'
import image from '../../image/logo.png'

class Login extends Component {
	constructor(props) {
		super(props);
		this.initState();
	}

	initState = () => {
		this.state = {
			account: {
				username: 'baoho',
				password: 'abc123',
			},
			status: '',
			isLogin: true,
		}
	}

	setValue = (data) => {
		this.setState({
			account: {
				...this.state.account,
				...data
			}
		})
	}

	onSubmit = () => {
		// var account = this.state.account;
		// if (account.username === '' || account.password === '') {
		// 	if (account.username === '') {
		// 		this.setState({ ...this.state, status: 'Ten dang nhap khong duoc de trong.' })
		// 		return;
		// 	}

		// 	if (account.password === '') {
		// 		this.setState({ ...this.state, status: 'mat khau khong duoc de trong.' })
		// 		return;
		// 	}
		// } else {
		var username = this.state.account.username;
		var password = this.state.account.password;
		taccounts.items.map((item, value) => {
			// if (item.username === username && item.password === '') {
			// 	this.setState({ ...this.state, status: 'mat khau sai' })
			// 	return;
			// }
			// if (item.username === '' && item.password === password) {
			// 	this.setState({ ...this.state, status: 'mat khau khong duoc de trong.' })
			// 	return;
			// }
			if (username === item.username && password === item.password) {
				this.props.checkLogin({ okLogin: true, account: this.state.account });
				return
			}
		})
		// }
	}

	render() {
		return (
			<Container style={{ alignItems: "center" }}>
				<Content>

					<Thumbnail large source={{ uri: image }} style={{ flex: 1, top: '15%', width: "200 %", height: 171, borderRadius: 11 }} />
					<Text style={{ fontSize: 32, paddingTop: 110, paddingBottom: 20, textAlign: "center" }}>Welcome !</Text>
					<Form style={{ paddingTop: '1%' }}>

						<Item fixedLabel style={{ marginLeft: 0 }}>
							<Label>Username : </Label>
							<Input
								onChangeText={(text) => this.setValue({ username: text })}
								value={this.state.account.username}
							/>
						</Item>
						<Item fixedLabel style={{ marginLeft: 0 }}>
							<Label>Password : </Label>
							<Input
								onChangeText={(text) => this.setValue({ password: text })}
								value={this.state.account.password}
							/>
						</Item>
						<Button block onPress={this.onSubmit} style={{ marginTop: 10, borderRadius: 8 }}>
							<Title>LOGIN</Title>
						</Button>
					</Form>
				</Content>
			</Container >
		);
	}
}
export default Login;