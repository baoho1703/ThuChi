import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView } from 'react-native'
import { Container, Content, Header, Body, Title, Label, List, ListItem } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { PieChart } from 'react-native-chart-kit';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { connect } from 'react-redux'
class Chart extends Component {
  constructor(props) {
    super(props);
    this.initState();
  }
  initState = () => {
    this.state = {
      arrayThu: this.props.incomeArrayThu,
      arrayChi: this.props.spendArrayChi,
    }
  }

  tableIncome = () => {
    var tableHead = ['Name', 'Money Number(VND)'];
    var tableTitle = [];
    var tableData = [];
    this.state.arrayThu.forEach(element => {
      tableTitle.push(element.name);
    });
    this.state.arrayThu.forEach(element => {
      tableData.push([element.money]);
    });
    return (< View style={styles.container} >
      <Text style={{ textAlign: "center", paddingBottom: 10 }}>History Income (Tổng: {this.props.totalIncome}} VND)</Text>
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
    this.state.arrayChi.forEach(element => {
      tableTitle.push(element.name);
    });
    this.state.arrayChi.forEach(element => {
      tableData.push([element.money]);
    });
    return (< View style={styles.container} >
      <Text style={{ textAlign: "center", paddingBottom: 10 }}>History Spend (Tổng: {this.props.totalSpend}} VND)</Text>
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
    var income = this.props.totalIncome;
    var spend = this.props.totalSpend;
    var data = [
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
            <List style={{ flex: 1, padding: 10 }}>
              {data.map((value, index) => {
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
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  totalIncome: state.income.total,
  incomeArrayThu: state.income.arrayThu,
  totalSpend: state.spend.total,
  spendArrayChi: state.spend.arrayChi,
})

const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chart);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' }
});