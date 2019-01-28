import { Student } from '../styled-components/studentsGrid' 
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Card(props) {
    if(!props.student.name)
        return (
            <div></div>
        )
    return (
            <NavLink
            className = "student"
            to={`/${props.student.rollNo}`}
            >
              <Student >
                
              <img src="https://cdn1.imggmi.com/uploads/2019/1/24/ab8f3a70d5624b382d85c34bfeabbfae-full.jpg" alt="Avatar" 
              style={{width:"200px" ,height:"150px"}}/>
 
                <div className = "details">
                    <div className = "row-val">
                        <div className = "label">Roll.No </div>
                        <div>{props.student.rollNo}</div>
                    </div>

                    <div className = "row-val">
                        <div className = "label">Name </div>
                        <div>{props.student.name}</div>
                    </div>

                    <div>
                        <div className = "label">Total Marks </div>
                        <div>{sum(Object.values(props.student.marks))}</div>
                    </div>
                </div>
                </Student>
            </NavLink>

    )
}

function sum(arr) {
    return arr.reduce(function(a,b){
      return a + b
    }, 0);
  }