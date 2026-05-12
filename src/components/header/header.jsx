import { Link } from "react-router-dom";
import './header.css'

function Header(){
    return(
        <div className="header">
            <h1><Link to='/'>primeflix</Link></h1>
            <div>
                <Link to='/meusfilmes'>meus filmes</Link>
            </div>

        </div>
    )
}
export default Header;