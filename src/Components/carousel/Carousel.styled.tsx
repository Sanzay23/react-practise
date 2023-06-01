import styled from 'styled-components';
import {   SliderProps } from './Carousel.model';

interface NavDotProps{
    active : number; 
}

const StyledContainer = styled.div`
    width : 100vh;
    height : 100%;
`;

const StyledImagediv = styled.div`
display : flex;
flex-direction:row;

`;
const StyledImageContainer = styled.div <SliderProps> `
background-color: cyan;
width: 100%;
height: 500px;
margin: 0 auto; 
display: flex;
align-items: center;
position: relative;
justify-content: center;
margin : 10px 10px;
`;

const Styledleft = styled.img<SliderProps>`
cursor:pointer;

   `;

const Styledright = styled.img <SliderProps>`
cursor:pointer;
`;

const StyledNavDotContainer = styled.div`
position: absolute;
bottom: 10px;
left: 50%;
transform: translateX(-50%);
display: flex;

`;

const StyledNavDots = styled.img <NavDotProps>`
    cursor : pointer ;
    position : absolute;
    bottom : 10px;

`;




export {
    StyledContainer,
    StyledImagediv,
    Styledleft,
    Styledright,
    StyledNavDots,
    StyledImageContainer,
    StyledNavDotContainer,
}
;

