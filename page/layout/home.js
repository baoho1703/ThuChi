import React, { Component } from 'react';
import { Container, Content, Footer, Header, Body, Title, Label, Text } from 'native-base'

class Home extends Component {
	constructor(props) {
		super(props);
		this.initState();
	}

	initState = () => {

	}

	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>

						</Title>
					</Body>
				</Header>
				<Content>
					<Label>Name:</Label> <Text></Text>
				</Content>
				<Footer>

				</Footer>
			</Container>
		);
	}
}

export default Home;