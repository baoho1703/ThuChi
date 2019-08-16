import React, { Component } from 'react';
import { Text } from 'react-native'
import { Container, Content, Footer, Header, Body, Title, FooterTab, Button, Icon, Card, CardItem, Left, Right, View, Fab, Toast } from 'native-base'
import FAB from 'react-native-fab'
import { FontAwesome } from '@expo/vector-icons';
import { BottomTabBar } from 'react-navigation';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);

  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  button = () => {
    return (<Text>aaaa</Text>)
  }
  render() {
    return (
      <Container style={{ width: "100%" }}>
        <Header>
          <Body>
            <Title style={{ alignSelf: "center" }}>
              Doanh Thu
						</Title>
          </Body>
          <Right>
            <Button style={{ fontSize: 24, position: "absolute", right: 10, bottom: 0, top: -22 }}
              onPress={() => Toast.show({
                text: 'Wrong password!',
                buttonText: 'Okay'
              })}>

              <FontAwesome style={{ fontSize: 24 }} name="plus-circle"></FontAwesome>
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: "#f2f2f2", position: 'relative' }}>

          <Card style={{ marginTop: 10, width: "94%", alignSelf: "center", borderRadius: 8, backgroundColor: "#0000" }}>
            <CardItem style={{ borderRadius: 8, borderWidth: 2, borderColor: "#000" }}>
              <Left>
                <Icon name="wallet" ></Icon>
                <Body>
                  <Text>Tiền thưởng</Text>
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

          <Card style={{ marginTop: 10, width: "94%", alignSelf: "center", borderRadius: 8, backgroundColor: "#0000" }}>
            <CardItem style={{ borderRadius: 8, borderWidth: 2, borderColor: "#000" }}>
              <Left>
                <Icon name="wallet" ></Icon>
                <Body>
                  <Text>Tiền thưởng</Text>
                  <Text>200000 VND</Text>
                </Body>
              </Left>
              <Right>
                <FontAwesome name="edit" ></FontAwesome>
                <Text>2019/08/14</Text>
              </Right>
            </CardItem>
          </Card>

          <Card style={{ marginTop: 10, width: "94%", alignSelf: "center", borderRadius: 8, backgroundColor: "#ffffff" }}>
            <CardItem style={{ borderRadius: 8, borderWidth: 2, borderColor: "#000" }}>
              <Left>
                <Icon name="wallet" ></Icon>
                <Body>
                  <Text>Tiền thưởng</Text>
                  <Text>200000 VND</Text>
                </Body>
              </Left>
              <Right>
                <FontAwesome name="edit" ></FontAwesome>
                <Text>2019/08/14</Text>
              </Right>
            </CardItem>
          </Card>

        </Content>
        <Footer  >

          <FooterTab  >
            <Button vertical>
              <Icon name="home"></Icon>
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="wallet"></Icon>
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