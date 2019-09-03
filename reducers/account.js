import { APP_LOGIN, KEY_BANK_ACCOUNT } from '../action/actionType'
import { AsyncStorage } from 'react-native';
import DataMoney from '../data/dataAccout.json'

const initState = {
  okLogin: false,
  username: '',
  password: ''
};

export default (state = initState, action) => {
  console.log('reducer_checkAccount', action);
  switch (action.type) {
    case APP_LOGIN:
      if (action.username) {
        AsyncStorage.setItem(KEY_BANK_ACCOUNT, JSON.stringify(DataMoney));
      }
      return {
        ...state,
        username: action.username,
        password: action.password,
        okLogin: true,
      }
    default:
      return state;
  }
}