import Accordion from "@/components/common/Accordion";

const body = "Includes using high-quality keywords to write strategic content that ranks, as well as descriptive metadata and meaningful image alt text.";

const processItems = [
  { key: "One", title: "01. Creating a strategy", body },
  { key: "Two", title: "02. Building your site", body },
  { key: "Three", title: "03. Website optimization", body },
  { key: "Four", title: "04. Website Seo", body },
];

export default function WorkingProcess() {
  return (
    <div className="rts-working-porcess-area-two ptb--160">
      <div className="container-1058">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-one-center">
              <span className="pre skew-up">Our process</span>
              <h2 className="title skew-up">
                How we work to help{" "}
                <br />
                {" "}your business grow
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-48 mt--0">
          <div className="col-lg-6">
            <div className="working-process-accordion-one">
              <Accordion id="accordionExample" items={processItems} markItemShow />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="working-process-right-area-one">
              <div className="thumbnail">
                <img className="large" src="/assets/images/working-process/02.png" alt="working-process" />
                {" "}
                <img src="/assets/images/working-process/01.png" alt="marketing" className="small images" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-area">
        <img src="/assets/images/working-process/shape/01.png" alt="working process" className="one" />
        {" "}
        <img src="/assets/images/working-process/shape/02.png" alt="working process" className="two" />
        {" "}
        <img src="/assets/images/working-process/shape/03.png" alt="working process" className="three" />
      </div>
    </div>
  );
}
