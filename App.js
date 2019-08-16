import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './page/account/login'
import Home from './page/layout/thu'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.initState();
  }

  initState = () => {
    this.state = {
      isLogin: false,
    }
  }

  _checklogin = () => {
    this.setState({
      isLogin: true,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.isLogin && < Login checkLogin={this._checklogin} />}
        {this.state.isLogin && <Home />}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { Component } from 'react'
// import { Container, Header, Content, Tab, Tabs, Body, Text, Title, TabHeading, Icon } from 'native-base';

// import Home from './page/layout/home'
// import Thu from './page/layout/thu'
// import Chi from './page/layout/chi'
// import Chart from './page/layout/chart'

// export default class TabsExample extends Component {
//   render() {
//     return (
//       <Container>

//         <Tabs>
//           <Tab heading="Thong tin tai khoan">
//             <Home />
//           </Tab>
//           <Tab heading={<TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
//             <Thu></Thu>
//           </Tab>
//           <Tab heading="Tab3">
//             <Chi></Chi>
//           </Tab>
//           <Tab heading="Chart">
//             <Chart></Chart>
//           </Tab>
//         </Tabs>
//       </Container>
//     );
//   }
// }