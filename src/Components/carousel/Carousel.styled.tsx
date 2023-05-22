import styled from 'styled-components';
import { ImageComponent , SliderProps } from './Carousel.model';

const StyledContainer = styled.div`
    
`;

const StyledImagediv = styled.div`
display : flex;
justify-content: center;
flex-direction:row;
`;

const Styledleft = styled.img<SliderProps>`
cursor:pointer;
   `;

const Styledright = styled.img <SliderProps>`
cursor:pointer;
`;

const StyledNavDots = styled.img`

`;
const StyledImageContainer = styled.div <SliderProps> `
    background-color: cyan;
    width:80%;
    height:400px; 
`;
const ImageComponents = styled.img<ImageComponent>`

`;


export {
    StyledContainer,
    StyledImagediv,
    Styledleft,
    Styledright,
    StyledNavDots,
    StyledImageContainer,
    ImageComponents
}


