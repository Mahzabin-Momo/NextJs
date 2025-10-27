import Footer from "@/components/Footer";
import Link from "next/link";

export default function Team() {
  return (
    <>


      {/* Page Header Start */}
      <div className="page-header bg-section dark-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">
                  Our team
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      our team
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Page Team Start */}
      <div className="page-team">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp">
                <div className="team-image box-bg-shape">
                  <figure>
                    <img src="images/team-1.png" alt="" />
                  </figure>
                  <div className="team-social-list">
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-readmore-btn">
                      <Link href="#">
                        <img src="images/icon-share.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="/team-single">Dr.Savannah Nguyen</Link>
                  </h3>
                  <p>Chief Dentist</p>
                </div>
              </div>
              {/* Team Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-image box-bg-shape">
                  <figure>
                    <img src="images/team-2.png" alt="" />
                  </figure>
                  <div className="team-social-list">
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-readmore-btn">
                      <Link href="#">
                        <img src="images/icon-share.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="/team-single">Dr.Theresa Webb</Link>
                  </h3>
                  <p>Implantologist</p>
                </div>
              </div>
              {/* Team Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="team-image box-bg-shape">
                  <figure>
                    <img src="images/team-3.png" alt="" />
                  </figure>
                  <div className="team-social-list">
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-readmore-btn">
                      <Link href="#">
                        <img src="images/icon-share.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="/team-single">Dr.Jenny Wilson</Link>
                  </h3>
                  <p>Pediatric Dentist</p>
                </div>
              </div>
              {/* Team Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="team-image box-bg-shape">
                  <figure>
                    <img src="images/team-4.png" alt="" />
                  </figure>
                  <div className="team-social-list">
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-readmore-btn">
                      <Link href="#">
                        <img src="images/icon-share.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="/team-single">Dr.Ronald Richards</Link>
                  </h3>
                  <p>Gum Care Specialist</p>
                </div>
              </div>
              {/* Team Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
                <div className="team-image box-bg-shape">
                  <figure>
                    <img src="images/team-5.png" alt="" />
                  </figure>
                  <div className="team-social-list">
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-readmore-btn">
                      <Link href="#">
                        <img src="images/icon-share.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="/team-single">dr.Ralph Edwards</Link>
                  </h3>
                  <p>Lead Dentist</p>
                </div>
              </div>
              {/* Team Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="1s">
                <div className="team-image box-bg-shape">
                  <figure>
                    <img src="images/team-6.png" alt="" />
                  </figure>
                  <div className="team-social-list">
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-readmore-btn">
                      <Link href="#">
                        <img src="images/icon-share.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="/team-single">Dr.Floyd Miles</Link>
                  </h3>
                  <p>Cosmetic Specialist</p>
                </div>
              </div>
              {/* Team Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="1.2s">
                <div className="team-image box-bg-shape">
                  <figure>
                    <img src="images/team-7.png" alt="" />
                  </figure>
                  <div className="team-social-list">
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-readmore-btn">
                      <Link href="#">
                        <img src="images/icon-share.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="/team-single">Dr.Kathryn Murphy</Link>
                  </h3>
                  <p>Pediatric Dentist</p>
                </div>
              </div>
              {/* Team Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="1.4s">
                <div className="team-image box-bg-shape">
                  <figure>
                    <img src="images/team-8.png" alt="" />
                  </figure>
                  <div className="team-social-list">
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-readmore-btn">
                      <Link href="#">
                        <img src="images/icon-share.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="/team-single">Dr.Arlene McCoy</Link>
                  </h3>
                  <p>teeth Specialist</p>
                </div>
              </div>
              {/* Team Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Team End */}

      <Footer />
    </>
  );
}
