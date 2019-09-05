import { APP_SPEND_ADD, APP_SPEND_EDIT, APP_SPEND_DELETE } from '../action/actionType'

const initState = {
  okLogin: false,
  total: 0,
  arraySpend: []
};

export default (state = initState, action) => {
  console.log("SPEND_+_+_+:", action)
  switch (action.type) {
    case APP_SPEND_ADD:
      return {
        ...state,
        total: action.total,
        arraySpend: action.arraySpend,
      }
    case APP_SPEND_EDIT:
      return {
        ...state,
        total: action.total,
        arraySpend: action.arraySpend,
      }
    case APP_SPEND_DELETE:
      return {
        ...state,
        total: action.total,
        arraySpend: action.arraySpend,
      }
    default:
      return state;
  }
}