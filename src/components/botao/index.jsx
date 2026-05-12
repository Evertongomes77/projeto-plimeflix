
    function Botao({Children,...props}){

    return(
        <div>
            <button {...props}>{Children}</button>
        </div>
    )
}

export default Botao;