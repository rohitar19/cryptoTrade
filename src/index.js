import React from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './App' ;

import { Provider } from 'react-redux';
import store from './app/store';

import 'antd/dist/reset.css' ;

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { cryptoApi } from './services/cryptoApi';

ReactDOM.render(
    <BrowserRouter>
    
    <Provider store={store}>
    <ApiProvider api={cryptoApi}>
    <App /> 
    </ApiProvider>
    </Provider>
    </BrowserRouter> ,

 document.getElementById('root')
 );