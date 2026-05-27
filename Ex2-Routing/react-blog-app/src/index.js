

// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';  // <- thêm dòng này
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
