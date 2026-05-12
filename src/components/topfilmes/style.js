import styled from "styled-components";
import { SwiperSlide } from "swiper/react";


export const Container= styled.div`
width: 100vw;
height: 70vh;
h1{
    margin: 20px;
}
`

export const Slide= styled(SwiperSlide)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
cursor: grab;
img{
    width: 250px;
    height: 300px;
}
p{
    font-size: 20px;
    font-weight: bold;
}
`