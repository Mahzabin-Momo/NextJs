import Footer from "@/components/Footer";
import Link from "next/link";

export default function TeamSingle() {
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
                  Dr. theresa webb
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/team">team</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dr. theresa webb
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

      {/* Page Team Single Start */}
      <div className="page-team-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* Page Single Sidebar Start */}
              <div className="page-single-sidebar">
                {/* Team Single Image Start */}
                <div className="team-single-image wow fadeInUp">
                  <figure>
                    <img src="images/team-2.png" alt="" />
                  </figure>
                </div>
                {/* Team Single Image End */}
                {/* Sidebar CTA Box Start */}
                <div
                  className="sidebar-cta-box team-sidebar-cta wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  {/* Sidebar CTA Header Start */}
                  <div className="sidebar-cta-header">
                    <h3>Education &amp; Experince</h3>
                  </div>
                  {/* Sidebar CTA Header End */}
                  {/* Sidebar CTA Body Start */}
                  <div className="sidebar-cta-body">
                    {/* Sidebar CTA List Start */}
                    <div className="sidebar-cta-list">
                      <ul>
                        <li>
                          <span>
                            <img src="images/icon-team-sidebar-cta-1.svg" alt="" />
                            Education:{" "}
                          </span>
                          Master of Dental
                        </li>
                        <li>
                          <span>
                            <img src="images/icon-team-sidebar-cta-2.svg" alt="" />
                            Certification:{" "}
                          </span>
                          Implantology
                        </li>
                        <li>
                          <span>
                            <img src="images/icon-team-sidebar-cta-3.svg" alt="" />
                            Expertise:{" "}
                          </span>
                          Cosmetic Dentistry
                        </li>
                        <li>
                          <span>
                            <img src="images/icon-team-sidebar-cta-4.svg" alt="" />
                            Years Of Practice:{" "}
                          </span>{" "}
                          20+
                        </li>
                      </ul>
                    </div>
                    {/* Sidebar CTA List End */}
                  </div>
                  {/* Sidebar CTA Body End */}
                </div>
                {/* Sidebar CTA Box End */}
              </div>
              {/* Page Sidebar End */}
            </div>

            <div className="col-lg-8">
              {/* Team Single Content Start */}
              <div className="team-single-content">
                {/* Team Member About Start */}
                <div className="team-member-about">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      About me
                    </h2>
                    <p className="wow fadeInUp">
                      Dr. Theresa Webb is a highly skilled and compassionate
                      dentist with over a decade of experience in providing
                      comprehensive dental care. She specializes in preventive,
                      cosmetic, and restorative dentistry, helping patients
                      achieve healthy, confident smiles. Known for her gentle
                      approach and attention detail.
                    </p>
                  </div>
                  {/* Section Title End */}
                  {/* Member About Counters Start */}
                  <div className="member-about-counters">
                    {/* Counter items ... */}
                  </div>
                  {/* Member About Counters End */}
                  {/* Member Social List Start */}
                  <div
                    className="member-social-list wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <h3>Social Info:</h3>
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
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
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Member Social List End */}
                </div>
                {/* Team Member About End */}

                {/* ... your other sections (bio, treatment, skills, contact form) ... */}

              </div>
              {/* Team Single Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Team Single End */}

      <Footer />
    </>
  );
}
