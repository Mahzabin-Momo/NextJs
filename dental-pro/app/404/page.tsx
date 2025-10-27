import Footer from "@/components/Footer";
import Link from "next/link";

export default function Custom404() {
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
                  Page Not Found
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      404 page not found
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
      {/* error Page start */}
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-page-image wow fadeInUp">
                <img src="images/404-error-img.png" alt="" />
              </div>
              <div className="error-page-content">
                <div className="section-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Oops! page not found
                  </h2>
                </div>
                <div className="error-page-content-body">
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    The page you are looking for does not exist.
                  </p>
                  <Link
                    className="btn-default wow fadeInUp"
                    data-wow-delay="0.4s"
                    href="/"
                  >
                    back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* error Page end */}

      <Footer />
    </>
  );
}
