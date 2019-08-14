import React, { Component } from 'react';
import { Container, Content, Footer, Header, Body, Title, Label, Text, Form, Item, FooterTab, Button, Icon, Input, DatePicker, Card, CardItem, Left, Right } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title style={{ alignSelf: "center" }}>
              Doanh Thu
						</Title>
          </Body>
        </Header>
        <Content>
          {/*            
            <Item >
              <Icon name="wallet" style={{ with: '20%' }}></Icon>
              <Input value="AAAA" style={{ with: '20%' }}></Input>
              <Input value="AAAAAA" style={{ with: '20%' }}></Input>
              <DatePicker style={{ with: '20%' }} />
              <DatePicker style={{ with: '20%' }}
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
                disabled={false}
              />
              <Text>
                Date: {this.state.chosenDate.toString().substr(4, 12)}
              </Text>
            </Item> */}

          <Card>
            <CardItem>
              <Left>
                <Icon name="wallet" ></Icon>
                <Body>
                  <Text>Tiền thưởng</Text>
                  <Text>200000 VND</Text>
                </Body>
              </Left>
              <Right>
                <FontAwesome name="edit" ></FontAwesome>
                <Icon name="ios-refresh" ></Icon>
                <Text>2019/08/14</Text>
              </Right>

            </CardItem>
          </Card>
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


        </Content>
        <Footer>
          <FooterTab>
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
      </Container>
    );
  }
}

export default Home;