import React from "react";
import Card from "./Card";

function ProfileCard(){
    return(
        <div>
            <Card title="1kathy Minn1" backgroundColor="#F361A6">
                <p>안녕하세요 1입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
            <Card title="2kathy Minn2" backgroundColor="#F361A6">
                <p>안녕하세요 2입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
            <Card title="3kathy Minn3" backgroundColor="#F361A6">
                <p>안녕하세요 3입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
        </div>
    );
}

export default ProfileCard;