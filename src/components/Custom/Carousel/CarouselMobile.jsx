import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { brands } from "../../../data/brands_data.json";
import "./slick.css";

const Carousel = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    vertical: false,
    rows: 6,
  };

  return (
    <>
      <Slider className="pt-[52px] top-8" {...settings}>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="!flex !flex-row !items-center !justify-center !gap-3 border border-gray rounded-[10px] !px-8 !py-4  !h-[92px]"
          >
            <img src={brand.image} alt={brand.brand} />
            <p className="text-white text-[22px]">{brand.brand}</p>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
