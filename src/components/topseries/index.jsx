import api from "../../services/api";
import baseimage from "../../utils/baseimage";
import { useState, useEffect } from "react";
import { Swiper } from "swiper/react";
import 'swiper/css'
import { Container, Slide } from "../topfilmes/style";
import { Link } from "react-router-dom";


function Topseries() {
    const [series, setseries] = useState([]);
    async function buscarseries() {
        const data = await api.get('/tv/popular')
        setseries(data.data.results)

    }

    useEffect(() => {
        buscarseries();
    }, []);

    return (
        <Container>
            <h1>Séries</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                grabCursor={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    453: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    970: {
                        slidesPerView: 4,
                    },
                    1230: {
                        slidesPerView: 5,
                    }
                }}
            >
                {series.map((item) => (
                    <Slide key={item.id}>
                        <Link to={`/detalhes/tv/${item.id}`}><img src={baseimage + item.poster_path} alt={item.name} /> </Link>
                        <p>{item.name}</p>
                    </Slide>
                ))}
            </Swiper>
        </Container >
    )
}


export default Topseries;