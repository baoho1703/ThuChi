import { APP_INCOME_ADD, APP_INCOME_EDIT } from '../action/actionType'

const initState = {
  okLogin: false,
  total: 0,

};

export default (state = initState, action) => {
  switch (action.type) {
    case APP_INCOME_ADD:
      return {
        ...state,
        total: action.total,
      }
    case APP_INCOME_EDIT:
      return {
        ...state,
        total: action.total,
      }
    default:
      return state;
  }
}