import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    alt: "HTML",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    alt: "CSS",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    alt: "Bootstrap",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    alt: "SCSS",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    alt: "Git",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Github-logo.svg",
    alt: "GitHub",
  },
];

const Slider = () => {
  return (
    <div className="w-full flex justify-center p-5">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-3/4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-24 h-24 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
