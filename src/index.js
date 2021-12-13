import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* A função abaixo cria o componente App e o renderiza dentro do id root no index.html*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



