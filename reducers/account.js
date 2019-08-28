import { APP_LOGIN } from '../action/actionType'

const initState = {
  okLogin: false,
  username: '',
  password: ''
};

export default (state = initState, action) => {
  console.log('reducer_checkAccount', action);
  switch (action.type) {
    case APP_LOGIN:
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