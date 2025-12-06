import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.css'


function Home() {
  let url='https://api.themoviedb.org/3/movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR'
  let [api,setapi]=useState([]);
  let [load,setload]=useState(true);


  useEffect(()=>{
    async function chamarapi(){
      let response= await axios.get(url)
      setapi(response.data.results)
      setload(false)
    }

    chamarapi();
  }, [])

  if(load){
    return(
      <div className='load'>
        <h1>carregando.....</h1>
      </div>
    )
  }




  return(
    <div className='home'>
      {api.map((api)=>{
        return(
          <div key={api.id} className='api'>
        <h1>{api.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w780${api.backdrop_path}`} alt="" />
        <Link to={`/detalhes/${api.id}`}>detalhes do filme</Link>
        <hr />
         </div>)
      })}
    </div>
  )
}

export default Home
