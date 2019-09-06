import { APP_INCOME_ADD, APP_INCOME_EDIT, APP_INCOME_DELETE, APP_INCOME_TOTAL } from './actionType'

export const addIncome = (total, arrayIncome, addMoney) => (
  console.log('ADD_INCOME:', total, arrayIncome, addMoney),
  {
    type: APP_INCOME_ADD,
    total,
    arrayIncome,
    addMoney,
  }
)

export const editIncome = (total, arrayIncome, editMoney) => (
  console.log('EDIT_INCOME :', total, arrayIncome, editMoney),
  {
    type: APP_INCOME_EDIT,
    total,
    arrayIncome,
    editMoney,
  }
)

export const deleteIncome = (total, arrayIncome, delMoney) => (
  console.log('DELETE_INCOME :', total, arrayIncome, delMoney),
  {
    type: APP_INCOME_DELETE,
    total,
    arrayIncome,
    delMoney,
  }
)

export const totalIncome = (total) => (
  console.log('DELETE_INCOME :', total),
  {
    type: APP_INCOME_TOTAL,
    total,

  }
)

