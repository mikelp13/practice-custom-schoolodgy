import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewStudent } from "../../../redux/actions/studentsActions";
import { StudentFormContainer } from "./StudentFormStyled";

const initialState = {
  firstName: "",
  lastName: "",
};

const StudentForm = () => {
  const students = useSelector((state) => state.students.items)
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const onHandleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewStudent(state, students));
    setState({ ...initialState });
  };

  return (
    <StudentFormContainer>
      <form onSubmit={onHandleSubmit}>
        <label>
          First name
          <input
            type="text"
            value={state.firstName}
            onChange={onHandleChange}
            name="firstName"
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            value={state.lastName}
            onChange={onHandleChange}
            name="lastName"
          />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </StudentFormContainer>
  );
};

export default StudentForm;
