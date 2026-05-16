import api from "../../services/api"
import baseimage from "../../utils/baseimage";
import { useEffect, useState } from "react"
import { Swiper } from "swiper/react";
import 'swiper/css'
import { Container, Slide } from "./style";
import { Link } from "react-router-dom";


function Topfilmes() {
    const [filmes, setfilmes] = useState([]);


    async function buscarfilmes() {
        const data = await api.get('/movie/popular');
        setfilmes(data.data.results);
    }

    useEffect(() => {
        buscarfilmes();
    }, []);

    return (
        <Container>
            <h1>Filmes</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                grabCursor={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    453:{
                        slidesPerView:2
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    970: {
                        slidesPerView: 4,
                    },
                    1230:{
                        slidesPerView: 5,
                    }
                }}
            >
                {filmes.map((item) => (
                    <Slide key={item.id}>
                        <Link to={`/detalhes/movie/${item.id}`}><img src={baseimage + item.poster_path} alt={item.title} /></Link>
                        <p>{item.title}</p>
                    </Slide>
                ))}
            </Swiper>
        </Container>
    )
}


export default Topfilmes;