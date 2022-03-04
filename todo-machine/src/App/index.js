import React from 'react';
import { AppUI } from './AppUI';


// const defaultTodos = [
//   {text:'Cortar Cebolla', completed: false},
//   {text:'Tomar curso de Intro a React', completed: false},
//   {text:'Llorar con la llorona', completed: false},
//   {text:'Aprender y terminar intro de React', completed: false}
// ]

function App() {


  
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchInputState, setSearchInputState] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  
  const totalTodos = todos.length;

  var displayTodos = [];

  if (searchInputState.length < 1) {
    displayTodos = todos;
  } else {
    displayTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchInputState.toLowerCase();
      return todoText.includes(searchText);
    })
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodoList = [...todos];
    newTodoList[todoIndex].completed = true;
    setTodos(newTodoList);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodoList = [...todos];
    newTodoList.splice(todoIndex, 1);
    setTodos(newTodoList);
  };


  return (
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchInputState={searchInputState}
      setSearchInputState={setSearchInputState}
      displayTodos={displayTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}
export { App };
