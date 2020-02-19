import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ErrorBoudary from './error'

ReactDOM.render(
    <ErrorBoudary>
        <App />  
    </ErrorBoudary>,
    document.getElementById('root') 
);
serviceWorker.unregister();