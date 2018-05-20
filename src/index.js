import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';

ReactDOM.render(<App />, document.getElementById('root'));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const initCreateAction = store => typeStr => payload => store.dispatch({ type: typeStr, payload });

const createAction = initCreateAction(store);

const addValueAction = createAction('ADD_VALUE');
const clearValueAction = createAction('CLEAR_VALUE');
const calculateAction = createAction('CALCULATE');

const numbers = getButtons('btn_num').filter(item => item.id !== 'clear');
const actions = getButtons('btn_act');
const input = document.querySelector('.inp');
const clear = document.getElementById('clear');
const run = document.getElementById('run');

render( store );

clear.addEventListener( 'click', () => clearValueAction() );

numbers.forEach( el => {
  el.addEventListener( 'click', e => {
    let res = e.target.name;
    addValueAction(res);
  });
});

actions.forEach( el => {
  el.addEventListener( 'click', e => {
    let res = e.target.name;
    addValueAction(res);
  });
});

run.addEventListener( 'click', () => calculateAction() );

store.subscribe( function() { render( store ) } );

function render( store ) {
  input.value = store.getState().result;
}

function getButtons( className ) {
  return Array.from( document.querySelectorAll(`.${className}`) );
}
