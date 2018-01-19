import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';

const store = createStore();

ReactDOM.render(
    <h1>Hello World!</h1>, 
    document.getElementById('root')
);

// Step 1 - we set up our store using the syntax above