import { galleryImages, academy, exploration, kids, women, horses } from "../consts";
import CommonCarousel from "./reusableComponents/commonCarousel.jsx";

const Photos = () => {
  return (
    <>
      <CommonCarousel title="Glimpses of Academy" images={academy} />
      <CommonCarousel title="Exploration Trails" images={exploration} />
      <CommonCarousel title="Horses" images={horses} />
      {/* <CommonCarousel title="Kids" images={kids} />
      <CommonCarousel title="Women" images={women} /> */}
    </>
  );
};

export default Photos;
