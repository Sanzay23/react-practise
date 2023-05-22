import {
  StyledImagediv,
  StyledContainer,
  Styledleft,
  Styledright,
  StyledNavDots,
  StyledImageContainer,
} from "../carousel/Carousel.styled";
import React, { useState } from "react";
import RightArrow from "../../assets/images/arrow-right.svg";
import LeftArrow from "../../assets/images/arrow-left-circle.svg";
import navdot from "../../assets/images/circle.svg";

const ImageSlider: React.FunctionComponent = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicks = () => {
    setIsClicked(!isClicked);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? CarouselImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === CarouselImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (imageIndex: number) => {
    setCurrentIndex(imageIndex);
  };

  return (
    <StyledContainer>
      <StyledImagediv>
        <Styledleft isClicked={isClicked} onClick={goToPrevious} src={LeftArrow} />
        <StyledImageContainer
          isClicked={isClicked}
          style={{ backgroundImage: `url(${CarouselImages[currentIndex]})` }}
        >
          <StyledNavDots onClick={handleClicks} src={navdot} key={currentIndex} />
        </StyledImageContainer>
        <Styledright isClicked={isClicked} onClick={goToNext} src={RightArrow} />
      </StyledImagediv>
    </StyledContainer>
  );
};

export default ImageSlider;
