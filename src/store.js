import { createStore } from 'redux';

const initialState = {
  val1: null,
  val2: null,
  action: null,
  result: null
}

export const store = createStore( function( state = initialState, action) {
  switch ( action.type ) {
    case '1': {
      return {
        val1: action.payload,
        val2: state.val2,
        action: state.action,
        result: state.result
      }
    }
    default: return state;
  }
});
