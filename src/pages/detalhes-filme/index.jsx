import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import baseimage from "../../utils/baseimage";
import { Container, Divbuttons, Divsobre } from "./style";
import { Button } from "../../components/botao/style";
import { Containerload } from "../../utils/styleload/style";


function Detalhes() {
    const {type,id} = useParams()
    const [filme, setfilme] = useState({});
    const [load,setload]= useState(true)

    async function detalhes() {
        const data = await api.get(`${type}/${id}`)
        setfilme(data.data)
        setload(false)
    }

    function salvarfilme(){
        const filmessalvos= JSON.parse(localStorage.getItem('@filmes')) || [];
        const filmesJaSalvos= filmessalvos.filter((item)=> item.id===filme.id);
        if(filmesJaSalvos.length>0){
            alert('filme já salvo')
        }
        else{
            filmessalvos.push(filme)
            localStorage.setItem('@filmes',JSON.stringify(filmessalvos))
            alert('filme salvo com sucesso!')
        }
    }
    useEffect(() => {
        detalhes();
    }, []);

    if(load){
        return(
            <Containerload>
                <h1>Carregando.....</h1>
            </Containerload>
        )
    }

    return (
        <Container>
            <h1>{type==='movie'? filme.title : filme.name}</h1>
            <img src={baseimage+filme.backdrop_path} alt="" />
            <Divsobre>
            <p>{filme.overview}</p>
            </Divsobre>
            <Divbuttons>
                <a href={`https://www.youtube.com/results?search_query=${type==='movie'? filme.title : filme.name} trailer`} target="_blank" rel="external"><Button color={'primaria'}>Ver trailer</Button></a>
                <Button onClick={salvarfilme}>Salvar filme</Button>
            </Divbuttons>
        </Container>
    )
}

export default Detalhes;