import VideoPopup from "@/components/common/VideoPopup";

export default function VideoArea() {
  return (
    <div className="large-image-video-area">
      <div className="container  mt-dec-100">
        <div className="row">
          <div className="col-lg-12">
            <div className="thumbnail">
              <figure className="pli-image">
                {/* wrapper divs are the ones main.js used to inject for the parallax effect */}
                <div className="anim-image-parallax-wrap" style={{ overflow: "hidden" }}>
                  <div className="anim-image-parallax-inner">
                    <img className="anim-image-parallax tt-lazy" src="/assets/images/video/01.png" data-src="/assets/images/video/01.png" alt="image" />
                  </div>
                </div>
              </figure>
              <VideoPopup
                href="https://youtu.be/QsY8fnvMn6c?si=ym44OkNlo6IDceti"
                embed="https://www.youtube.com/embed/QsY8fnvMn6c?autoplay=1"
                className="rts-btn popup-video btn-secondary-5-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5.25 20.9999C5.05109 20.9999 4.86032 20.9209 4.71967 20.7803C4.57902 20.6396 4.5 20.4488 4.5 20.2499V3.74993C4.49999 3.6196 4.53395 3.49151 4.59852 3.37829C4.6631 3.26508 4.75606 3.17065 4.86825 3.1043C4.98044 3.03796 5.10798 3.002 5.2383 2.99997C5.36862 2.99794 5.49722 3.0299 5.61143 3.09271L20.6114 11.3427C20.7291 11.4074 20.8273 11.5026 20.8956 11.6182C20.964 11.7338 21 11.8656 21 11.9999C21 12.1342 20.964 12.266 20.8956 12.3816C20.8273 12.4972 20.7291 12.5924 20.6114 12.6571L5.61143 20.9071C5.50069 20.968 5.37637 20.9999 5.25 20.9999Z" fill="#614CE1"></path>
                </svg>
              </VideoPopup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
