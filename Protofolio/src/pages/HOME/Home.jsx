import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import bacground from "../../../public/img/bbbbbbbb.mp4";
import Header from "../../components/Header/Header"; // استيراد Header

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
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    alt: "GitHub",
  },
];

const Slider = () => {
  return (
    <div className="sliderr w-full flex justify-center p-1">
      <Swiper
        spaceBetween={10}
        slidesPerView={7}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-1/4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-5 h-5 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Home = () => {
  return (
    <>
      {/* إضافة Header في أعلى الصفحة */}
      {/* <Header /> */}
      <Header />
      <div className="Home">
        <video autoPlay loop muted className="background-video">
          <source src={bacground} type="video/mp4" />
        </video>
        <div className="container">
          <div className="content">
            <h1>
              Hi, I am <span>Yousef Ismail</span>
            </h1>
            <p>
              "I deliver professional digital solutions with pixel-perfect design and clean, high-quality code. Using the React framework, I build smooth and interactive user interfaces, ensuring an exceptional user experience."
              
            </p>
            <div className="contact-us">
              <a href="https://www.facebook.com/share/15rSfGzFh3/?mibextid=wwXIfr">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/yosef-almaqadma-b88727283/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/yosefismailalmqadma">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* عرض السلايدر هنا */}
      <Slider />
    </>
  );
};

export default Home;
