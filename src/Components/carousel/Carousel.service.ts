import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ImageComponent } from "./Carousel.model";

const useImageSlider = () => {
  const fetchImageSliders = () =>
    axios.get<ImageComponent[]>("http://localhost:3000/carousel").then((response) => response.data);

  return useQuery<ImageComponent[], Error[]>(["imageSlider"], fetchImageSliders);
};

export default useImageSlider;
