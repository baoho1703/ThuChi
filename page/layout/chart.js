import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Content, Footer, Header, Body, Title, Label, Text, Form, Item, FooterTab, Button, Icon, List, ListItem, Accordion } from 'native-base'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

import { Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width

class Home extends Component {
  constructor(props) {
    super(props);
    this.initState();
  }

  initState = () => {

  }

  render() {
    const dataArray = [
      { title: "Doanh Thu ", content: "1000000" },
      { title: "Chi Tiêu", content: "1000000" },
      { title: "Cân Đối", content: "1000000" }
    ];
    const data = [
      { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 14 },
      { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 14 },
      { name: 'Beijing', population: 527612, color: '#7c9e9e', legendFontColor: '#7F7F7F', legendFontSize: 14 },
      { name: 'New York', population: 8538000, color: '#2ed4d4', legendFontColor: '#7F7F7F', legendFontSize: 14 },
      { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 14 }
    ]
    return (
      <Container style={{ width: "100%" }}>
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
            <ListItem itemDivider>
              <Text>Doanh Thu</Text>
            </ListItem>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Text >1000000</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Chi Tiêu </Text>
            </ListItem>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Text>1000000</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Cân Đối</Text>
            </ListItem>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Text>1000000</Text>
            </ListItem>
          </List>

          <List>
            <Accordion dataArray={dataArray} />


            <ListItem>
              <Label>Doanh Thu  :</Label>
              <Label>  1000000</Label>
            </ListItem>
            <ListItem>
              <Label>Chi Tiêu       :</Label>
              <Label>  1000000</Label>
            </ListItem>
            <ListItem>
              <Label>Cân Đối        : </Label>
              <Label> 1000000</Label>
            </ListItem>

          </List>
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