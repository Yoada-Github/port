import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaBars, FaTimes } from "react-icons/fa";
import img from "../assets/img/Y.jpg";
import { Button } from "react-bootstrap";

function Navlink() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <Button className="position-fixed top-0 start-0 my-3 mx-3 bg-primary rounded-circle border-0 shadow-lg"
        onClick={toggleNavbar} style={{ zIndex: "1050", width: "45px", height: "45px" }}>
        {isOpen ? <FaTimes className="text-white fs-5" /> : <FaBars className="text-white fs-5" />}
      </Button>
      <div className={`sidebar bg-dark text-white p-4 ${isOpen ? "open" : ""}`}>
        <div className="text-center mb-3">
          <img src={img} alt="Profile" className="img-fluid rounded-circle border border-light" width="100" />
          <h4 className="mt-2 text-white">Yoseph Adane</h4>
        </div>
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <i className="bi bi-house"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                <i className="bi bi-person"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skill" className="nav-link text-white">
                <i className="bi bi-bar-chart"></i> Skill
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link text-white">
                <i className="bi bi-file-earmark-text"></i> Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link text-white">
                <i className="bi bi-images"></i> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                <i className="bi bi-envelope"></i> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && <div className="overlay" onClick={toggleNavbar}></div>}

      <style>
        {`
          .sidebar {
            position: fixed;
            top: 0;
            left: -250px;
            height: 100%;
            width: 250px;
            transition: left 0.3s ease-in-out;
            box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.3);
            z-index: 1040;
          }

          .sidebar.open {
            left: 0;
          }

          .nav-link {
            padding: 10px;
            transition: all 0.3s ease-in-out;
          }

          .nav-link:hover {
            background-color:lightblue;
            border-radius: 5px;
          }

          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0);
            z-index: 1030;
          }
        `}
      </style>
    </>
  );
}

export default Navlink;

