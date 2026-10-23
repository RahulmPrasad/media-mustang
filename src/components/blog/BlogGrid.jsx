import StickySidebar from "./StickySidebar";

export default function BlogGrid() {
  return (
    <section className="mustang-hero-section inner grid-2 rts-section-gapBottom inner-post">
      <div className="mustang-hero">
        <div className="container">
          <div className="mustang-full-hero-content">
            <div className="row gx-5 sticky-coloum-wrap">
              <div className="col-xl-8 col-lg-8">
                <div className="mustang-left-post">
                  <div className="row mt--0">
                    <div className="col-lg-6 col-md-6">
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
                    <div className="col-lg-6 col-md-6">
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
                    <div className="col-lg-6 col-md-6">
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
                    <div className="col-lg-6 col-md-6">
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
                    <div className="col-lg-6 col-md-6">
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
                    <div className="col-lg-6 col-md-6">
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
                  </div>
                </div>
                <div className="rts-mustang-pagination">
                  <ul>
                    <li>
                      <button className="active">01</button>
                    </li>
                    <li>
                      <button>02</button>
                    </li>
                    <li>
                      <button>03</button>
                    </li>
                    <li>
                      <button>
                        <i className="fa-solid fa-angles-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 sticky-coloum-item">
                <StickySidebar>
                  <div className="mustang-right-ct-1">
                    <div className="rts-single-wized search">
                      <div className="wized-body mt--0">
                        <div className="rts-search-wrapper">
                          <input className="Search" type="text" placeholder="Enter Keyword" />
                          {" "}
                          <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="rts-single-wized Categories">
                      <div className="wized-header">
                        <h5 className="title">Categories</h5>
                      </div>
                      <div className="wized-body">
                        <ul className="single-categories">
                          <li>
                            <a href="#">
                              Business Solution{" "}
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="single-categories">
                          <li>
                            <a href="#">
                              Strategy Growth
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="single-categories">
                          <li>
                            <a href="#">
                              Finance Solution
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="single-categories">
                          <li>
                            <a href="#">
                              Investment Policy
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="single-categories">
                          <li>
                            <a href="#">
                              Tax Managment
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="rts-single-wized Recent-post">
                      <div className="wized-header">
                        <h5 className="title">Recent Posts</h5>
                      </div>
                      <div className="wized-body">
                        <div className="recent-post-single">
                          <div className="thumbnail">
                            <a href="#">
                              <img src="/assets/images/blog/01.png" alt="Blog_post" />
                            </a>
                          </div>
                          <div className="content-area text-start">
                            <div className="user">
                              <i className="fa-regular fa-clock"></i>
                              {" "}
                              <span>15 Jan, 2024</span>
                            </div>
                            <a className="post-title" href="#">
                              <h6 className="title">We would love to share a similar experience</h6>
                            </a>
                          </div>
                        </div>
                        <div className="recent-post-single">
                          <div className="thumbnail">
                            <a href="#">
                              <img src="/assets/images/blog/02.png" alt="Blog_post" />
                            </a>
                          </div>
                          <div className="content-area text-start">
                            <div className="user">
                              <i className="fa-regular fa-clock"></i>
                              {" "}
                              <span>15 Jan, 2024</span>
                            </div>
                            <a className="post-title" href="#">
                              <h6 className="title">We would love to share a similar experience</h6>
                            </a>
                          </div>
                        </div>
                        <div className="recent-post-single">
                          <div className="thumbnail">
                            <a href="#">
                              <img src="/assets/images/blog/03.png" alt="Blog_post" />
                            </a>
                          </div>
                          <div className="content-area text-start">
                            <div className="user">
                              <i className="fa-regular fa-clock"></i>
                              {" "}
                              <span>15 Jan, 2024</span>
                            </div>
                            <a className="post-title" href="#">
                              <h6 className="title">We would love to share a similar experience</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rts-single-wized">
                      <div className="wized-header">
                        <h5 className="title">Popular Tags</h5>
                      </div>
                      <div className="wized-body">
                        <div className="tags-wrapper">
                          <a href="#">Services</a>
                          {" "}
                          <a href="#">Business</a>
                          {" "}
                          <a href="#">Growth</a>
                          {" "}
                          <a href="#">Finance</a>
                          {" "}
                          <a href="#">UI/UX Design</a>
                          {" "}
                          <a href="#">Solution</a>
                          {" "}
                          <a href="#">Speed</a>
                          {" "}
                          <a href="#">Strategy</a>
                          {" "}
                          <a href="#">Technology</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </StickySidebar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
