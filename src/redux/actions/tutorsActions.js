import { ADDNEWTUTOR, GETTUTORS } from "../constants/tutorConstants";
import { v4 as uuidv4 } from "uuid";

const addNewTutor = (tutor, tutors) => {
  const id = uuidv4();
  localStorage.setItem('tutors', JSON.stringify([...tutors, {...tutor, id}])) 
  return {
    type: ADDNEWTUTOR,
    payload: { ...tutor, id },
  };
};

const getTutors = (tutors) => ({
  type: GETTUTORS,
  payload: tutors,
});

export { addNewTutor, getTutors };
