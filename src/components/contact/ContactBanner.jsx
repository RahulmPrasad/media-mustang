export default function ContactBanner() {
  return (
    <div className="contact-banner-area-start rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-inner-area-contact-inner">
              <h1 className="title skew-up-2">
                Don’t hesitate to{" "}
                <br />
                {" "}
                <span>reach out</span>
              </h1>
              <p className="disc">Have questions, feedback, or just want to say hello? We'd love to hear from you! Feel free to reach out to our team via the contact form below.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-area">
        <img src="/assets/images/product/shape/01.png" alt="" className="one" />
        {" "}
        <img src="/assets/images/product/shape/02.png" alt="" className="two" />
        {" "}
        <img src="/assets/images/product/shape/03.png" alt="" className="three" />
        {" "}
        <img src="/assets/images/product/shape/04.png" alt="" className="four" />
      </div>
    </div>
  );
}
