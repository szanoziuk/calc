import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';

ReactDOM.render(<App />, document.getElementById('root'));

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const nul = document.querySelector('.null');
const input = document.querySelector('.inp');

input.addEventListener( 'change', (e) => {
  console.log( e.target.value );
  input.value = e.target.value;
});

console.log( one.name );
