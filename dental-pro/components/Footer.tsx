"use client"; // This is a client component

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer bg-section dark-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            {/* Footer About Start */}
            <div className="footer-about">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <img src="images/footer-logo.svg" alt="" />
              </div>
              {/* Footer Logo End */}
              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>
                  Comprehensive dental services, confident smiles through,
                  personalized care.
                </p>
              </div>
              {/* About Footer Content End */}
              {/* Footer Social Link Start */}
              <div className="footer-social-links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer Social Link End */}
            </div>
            {/* Footer About End */}
          </div>
          <div className="col-xl-8">
            {/* Footer Links Box Start */}
            <div className="footer-links-box">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>quick links</h3>
                <ul>
                  <li>
                    <Link href="/index-2">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/book-appointment">Appointment</Link>
                  </li>
                </ul>
              </div>
              {/* Footer Links End */}
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>Support</h3>
                <ul>
                  <li>
                    <Link href="#">Help</Link>
                  </li>
                  <li>
                    <Link href="#">Term's &amp; Condition </Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* Footer Links End */}
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>Our Services</h3>
                <ul>
                  <li>
                    <Link href="/service-single">Pediatric Dentistry</Link>
                  </li>
                  <li>
                    <Link href="/service-single">Orthodontics</Link>
                  </li>
                  <li>
                    <Link href="/service-single">Preventive Dentistry</Link>
                  </li>
                  <li>
                    <Link href="/service-single">Cosmetic Dentistry</Link>
                  </li>
                </ul>
              </div>
              {/* Footer Links End */}
              {/* Footer Links Start */}
              <div className="footer-links footer-contact-links">
                <h3>Contact Us</h3>
                {/* Footer Contact Box Start */}
                <div className="footer-contact-box">
                  <div className="footer-contact-box-title">
                    <h3>
                      <a href="mailto:Domain@gmail.com">domain@gmail.com</a>
                    </h3>
                    <h3>
                      <a href="tel:789345601">(+0) 789345601</a>
                    </h3>
                  </div>
                  <div className="footer-contact-box-hour">
                    <p>
                      Mon to Sat: <span>9AM to 9PM </span>
                    </p>
                  </div>
                </div>
                {/* Footer Contact Box End */}
              </div>
              {/* Footer Links End */}
            </div>
            {/* Footer Links Box End */}
          </div>

          <div className="col-lg-12">
            {/* Footer Copyright Text Start */}
            <div className="footer-copyright-text">
              <p>Copyright © 2025 All Rights Reserved.</p>
            </div>
            {/* Footer Copyright Text End */}
          </div>
        </div>
      </div>
    </footer>
  );
}
