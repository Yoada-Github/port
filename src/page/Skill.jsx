import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../component/Navbar";
import imges from "../assets/images.png";
import css from "../assets/CSS.svg";
import js from "../assets/images (1).png";
import react from "../assets/react.svg";
import node from "../assets/Node.js_logo.svg.png";
import next from "../assets/nextjs.png";
import photoshop from "../assets/ps.png";
import mongodb from "../assets/mongodb.webp";
import tailwind from "../assets/tailwindcss.png";
import express from "../assets/express-logo.png";

function Skill() {
  return (
    <div>
      <Navbar />
      <section className="skills py-5 bg-light text-dark">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold">My Skills</h2>
          <p className="mb-4">
            I specialize in <strong>front-end</strong> and <strong>back-end development</strong> , working with various technologies to build seamless user experiences and functional applications.
          </p>
        </div>

        {/* Scrollable Skill Section */}
        <div className="container skill-container">
          <div className="row justify-content-center text-center">
            {[
              { src: imges, alt: "HTML" },
              { src: css, alt: "CSS" },
              { src: js, alt: "JavaScript" },
              { src: react, alt: "React" },
              { src: node, alt: "Node.js" },
              { src: next, alt: "Next.js" },
              { src: tailwind, alt: "Tailwind CSS" },
              { src: mongodb, alt: "MongoDB" },
              { src: express, alt: "Express.js" },
              { src: photoshop, alt: "Photoshop" }
            ].map((skill, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                <div className="skill-card">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="skill-icon"
                  />
                  <p className="mt-2 fw-medium">{skill.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .skill-container {
          height:100vh; 
          overflow-y: auto; /* Scrollable when content overflows */
          padding: 10px;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
          background: white;
          border-radius: 10px;
          box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          cursor: pointer;
        }

        .skill-card:hover {
          transform: scale(1.1);
          box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.2);
        }

        .skill-icon {
          width: 80px;
          height: 80px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid #ddd;
          padding: 8px;
          background: #f8f9fa;
        }

        @media (max-width: 768px) {
          .skill-container {
          height:500px; 
          overflow-y: auto; /* Scrollable when content overflows */
          padding: 10px;
        }
          .skill-icon {
            width: 70px;
            height: 70px;
          }
          .skill-card {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default Skill;
