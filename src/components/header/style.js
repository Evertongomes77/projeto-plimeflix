import styled from "styled-components";

export const Container= styled.div`
width:100vw;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 40px;
backdrop-filter: blur(10px);
background: rgba(15,23,42,0.7);
color: red;
h1{
    font-size: 30px;
    cursor: pointer;
}
button{
    font-size: 12px;
    cursor: pointer;
    background-color: red;
    color: #ffffff;
   padding: 7px;
    border: none;
    border-radius: 10px;
}
a{
    text-decoration: none;
    color: red;
}
`