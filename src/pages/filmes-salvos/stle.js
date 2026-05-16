import styled from "styled-components";

export const Container= styled.div`
display: grid;
padding: 0 20px;
margin: 20px;
justify-content: center;
gap: 20px;
grid-template-columns:repeat(7,7fr);

@media(max-width:1180px){
    grid-template-columns: repeat(6,6fr);
}

@media(max-width:1020px){
    grid-template-columns: repeat(5,5fr);
}

@media(max-width:850px){
    grid-template-columns: repeat(4,4fr);
}

@media(max-width:680px){
    grid-template-columns: repeat(3,3fr);
}

@media(max-width:500px){
    grid-template-columns: repeat(2,2fr);
}

@media(max-width:370px){
    grid-template-columns: repeat(1,1fr);
}
`

export const Conteudo= styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

p{
    font-size: 15px;
    color: #740606;
    font-weight: bold;
}

img{
    width: 150px;
}

button{
    width: 100px;
    height: 30px;
    color: white;
    background-color: red;
     border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 20px;
}
`

export const Filmes=styled.h1`

    font-size: 30px;
    font-weight: bold;
    color: #c60606;
    margin-left: 20px;
    margin-top: 20px;

`