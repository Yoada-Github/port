import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../component/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <section className="contact section bg-light py-4">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div className="info-item d-flex p-2 m-3" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="info-item d-flex p-2 m-3" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call</h3>
                    <p>+251 955693305</p>
                  </div>
                </div>

                <div className="info-item d-flex p-2 m-3" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>yosephadane63@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-2" data-aos="fade-up" data-aos-delay="500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199407.6654563547!2d38.6310455!3d9.0083937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853387157e63%3A0xa013e9d520f96ea4!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1692889783546!5m2!1sen!2sus"
                  style={{ border: "0", width: "100%", height: "270px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="col-lg-7">
              <form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">Your Name</label>
                    <input type="text" name="name" id="name-field" className="form-control rounded" required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">Your Email</label>
                    <input type="email" className="form-control rounded" name="email" id="email-field" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">Subject</label>
                    <input type="text" className="form-control rounded" name="subject" id="subject-field" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">Message</label>
                    <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
