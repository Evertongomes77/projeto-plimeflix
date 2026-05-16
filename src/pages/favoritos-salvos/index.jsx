import { useState, useEffect } from "react";
import baseimage from "../../utils/baseimage";
import { Container, Conteudo, Filmes,Conteudofilme } from "./stle";
import { Link, useParams } from "react-router-dom";



function Favoritossalvos() {
    const [filmes, setfilmes] = useState([]);


    function buscarfavoritos() {
        const data = JSON.parse(localStorage.getItem('@filmes')) || []
        setfilmes(data)
    }

    function excluirfavorito(id){
        const excluir= filmes.filter((item)=>item.id!==id)
        setfilmes(excluir)
        localStorage.setItem('@filmes',JSON.stringify(excluir))
    }

    useEffect(() => {
        buscarfavoritos();
    }, []);
    return (
        <Container>
            <Filmes>Meus filmes</Filmes>
            <Conteudofilme>
                {filmes.map((item) => (
                    <Conteudo key={item.id}>
                        <Link to={`/detalhes/${item.number_of_seasons ? `tv/${item.id}` : `movie/${item.id}`}`}><img src={baseimage + item.poster_path} alt={item.title} /></Link>
                        <p>{item.number_of_seasons ? item.name : item.title}</p>
                        <button onClick={()=>excluirfavorito(item.id)}>Excluir</button>
                    </Conteudo>
                ))}
            </Conteudofilme>
        </Container>
    )
}

export default Favoritossalvos;