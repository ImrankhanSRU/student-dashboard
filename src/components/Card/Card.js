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
    <NavLink className="link" to={`/${props.student.rollNo}`}>
      <Student>
        <img
          className="student-img"
          src="https://cdn1.imggmi.com/uploads/2019/1/24/ab8f3a70d5624b382d85c34bfeabbfae-full.jpg"
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
