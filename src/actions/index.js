import { ADD_ITEM } from './types'

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  }
}
