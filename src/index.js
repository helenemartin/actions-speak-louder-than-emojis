import React from 'react';
import ReactDom from 'react-dom'
import { GlobalStyles } from './global-styles'
import App from './app';


ReactDom.render(
    <>
        <GlobalStyles />
        <App />
    </>, 
    document.getElementById('root')
);