import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

import { CoffeApp } from './CoffeApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CoffeApp />
    </React.StrictMode>
)