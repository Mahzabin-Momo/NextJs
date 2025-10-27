import Footer from "@/components/Footer";
import Link from "next/link";

export default function CaseStudySingle() {
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
                  From hesitation to...
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/case-study">case study</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      From hesitation to...
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

      {/* Page Case Study Single Start */}
      <div className="page-case-study-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* Page Single Sidebar Start */}
              <div className="page-single-sidebar">
                {/* Page Category List Start */}
                <div className="page-category-list case-study-category-list wow fadeInUp">
                  <h3>Case Study Information</h3>
                  <ul>
                    <li>
                      Category: <span>Diabetes Management</span>
                    </li>
                    <li>
                      Gender:<span>Female</span>
                    </li>
                    <li>
                      Client:<span>Amelia Thornton</span>
                    </li>
                    <li>
                      Age:<span>25 Years Old</span>
                    </li>
                    <li>
                      Cost:<span>$500.00</span>
                    </li>
                  </ul>
                </div>
                {/* Page Category List End */}
                {/* Sidebar CTA Box Start */}
                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
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
              {/* Case Study Single Content Start */}
              <div className="case-study-single-content">
                {/* Page Single image Start */}
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="images/case-study-1.jpg" alt="" />
                  </figure>
                </div>
                {/* Page Single image End */}

                {/* Case Study Entry Start */}
                <div className="case-study-entry">
                  <p className="wow fadeInUp">
                    This case study highlights how our clinic successfully
                    transformed patient care and business growth by combining
                    advanced dental treatments with a patient-first approach.
                    Facing challenges suchs as limited visibility, outdated
                    booking systems, and hesitant patients, we implemented a
                    modern strategy that included website redesign, local SEO
                    campaigns,
                  </p>
                  {/* Challenge Treatment Box Start */}
                  <div className="challenge-treatment-box">
                    <div className="challenge-treatment-image">
                      <figure className="image-anime reveal">
                        <img src="images/challenge-treatment-image.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="challenge-treatment-content">
                      <h3 className="wow fadeInUp">Challenge and Treatments</h3>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">
                        Many patients visiting Dr. Theresa Webb faced complex
                        dental issues — from untreated cavities.
                      </p>
                      <ul className="wow fadeInUp" data-wow-delay="0.4s">
                        <li>Many patient delayed necessary treatment due</li>
                        <li>Routine cleanings, fluoride treatments.</li>
                        <li>Dental implants, crowns and bridges to</li>
                        <li>Veneers teeth whitening and smile makeovers </li>
                      </ul>
                    </div>
                  </div>
                  {/* Challenge Treatment Box End */}

                  <div className="case-study-Implant-box">
                    <h2 className="text-anime-style-3">
                      Dental Implants Are the Solution For:
                    </h2>
                    <p className="wow fadeInUp">
                      At our clinic, we believe in the transformative power of
                      dental implants. Let us guide you on a personalized
                      journey to a revitalized smile and renewed confidence. Book
                      your appointment online or call{" "}
                      <Link href="tel:+7893456012">(+0) 7893456012</Link>
                    </p>
                    <div className="case-study-Implant-list wow fadeInUp" data-wow-delay="0.2s">
                      <ul>
                        <li>Regain natural-looking teeth that feel functin</li>
                        <li>Durable implants designed to last many years </li>
                        <li>Implants help maintain jawbone health facial</li>
                        <li>Eat and speak comfortably without slipping </li>
                      </ul>
                    </div>
                  </div>

                  <div className="case-study-replacement-box">
                    <h2 className="text-anime-style-3">
                      Permanent tooth replacement
                    </h2>
                    <p className="wow fadeInUp">
                      Dental implants are the most reliable and natural-looking
                      solution for missing teeth. At our clinic, we combine
                      advanced technology with personalized care to restore your
                      smile’s strength, function,.
                    </p>
                    {/* Case Study Replacement List Start */}
                    <div className="case-study-replacement-list">
                      {/* Case Study Replacement Item Start */}
                      <div
                        className="case-study-replacement-item wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div className="replacement-item-header">
                          <div className="replacement-item-title">
                            <h3>Your Bright, Healthy Smile Is Our Priority</h3>
                          </div>
                          <div className="icon-box">
                            <img src="images/icon-replacement-item-1.svg" alt="" />
                          </div>
                        </div>
                        <div className="replacement-item-content">
                          <p>
                            A clear statement emphasizing the clinic's dedication
                            to your oral health and overall well-being. We are
                            committed to providing compassionate, high-quality.
                          </p>
                        </div>
                      </div>
                      {/* Case Study Replacement Item End */}
                      {/* Case Study Replacement Item Start */}
                      <div
                        className="case-study-replacement-item wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="replacement-item-header">
                          <div className="replacement-item-title">
                            <h3>
                              Providing Trusted Care for Every Valued Patient
                            </h3>
                          </div>
                          <div className="icon-box">
                            <img src="images/icon-replacement-item-2.svg" alt="" />
                          </div>
                        </div>
                        <div className="replacement-item-content">
                          <p>
                            Highlighting our reliable and professional healthcare
                            services for patients of all ages. Your comfort,
                            trust, and safety are always at the heart of
                            everything we do.
                          </p>
                        </div>
                      </div>
                      {/* Case Study Replacement Item End */}
                    </div>
                    {/* Case Study Replacement List End */}
                  </div>
                </div>
                {/* Case Study Entry End */}

                {/* Page Single FAQs Start */}
                <div className="page-single-faqs">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      Frequently asked questions
                    </h2>
                  </div>
                  {/* Section Title End */}

                  {/* FAQ Accordion Start */}
                  <div className="faq-accordion" id="faqaccordion">
                    {/* FAQ Item Start */}
                    <div className="accordion-item wow fadeInUp">
                      <h2 className="accordion-header" id="heading1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          Q1. How often should I visit the dentist?
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading1"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Most patients benefit from a check-up every six
                            months. Regular visits help detect problems early and
                            keep your teeth and gums healthy.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}

                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <h2 className="accordion-header" id="heading2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          Q2. Are dental treatments painful?
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Most patients benefit from a check-up every six
                            months. Regular visits help detect problems early and
                            keep your teeth and gums healthy.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}

                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <h2 className="accordion-header" id="heading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          Q3. Do you accept insurance and payment plans?
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Most patients benefit from a check-up every six
                            months. Regular visits help detect problems early and
                            keep your teeth and gums healthy.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}

                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <h2 className="accordion-header" id="heading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          Q4. How do I know if I need a filling, crown, or
                          implant?
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Most patients benefit from a check-up every six
                            months. Regular visits help detect problems early and
                            keep your teeth and gums healthy.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}

                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      <h2 className="accordion-header" id="heading5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          Q5. Can children be treated at your clinic?
                        </button>
                      </h2>
                      <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading5"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Most patients benefit from a check-up every six
                            months. Regular visits help detect problems early and
                            keep your teeth and gums healthy.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                  </div>
                  {/* FAQ Accordion End */}
                </div>
                {/* Page Single FAQs End */}
              </div>
              {/* Case Study Single Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Case Study Single End */}

      <Footer />
    </>
  );
}
