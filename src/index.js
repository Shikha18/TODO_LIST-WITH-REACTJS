import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from "./TodoList";
import * as serviceWorker from './serviceWorker';

var destination = document.querySelector("#root");

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<div><TodoList /></div>, destination);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
