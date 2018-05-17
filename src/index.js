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

run.addEventListener( 'click', () => {
  if ( res.length && !isNaN(res[0]) ) {
    res = calculate( res );
    input.value = res;
  }
});

input.addEventListener( 'change', (e) => {
  input.value = e.target.value;
});

function getButtons( className ) {
  return Array.from( document.querySelectorAll(`.${className}`) );
}

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
  
  return result = 'Error';
}
