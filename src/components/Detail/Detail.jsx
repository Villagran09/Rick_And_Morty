import { useState, useEffect } from "react";
import { useParams, } from "react-router-dom";
import { Link } from "react-router-dom";
// export default function Detail(){
//     return(
//         <div>

//         </div>
//     )
// }
const Detail = () => {
    const {detailId}=useParams();
    const [character,setCharacter]= useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return(
        <div>
            
            <button>
                <Link to='/home'> HOME</Link>
            </button>
            <h1>NOMBRE: {character?.name}</h1>
            <p>STATUS: {character?.status}</p>
            <p>SPECIE: {character?.species}</p>
            <p>GENDER: {character?.gender}</p>
            <p>ORIGIN: {character?.origin?.name}</p>
            <img src={character?.image} alt="" />
        </div>
    )
}

export default Detail;