import Link from "next/link";

export default function RecentBlog() {
  return (
    <div className="rts-section-gap rts-blog-area-one style-seven about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-one-center">
              <h2 className="title skew-up">Recent articles from blog</h2>
            </div>
          </div>
        </div>
        <div className="row g-48 justify-content-md-start justify-content-sm-center mt--0">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="single-blog-area-style-one eight-area text-center">
              <a href="#" className="thumbnail">
                <img src="/assets/images/blog/01.png" alt="blog-image" />
              </a>
              <div className="inner-content-wrapper">
                <div className="bottom-area mb--25">
                  <span className="admin">Amir Nisi</span>
                  {" "}
                  <span className="date">• 25 October, 2023</span>
                </div>
                <a href="#">
                  <h6 className="title mb--20">Which tool seems the best for content writing strategy?</h6>
                </a>
                {" "}
                <a href="#" className="btn-readmore-inner">Read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="single-blog-area-style-one eight-area">
              <a href="#" className="thumbnail">
                <img src="/assets/images/blog/02.png" alt="blog-image" />
              </a>
              <div className="inner-content-wrapper">
                <div className="bottom-area mb--25">
                  <span className="admin">Amir Nisi</span>
                  {" "}
                  <span className="date">• 25 October, 2023</span>
                </div>
                <a href="#">
                  <h6 className="title mb--20">Getting eyeballs on what you write for a business is tricky</h6>
                </a>
                {" "}
                <a href="#" className="btn-readmore-inner">Read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="single-blog-area-style-one eight-area">
              <a href="#" className="thumbnail">
                <img src="/assets/images/blog/03.png" alt="blog-image" />
              </a>
              <div className="inner-content-wrapper">
                <div className="bottom-area mb--25">
                  <span className="admin">Amir Nisi</span>
                  {" "}
                  <span className="date">• 25 October, 2023</span>
                </div>
                <a href="#">
                  <h6 className="title mb--20">More than just buzzwords for marketing concepts of SEO</h6>
                </a>
                {" "}
                <a href="#" className="btn-readmore-inner">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="blog-btn-area mt--50">
            <Link href="/blog" className="rts-btn btn-primary-4-border arrow-rotate inner m-auto">
              See More Posts{" "}
              <i className="fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="shape-area">
        <img src="/assets/images/blog/shape/01.png" alt="marketing" className="one" />
        {" "}
        <img src="/assets/images/blog/shape/02.png" alt="marketing" className="two" />
        {" "}
        <img src="/assets/images/blog/shape/03.png" alt="marketing" className="three" />
      </div>
    </div>
  );
}
