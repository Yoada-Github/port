import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../component/Navbar"; 
import img1 from "../assets/img/Screenshot (264).png"
import img2 from "../assets/img/Screenshot (265).png"
import img3 from "../assets/img/Screenshot (266).png"
import img4 from "../assets/img/screenshot.png"

function Project() {
  return (
    <div>
      <Navbar/>  
      <section className="portfolio section light-background">
        <div className="container" data-aos="fade-up">
          <h2>Projects</h2>
          <p>
            Explore a showcase of my full stack development projects,
            demonstrating my ability to create dynamic and scalable web
            applications. From designing responsive user interfaces to building
            robust back-end systems, these projects highlight my expertise in
            crafting end-to-end solutions using modern technologies.
          </p>
        </div>

        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order" >
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Projects</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200" >
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <img src={img1} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>
                      This project uses a video background for the website. It
                      is done using CSS.
                    </p>
                    <Link to="assets/img/Screenshot (264).png" title="App 1" data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </Link>
                    <Link to="https://yoada-github.github.io/web/main.html" title="More Details"
                      className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <img src={img2} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>
                      This project is done using CSS. It contains different
                      website pages.
                    </p>
                    <Link to="assets/img/Screenshot (265).png" title="App 2" data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </Link>
                    <Link to="https://yoada-github.github.io/flexbox/Home.html" title="More Details"
                      className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <img
                    src={img3}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>
                      Bootstrap, a new and short website development method, is
                      applied to do this project.
                    </p>
                    <Link to="assets/img/Screenshot (266).png" title="App 3" data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </Link>
                    <Link to="https://yoada-github.github.io/Bootstrap1/lab-1/lab1.html" title="More Details"
                      className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <img src={img4} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 4</h4>
                    <p>
                      It's built with default bootstrap components and utilities
                      with little customization.
                    </p>
                    <Link href="assets/img/screenshot.png" title="App 3" data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link">
                        <i className="bi bi-zoom-in"></i>
                    </Link>
                    <Link to="https://yoada-github.github.io/bootpage/lab-6" title="More Details" className="details-link" >
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
