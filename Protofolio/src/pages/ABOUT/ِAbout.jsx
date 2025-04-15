import "./About.css";
import pic from "../../../public/img/po.jpg";
import Header from "../../components/Header/Header";


const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="container">
          <div className="pic-eng ">
            <img src={pic} alt="pic" />
          </div>
          <div className="contentAbout">
            <h3>
              I am <span>Yousef Ismail</span>
            </h3>
            <p>
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <ul>
              <li>
                <b>Full Name : </b> yousef ismail
              </li>
              <li>
                <b>Age : </b> 25 Years
              </li>
              <li>
                <b>Nationality : </b> Palestine
              </li>
              <li>
                <b>Languages : </b> English, Arabic
              </li>
              <li>
                <b>Address : </b> Palestine, Gaza, Nuseirat City
              </li>
              <li>
                <b>Freelance : </b> Available
              </li>
              <a href="#">Download CV</a>
            </ul>
          </div>
        </div>
        <div className="servses">
            <h3>Servses</h3>
          <div className="container">
            <div className="boxses">
              <div className="box">
                <i class="fa-solid fa-palette"></i>
                <h5> Web Disgen</h5>
                <p>
                  Attractive and professional website design with color
                  coordination
                </p>
              </div>
              <div className="box">
                <i class="fa-solid fa-code"></i>
                <h5>Web Development</h5>
                <p>
                  Website programming and using the library to make the site
                  faster and responsive
                </p>
              </div>
              <div className="box">
                <i class="fa-solid fa-mobile-screen"></i>
                <h5>Mobile Application</h5>
                <p>
                  Convert your website into a mobile app for ease of use, speed
                  of opening and searching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
      
}

export default About;