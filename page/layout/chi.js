import React, { Component } from 'react';
import { Text } from 'react-native'
import { Container, Content, Footer, Header, Body, Title, FooterTab, Button, Icon, Card, CardItem, Left, Right, View, Fab, Toast, Form, Item, Label, Input } from 'native-base'

import { FontAwesome } from '@expo/vector-icons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.initState();

  }

  initState = () => {
    this.state = {
      add: false,
      moneys: {
        name: '',
        money: ''
      },
      thu: [],
    }
  }

  addThu = () => {
    this.setState({
      add: true,
    })
  }

  setValue = (text) => {
    this.setState({
      moneys: {
        ...this.state.moneys,
        ...text
      }
    })
  }

  onSubmit = () => {
    var data = this.state.moneys;
    this.state.thu.push(data)
    this.setState({
      add: false,
    })
    console.log('thu', this.state.thu)
  }
  render() {

    return (
      <Container style={{ width: "100%" }}>
        <Header>
          <Body>
            <Title style={{ alignSelf: "center" }}>
              Chi Tiêu
						</Title>
          </Body>
          <Right>
            <Button style={{ position: "absolute", right: 10, bottom: 0, top: -22 }} onPress={this.addThu} >

              <FontAwesome style={{ fontSize: 24 }} name="plus-circle"></FontAwesome>
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: "#f2f2f2", position: 'relative' }}>
          {
            this.state.add && <Card style={{ marginTop: 10, width: "94%", alignSelf: "center", borderRadius: 8, backgroundColor: "#0000" }}>
              <Form>
                <Item fixedLabel>
                  <Label style={{ borderRightWidth: 2 }}>Tên</Label>
                  <Input
                    onChangeText={(text) => this.setValue({ name: text })}
                  />
                </Item>
                <Item fixedLabel last>
                  <Label style={{ borderRightWidth: 2 }}>Số tiền</Label>
                  <Input
                    onChangeText={(text) => this.setValue({ money: text })}
                  />
                </Item>

                <Button block onPress={this.onSubmit} style={{ marginTop: 10, borderRadius: 8, width: "30%", alignSelf: "center", marginTop: 0 }}>
                  <Title>Save</Title>
                </Button>
              </Form>
            </Card>
          }

          {
            this.state.thu.map((item, index) => {
              return <Card style={{ marginTop: 10, width: "94%", alignSelf: "center", borderRadius: 8, backgroundColor: "#0000" }} key={index}>
                <CardItem style={{ borderRadius: 8, borderWidth: 2, borderColor: "#000" }}>
                  <Left>
                    <Icon name="wallet" ></Icon>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text>{item.money} VND</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Button style={{ backgroundColor: "#0000", height: 20 }}>
                      <FontAwesome name="edit" style={{ fontSize: 24 }} ></FontAwesome>
                    </Button>
                    <Text>2019/08/14</Text>
                  </Right>
                </CardItem>
              </Card>

            })
          }

          <Card style={{ marginTop: 10, width: "94%", alignSelf: "center", borderRadius: 8, backgroundColor: "#0000" }}>
            <CardItem style={{ borderRadius: 8, borderWidth: 2, borderColor: "#000" }}>
              <Left>
                <Icon name="wallet" ></Icon>
                <Body>
                  <Text>Mua đồ gia dụng</Text>
                  <Text>200000 VND</Text>
                </Body>
              </Left>
              <Right>
                <Button style={{ backgroundColor: "#0000", height: 20 }}>
                  <FontAwesome name="edit" style={{ fontSize: 24 }} ></FontAwesome>
                </Button>
                <Text>2019/08/14</Text>
              </Right>
            </CardItem>
          </Card>

        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="home"></Icon>
              <Text style={{ color: "white" }}>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="calendar"></Icon>
              <Text style={{ color: "white" }}>Thu</Text>
            </Button>
            <Button vertical>
              <Icon name="cart"></Icon>
              <Text style={{ color: "white" }}>Chi</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-stats"></Icon>
              <Text style={{ color: "white" }}>Chart</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container >
    );
  }
}

export default Home;