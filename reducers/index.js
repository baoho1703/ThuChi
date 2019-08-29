import { combineReducers } from 'redux'

import checkAccountReducers from './account'
import income from './income'

const rootReducers = combineReducers(
  {
    account: checkAccountReducers,
    income: income
  })

export default rootReducers;