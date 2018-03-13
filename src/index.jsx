/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

import styles from './styles/styles.css';
import App from './app';

render(
    <App />,
    document.getElementById('root')
);
