import React, { useState } from "react";
import "./Portfolios.css";
import Header from "../../components/Header/Header";


const Portfolio = () => {
  // قائمة الصور مع مساراتها وعناوينها
  const images = [
    { id: 1, src: "/public/img/Portfolios/Group 144.jpg", alt: "صورة 1" },
    { id: 2, src: "/public/img/Portfolios/Group 145.jpg", alt: "صورة 2" },
    { id: 3, src: "/public/img/Portfolios/Group 2.jpg", alt: "صورة 3" },
    { id: 4, src: "/public/img/Portfolios/Group 242.jpg", alt: "صورة 4" },
    { id: 5, src: "/public/img/Portfolios/Group 243.jpg", alt: "صورة 5" },
    { id: 6, src: "/public/img/Portfolios/Group 4.jpg", alt: "صورة 6" },
    { id: 7, src: "/public/img/Portfolios/Group 6.jpg", alt: "صورة 7" },
    {
      id: 8,
      src: "/public/img/Portfolios/Product View – 1.jpg",
      alt: "صورة 8",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null); // حالة الصورة المختارة للتكبير
  const [showImg, setShowImg] = useState(4); // عدد الصور التي سيتم عرضها
  const [headerVisible] = useState(true); // حالة الـ Header (مرئي أم لا)

  // دالة لفتح الصورة
  const openImage = (src) => {
    setSelectedImage(src);
  };

  // دالة لإغلاق الصورة
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="portfolio-container">
        {/* التعديل التلقائي للمحتوى عند إغلاق الـ Header */}
        {headerVisible && <Header />}
        <div
          className="main-content"
          style={{ marginLeft: headerVisible ? "250px" : "0" }}
        >
          <h1>Portfolios</h1>

          {/* قسم عرض الصور */}
          <div className="image-gallery">
            {images.slice(0, showImg).map((image) => (
              <div key={image.id} className="image-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="image"
                  onClick={() => openImage(image.src)}
                />
                <div className="view-icon">
                  <i className="fas fa-search-plus"></i>{" "}
                </div>
              </div>
            ))}
          </div>

          {/* زر "عرض المزيد" */}
          {showImg < images.length && (
            <button
              className="showMore"
              onClick={() => setShowImg(showImg + 4)}
            >
              Show More
            </button>
          )}
        </div>

        {/* عرض الصورة المكبرة */}
        {selectedImage && (
          <div className="modal" onClick={closeImage}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="مكبرة" className="modal-image" />
              <button className="close-btn" onClick={closeImage}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
