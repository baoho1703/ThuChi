import React, { Component } from 'react';
import { Container, Content, Footer, Header, Body, Title, Label, Text, Form, Item, FooterTab, Button, Icon } from 'native-base'

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
						<Title style={{ alignSelf: "center" }}>
							Thong tin tai khoan
						</Title>
					</Body>
				</Header>
				<Content>
					<Form style={{ paddingTop: "20%" }}>
						<Item fixedLabel>
							<Label>Name</Label>
							<Text>----unsne name----</Text>
						</Item>
						<Item fixedLabel>
							<Label>So TK Vi</Label>
							<Text>----So TK Vi----</Text>
						</Item>
						<Item fixedLabel>
							<Label>So TK Ngan Hang</Label>
							<Text>----So Tk Ngan Hang----</Text>
						</Item>
						<Item fixedLabel>
							<Label>Sum</Label>
							<Text>----unsne name----</Text>
						</Item>

					</Form>
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
			</Container>
		);
	}
}

export default Home;