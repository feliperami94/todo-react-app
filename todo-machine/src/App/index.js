import React from 'react';
import { AppUI } from './AppUI';


// const defaultTodos = [
//   {text:'Cortar Cebolla', completed: false},
//   {text:'Tomar curso de Intro a React', completed: false},
//   {text:'Llorar con la llorona', completed: false},
//   {text:'Aprender y terminar intro de React', completed: false}
// ]

function useLocalStorage (itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
  
      if (!localStorageItem) {
        parsedItem = initialValue;
        localStorage.setItem(itemName, JSON.stringify(parsedItem));
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      setLoading(false);
    } catch(error) {
      setError(error);
    }
    }, 1500)
  });

    const saveItem = (newTodoList) => {
      try {
        setItem(newTodoList);
        const stringifiedNewItem = JSON.stringify(newTodoList);
        localStorage.setItem(itemName, stringifiedNewItem);
      } catch(error){
        setError(error)
      }

      
    }

    return {
      item,
      saveItem,
      loading,
      error,
    }
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS-V1', []);
  
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
    saveTodos(newTodoList);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodoList = [...todos];
    newTodoList.splice(todoIndex, 1);
    saveTodos(newTodoList);
  };

  // React.useEffect(() => {
  //   console.log('use effect')
  // }, [totalTodos]);

  return (
    <AppUI 
      loading={loading}
      error={error}
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
