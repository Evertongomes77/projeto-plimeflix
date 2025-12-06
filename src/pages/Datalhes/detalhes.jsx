import { useParams,Link,useNavigate, Navigate} from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import './detalhes.css'


function Detalhes(){
    let {id}=useParams();
    let [api,setapi]=useState([]);
    let [load,setload]=useState(true)
    let navigate= useNavigate();

    let url= `https://api.themoviedb.org/3/movie/${id}?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR`


    useEffect(()=>{
        async function filmes(){
             await axios.get(url)
             .then((response)=>{
                setapi(response.data)
            setload(false)
             }).catch(()=>{
                navigate('/',{replace:true})
             })
        }

        filmes();
    }, [])


    function salvar(){
        let minhalista=localStorage.getItem("@filmes");
        let filmessalvos=JSON.parse(minhalista) || [];
        let hasfilme=filmessalvos.some((filmessalvo)=>filmessalvo.id === api.id);

        if(hasfilme){
            alert('esse filme já está salvo');
            return;
        }


        filmessalvos.push(api);
        localStorage.setItem("@filmes",JSON.stringify(filmessalvos));
        alert('filme salvo com sucesso');
    }

    if(load){
        return(
            <div className="detalhes">
                <h1>carregando detalhes......</h1>

            </div>
        )
    }



    return(
        <div className="detalhes">
            <h1>{api.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w780${api.poster_path}`} alt="" />
            <span>sipnose:</span>
        <p>{api.overview}</p>
        <span>avaliação: {api.vote_average}</span>
        <div className="link">
            <a href={`https://www.youtube.com/results?search_query=${api.title}+trailer`} target="_blank" rel="noreferrer">Ver Trailer</a>
            <button onClick={salvar}>Salvar</button>


        </div>
        </div>
    )
}

export default Detalhes;