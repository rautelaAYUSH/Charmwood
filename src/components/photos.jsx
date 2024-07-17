import { galleryImages } from "../consts";
import CommonCarousel from "./reusableComponents/commonCarousel.jsx";

const Photos = () => {
  return (
    <>
      <CommonCarousel title="Glimpses of Academy" images={galleryImages} />
      <CommonCarousel title="Glimpses of Academy" images={galleryImages} />
      <CommonCarousel title="Glimpses of Academy" images={galleryImages} />
    </>
  );
};

export default Photos;
