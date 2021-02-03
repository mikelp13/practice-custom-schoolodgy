import React from "react";
import { useSelector } from "react-redux";
import { StudentListContainer } from "./StudentsListStyled";

const StudentsList = () => {
  const students = useSelector((state) => state.students.items);
  return (
    <StudentListContainer>
      <ul className='studentsList'>
        {students.map((student) => (
          <li key={student.id} className='studentsListItem'>
            <p>
              First name:<span> </span>
              {student.firstName}
            </p>
            <p>Last name: {student.lastName}</p>
          </li>
        ))}
      </ul>
    </StudentListContainer>
  );
};

export default StudentsList;
