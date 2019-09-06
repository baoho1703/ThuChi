import { APP_INCOME_ADD, APP_INCOME_EDIT, APP_INCOME_DELETE, APP_INCOME_TOTAL, KEY_BANK_ACCOUNT, KEY_INCOME } from '../action/actionType'
import { AsyncStorage } from 'react-native'

const initState = {
  okLogin: false,
  total: 0,
  arrayIncome: [],
};

function saveData(total, arrayIncome) {
  AsyncStorage.setItem(KEY_INCOME, JSON.stringify({ total, arrayIncome }))
}

async function saveSumBank(total, type) {
  var dataBank = JSON.parse(await AsyncStorage.getItem(KEY_BANK_ACCOUNT));

  switch (type) {
    case APP_INCOME_ADD:
      var totalMoneyBank = ({
        ...dataBank,
        TK_Bank: dataBank.TK_Bank + total
      });
      AsyncStorage.setItem(KEY_BANK_ACCOUNT, JSON.stringify(totalMoneyBank));
      console.log('==========ADD=====totalMoneyBank=================', totalMoneyBank)
      break;

    case APP_INCOME_EDIT:
      var totalMoneyBank = ({
        ...dataBank,
        TK_Bank: dataBank.TK_Bank + total
      });
      AsyncStorage.setItem(KEY_BANK_ACCOUNT, JSON.stringify(totalMoneyBank));
      console.log('========EDIT=======totalMoneyBank=================', totalMoneyBank)
      break;

    case APP_INCOME_DELETE:
      var totalMoneyBank = ({
        ...dataBank,
        TK_Bank: dataBank.TK_Bank - total
      });
      AsyncStorage.setItem(KEY_BANK_ACCOUNT, JSON.stringify(totalMoneyBank));
      console.log('========DELETE=======totalMoneyBank===============', totalMoneyBank)
      break;

    default:
      return dataBank;
  }
}

export default (state = initState, action) => {
  console.log("INCOME-=-=:", action, state)
  switch (action.type) {
    case APP_INCOME_ADD:
      saveSumBank(action.addMoney, action.type);
      saveData(action.total, action.arrayIncome);
      return {
        ...state,
        total: action.total,
        arrayIncome: action.arrayIncome,
      }

    case APP_INCOME_EDIT:
      saveSumBank(action.editMoney, action.type);
      saveData(action.total, action.arrayIncome);
      return {
        ...state,
        total: action.total,
        arrayIncome: action.arrayIncome
      }

    case APP_INCOME_DELETE:
      saveSumBank(action.delMoney, action.type);
      saveData(action.total, action.arrayIncome);
      return {
        ...state,
        total: action.total,
        arrayIncome: action.arrayIncome
      }

    case APP_INCOME_TOTAL:

      return {
        ...state,
        total: action.total,
      }

    default:
      return state;
  }
}