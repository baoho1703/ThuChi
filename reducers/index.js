import { combineReducers } from 'redux'

import checkAccountReducers from './account'
import income from './income'
import spend from './spend'


const rootReducers = combineReducers(
  {
    account: checkAccountReducers,
    income: income,
    spend: spend
  })

export default rootReducers;