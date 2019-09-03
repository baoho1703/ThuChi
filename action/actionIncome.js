import { APP_INCOME_ADD, APP_INCOME_EDIT, APP_INCOME_DELETE } from './actionType'

export const addIncome = (total, arrayThu) => (
  console.log('ADD_INCOME:', total, arrayThu),
  {
    type: APP_INCOME_ADD,
    total,
    arrayThu
  }
)

export const editIncome = (total, arrayThu) => (
  console.log('EDIT_INCOME :', total, arrayThu),
  {
    type: APP_INCOME_EDIT,
    total,
    arrayThu
  }
)

export const deleteIncome = (total, arrayThu) => (
  console.log('DELETE_INCOME :', total, arrayThu),
  {
    type: APP_INCOME_DELETE,
    total,
    arrayThu
  }
)

