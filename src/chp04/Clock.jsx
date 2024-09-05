import React from "react";

function Clock(props){
    return(
        <div>
            <h1>안녕, 리액트!</h1>
            <div className='asdf'> {new Date().toLocaleTimeString()}</div>
        </div>
    )
}

export default Clock;