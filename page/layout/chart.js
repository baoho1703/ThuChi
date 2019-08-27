import React, { Component } from 'react';
import { View, Dimensions } from 'react-native'
import { Container, Content, Footer, Header, Body, Title, Label, Text, Form, Item, FooterTab, Button, Icon, List, ListItem, Accordion } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { PieChart } from 'react-native-chart-kit'
class Home extends Component {
  constructor(props) {
    super(props);
    this.initState();




  }
  initState = () => {









  }
  render() {
    var Thu = this.props.thu;
    var Chi = this.props.chi;
    var Du = this.props.Du;
    const data = [
      { name: 'Thu', population: 10000000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 14, icon: 'credit-card' },
      { name: 'Chi', population: 2000000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 14, icon: 'cart-plus' },
      { name: 'Dư', population: 8000000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 14, icon: 'google-wallet' }
    ]
    return (
      <Container >
        <Header>
          <Body>
            <Title style={{ alignSelf: "center" }}>
              Thống Kê
						</Title>
          </Body>
        </Header>
        <Content>
          <View>
            <PieChart
              data={data}
              width={Dimensions.get('window').width}
              height={220}
              chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View>
          <List>
            {data.map((value, index) => {
              return (
                <ListItem>
                  <FontAwesome name={value.icon} style={{ fontSize: 24 }}>   </FontAwesome>
                  <Label>{value.name}</Label>
                  <Label>{value.population}</Label>
                </ListItem>)
            })}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
