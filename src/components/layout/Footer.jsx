export default function Footer({ copyright = "© 2024 Media Mustang Copyright Policy." }) {
  return (
    <div className="rts-footer-area footer-four rts-section-gap">
      <div className="container mb--65">
        <div className="row g-48">
          <div className="row g-48">
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="single-footer-wized-one">
                <h6 className="title">Solutions</h6>
                <ul>
                  <li>
                    <a href="#">Content Marketing</a>
                  </li>
                  <li>
                    <a href="#">Consumer Insights</a>
                  </li>
                  <li>
                    <a href="#">SEO Content Strategy</a>
                  </li>
                  <li>
                    <a href="#">Keyword Research</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="single-footer-wized-one">
                <h6 className="title">Resources</h6>
                <ul>
                  <li>
                    <a href="#">Insights</a>
                  </li>
                  <li>
                    <a href="#">Keyword Generator</a>
                  </li>
                  <li>
                    <a href="#">Research Tool</a>
                  </li>
                  <li>
                    <a href="#">{"News & Events"}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="single-footer-wized-one">
                <h6 className="title">Company</h6>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="single-footer-wized-one">
                <h6 className="title">Other links</h6>
                <ul>
                  <li>
                    <a href="#">Content Marketing</a>
                  </li>
                  <li>
                    <a href="#">Consumer Insights</a>
                  </li>
                  <li>
                    <a href="#">SEO Content Strategy</a>
                  </li>
                  <li>
                    <a href="#">Keyword Research</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="footer-input-main-wrapper-one">
                <div className="single-footer-wized-one">
                  <h6 className="title">Newsletter</h6>
                  <form action="#">
                    <input type="email" placeholder="Email address.." required />
                    {" "}
                    <i className="fa-regular fa-envelope"></i>
                    {" "}
                    <button className="rts-btn btn-primary">Subscribe now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-area-four pt--65 mt-65 border-top">
              <a href="#" className="logo">
                <img src="/assets/images/logo/logo-dark.png" width="250" height="40" alt="logo" />
              </a>
              <p>{copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
