import { useEffect,useState } from "react";
import './favoritos.css'
import { Link } from "react-router-dom";

function Favoritos(){
    let [filmes,setfilmes]=useState([]);
    useEffect(()=>{
         let minhalista=localStorage.getItem("@filmes");
    setfilmes(JSON.parse(minhalista) || []);
    },[])

    function excluir(id){
        let filtrofilmes=filmes.filter((filmes)=>{
            return(
                filmes.id !==id
            )
        })
        setfilmes(filtrofilmes);
        localStorage.setItem("@filmes", JSON.stringify(filtrofilmes))
    }




    return(
<div className="meusfilmes">
    <h1>meus filmes</h1>
    {filmes.map((f)=>{
        return(
            <div className="filmes">
                <span>{f.title}</span>
                <div>
                    <Link to={`/detalhes/${f.id}`}>ver detalhes</Link>
                    <button onClick={()=>excluir(f.id)}>excluir</button>
                </div>
            </div>
        )
    })}
</div>
    )
}

export default Favoritos;