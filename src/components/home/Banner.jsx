export default function Banner() {
  return (
    <div className="main-wrapper-banner-uner-over-flew">
      <div className="rts-banner-area-two rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area-wrapper-two">
                <h1 className="title skew-up-2">
                  Media Mustang{" "}
                  <br />
                  Creative Marketing Agency
                </h1>
                <p className="disc">Media Mustang team works with design creation, Digital Marketing. We constantly deliver world-class Marketing and Branding, using Agile approach to find solution in challenging jobs.</p>
                <form action="#">
                  <input type="email" placeholder="Email address.." required />
                  {" "}
                  <i className="fa-regular fa-envelope"></i>
                  {" "}
                  <button className="rts-btn btn-primary-2">Join Us</button>
                </form>
                <div className="bottom-text">
                  <p className="disc">Talk to an expert, no credit card required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-2-shape">
        <img className="one" src="/assets/images/banner/short/2-shape/01.png" alt="one" />
        {" "}
        <img className="two" src="/assets/images/banner/short/2-shape/02.png" alt="one" />
        {" "}
        <img className="three" src="/assets/images/banner/short/2-shape/03.png" alt="one" />
        {" "}
        <img className="four" src="/assets/images/banner/short/2-shape/04.png" alt="one" />
        {" "}
        <img className="five" src="/assets/images/banner/short/2-shape/05.png" alt="one" />
      </div>
    </div>
  );
}
