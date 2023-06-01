import { useState } from "react";
import RightArrow from "../../assets/images/arrow-right.svg";
import LeftArrow from "../../assets/images/arrow-left-circle.svg";
import NavDot from "../../assets/images/Ellipse 18.svg";
import data from "../../../mock/db.json";

import {
  StyledContainer,
  StyledImagediv,
  Styledleft,
  Styledright,
  StyledNavDots,
  StyledImageContainer,
  StyledNavDotContainer
} from "./Carousel.styled";

const ImageSlider = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClicks = () => {
    setIsClicked(!isClicked);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.carousel.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === data.carousel.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (imageIndex: number) => {
    setCurrentIndex(imageIndex);
  };

  return (
    <StyledContainer>
      <StyledImagediv>
        <Styledleft
          isClicked={isClicked}
          onClick={goToPrevious}
          src={LeftArrow}
          alt="Left Arrow"
        />
        <StyledImageContainer
          isClicked={isClicked}
          style={{
            backgroundImage: `url(${data.carousel[currentIndex].image})`,
          }}
        >
          <StyledNavDotContainer>
            {data.carousel.map((item, index) => (
              <StyledNavDots
                key={index}
                onClick={() => goToSlide(index)}
                src={NavDot}
                alt={`Navigation Dot ${index + 1}`}
                active={index === currentIndex ? 1 : 0}
              />
            ))}
          </StyledNavDotContainer>
        </StyledImageContainer>
        <Styledright
          isClicked={isClicked}
          onClick={goToNext}
          src={RightArrow}
          alt="Right Arrow"
        />
      </StyledImagediv>
    </StyledContainer>
  );
};

export default ImageSlider;
