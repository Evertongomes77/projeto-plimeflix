import { Button } from "./style";

    function Botao({Children,...props}){

    return(
        <div>
            <Button {...props}>{Children}</Button>
        </div>
    )
}

export default Botao;