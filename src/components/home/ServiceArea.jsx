import SwiperSlider from "@/components/common/SwiperSlider";

export default function ServiceArea() {
  return (
    <div className="rts-service-area-two rts-section-gap bg-dark-border-radious" id="Service">
      <div className="container" id="Service">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-wrapper-between align-items-center">
              <div className="title-style-one-left">
                <span className="pre split-collab">Our services</span>
                <h2 className="title split-collab">
                  High-impact marketing{" "}
                  <br />
                  {" "}services grow your startup
                </h2>
              </div>
              <p className="disc">Media Mustang agency makes it easy to create content that engages your audience by taking the guesswork out of research, strategy, and writing.</p>
            </div>
          </div>
        </div>
        <div className="row mt--10 g-5">
          <div className="col-lg-12">
            <div className="service-swiper-main-wrapper-2">
              <SwiperSlider className="swiper mySwiper-service-2 pb--120" preset="service-2" after={
                  <div className="button-pagination-area">
                    <div className="swiper-pagination"></div>
                  </div>
              }>
                <div className="swiper-slide">
                  <div className="single-service-style-two">
                    <div className="icon">
                      <i className="fa-solid fa-bullhorn" aria-hidden="true"></i>
                    </div>
                    <a href="#">
                      <h6 className="title">Digital Marketing</h6>
                    </a>
                    <p className="disc"></p>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      SEO(Search engine optimization)
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Google Ads
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Social Media Marketing
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Facebook Ads
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Email Marketing
                    </li>
                    <p></p>
                    <a href="#" className="btn-border-bottom">
                      Learn more{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-service-style-two">
                    <div className="icon">
                      <i className="fa-solid fa-laptop-code" aria-hidden="true"></i>
                    </div>
                    <a href="#">
                      <h6 className="title">{"Design & Development"}</h6>
                    </a>
                    <p className="disc"></p>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Website Development
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      {" "}E-Commerce Development
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Web Application Development
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Mobile Application Development
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      UI-UX Design
                    </li>
                    <p></p>
                    <a href="#" className="btn-border-bottom">
                      Learn more{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-service-style-two">
                    <div className="icon">
                      <i className="fa-solid fa-pen-nib" aria-hidden="true"></i>
                    </div>
                    <a href="#">
                      <h6 className="title">Graphics Design</h6>
                    </a>
                    <p className="disc"></p>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Logo Design
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Social Media Posts
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Infographic
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      {"Flyers & Brochures"}
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Business Cards
                    </li>
                    <p></p>
                    <a href="#" className="btn-border-bottom">
                      Learn more{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-service-style-two">
                    <div className="icon">
                      <i className="fa-solid fa-server" aria-hidden="true"></i>
                    </div>
                    <a href="#">
                      <h6 className="title">Hosting Domain, Email</h6>
                    </a>
                    <p className="disc"></p>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Domain Name Registration
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Web Hosting
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Business Email Solutions
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      SSL Certificates
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Productivity Tools
                    </li>
                    <p></p>
                    <a href="#" className="btn-border-bottom">
                      Learn more{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-service-style-two">
                    <div className="icon">
                      <i className="fa-solid fa-chart-pie" aria-hidden="true"></i>
                    </div>
                    <a href="#">
                      <h6 className="title">{"Data Analytics & Visualization"}</h6>
                    </a>
                    <p className="disc"></p>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Data Management
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Data Analysis
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Data Visualization
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Data Science
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Business Intelligence
                    </li>
                    <p></p>
                    <a href="#" className="btn-border-bottom">
                      Learn more{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-service-style-two">
                    <div className="icon">
                      <i className="fa-solid fa-user-gear" aria-hidden="true"></i>
                    </div>
                    <a href="#">
                      <h6 className="title">IT Consulting</h6>
                    </a>
                    <p className="disc"></p>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Project Management
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      IT Service Management
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Business Management
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Platform Consulting
                    </li>
                    <li className="ser-li">
                      <i className="fa-regular fa-circle-dot"></i>
                      Software Consulting
                    </li>
                    <p></p>
                    <a href="#" className="btn-border-bottom">
                      Learn more{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlider>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-area">
        <img src="/assets/images/service/shape/09.png" alt="shape" className="one" />
        {" "}
        <img src="/assets/images/service/shape/02.png" alt="shape" className="three" />
        {" "}
        <img src="/assets/images/service/shape/04.png" alt="shape" className="four" />
      </div>
    </div>
  );
}
