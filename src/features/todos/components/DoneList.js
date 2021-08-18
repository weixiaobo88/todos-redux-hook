import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectDoneList } from "../reducers/todosSlice";

const DoneList = () => {
  const doneList = useSelector(selectDoneList);

  return (
    <React.Fragment>
      <h2 className="done-header">Done List</h2>
      <div className="done-container">
        {doneList.map((todo, index) => (
          <p key={todo + index}>{todo.text}</p>
        ))}
      </div>
    </React.Fragment>
  );
};

DoneList.propTypes = {
  doneList: PropTypes.array,
};

export default DoneList;
