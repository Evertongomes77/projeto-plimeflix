import api from "../../services/api"
import baseimage from "../../utils/baseimage";
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'


function Topfilmes() {
    const [filmes, setfilmes] = useState([]);


    async function buscarfilmes() {
        const data = await api.get('/movie/popular');
        setfilmes(data.data.results);
        console.log(data.data.results)
    }

    useEffect(() => {
        buscarfilmes();
    }, []);

    return (
        <div>
            <Swiper
            spaceBetween={20}
            slidesPerView={5}
            >
                {filmes.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={baseimage + item.poster_path} alt={item.title} />
                        <p>{item.title}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


export default Topfilmes;