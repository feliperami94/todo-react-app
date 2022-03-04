import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
// import './App.css';
const todos = [
  {text:'Cortar Cebolla', completed: false},
  {text:'Tomar curso de Intro a React', completed: false},
  {text:'Llorar con la llorona', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
      {todos.map(todo => 
        (<TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}/>))}
      </TodoList>
      <CreateTodoButton />
          
    </React.Fragment>

  );
}

export default App;
