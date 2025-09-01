import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import slider1 from "../../../assets/images/Banners/slider1.jpg";
import slider2 from "../../../assets/images/Banners/slider2.jpg";
import slider3 from "../../../assets/images/Banners/slider3.png";
import slider4 from "../../../assets/images/Banners/slider4.png";
import slider5 from "../../../assets/images/Banners/slider5.png";
export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  );
};

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const banners = [slider1, slider2, slider3, slider4, slider5];

  return (
    <>
      <section className="h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden">
        <Slider {...settings}>
          {banners.map((el, i) => (
            <img
              draggable="false"
              className="h-44 sm:h-72 w-full object-cover"
              src={el}
              alt="banner"
              key={i}
            />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
