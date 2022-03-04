import React from "react";
import "./TodoList.css";


function TodoList (props) {
return (
    <section className="TodoListSection">
        <ul className="TodoListUl">
            {props.children}
        </ul>
    </section>
)
};

export { TodoList };