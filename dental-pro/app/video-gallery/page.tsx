import Footer from "@/components/Footer";
import Link from "next/link";

export default function VideoGallery() {
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
                  Our video
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Our video
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
      {/* Page Video Gallery Start */}
      <div className="page-video-gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Video Gallery start */}
              <div className="video-gallery-image wow fadeInUp">
                <Link
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <figure>
                    <img src="images/gallery-3.jpg" alt="" />
                  </figure>
                </Link>
              </div>
              {/* Video Gallery end */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Video Gallery start */}
              <div
                className="video-gallery-image wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <Link
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <figure>
                    <img src="images/gallery-5.jpg" alt="" />
                  </figure>
                </Link>
              </div>
              {/* Video Gallery end */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Video Gallery start */}
              <div
                className="video-gallery-image wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Link
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <figure>
                    <img src="images/gallery-2.jpg" alt="" />
                  </figure>
                </Link>
              </div>
              {/* Video Gallery end */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Video Gallery start */}
              <div
                className="video-gallery-image wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <Link
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <figure>
                    <img src="images/gallery-1.jpg" alt="" />
                  </figure>
                </Link>
              </div>
              {/* Video Gallery end */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Video Gallery start */}
              <div
                className="video-gallery-image wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <Link
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <figure>
                    <img src="images/gallery-4.jpg" alt="" />
                  </figure>
                </Link>
              </div>
              {/* Video Gallery end */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Video Gallery start */}
              <div className="video-gallery-image wow fadeInUp" data-wow-delay="1s">
                <Link
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <figure>
                    <img src="images/gallery-9.jpg" alt="" />
                  </figure>
                </Link>
              </div>
              {/* Video Gallery end */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Video Gallery start */}
              <div
                className="video-gallery-image wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <Link
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <figure>
                    <img src="images/gallery-6.jpg" alt="" />
                  </figure>
                </Link>
              </div>
              {/* Video Gallery end */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Video Gallery start */}
              <div
                className="video-gallery-image wow fadeInUp"
                data-wow-delay="1.4s"
              >
                <Link
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <figure>
                    <img src="images/gallery-8.jpg" alt="" />
                  </figure>
                </Link>
              </div>
              {/* Video Gallery end */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Video Gallery start */}
              <div
                className="video-gallery-image wow fadeInUp"
                data-wow-delay="1.6s"
              >
                <Link
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <figure>
                    <img src="images/gallery-7.jpg" alt="" />
                  </figure>
                </Link>
              </div>
              {/* Video Gallery end */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Video Gallery End */}

      <Footer />
    </>
  );
}
