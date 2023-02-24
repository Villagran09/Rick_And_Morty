import './App.css';
import Nav from './components/Navbar/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App () {
  const location= useLocation()
  const navigate= useNavigate()
  const [characters,setCharacters]= useState([]);
  const [access, setAccess]= useState(false);

  const username= 'miguevillagran@gmail.com';
  const password= 'Mev123'

  const login=(userData)=>{
   if( userData.username === username && userData.password === password){
    setAccess(true);
    navigate("/home");
   }
  }

  useEffect(()=>{
    !access && navigate("/");
  },[access])

  const onSearch=(characters)=>{
    fetch(`https://rickandmortyapi.com/api/character/${characters}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose= (id)=>{
    setCharacters(
      characters.filter(character=> character.id !== id)
    )
     
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
        {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch}/> }
      
          
          
        <Routes>
          <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>} />
          <Route path='/favorites' element={<Favorites/>} />
        </Routes>

    </div>
  )
}

export default App