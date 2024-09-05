import React from "react";
import Button from "./Button";

function ConfirmDialog(props){
    return (
        <div>
            <p>내용을 확인하셨스면 확인버튼을 눌러주세요.</p>
            <Button color='red'>확인</Button>
            <Button color='blue'>취소</Button>
            <Button color='green'>초기화</Button>
        </div>
    )
}

export default ConfirmDialog;