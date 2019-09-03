import { APP_SPEND_ADD, APP_SPEND_EDIT, APP_SPEND_DELETE } from './actionType'

export const addSpend = (total, arrayChi) => (
  console.log('ADD_INCOME:', total, arrayChi),
  {
    type: APP_SPEND_ADD,
    total,
    arrayChi,
  }
)

export const editSpend = (total, arrayChi) => (
  console.log('EDIT_INCOME :', total, arrayChi),
  {
    type: APP_SPEND_EDIT,
    total,
    arrayChi,
  }
)

export const deleteSpend = (total, arrayChi) => (
  console.log('DELETE_INCOME :', total, arrayChi),
  {
    type: APP_SPEND_DELETE,
    total,
    arrayChi,
  }
)


