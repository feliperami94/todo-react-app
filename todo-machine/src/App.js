import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
// import './App.css';
const defaultTodos = [
  {text:'Cortar Cebolla', completed: false},
  {text:'Tomar curso de Intro a React', completed: false},
  {text:'Llorar con la llorona', completed: false},
  {text:'Aprender y terminar intro de React', completed: false}
]

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
    // console.log(todoIndex);
    newTodoList[todoIndex].completed = true;
    setTodos(newTodoList);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodoList = [...todos];
    newTodoList.splice(todoIndex, 1);
    setTodos(newTodoList);
  };

  
  // console.log(displayTodos);
  return (
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
        onDeleteButton={() => deleteTodo(todo.text)}/>))}
        
      </TodoList>
      <CreateTodoButton />
          
    </React.Fragment>

  );
}

export default App;
