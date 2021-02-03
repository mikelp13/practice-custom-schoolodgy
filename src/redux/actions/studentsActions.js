import { v4 as uuidv4 } from "uuid";
import { ADDNEWSTUDENT, GETSTUDENTS } from "../constants/studentsConstants";

export const addNewStudent = (student, students) => {
  const id = uuidv4();
  localStorage.setItem('students', JSON.stringify([...students, {...student, id}])) 
    return {
        type: ADDNEWSTUDENT,
        payload: { ...student, id},
    };
};

export const getStudents = (students) => {
    return {
        type: GETSTUDENTS,
        payload: students,
    };
};
