import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';

function AppUI({
    completedTodos,
    totalTodos,
    searchInputState,
    setSearchInputState,
    displayTodos,
    completeTodo,
    deleteTodo,s
}) {
    return(
        <React.Fragment>
        <TodoCounter 
            completed={completedTodos}
            total={totalTodos}/>
        <TodoSearch 
            searchInputState={searchInputState}
            setSearchInputState={setSearchInputState}
        />
        <TodoList>
            {displayTodos.map(todo => 
            (<TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onCompleteButton={() => completeTodo(todo.text)}
                onDeleteButton={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
        <CreateTodoButton />    
    </React.Fragment>

    )
};

export { AppUI };