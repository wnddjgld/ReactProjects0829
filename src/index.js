import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
//import  './chp03/Book.css'
//import './chp04/Clock.css'
//import Button from "./chp04/Button.css"
//import './chp06/Styles.css';

import reportWebVitals from './reportWebVitals';
import Library from "./chp03/Library";
import ConfirmDialog from "./chp04/ConfirmDialog"
import Clock from "./chp04/Clock";
import CommentList from './chp05/CommentList'
import NotificationList from "./chp06/NotificationList";
import notification from "./chp06/Notification";
import Accommodate from "./chp07/Accommodate";
import Toggle from "./chp08/Toggle";
import Toggle2 from "./chp08/Toggle2";
import ClickButton from "./chp08/ClickButton";
import Counter from "./chp08/Counter";
import InputTest from "./chp08/inputTest";
import ConfirmButton from "./chp08/ConfirmButton";
import ConfirmButton3 from "./chp08/ConfirmButton3";
import Greeting from "./chp09/Greeting";
import LoginControl from "./chp09/LoginControl";
import MailBox from "./chp09/MailBox";
import LoginControl2 from "./chp09/LoginControl2";
import LandingPage from "./chp09/LandingPage";
import AppNumberList from "./chp10/AppNumberList";
import StudentAttendance from "./chp10/StudentAttendance";
import AppStudentAttendance from "./chp10/AppStudentAttendance";
import AttendanceCard from "./chp10/avatarAttendance/AttendanceCard";
import NameForm from "./chp11/NameForm";
import RequestForm from "./chp11/RequestForm";
import NameRequestForm from "./chp11/NameRequestForm";
import SignUp from "./chp11/SignUp";
import Calculator from "./chp12/Calculator";
import Calculator2 from "./chp12/Calculator2";
import Calculator3 from "./chp12/Calculator3";
import DistanceConverter from "./chp12/distance/DistanceConverter";
import ProfileCard from "./chp13/ProfileCard";
import MainPage from "./chp13/ex1/MainPage";
import AirApp from "./chp13_airbnbHome/imgs/AirApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AirApp/>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
