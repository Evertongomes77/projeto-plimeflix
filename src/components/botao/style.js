import styled from "styled-components";

export const Button= styled.button`
width: 200px;
height: 40px;
background:${props=>props.color==='primaria'? 'linear-gradient(90deg,#0093e9, #3f5efb)' : 'linear-gradient(90deg,#b8860b, #ffd700)'};
color: #ffffff;
border: none;
cursor: pointer;
font-size: 16px;
border-radius: 10px;
margin-top: 20px;
@media(max-width: 650px){
    width:100px;
    height: 30px ;
}
`