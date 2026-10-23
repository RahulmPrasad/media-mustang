import faqItems from "@/components/common/faqItems";
import Accordion from "@/components/common/Accordion";

export default function FaqCta() {
  return (
    <div className="faq-cta-main-wrapper-bg rts-section-gap2">
      <div className="rts-faq-area-full-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="faq-area-start">
                <div className="title-style-one-center">
                  <span className="pre skew-up">Our FAQ</span>
                  <h2 className="title skew-up">
                    Got questions? We’ve got
                    <br />
                    answers
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="accordion-faq-area-border-bottom-style pb--100 style-four">
                <Accordion id="accordionExamples" items={faqItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-area">
        <img src="/assets/images/faq/shape/01.png" alt="" className="one" />
        {" "}
        <img src="/assets/images/faq/shape/02.png" alt="" className="two" />
        {" "}
        <img src="/assets/images/faq/shape/03.png" alt="" className="three" />
        {" "}
        <img src="/assets/images/faq/shape/04.png" alt="" className="four" />
      </div>
    </div>
  );
}
