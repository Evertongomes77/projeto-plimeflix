import styled from "styled-components";

export const Conteudofilme= styled.div`
display: grid;
justify-content: center;
gap: 20px;
padding: 40px;
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

export const Container= styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
background: radial-gradient(circle at top, #312e81, #0f172a 80%);
`

export const Conteudo= styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


p{
    font-size: 15px;
    color: #f8fafc;
    font-weight: bold;
}

img{
    width: 150px;
    border-radius: 10px;
    &:hover{
        transform: scale(1.05);
        box-shadow: 0 0 25px rgba(59,130,246,0.6);
    }
}

button{
    width: 100px;
    height: 30px;
    color: white;
    background: #ff4b2b;
     border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    &:hover{
        background: #ff1e00;
        transform: scale(1.08);
        box-shadow: 0 0 15px rgba(255, 75, 43, 0.6);
    }
}
`

export const Filmes=styled.h1`

    font-size: 30px;
    font-weight: bold;
    color: #c60606;
    padding: 20px;
    background: radial-gradient(circle at top, #312e81, #0f172a 80%);

`