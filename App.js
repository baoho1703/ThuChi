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
