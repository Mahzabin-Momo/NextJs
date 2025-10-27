import Footer from "@/components/Footer";
import Link from "next/link";

export default function Faqs() {
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
                  Frequently asked questions
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      FAQs
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

      {/* Page Faqs Start */}
      <div className="page-faqs">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* Page Single Sidebar Start */}
              <div className="page-single-sidebar">
                {/* Page Category List Start */}
                <div className="page-category-list wow fadeInUp">
                  <ul>
                    <li>
                      <Link href="#faq_1">General Information</Link>
                    </li>
                    <li>
                      <Link href="#faq_2">Preventive Care</Link>
                    </li>
                    <li>
                      <Link href="#faq_3">Cosmetic Dentistry</Link>
                    </li>
                    <li>
                      <Link href="#faq_4">Restorative Dentistry</Link>
                    </li>
                  </ul>
                </div>
                {/* Page Category List End */}
                {/* Sidebar CTA Box Start */}
                <div
                  className="sidebar-cta-box wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Sidebar CTA Header Start */}
                  <div className="sidebar-cta-header">
                    <img src="images/icon-clock-white.svg" alt="" />
                    <h3>Working Hours :</h3>
                  </div>
                  {/* Sidebar CTA Header End */}
                  {/* Sidebar CTA Body Start */}
                  <div className="sidebar-cta-body">
                    {/* Sidebar CTA List Start */}
                    <div className="sidebar-cta-list">
                      <ul>
                        <li>
                          Monday - Friday: <span>8AM - 7PM</span>
                        </li>
                        <li>
                          Saturday: <span>8AM - 5PM</span>
                        </li>
                        <li>
                          Sunday: <span>Closed</span>
                        </li>
                      </ul>
                    </div>
                    {/* Sidebar CTA List End */}
                    {/* Sidebar CTA Button Start */}
                    <div className="sidebar-cta-btn">
                      <Link href="/book-appointment" className="btn-default">
                        Make an Appointment
                      </Link>
                    </div>
                    {/* Sidebar CTA Button End */}
                  </div>
                  {/* Sidebar CTA Body End */}
                </div>
                {/* Sidebar CTA Box End */}
              </div>
              {/* Page Single Sidebar End */}
            </div>

            <div className="col-lg-8">
              {/* Page FAQs Catagery Start */}
              <div className="page-faqs-catagery">
                {/* FAQs section start */}
                <div className="page-single-faqs" id="faq_1">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      General information
                    </h2>
                  </div>
                  {/* FAQ Accordion Start */}
                  <div className="faq-accordion our-faq-accordion" id="accordion">
                    {/* FAQ items … */}
                  </div>
                  {/* FAQ Accordion End */}
                </div>
                {/* FAQs section End */}
              </div>
              {/* Page FAQs Catagery End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Faqs End */}

      <Footer />
    </>
  );
}
