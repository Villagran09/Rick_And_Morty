import { useState } from "react";

function SearchBar({ onSearch }) {
   const[characters, setCharacters]= useState('')

   const handleOnchange=(event)=>{
      setCharacters(event.target.value)
   }
   return (
      <div>
         <input type='search' value={characters} onChange={handleOnchange}/>
         <button onClick={()=>onSearch(characters)}>Agregar</button>
      </div>
   );
}

export default SearchBar;
