import React, { Component } from 'react';
import { Text, StyleSheet, AsyncStorage } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Icon, Card, CardItem, Left, Right, Form, Item, Label, Input, Spinner, Footer, FooterTab, } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { addIncome, editIncome, deleteIncome, totalIncome } from '../../action/actionIncome';
import { KEY_INCOME } from '../../action/actionType'


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
      arrayIncome: [],
      loading: true,
      chosenDate: new Date(),
    }
  }

  componentWillMount() {
    this.load_Data();
    // this.refresh()
  }

  load_Data = async () => {
    console.log("load_Data")
    try {
      var arrayIncome = JSON.parse(await AsyncStorage.getItem(KEY_INCOME) || 'null');
      console.log('data LOAD_DATA', arrayIncome, (arrayIncome == null))
      if (arrayIncome == null) {
        console.log('DATA_+ null：')
        this.setState({
          ...this.state,
          loading: false,
          arrayIncome: [],
          total: 0
        });
      }
      else {
        console.log('DATA_+load：', arrayIncome)
        this.setState({
          ...this.state,
          loading: false,
          arrayIncome: arrayIncome.arrayIncome,
          total: arrayIncome.total,
        })
        console.log('STATE:---+++:', this.state);
      }
    } catch (e) {
      console.log('Failed to ===> Thu load_Data ::: AsyncStorage =+> ', e)
    }
  }

  refresh = () => {
    AsyncStorage.removeItem(KEY_INCOME);
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
      editMoneys: this.state.arrayIncome[index],
      index: index,
    })
  }
  deleteThu = (index) => {
    var delMoney = parseInt(this.state.arrayIncome[index].money);
    var total = parseInt(this.state.total) - delMoney;
    var arrayIncome = this.state.arrayIncome.splice(index, 1);
    console.log('total delete :', total);
    console.log('arraythu delete : ', arrayIncome)
    this.setState({
      addStatus: false,
      editStatus: false,
      total: total,
      arrayIncome: this.state.arrayIncome
    })
    this.props.storeDeleteIncome(total, this.state.arrayIncome, delMoney);
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
    this.state.arrayIncome.push(addThu);

    var totals = parseInt(this.state.total) + parseInt(addThu.money);
    var arrayIncome = this.state.arrayIncome;
    var addMoney = parseInt(addThu.money);
    this.setState({
      addStatus: false,
      total: totals,
    })
    this.props.storeAddIncome(totals, arrayIncome, addMoney);
  }

  onSubmitEdit = () => {
    var exampleNew = parseInt(this.state.editMoneys.money);
    var exampleOld = parseInt(this.state.arrayIncome[this.state.index].money);
    var data = exampleNew - exampleOld;
    var total = this.state.total + data;

    var editThu = this.state.editMoneys;
    if (editThu.name === '' && editThu.money === '')
      return
    this.state.arrayIncome.splice(this.state.index, 1, editThu);

    this.setState({
      editStatus: false,
      total: total
    });

    this.props.storeEditIncome(total, this.state.arrayIncome, data);
  }

  onClose = () => {
    this.setState({
      addStatus: false,
      editStatus: false,
    })
  }

  addIncome = () => {
    if (this.state.addStatus)
      return <Card style={style.card}>
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

  editIncome = () => {
    if (this.state.editStatus)
      return <Card style={style.card}>
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

  render() {
    if (this.state.loading) {
      return <Spinner color='green' />;
    }
    this.props.total(this.state.total);
    console.log("state+++", this.state.total, this.state.arrayIncome)
    return (
      <Container >
        <Header>
          <Left>
            <Button style={style.buton_add} onPress={this.refresh} >
              <FontAwesome style={{ fontSize: 24 }} name="refresh"></FontAwesome>
            </Button>
          </Left>
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
          {this.addIncome()}

          {/* Edit Thu Chi */}
          {this.editIncome()}

          {/* List Thu Chi */}
          {this.state.arrayIncome.map((item, index) => {
            return <Card style={style.card} key={index}>
              <CardItem style={style.cardItem} >
                <Left>
                  <Icon name="wallet" ></Icon>
                  <Body>
                    <Text>{item.name}</Text>
                    <Text>{item.money} VND</Text>

                  </Body>
                  <Button onPress={() => this.deleteThu(index)} style={style.button_edit}>
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
        {/* <Footer>
          <FooterTab>
            <Button onPress={() => navigate('Home', { name: 'Jane' })}>
              <Text>Home</Text>
            </Button>
            <Button onPress={() => navigate('Thu', { name: 'Jane' })}>
              <Text>Thu</Text>
            </Button>
            <Button onPress={() => navigate('Chi', { name: 'Jane' })}>
              <Text>Chi</Text>
            </Button>
            <Button onPress={() => navigate('Chart', { name: 'Jane' })}>
              <Text>Chart</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container >
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeAddIncome: (total, arrayIncome, addMoney) => dispatch(addIncome(total, arrayIncome, addMoney)),
    storeEditIncome: (total, arrayIncome, editMoneys) => dispatch(editIncome(total, arrayIncome, editMoneys)),
    storeDeleteIncome: (total, arrayIncome, delMoney) => dispatch(deleteIncome(total, arrayIncome, delMoney)),

    total: (total) => dispatch(totalIncome(total))

  }
}
export default connect(null, mapDispatchToProps)(Home);

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