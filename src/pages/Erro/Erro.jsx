import { Link } from "react-router-dom";
import { Container } from "./style";

function Erro(){
    return(
        <Container>
            <h1>ops parece que essa página não existe</h1>
            <Link to='/'><button>Voltar para Home</button></Link>
        </Container>
    )
}
export default Erro;