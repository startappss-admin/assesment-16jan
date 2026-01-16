import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chessboard from './components/Chessboard';

const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(
  <React.StrictMode>
    <Chessboard></Chessboard>
    {/* <App /> */}
  </React.StrictMode>
);
