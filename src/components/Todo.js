import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import cx from "classnames";
import { toggleTodo } from "./Actions";

const Todo = ({ todo, toggleTodo }) => ( 
    <li className = "todo-item"
    onClick = {() => toggleTodo(todo.id) } > { todo && todo.completed ? "👌" : "👋" } { " " } 
        <span className = {cx( "todo-item__text", todo && todo.completed && "todo-item__text--completed" )} >
    { todo.content } 
    </span> 
    </li>
);

export default connect(null, { toggleTodo })(Todo);