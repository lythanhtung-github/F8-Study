import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from "./components/App";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);