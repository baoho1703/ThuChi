import { combineReducers } from 'redux'

import checkAccountReducers from './account'

const rootReducers = combineReducers(
  {
    account: checkAccountReducers
  })

export default rootReducers;