import { APP_LOGIN } from './actionType'

export const checkAccount = (username, password) => ({
  type: APP_LOGIN,
  username,
  password
})