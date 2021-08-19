import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  markTodo,
  deleteTodo,
  selectTodoById,
  updateTodoText,
} from "../reducers/todosSlice";
import "../styles/todoItem.css";
import { updateTodoItem, deleteTodoItem } from "../../../apis/todosAPI";
import { Row, Col, Modal, Input } from "antd";
import { FormOutlined } from "@ant-design/icons";

const TodoItem = ({ id }) => {
  const { TextArea } = Input;
  const [isModalVisible, setIsModalVisible] = useState();

  const todo = useSelector((state) => selectTodoById(state, id));
  const [text, setText] = useState(todo.text);

  let todoClass = todo.done ? "done" : "undone";

  const dispatch = useDispatch();

  const onMark = () => {
    updateTodoItem(id, { id, text: todo.text, done: !todo.done }).then(
      (response) => {
        dispatch(markTodo(response.data));
      }
    );
  };

  const onDelete = (event) => {
    event.stopPropagation();

    deleteTodoItem(id).then(() => {
      dispatch(deleteTodo(id));
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

    updateTodoItem(id, { ...todo, text }).then((response) => {
      dispatch(updateTodoText(response.data));
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    if (newText.length !== 0) {
      setText(newText);
    }
  };

  return (
    <React.Fragment>
      <Row justify="center">
        <Col span={12}>
          <div className={`box ${todoClass}`} onClick={onMark}>
            {todo.text}
            <span className="times" onClick={onDelete}>
              &times;
            </span>
          </div>
        </Col>
        <Col span={4} className="edit-icon">
          {!todo.done && <FormOutlined onClick={showModal} />}
        </Col>
      </Row>
      <Modal
        title="Todo Text Editor"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <TextArea
          rows={4}
          defaultValue={todo.text}
          onChange={handleTextChange}
        />
      </Modal>
    </React.Fragment>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    value: PropTypes.string,
    done: PropTypes.bool,
  }),
  onMark: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TodoItem;
