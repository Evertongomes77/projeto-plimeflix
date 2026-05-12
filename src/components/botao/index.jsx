import { Button } from "./style";

function Botao({children,...props}){


    return(
        <div>
            <Button {...props}>{children}</Button>
        </div>
    )
}

export default Botao;