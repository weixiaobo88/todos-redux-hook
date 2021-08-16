import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectDoneList } from "./todosSlice";

const DoneList = () => {
  const doneList = useSelector(selectDoneList);

  return (
    <React.Fragment>
      <h2 className="done-header">Done List</h2>
      <ul className="done-container">
        {doneList.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

DoneList.propTypes = {
  doneList: PropTypes.array,
};

export default DoneList;
