import api from "../../services/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import baseimage from "../../utils/baseimage";
import { Swiper } from "swiper/react";
import 'swiper/css'
import { Container, Slide } from "./style";


function Topfilmes() {
    const [filmes, setfilmes] = useState([]);
    const [load,setload]= useState(true)

    async function buscarfilmes() {
        const data = await api.get('/movie/popular');
        setfilmes(data.data.results)
        setload(false)
    }
    useEffect(() => {
        buscarfilmes();
    }, []);

    if(load){
        return(
            <div>
                <h1>Caregando....</h1>
            </div>
        )
    }

    return (
        <Container>
            <h1>Top filmes</h1>
            <Swiper
                spaceBetween={20}
                slidesPerView={6}
                modules={[navigation]}
                navigation
                breakpoints={{
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  }}
            >
                {filmes.map((item) => (
                    <Slide key={item.id}>
                        <Link to={`/detalhes/movie/${item.id}`}><img src={baseimage + item.poster_path} alt={item.title}/></Link>
                        <p>{item.title}</p>
                    </Slide>
                ))}
            </Swiper>
        </Container>
    )
};
export default Topfilmes;