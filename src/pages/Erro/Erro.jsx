import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
            <h1>ops parece que essa página não existe</h1>
            <Link to='/'>ir para Home</Link>
        </div>
    )
}
export default Erro;