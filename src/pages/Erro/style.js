import styled from "styled-components";


export const Container= styled.div`
width: 100vw;
height: calc(100vh - 60px);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: radial-gradient(circle at top, #312e81, #0f172a 80%);
color: #f8fafc;

a{
    text-decoration: none;
}
button{
    width: 160px;
    height: 40px;
    background: linear-gradient(90deg, #374151, #4b5563);
    border-radius: 20px;
    border: none;
    margin: 20px;
    color: #f8fafc;
}
`