import React, { Component } from 'react';
import { Text, StyleSheet, AsyncStorage } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Icon, Card, CardItem, Left, Right, Form, Item, Label, Input, Spinner } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { addIncome, editIncome } from '../../action/actionIncome';
import { KEY_SPEND } from '../../action/actionType'
import { addSpend, editSpend, deleteSpend } from '../../action/actionSpend';


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
      editMoneys: '',
      index: '',
      total: 0,
      arraySpend: [],
      loading: true,
      checkData: false,
    }
  }


  componentDidMount() {
    this.load_Data();
  }

  load_Data = async () => {
    console.log("load_Data")
    try {
      var data = await AsyncStorage.getItem(KEY_SPEND);
      var thu = JSON.parse(data);
      console.log('data LOAD_DATA', thu, (thu == null))
      if (thu == null) {
        this.setState({
          ...this.state,
          loading: false,
          checkData: true,
          arraySpend: [],
          total: 0
        });
      }
      else {
        this.setState({
          ...this.state,
          arraySpend: thu.arraySpend,
          total: thu.total,
          checkData: thu.checkData,
        })
      }
    } catch (e) {
      console.log('Failed to load_AsyncStorage ', e)
    }
  }

  save_Data = (total, arraySpend) => {
    console.log('save_DATA01')

    try {
      AsyncStorage.setItem(KEY_SPEND, JSON.stringify({ total, arraySpend, checkData: true }))
      this.setState({
        total: total,
        arraySpend: arraySpend,
      })
      // .then(() => { console.log("Save Successfully") })
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
      editMoneys: this.state.arraySpend[index],
      index: index,
    })
  }

  deleteChi = (index) => {
    console.log('total', this.state.arraySpend);
    var total = parseInt(this.state.total) - parseInt(this.state.arraySpend[index].money);
    var arraySpend = this.state.arraySpend.splice(index, 1);
    console.log('arraythu----------', this.state.arraySpend)
    this.save_Data(total, this.state.arraySpend);
    console.log('total', total);

    this.setState({
      deleteStatus: false,
      addStatus: false,
      editStatus: false,
      total: total,
      //arrayThu: this.state.arraySpend
    })
    this.props.storeDeleteIncome(this.state.total, this.state.arraySpend);
  }

  setValue = (text) => {
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
    this.state.arraySpend.push(addThu);

    var totals = parseInt(this.state.total) + parseInt(addThu.money);
    var arraySpend = this.state.arraySpend;
    this.save_Data(totals, arraySpend);
    this.props.storeAddSpend(totals, arraySpend);
    this.setState({
      addStatus: false,

    })
  }

  onSubmitEdit = () => {
    var exampleNew = parseInt(this.state.editMoneys.money);
    var exampleOld = parseInt(this.state.arraySpend[this.state.index].money);
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
    this.state.arraySpend.splice(this.state.index, 1, editThu);
    var arraySpend = this.state.arraySpend;
    this.save_Data(total, arraySpend);
    this.setState({
      editStatus: false,
      //total: total
    });

    this.props.storeEditSpend(total, arraySpend);
  }


  onClose = () => {
    this.setState({
      addStatus: false,
      editStatus: false,
    })
  }
  render() {

    console.log('//// this.state.checkData', !this.state.checkData);
    if (!this.state.checkData) {

      return <Spinner color='green' />;
    }
    console.log("state+++", this.state.total, this.state.arraySpend)
    return (
      <Container >
        <Header>
          <Body>
            <Title style={{ alignSelf: "center" }}>
              Chi Tiêu
            </Title>
            <Title style={{ fontSize: 13, paddingLeft: '25%' }}>Tong Chi:({this.state.total} VND)</Title>

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
          {this.state.arraySpend.map((item, index) => {
            return <Card style={style.card} key={index}>
              <CardItem style={style.cardItem} >
                <Left>
                  <Icon name="wallet" ></Icon>
                  <Body>
                    <Text>{item.name}</Text>
                    <Text>{item.money} VND</Text>
                  </Body>
                  <Button onPress={() => this.deleteChi(index)} style={style.button_edit}>
                    <FontAwesome name="minus-circle" style={{ fontSize: 24 }} ></FontAwesome>
                  </Button>
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

        </Content>
      </Container >
    );
  }
}

const mapStateToProps = state => ({
  total: state.spend.total
})

const mapDispatchToProps = dispatch => {
  return {
    storeAddSpend: (total, arraySpend) => dispatch(addSpend(total, arraySpend)),
    storeEditSpend: (total, arraySpend) => dispatch(editSpend(total, arraySpend)),
    storeDeleteSpend: (total, arraySpend) => dispatch(deleteSpend(total, arraySpend))
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