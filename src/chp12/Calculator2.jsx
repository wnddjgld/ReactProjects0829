import React from "react";
import TemperatureInput from "./TemperatureInput";

function Calculator2(){

    return(
        <div>
            <TemperatureInput scale="c"/>
            <TemperatureInput scale="f"/>
        </div>
    );
}
export default Calculator2;