import Home from "./pages/HOME/Home"
import Header from "./components/Header/Header"
import About from "./pages/ABOUT/ِAbout"
import Portfolios from "./pages/PORTFOLIOS/Portfolios";
import Resume from "./pages/RESUME/Resume";
import Contact from "./pages/CONTACT/Contact"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ABOUT" element={<About />} />
        <Route path="/PORTFOLIOS" element={<Portfolios />} />
        <Route path="/RESUME" element={<Resume />} />
        <Route path="/CONTACT" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App
