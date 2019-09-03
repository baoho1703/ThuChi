import { APP_INCOME_ADD, APP_INCOME_EDIT, APP_INCOME_DELETE } from '../action/actionType'

const initState = {
  okLogin: false,
  total: 0,
  arrayThu: []
};

export default (state = initState, action) => {
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