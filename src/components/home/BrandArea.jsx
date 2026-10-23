import SwiperSlider from "@/components/common/SwiperSlider";

export default function BrandArea() {
  return (
    <div className="brand-area-start rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-area-main-wrapper-two">
              <SwiperSlider className="light swiper mySwiper-brand-2" preset="brand-2">
                <div className="swiper-slide">
                  <a href="#">
                    <img src="/assets/images/brand/06.svg" alt="brand" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <img src="/assets/images/brand/07.svg" alt="brand" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <img src="/assets/images/brand/08.svg" alt="brand" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <img src="/assets/images/brand/09.svg" alt="brand" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <img src="/assets/images/brand/10.svg" alt="brand" />
                  </a>
                </div>
              </SwiperSlider>
              <SwiperSlider className="dark swiper mySwiper-brand-2" preset="brand-2">
                <div className="swiper-slide">
                  <a href="#">
                    <img src="/assets/images/brand/21.svg" alt="brand" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <img src="/assets/images/brand/22.svg" alt="brand" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <img src="/assets/images/brand/23.svg" alt="brand" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <img src="/assets/images/brand/24.svg" alt="brand" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <img src="/assets/images/brand/21.svg" alt="brand" />
                  </a>
                </div>
              </SwiperSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
