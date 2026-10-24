import SwiperSlider from "@/components/common/SwiperSlider";

export default function Testimonials() {
  return (
    <div className="rts-testimonials-area-7 rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-one-center">
              <h2 className="title skew-up">Clients feedback</h2>
            </div>
          </div>
        </div>
        <div className="row mt--60">
          <div className="col-lg-12">
            <SwiperSlider className="swiper mySwiper-testimonials-7" preset="testimonials-7" wrapperClassName="swiper-wrapper pb--80" after={
                <div className="swiper-pagination"></div>
            }>
              <div className="swiper-slide">
                <div className="single-testimonials-4">
                  <div className="icon">
                    <img src="/assets/images/testimonials/logo/quote.png" alt="testimonials" />
                  </div>
                  <p className="disc">“I don’t see anyone else in this space providing the level of insight brings to the table. They understand data beyond the vanity metrics often provided – true impactful results.”</p>
                  <div className="author">
                    <h6 className="title">Kevin Smith</h6>
                    <p>Merchandising Market Manager</p>
                    <img src="/assets/images/testimonials/avatars/02.png" alt="testimonials" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="single-testimonials-4">
                  <div className="icon">
                    <img src="/assets/images/testimonials/logo/quote.png" alt="testimonials" />
                  </div>
                  <p className="disc">“I don’t see anyone else in this space providing the level of insight brings to the table. They understand data beyond the vanity metrics often provided – true impactful results.”</p>
                  <div className="author">
                    <h6 className="title">Smith Kavin</h6>
                    <p>Creative and Identity Partner</p>
                    <img src="/assets/images/testimonials/avatars/03.png" alt="testimonials" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="single-testimonials-4">
                  <div className="icon">
                    <img src="/assets/images/testimonials/logo/quote.png" alt="testimonials" />
                  </div>
                  <p className="disc">“I don’t see anyone else in this space providing the level of insight brings to the table. They understand data beyond the vanity metrics often provided – true impactful results.”</p>
                  <div className="author">
                    <h6 className="title">John Lee</h6>
                    <p>Founder/CEO</p>
                    <img src="/assets/images/testimonials/avatars/01.png" alt="testimonials" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="single-testimonials-4">
                  <div className="icon">
                    <img src="/assets/images/testimonials/logo/quote.png" alt="testimonials" />
                  </div>
                  <p className="disc">“I don’t see anyone else in this space providing the level of insight brings to the table. They understand data beyond the vanity metrics often provided – true impactful results.”</p>
                  <div className="author">
                    <h6 className="title">Kevin Smith</h6>
                    <p>Merchandising Market Manager</p>
                    <img src="/assets/images/testimonials/avatars/01.png" alt="testimonials" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="single-testimonials-4">
                  <div className="icon">
                    <img src="/assets/images/testimonials/logo/quote.png" alt="testimonials" />
                  </div>
                  <p className="disc">“I don’t see anyone else in this space providing the level of insight brings to the table. They understand data beyond the vanity metrics often provided – true impactful results.”</p>
                  <div className="author">
                    <h6 className="title">Kevin Smith</h6>
                    <p>Merchandising Market Manager</p>
                    <img src="/assets/images/testimonials/avatars/01.png" alt="testimonials" />
                  </div>
                </div>
              </div>
            </SwiperSlider>
          </div>
        </div>
      </div>
    </div>
  );
}
