import { Activity } from "react";
import styled from "styled-components";


export const Container= styled.div`
width: 100vw;
height: calc(100vh - 60px);
display: flex;
align-items: center;
flex-direction: column;
background: radial-gradient(circle at top, #312e81, #0f172a 80%);

img{
    width: 600px;
    height: 400px;
    border-radius: 20px;
    margin: 10px;
    transform: scale(1.05);
        box-shadow: 0 0 25px rgba(59,130,246,0.6);
    @media(max-width: 1030px){
        width: 450px;
        height: 300px;
    }
    @media(max-width: 490px){
        width: 300px;
        height: 200px;
    }
}
h1{
    font-size: 30px;
    margin: 20px;
    color: white;
    font-weight: bold;
}
`


export const Divsobre= styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: center;
@media(max-width: 770px){
    width: 100%;
    padding: 0 20px ;
}

p{
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin: 20px;
    @media(max-width: 770px){
        font-size: 15px;
    }
    @media(max-width: 1030px){
        font-size: 18px;
    }
    @media(max-width:650px){
        font-size: 15px;
    }
}
`


export const Divbuttons= styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-bottom: 10px;
`