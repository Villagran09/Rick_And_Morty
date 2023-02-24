import { ADD_FAVORITE, DELETE_FAVORITE} from "./action-types";

const initialState={
    myFavorites: []
}

// const reducer=(state=initialState,action)=>{
//     switch (action.type){
//         case ADD_FAVORITE:
//             return{
//                 ...state,
//                 myFavorite:[...state.myFavorites, action.payload] // primero la copia para que no se pisen los datos
//             }
//         case DELETE_FAVORITE:
//             return{
//                 ...state,
//                 myFavorite: state.myFavorites.filter(char=> char.id !==
//                     action.payload)//me quiero quedar con todos  
//                 //los personajes en que su id sea distinto al id que recibo por payload
//             }

        
//         default:
//             return {...state}
//     }   
// }

// export default reducer;

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
      case ADD_FAVORITE:
        return {
          ...state,
          myFavorites: [...state.myFavorites, payload],
        };
      case DELETE_FAVORITE:
        return {
          ...state,
          myFavorites: state.myFavorites.filter((elem) => elem.id !== payload),
        };
      default:
        return { ...state };
    }
  }
  