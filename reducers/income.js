import { APP_INCOME_ADD, APP_INCOME_EDIT, APP_INCOME_DELETE, KEY_BANK_ACCOUNT } from '../action/actionType'
import { AsyncStorage } from 'react-native'

const initState = {
  okLogin: false,
  total: 0,
  arrayThu: []
};

export default (state = initState, action) => {
  if (action.total) {
    var data = JSON.parse(AsyncStorage.getItem(KEY_BANK_ACCOUNT));
    console.log('data_redux: ', data)
  }
  console.log("INCOME-=-=:", action)
  switch (action.type) {
    case APP_INCOME_ADD:

      return {
        ...state,
        total: action.total,
        arrayThu: action.arrayThu,
      }
    case APP_INCOME_EDIT:
      return {
        ...state,
        total: action.total,
        arrayThu: action.arrayThu
      }
    case APP_INCOME_DELETE:
      return {
        ...state,
        total: action.total,
        arrayThu: action.arrayThu
      }
    default:
      return state;
  }
}