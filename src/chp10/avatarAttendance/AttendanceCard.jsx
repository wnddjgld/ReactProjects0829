import React from "react";
import './AttendanceCard2.css'
import img1 from './imgs/1.jpg'

const students =[
    {id:1, name:"윤일나", grade:2, major:"인공지능 소프트웨어", avatar: img1 },
    {id:2, name:"윤이나", grade:3, major:"전기", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    {id:3, name:"윤삼나", grade:3, major:"그린에너지", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
    {id:4, name:"윤사나", grade:4, major:"시각디자인", avatar: img1},
    {id:5, name:"윤오나", grade:1, major:"인공지능 소프트웨어", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
    {id:6, name:"윤육나", grade:2, major:"인공지능 소프트웨어", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    {id:7, name:"윤칠나", grade:3, major:"전기", avatar: "https://randomuser.me/api/portraits/women/7.jpg" },
    {id:8, name:"윤팔나", grade:3, major:"그린에너지", avatar: "https://randomuser.me/api/portraits/women/8.jpg" },
    {id:9, name:"윤구나", grade:3, major:"그린에너지", avatar: "https://randomuser.me/api/portraits/women/9.jpg" }
];
function AttendanceCard(){
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">학생 사진 출석부</h2>
            <div className="card-container">
                {
                    students.map((student)=>(
                        <div className="student-card">
                            <img src={student.avatar} art={student.name} className="student-avatar"/>
                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p>{student.grade}학년 | {student.major}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AttendanceCard;