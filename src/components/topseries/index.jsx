import { useEffect, useState } from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";
import baseimage from "../../utils/baseimage";
import { Container, Slide } from "../topfilmes/style";
import { Swiper } from "swiper/react";
import 'swiper/css'

function Topseries() {
    const [series, setseries] = useState([]);

    async function buscarseries() {
        const data = await api.get('/tv/popular');
        setseries(data.data.results);
    }

    useEffect(() => {
        buscarseries();
    }, []);
    console.log(series)


    return (
        <Container>
            <h1>Top séries</h1>
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
                {series.map((item) => (
                    <Slide key={item.id}>
                        <Link to={`/detalhes/tv/${item.id}`}><img src={baseimage + item.poster_path} alt={`imagem da capa de ${item.name}`} /></Link>
                        <p>{item.name}</p>
                    </Slide>
                ))}
            </Swiper>
        </Container>
    )
}

export default Topseries;