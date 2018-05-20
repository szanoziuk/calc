import { createStore } from 'redux';

const initialState = {
  result: ''
};

export const store = createStore( function( state = initialState, action) {
  switch ( action.type ) {
    case 'ADD_VALUE':
      return {
        result: state.result + action.payload
      };
    case 'CALCULATE': {
      let res = '';
      if ( state.result.length && !isNaN(state.result[0]) ) {
        res = calculate( state.result );
      } else {
        res = 'Error'
      }
      return {
        result: res
      }
    }
    case 'CLEAR_VALUE':
      return {
        result: ''
      };
    default: return state;
  }
});

function calculate( str ) {
  let result = null;
  const values = str.match(/\d+(\.\d+)?/g).map( el => parseFloat(el) );
  const action = str.match(/[^\d.]/g);

  if ( action ) {
    if ( action[0] === '+' ) {
      result = values[0] + values[1]
    }
    if ( action[0] === '-' ) {
      result = values[0] - values[1];
    }
    if ( action[0] === 'x' ) {
      result = values[0] * values[1];
    }
    if ( action[0] === '/' ) {
      result = values[0] / values[1];
    }
    return result + '';
  }

  return 'Error';
}
