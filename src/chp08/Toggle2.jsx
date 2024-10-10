import {useState} from "react";

function Toggle2(){
    const [isToggleOn, setIsToggleOn] = useState(true);

    // function handleClick(){
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }

    const handleClick = () =>{
        setIsToggleOn((isToggleOn) => !isToggleOn)
    }
    return(
        <button onClick={handleClick}>
            함수형 컴포넌트 {isToggleOn? "켜짐":"꺼짐"}
        </button>
    );
}
export default Toggle2