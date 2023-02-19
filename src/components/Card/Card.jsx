import { Link } from "react-router-dom";
function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>
         
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name} />
      </div>
   );
}
export default Card;