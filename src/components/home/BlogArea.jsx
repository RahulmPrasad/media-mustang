import Link from "next/link";

export default function BlogArea() {
  return (
    <div className="rts-blog-area shape-position rts-section-gap bg-dark-p border-radious-top-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-one-center">
              <span className="pre skew-up">Our Blog</span>
              <h2 className="title skew-up">Recent from our blog</h2>
            </div>
          </div>
        </div>
        <div className="row g-48 mt--0">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-blog-area-style-one">
              <a href="#" className="thumbnail">
                <img src="/assets/images/blog/01.png" alt="blog-image" />
              </a>
              <div className="inner-content-wrapper">
                <a href="#">
                  <h6 className="title">Which tool seems the best for content writing strategy?</h6>
                </a>
                <div className="bottom-area">
                  <span className="admin">Amir Nisi</span>
                  {" "}
                  <span className="date">• 25 October, 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-blog-area-style-one">
              <a href="#" className="thumbnail">
                <img src="/assets/images/blog/02.png" alt="blog-image" />
              </a>
              <div className="inner-content-wrapper">
                <a href="#">
                  <h6 className="title">Getting eyeballs on what you write for a business is tricky</h6>
                </a>
                <div className="bottom-area">
                  <span className="admin">Amir Nisi</span>
                  {" "}
                  <span className="date">• 25 October, 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-blog-area-style-one">
              <a href="#" className="thumbnail">
                <img src="/assets/images/blog/03.png" alt="blog-image" />
              </a>
              <div className="inner-content-wrapper">
                <a href="#">
                  <h6 className="title">More than just buzzwords for marketing concepts of SEO</h6>
                </a>
                <div className="bottom-area">
                  <span className="admin">Amir Nisi</span>
                  {" "}
                  <span className="date">• 25 October, 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12  text-center">
            <Link href="/blog" className="rts-btn btn-primary-border text-center m-auto">View more articles</Link>
          </div>
        </div>
      </div>
      <div className="shape-area">
        <img src="/assets/images/blog/shape/01.png" alt="marketing" className="one" />
        {" "}
        <img src="/assets/images/blog/shape/02.png" alt="marketing" className="two" />
        {" "}
        <img src="/assets/images/blog/shape/03.png" alt="marketing" className="three" />
        {" "}
        <img src="/assets/images/blog/shape/04.png" alt="marketing" className="four" />
      </div>
    </div>
  );
}
