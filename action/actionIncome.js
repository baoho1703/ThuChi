import { APP_INCOME_ADD, APP_INCOME_EDIT } from './actionType'

export const addIncome = (total) => (
  console.log('ADD_INCOME:', total),
  {
    type: APP_INCOME_ADD,
    total,
  }
)

export const editIncome = (total) => (
  console.log('EDIT_INCOME :', total),
  {
    type: APP_INCOME_EDIT,
    total,
  }
)

