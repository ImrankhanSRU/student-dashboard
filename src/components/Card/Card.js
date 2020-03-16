import React from "react";
import { Student } from "../styled-components/studentsGrid";
import { NavLink } from "react-router-dom";
import {
  Details,
  DetailsRow,
  Label,
  Text
} from "../styled-components/studentDetails";

export default function Card(props) {
  if (!props.student.name) return <div />;
  return (
    <NavLink className="link student-link" to={`/student/${props.student.rollNo}`}>
      <Student>
        <img
          className="student-img"
          src={require('../../assets/user-icon.jpg')}
          alt="Avatar"
        />

        <Details>
          <DetailsRow>
            <Label>Roll.No </Label>
            <Text>{props.student.rollNo}</Text>
          </DetailsRow>

          <DetailsRow>
            <Label>Name </Label>
            <Text>{props.student.name}</Text>
          </DetailsRow>

          <DetailsRow>
            <Label className="label">Marks </Label>
            <Text>{sum(Object.values(props.student.marks))}</Text>
          </DetailsRow>
        </Details>
      </Student>
    </NavLink>
  );
}

const sum = markList => {
  return markList.reduce((a, b) => {
    return a + b;
  }, 0);
};
