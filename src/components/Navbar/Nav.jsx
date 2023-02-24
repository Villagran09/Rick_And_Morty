import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom'
export default function Nav(props){
    return(
        <div>
            <SearchBar onSearch={props.onSearch}/>
            <Link to='/about'>About</Link>
            <br/>
            <Link to='/home'>Home</Link>
            <br />
            <Link to='/'>Logout</Link>
            <br/>
            <Link to='/favorites'>Favorites</Link>
        </div>
    )
}