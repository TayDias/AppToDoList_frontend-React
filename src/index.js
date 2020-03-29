import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ErrorBoudary from './error'

ReactDOM.render(
    <ErrorBoudary>
        <App />  
    </ErrorBoudary>,
    document.getElementById('root') 
);