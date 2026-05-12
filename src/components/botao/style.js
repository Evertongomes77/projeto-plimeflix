import styled from "styled-components";

export const Button= styled.button`
width: 100px;
height: 60px;
border:none;
border-radius: 20px;
background-color: ${props=> props.color==='secundaria'? '#ff7300' : '#ed0000'};
color:${props=> props.color==='secundaria'? '#eed5d5' : '#ffffff'};
cursor: pointer;
`