import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { store } from './store';

ReactDOM.render(<App />, document.getElementById('root'));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
let res = '';

const numbers = getButtons('btn_num').filter(item => item.id !== 'clear');
const actions = getButtons('btn_act');
const input = document.querySelector('.inp');
const clear = document.getElementById('clear');
const run = document.getElementById('run');

clear.addEventListener( 'click', () => {
  input.value = '';
  res = '';
});

run.addEventListener( 'click', () => {
  res = calculate( res );
});

input.addEventListener( 'change', (e) => {
  input.value = e.target.value;
});


numbers.forEach( el => {
  el.addEventListener( 'click', e => {
    res += e.target.name;
    input.value = res;
  });
});

actions.forEach( el => {
  el.addEventListener( 'click', e => {
      res += e.target.name;
      input.value = res;
  });
});


function getButtons( className ) {
  return Array.from( document.querySelectorAll(`.${className}`) );
}

function calculate( str ) {
  let result = null;
  const values = str.match(/\d+(\.\d+)?/g)
  values.forEach( el => {
    console.log(el) } );
  console.log( values );


  const action = str.match(/[+\-x/]/g)[0];
  console.log(action);
  switch ( action ) {
    case '+':
      result = values[0] + values[1];
      break;
    case '-':
      res = values[0] - values[1];
      break;
    case 'x':
      res = values[0] * values[1];
      break;
    case '/':
      res = values[0] / values[1];
      break;
    default:
  }
  return result + '';
}
