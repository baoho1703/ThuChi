import { APP_SPEND_ADD, APP_SPEND_EDIT, APP_SPEND_DELETE } from './actionType'

export const addSpend = (total, arraySpend) => (
  console.log('ADD_INCOME:', total, arraySpend),
  {
    type: APP_SPEND_ADD,
    total,
    arraySpend,
  }
)

export const editSpend = (total, arraySpend) => (
  console.log('EDIT_INCOME :', total, arraySpend),
  {
    type: APP_SPEND_EDIT,
    total,
    arraySpend,
  }
)

export const deleteSpend = (total, arraySpend) => (
  console.log('DELETE_INCOME :', total, arraySpend),
  {
    type: APP_SPEND_DELETE,
    total,
    arraySpend,
  }
)


