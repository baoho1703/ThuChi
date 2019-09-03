import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import APP from './page/app'
import rootReducer from './reducers'

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>

        <APP> </APP>

      </Provider>
    );
  }
}












// import React, { Component } from 'react'
// import DatePicker from 'react-native-datepicker'

// export default class MyDatePicker extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { date: "2016-05-15" }
//   }

//   render() {
//     return (
//       <DatePicker
//         style={{ width: 200 }}
//         date={this.state.date}
//         mode="date"
//         placeholder="select date"
//         format="YYYY-MM-DD"
//         minDate="2016-05-01"
//         maxDate="2016-06-01"
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 4,
//             marginLeft: 0
//           },
//           dateInput: {
//             marginLeft: 36
//           }
//           // ... You can check the source to find the other keys.
//         }}
//         onDateChange={(date) => { this.setState({ date: date }) }}
//       />
//     )
//   }
// }


