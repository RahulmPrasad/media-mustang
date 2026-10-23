import faqItems from "@/components/common/faqItems";
import Accordion from "@/components/common/Accordion";

export default function FaqArea() {
  return (
    <div className="rts-faq-area-full-container style-three pt--80 pb--80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="faq-area-start">
              <div className="title-style-one-center">
                <span className="pre skew-up">Our FAQ</span>
                <h2 className="title skew-up">Frequently asked questions</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt--20">
          <div className="col-lg-12">
            <div className="accordion-faq-area-border-bottom-style">
              <Accordion id="accordionExample" items={faqItems} />
            </div>
          </div>
        </div>
      </div>
      <div className="shape-area">
        <img src="/assets/images/faq/shape/01.png" alt="sahpe" className="one" />
        {" "}
        <img src="/assets/images/faq/shape/02.png" alt="sahpe" className="two" />
        {" "}
        <img src="/assets/images/faq/shape/03.png" alt="sahpe" className="three" />
        {" "}
        <img src="/assets/images/faq/shape/04.png" alt="sahpe" className="four" />
      </div>
    </div>
  );
}
