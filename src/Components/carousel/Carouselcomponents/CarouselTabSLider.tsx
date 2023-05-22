import React from "react";
import { ImageComponent } from "../Carousel.model";
interface SliderProps {
  response: ImageComponent[]; 
}

const Slider: React.FC<SliderProps> = ({ response }) => {
  return (
    <div>
      {response.map((image) => (
        <img key={image.id} src={image.imagesrc} alt="Slider Image" />
      ))}
    </div>
  );
};

export default Slider;
