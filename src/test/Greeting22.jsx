import React from "react";
import {UserGreeting, GuestGreeting} from "./UserGuestGreeting";

function Greeting22(props){
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting/>
    }
    else {
        return <GuestGreeting/>
    }
}
export default Greeting22;