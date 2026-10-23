import Counter from "@/components/common/Counter";

export default function CounterUp() {
  return (
    <div className="ptb--165 counter-up-area-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="single-counter-up-two">
              <div className="icon">
                <img src="/assets/images/counter/01.svg" alt="counter" />
              </div>
              <div className="inmformation">
                <h2 className="title">
                  <Counter value="1.5" />
                  B
                </h2>
                <p>Related keywords</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="single-counter-up-two">
              <div className="icon">
                <img src="/assets/images/counter/02.svg" alt="counter" />
              </div>
              <div className="inmformation">
                <h2 className="title">
                  <Counter value="100" />
                  M
                </h2>
                <p>Competitors keywords</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="single-counter-up-two">
              <div className="icon">
                <img src="/assets/images/counter/03.svg" alt="counter" />
              </div>
              <div className="inmformation">
                <h2 className="title">
                  <Counter value="48" />
                  K
                </h2>
                <p>Supported locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
