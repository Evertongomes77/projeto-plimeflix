import { Activity } from "react";
import styled from "styled-components";


export const Container= styled.div`
width: 100vw;
height: calc(100vh - 60px);
display: flex;
flex-direction: column;
align-items: center;

img{
    width: 700px;
    height: 500px;
    border-radius: 20px;
    margin: 10px;
}
`


export const Divsobre= styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
p{
    font-size: 20px;
    font-weight: bold;
}
`


export const Divbuttons= styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin: 10px;
`