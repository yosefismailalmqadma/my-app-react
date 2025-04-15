import "./Resume.css";
import Header from "../../components/Header/Header";

const Resume = () => {
    return (
      <>
        <Header />
        <div className="Resume">
          <div className="container">
            <div className="resume-content">
              <h1>My Skills</h1>
            </div>
            <div className="Skills">
              <div className="skill-box">
                <h2>HTML5</h2>
                <p>90%</p>
                <div className="skill-bar">
                  <span className="bar" style={{ width: "90%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <h2>Css5</h2>
                <p>95%</p>
                <div className="skill-bar">
                  <span className="bar" style={{ width: "95%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <h2>Javascript</h2>
                <p>80%</p>
                <div className="skill-bar">
                  <span className="bar" style={{ width: "80%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <h2>Bootstrap</h2>
                <p>90%</p>
                <div className="skill-bar">
                  <span className="bar" style={{ width: "90%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <h2>React js</h2>
                <p>95%</p>
                <div className="skill-bar">
                  <span className="bar" style={{ width: "95%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <h2>Scss</h2>
                <p>80%</p>
                <div className="skill-bar">
                  <span className="bar" style={{ width: "90%" }}></span>
                </div>
              </div>
            </div>

            <div className="experience-section">
              <h1>Working Experience</h1>
              <div className="timeline">
                <div className="timeline-item left">
                  <div className="timeline-content">
                    <h3>Frontend Developer</h3>
                    <h4>Middel Ware (Egypt) - 2024 to Present</h4>
                    <p>
                      - Developed responsive web applications using React.js -
                      Implemented modern UI/UX designs - Collaborated with
                      backend developers - Optimized application performance
                    </p>
                  </div>
                </div>

                <div className="timeline-item right">
                  <div className="timeline-content">
                    <h3>Junior Web Developer</h3>
                    <h4>ِAl Hems (Gaza) - 2020 to 2022</h4>
                    <p>
                      - Built and maintained websites using HTML, CSS, and
                      JavaScript - Worked on cross-browser compatibility -
                      Implemented responsive designs - Assisted in debugging and
                      testing
                    </p>
                  </div>
                </div>

                <div className="timeline-item left">
                  <div className="timeline-content">
                    <h3>Web Design Intern</h3>
                    <h4>Palestine University - 2019 to 2024</h4>
                    <p>
                      - Created website layouts and user interfaces - Learned
                      modern web development practices - Worked with design
                      tools like Figma - Participated in team projects
                    </p>
                  </div>
                </div>
                <div className="timeline-item right">
                  <div className="timeline-content">
                    <h3>Studies </h3>
                    <h4>ِPalestine University (Gaza) - 2019 to 2024</h4>
                    <p>
                      Bachelor's degree in Information Technology and a Diploma
                      in Multimedia and Design. I hold several certificates, and
                      I have studied design and programming year after year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Resume;