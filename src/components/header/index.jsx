import { Container } from "./style";
import { Link } from "react-router-dom";


function Header(){

    return(
        <Container>
           <Link to={'/'}> <h1>Primeflix</h1> </Link>
           <Link to={'/meusfilmes'}><button>Meus filmes</button> </Link> 
        </Container>
    )
}

export default Header;