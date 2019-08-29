import React, { Component } from 'react';
import { Text, StyleSheet, AsyncStorage } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Icon, Card, CardItem, Left, Right, Form, Item, Label, Input } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { addIncome, editIncome } from '../../action/actionIncome';


const KeyIncome = '1111111111';
class Home extends Component {
  constructor(props) {
    super(props);
    this.initState();
  }

  initState = () => {
    this.state = {
      addStatus: false,
      editStatus: false,
      addMoneys: '',
      //  thu: [],
      editMoneys: '',
      index: '',
      total: 0,
      loading: true,
    }
  }

  componentWillMount() {

    // console.log("CHECK_DATA ", !this.checkData())
    if (!this.checkData()) {
      this.save_Data();
    }
    this.load_Data();
  }

  checkData = async () => {
    //check
    var hadData = false;
    const value = await AsyncStorage.getItem(KeyIncome);
    if (value !== null)
      hadData = true;
    return hadData;
  }

  load_Data = async () => {
    console.log("load_Data")
    try {
      var data = await AsyncStorage.getItem(KeyIncome);
      var thu = JSON.parse(data);
      console.log('data_data_data_load', thu)
      this.setState({
        ...this.state,
        loading: false,
        thu: thu.thu,
        total: thu.total

      });
    } catch (e) {
      console.log('Failed to load_AsyncStorage ', e)
    }
  }

  save_Data = (thu) => {
    if (thu !== null)
      var arrayThu = [];

    var arrayThu = thu;

    console.log('Save_Data')
    try {
      AsyncStorage.setItem(KeyIncome, JSON.stringify(arrayThu))
        .then(() => { console.log("Save Successfully") })
    } catch (error) {
      console.log('Failed to save_AsyncStorage', error);
    }
  }

  addThu = () => {
    this.setState({
      addStatus: true,
      editStatus: false,
    })
  }
  editThu = (index) => {
    this.setState({
      editStatus: true,
      addStatus: false,
      editMoneys: this.state.thu[index],
      index: index,
    })
  }

  setValue = (text) => {//data : chi cung dt gia tri
    this.setState({
      editMoneys: {
        ...this.state.editMoneys,
        ...text,
      },
      addMoneys: {
        ...this.state.addMoneys,
        ...text
      }
    })
  }

  onSubmitAdd = () => {

    var addThu = this.state.addMoneys;
    if (!addThu === true)
      return
    this.state.thu.push(addThu);

    var totals = parseInt(this.state.total) + parseInt(addThu.money);
    var arrayThu = this.state.thu;
    this.save_Data(this.state.thu, total);
    this.props.storeAddIncome(totals, arrayThu);
    this.setState({
      addStatus: false,
      total: totals,
      addMoneys: ''
    })
  }

  onSubmitEdit = () => {
    var exampleNew = parseInt(this.state.editMoneys.money);
    var exampleOld = parseInt(this.state.thu[this.state.index].money);
    var totals = this.state.total;
    if (exampleNew > exampleOld) {
      var data = exampleNew - exampleOld;
      var total = totals + data;
    }
    else {
      var data = exampleOld - exampleNew;
      var total = totals - data;
    }

    var editThu = this.state.editMoneys;
    if (editThu.name === '' && editThu.money === '')
      return
    this.state.thu.splice(this.state.index, 1, editThu),
      this.setState({
        editStatus: false,
        total: total
      });
    var arrayThu = this.state.thu;
    this.props.storeEditIncome(total, arrayThu);
  }


  onClose = () => {
    this.setState({
      addStatus: false,
      editStatus: false,
    })
  }
  render() {
    console.log("Thu", this.state.thu)
    if (!this.checkData() || this.state.loading)
      return null;
    return (
      <Container >
        <Header>
          <Body>
            <Title style={{ alignSelf: "center" }}>
              Doanh Thu
            </Title>
            <Title style={{ fontSize: 13, paddingLeft: '25%' }}>Tong Thu:({this.state.total} VND)</Title>

          </Body>
          <Right>
            <Button style={style.buton_add} onPress={this.addThu} >

              <FontAwesome style={{ fontSize: 24 }} name="plus-circle"></FontAwesome>
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: "#f2f2f2", position: 'relative' }}>

          {/* Add Thu Chi */}
          {this.state.addStatus && <Card style={style.card}>
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

              <Item>
                <Button block onPress={this.onSubmitAdd} style={style.button_save} >
                  <Title>ADD</Title>
                </Button>
                <Button block onPress={this.onClose} style={style.button_close} >
                  <Title>CLOSE</Title>
                </Button>
              </Item>
            </Form>
          </Card>
          }

          {/* Edit Thu Chi */}
          {this.state.editStatus && <Card style={style.card}>
            <Form>
              <Item fixedLabel>
                <Label style={{ borderRightWidth: 2 }}>Tên</Label>
                <Input
                  value={this.state.editMoneys.name}
                  onChangeText={(text) => this.setValue({ name: text })}
                />
              </Item>
              <Item fixedLabel last>
                <Label style={{ borderRightWidth: 2 }}>Số tiền</Label>
                <Input
                  value={this.state.editMoneys.money}
                  onChangeText={(text) => this.setValue({ money: text })}
                />
              </Item>

              <Item>
                <Button block onPress={this.onSubmitEdit} style={style.button_save}>
                  <Title>SAVE</Title>
                </Button>
                <Button block onPress={this.onClose} style={style.button_close} >
                  <Title>CLOSE</Title>
                </Button>
              </Item>
            </Form>
          </Card>
          }

          {/* List Thu Chi */}
          {this.state.thu.map((item, index) => {
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
      </Container >
    );
  }
}

const mapStateToProps = state => ({
  total: state.income.total
})

const mapDispatchToProps = dispatch => {
  return {
    storeAddIncome: (total, arrayThu) => dispatch(addIncome(total, arrayThu)),
    storeEditIncome: (total, arrayThu) => dispatch(editIncome(total, arrayThu))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
    marginLeft: '7%',
    marginTop: 0
  },
  button_close: {
    marginTop: 10,
    borderRadius: 8,
    width: "30%",
    alignSelf: "center",
    marginLeft: '22%',
    marginTop: 0
  }
})