import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, Title } from 'native-base';

import taccounts from '../../data/taccounts.json'

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
		var username = this.state.account.username;
		var password = this.state.account.password;
		taccounts.items.map((item, value) => {
			if (username === item.username && password === item.password) {
				this.props.checkLogin();
				return
			}
		})
	}

	render() {
		return (
			<Container>
				<Content>
					<Form style={{ paddingTop: '50%' }}>
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
							{/* <Text>LOGIN</Text> */}
							<Title>LOGIN</Title>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
export default Login;