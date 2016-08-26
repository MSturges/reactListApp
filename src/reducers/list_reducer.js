import { ADD_ITEM } from '../actions/types'

const initialState = {
  list: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
    state.list.push(action.payload);
    break;
  }
  return state
}
