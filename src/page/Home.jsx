import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Typed from "typed.js";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["UI/UX Designer", "MERN-Stack Developer", "Freelancer"],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home container-fluid p-0">
      <Navbar />
      <section id="hero" className="hero text-center py-0 d-flex flex-column " >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h2 className="fw-bold display-4">Yoseph Adane</h2>
          <p className="fs-4 mt-3 ">
            I'm <span id="typed-text" className="fw-bold text-dark">Full-Stack Developer</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-4">
            <Link to="/project" className="fw-bold btn btn-light btn-lg mx-2 shadow-sm">
              View My Work
            </Link>
            <Link to="/contact" className=" fw-bold btn btn-outline-light btn-lg mx-2">
              Hire Me
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="mt-4 social-links">
            <Link to="https://github.com/Yoada-Github" className="mx-2 fs-3">
              <i className=" bi bi-github" style={{color:"rgb(3, 3, 4)"}}></i>
            </Link>
            <Link to="https://www.linkedin.com/in/yoseph-adane-514296260/" className="text-white mx-2 fs-3">
              <i className="bi bi-linkedin" style={{color:"rgb(0, 119, 181)"}}></i>
            </Link>
            <Link to="https://twitter.com" className="text-white mx-2 fs-3">
              <i className="bi bi-facebook" style={{color:"rgb(9, 13, 222)"}}></i>
            </Link>
            <Link to="https://twitter.com" className="text-white mx-2 fs-3">
              <i className="bi bi-instagram" style={{color:"rgb(228, 64, 95)"}}></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
