import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import baseimage from "../../utils/baseimage";
import { Container, Divbuttons, Divsobre } from "./style";
import Botao from "../../components/botao";


function Detalhes() {
    const {type,id} = useParams()
    const [filmes, setfilme] = useState({});
    const [load,setload]= useState(true)

    async function detalhes() {
        const data = await api.get(`${type}/${id}`)
        setfilme(data.data)
        setload(false)
    }

    function salvarfilme(){
        localStorage.setItem('@filmes',JSON.stringify(filmes));
    }

    useEffect(() => {
        detalhes();
    }, []);

    if(load){
        return(
            <div>
                <h1>Carregando.....</h1>
            </div>
        )
    }

    return (
        <Container>
            <h1>{type==='movie'? filmes.title : filmes.name}</h1>
            <img src={baseimage+filmes.backdrop_path} alt="" />
            <Divsobre>
            <p>{filmes.overview}</p>
            </Divsobre>
            <Divbuttons>
                <a href={`https://www.youtube.com/results?search_query=${type==='movie'? filmes.title : filmes.name} trailer`} target="_blank" rel="external"><Botao>Ver trailer</Botao></a>
                <Botao color='secundaria' onClick={salvarfilme}>Salvar filme</Botao>
            </Divbuttons>
        </Container>
    )
}

export default Detalhes;