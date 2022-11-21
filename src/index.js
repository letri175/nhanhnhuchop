import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {createContext, useState } from 'react';

export const ThemeConText = createContext(null);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
  </div>
);

