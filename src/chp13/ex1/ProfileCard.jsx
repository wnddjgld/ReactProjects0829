// ProfileCard.jsx
import React from "react";
import Card from "./Card";


function ProfileCard(){
    return (
        <Card className="profile-card" title="아무개">
            <p>안녕하세요< /p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.< /p>
        </Card>

    );
}

export default ProfileCard;