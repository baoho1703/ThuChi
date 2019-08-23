import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Icon, Card, CardItem, Left, Right, Form, Item, Label, Input } from 'native-base'

import { FontAwesome } from '@expo/vector-icons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.initState();

  }

  initState = () => {
    this.state = {
      add: false,
      edit: false,
      moneys: {
        name: '',
        money: ''
      },
      thu: [],
      _edit: '',
      index: '',
    }
  }

  addThu = () => {
    this.setState({
      add: true,
    })
  }
  editThu = (index) => {
    this.setState({
      edit: true,
      _edit: this.state.thu[index],
      index: index,
    })
  }

  setValue = (text) => {
    this.setState({
      _edit: {
        ...this.state._edit,
        ...text,
      },
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
  }

  onSubmitEdit = () => {
    var editThu = this.state._edit;
    this.state.thu.splice(this.state.index, 1, editThu),
      this.setState({
        edit: false
      })
  }
  render() {

    return (
      <Container style={{ width: "100%" }}>
        <Header>
          <Body>
            <Title style={{ alignSelf: "center" }}>
              Chi Tieu
						</Title>
          </Body>
          <Right>
            <Button style={style.buton_add} onPress={this.addThu} >

              <FontAwesome style={{ fontSize: 24 }} name="plus-circle"></FontAwesome>
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: "#f2f2f2", position: 'relative' }}>

          {/* Add Thu Chi */}
          {this.state.add && <Card style={style.card}>
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
              <Button block onPress={this.onSubmit} style={style.button_save}>
                <Title>ADD</Title>
              </Button>
            </Form>
          </Card>
          }

          {/* Edit Thu Chi */}
          {this.state.edit && <Card style={style.card}>
            <Form>
              <Item fixedLabel>
                <Label style={{ borderRightWidth: 2 }}>Tên</Label>
                <Input
                  value={this.state._edit.name}
                  onChangeText={(text) => this.setValue({ name: text })}
                />
              </Item>
              <Item fixedLabel last>
                <Label style={{ borderRightWidth: 2 }}>Số tiền</Label>
                <Input
                  value={this.state._edit.money}
                  onChangeText={(text) => this.setValue({ money: text })}
                />
              </Item>
              <Button block onPress={this.onSubmitEdit} style={style.button_save}>
                <Title>SAVE</Title>
              </Button>
            </Form>
          </Card>
          }

          {/* List Thu Chi */}
          {
            this.state.thu.map((item, index) => {
              return <Card style={style.card} key={index}>
                <CardItem style={style.cardItem} >
                  <Left>
                    <Icon name="wallet" ></Icon>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text>{item.money} VND</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Button onPress={() => this.editThu(index)} style={style.button_edit}>
                      <FontAwesome name="edit" style={{ fontSize: 24 }} ></FontAwesome>
                    </Button>
                    <Text>2019/08/14</Text>
                  </Right>
                </CardItem>
              </Card>

            })
          }

          <Card style={style.card}>
            <CardItem style={style.cardItem}>
              <Left>
                <Icon name="wallet" ></Icon>
                <Body>
                  <Text>Tiền thưởng</Text>
                  <Text>200000 VND</Text>
                </Body>
              </Left>
              <Right>
                <Button onPress={this.editThu} style={style.button_edit}>
                  <FontAwesome name="edit" style={{ fontSize: 24 }} ></FontAwesome>
                </Button>
                <Text>2019/08/14</Text>
              </Right>
            </CardItem>
          </Card>

        </Content>
        {/* <Footer>
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
        </Footer> */}
      </Container >
    );
  }
}

export default Home;

const style = StyleSheet.create({
  card: {
    marginTop: 10,
    width: "94%",
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "#0000"
  },
  cardItem: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#000"
  },
  button_edit: {
    backgroundColor: "#0000",
    height: 20
  },
  buton_add: {
    position: "absolute",
    right: 10,
    bottom: 0,
    top: -22
  },
  button_save: {
    marginTop: 10,
    borderRadius: 8,
    width: "30%",
    alignSelf: "center",
    marginTop: 0
  },
})