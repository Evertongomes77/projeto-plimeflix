import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Container= styled.div`
width: 100vw;
overflow: hidden;
h1{
    font-size: 2rem;
    margin: 20px ;
    color: #f8fafc;
}
`

export const Slide= styled(SwiperSlide)`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
img{
    width: 200px;
    height: 280px;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
        transform: scale(1.05);
        box-shadow: 0 0 25px rgba(59,130,246,0.6);
    }
}
p{
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 18px;
    color: #facc15;
}
`