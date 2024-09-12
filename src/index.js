import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import  './chp03/Book.css'
//import './chp04/Clock.css'
//import Button from "./chp04/Button.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./chp03/Library";
import ConfirmDialog from "./chp04/ConfirmDialog"
import Clock from "./chp04/Clock";
import CommentList from './chp05/CommentList'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CommentList/>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
