"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="main-header">
      <div className="header-sticky bg-section">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand" href="/">
              <img src="images/logo.svg" alt="Logo" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* Right-side button */}
              <div className="d-flex">
                <Link href="/book-appointment" className="btn btn-primary">
                  Make An Appointment
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
