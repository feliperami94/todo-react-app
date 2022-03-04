import React from "react";
import "./TodoSearch.css";


function TodoSearch ({searchInputState, setSearchInputState}) {
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchInputState(event.target.value)}
    return (
    <div className="TodoSearchContainer">
    <input 
    placeholder="Cebolla" 
    className="TodoSearch"
    value={searchInputState}
    onChange={onSearchValueChange}/>
    </div>
    )
};

export { TodoSearch };

