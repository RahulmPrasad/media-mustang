import Link from "next/link";

export default function SubscribeArea() {
  return (
    <div className="rts-subscribe-area-one about rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subscribe-main-wrapper-one">
              <div className="title-style-one-center">
                <h2 className="title skew-up">
                  Let's maximize your{" "}
                  <br />
                  {" "}online impact!
                </h2>
                <p className="disc">More than just buzzwords for marketing concepts of SEO.</p>
                <div className="btn-area d-flex align-items-center justify-content-center">
                  <Link href="/contact" className="rts-btn btn-primary">Get in touch</Link>
                  {" "}
                  <a href="#" className="under-line-btn">Request a demo</a>
                </div>
              </div>
              <div className="shape-area">
                <img className="one" src="/assets/images/subscribtion/shape/01.png" alt="subscribtion" />
                {" "}
                <img className="two" src="/assets/images/subscribtion/shape/02.png" alt="subscribtion" />
                {" "}
                <img className="three" src="/assets/images/subscribtion/shape/03.png" alt="subscribtion" />
                {" "}
                <img className="four" src="/assets/images/subscribtion/shape/04.png" alt="subscribtion" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
