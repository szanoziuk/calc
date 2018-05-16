import { createStore } from 'redux';

const initialState = {
  value: null
}

export const store = createStore( function( state = initialState, action) {
  switch ( action.type ) {
    case 'ADD_VALUE':
      return {
        //записывать результат одной строкой а потом ее разобрать regexp_ами
        //преобразовать payload
        value: state.value + action.payload
      }
    case 'CALCULATE': {
      return {
        //разбор строки вычисление результата
      }
    }
    case 'CLEAR':
      return {
        value: null
      }
    default: return state;
  }
});
