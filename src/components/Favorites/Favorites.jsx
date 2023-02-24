import { useSelector } from "react-redux"; // uso useSelector en vez de la funcion mapStateToProps
//import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Favorites =()=>{
    //como se que mi estado globar es un objeto uso destructury
    //del estado global quiero a mi estado myfavorite
    const {myFavorites}= useSelector(state=>state) // solo llamo al estado porque ya lo defini en el destructury
    return (
        <div style={{ display: "flex" }}>
          {myFavorites.map((elem) => (
            <Card
              name={elem.name}
              species={elem.species}
              gender={elem.gender}
              image={elem.image}
              id={elem.id}
              onClose={() => alert("Para eliminar toca el corazon")}
            />
          ))}
        </div>
      );
    }

export default Favorites;