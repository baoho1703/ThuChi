import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView, AsyncStorage } from 'react-native'
import { Container, Content, Header, Body, Title, Label, List, ListItem, Footer, FooterTab, Button, } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { PieChart } from 'react-native-chart-kit';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { KEY_INCOME, KEY_SPEND } from '../../action/actionType'

class Chart extends Component {
  constructor(props) {
    super(props);
    this.initState();
  }
  initState = () => {
    this.state = {
      arrayIncome: [],
      totalIncome: 0,
      arraySpend: [],
      totalSpend: 0,
    }
  }

  componentWillMount() {
    this.loadDataChart();
  }

  loadDataChart = async () => {
    try {
      var arrayIncome = JSON.parse(await AsyncStorage.getItem(KEY_INCOME) || 'null');
      var arraySpend = JSON.parse(await AsyncStorage.getItem(KEY_SPEND) || 'null')
      if (arrayIncome == null || arraySpend == null) {
        if (arrayIncome == null && arraySpend != null) {
          this.state({
            arrayIncome: [],
            totalIncome: 0,
            arraySpend: arraySpend.arraySpend,
            totalIncome: arraySpend.total,
          })
        }
        if (arraySpend == null && arrayIncome != null) {
          this.state({
            arraySpend: [],
            totalSpend: 0,
            arrayIncome: arrayIncome.arrayIncome,
            totalIncome: arrayIncome.total,
          })
        }
        if (arraySpend == null && arrayIncome == null) {
          this.state({
            arrayIncome: [],
            totalIncome: 0,
            arraySpend: [],
            totalSpend: 0,
          })
        }
      }
      else {
        this.setState({
          arrayIncome: arrayIncome.arrayIncome,
          totalIncome: arrayIncome.total,
          arraySpend: arraySpend.arraySpend,
          totalSpend: arraySpend.total,
        })
      }
    } catch (error) {
      console.log('Error Load_Data_Chart ==>: ', error)
    }
  }
  tableIncome = () => {
    var tableHead = ['Name', 'Money Number(VND)'];
    var tableTitle = [];
    var tableData = [];
    this.state.arrayIncome.forEach(element => {
      tableTitle.push(element.name);
    });
    this.state.arrayIncome.forEach(element => {
      tableData.push([element.money]);
    });
    return (< View style={styles.container} >
      <Text style={{ textAlign: "center", paddingBottom: 10 }}>History Income (Tổng: {this.state.totalIncome}} VND)</Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} flexArr={[1, 2]} style={styles.head} textStyle={styles.text} />
        <TableWrapper style={styles.wrapper}>
          <Col data={tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
          <Rows data={tableData} flexArr={[2]} style={styles.row} textStyle={styles.text} />
        </TableWrapper>
      </Table>
    </View >
    )
  }

  tableSpend = () => {
    var tableHead = ['Name', 'Money Number(VND)'];
    var tableTitle = [];
    var tableData = [];
    this.state.arraySpend.forEach(element => {
      tableTitle.push(element.name);
    });
    this.state.arraySpend.forEach(element => {
      tableData.push([element.money]);
    });
    return (< View style={styles.container} >
      <Text style={{ textAlign: "center", paddingBottom: 10 }}>History Spend (Tổng: {this.state.totalSpend}} VND)</Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} flexArr={[1, 2]} style={styles.head} textStyle={styles.text} />
        <TableWrapper style={styles.wrapper}>
          <Col data={tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
          <Rows data={tableData} flexArr={[2]} style={styles.row} textStyle={styles.text} />
        </TableWrapper>
      </Table>
    </View >
    )
  }

  render() {
    var income = this.state.totalIncome;
    var spend = this.state.totalSpend;
    var dataChart = [
      { name: 'Thu', population: income, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 14, icon: 'credit-card' },
      { name: 'Chi', population: spend, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 14, icon: 'cart-plus' },
      // { name: 'Dư', population: 8000000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 14, icon: 'google-wallet' }
    ];

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
          <ScrollView>
            <View>
              <PieChart
                data={dataChart}
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
            <List style={{ flex: 1, padding: 10 }}>
              {dataChart.map((value, index) => {
                return (
                  <ListItem key={index} >
                    <FontAwesome name={value.icon} style={{ fontSize: 24, padding: 15 }}>   </FontAwesome>
                    <Label style={{ padding: 10 }}>{value.name}</Label>
                    <Label style={{ position: "absolute", right: "30%" }}>{value.population}  : VND</Label>
                  </ListItem>)
              })}
            </List>

            {this.tableIncome()}

            {this.tableSpend()}
          </ScrollView>
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
      </Container>
    );
  }
}

export default Chart;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' }
});