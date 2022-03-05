import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';

function AppUI({
    loading,
    error,
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
            {error && <p>Desesperate, hubo un error</p>}
            {loading && <p>Estamos cargando, no desesperes</p>}
            {(!loading && !displayTodos.length) && <p>Crea tu primer To-do</p>}


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