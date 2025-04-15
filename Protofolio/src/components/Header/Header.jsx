import "./Header.css";
import React, { useState, useEffect } from "react";
import imgPortfolios from "../../../public/img/IMG-20250318-WA0007.jpg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // القائمة مغلقة بشكل افتراضي على الشاشات الصغيرة
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200); // التحقق من حجم الشاشة
  const location = useLocation();

  // دالة لتبديل حالة الـ menu (فتح وإغلاق)
  const toggleMenu = () => setIsOpen(!isOpen);

  // دالة لمراقبة تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1200); // تغيير الحجم للـ 1200px
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // دالة لمراقبة التمرير (scroll) لإخفاء الـ menu عند التمرير للأسفل
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* زر الفتح والإغلاق يظهر فقط في الشاشات الصغيرة */}
      {isMobile && (
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          style={{ left: isOpen ? "246px" : "10px" }}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      )}

      {/* القائمة الجانبية */}
      <div className={`Header ${isOpen || !isMobile ? "open" : "closed"}`}>
        <div className="img-portfolios">
          <img src={imgPortfolios} alt="Profile" />
        </div>

        {/* قائمة الروابط */}
        <ul className="nav-menu">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/ABOUT" ? "active" : ""}>
            <Link to="/ABOUT">About</Link>
          </li>
          <li className={location.pathname === "/PORTFOLIOS" ? "active" : ""}>
            <Link to="/PORTFOLIOS">Portfolios</Link>
          </li>
          <li className={location.pathname === "/RESUME" ? "active" : ""}>
            <Link to="/RESUME">Resume</Link>
          </li>
          <li className={location.pathname === "/CONTACT" ? "active" : ""}>
            <Link to="/CONTACT">Contact</Link>
          </li>
        </ul>

        {/* حقوق الطبع والنشر */}
        <div className="copyright">
          <p>
            &copy; 2025 <span>Yousef Ismail</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
