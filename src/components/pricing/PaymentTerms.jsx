import Link from "next/link";

const terms = [
  {
    icon: "fa-wallet",
    title: "Advance payment",
    text: "You have to pay the discussed amount in advance to confirm your order.",
  },
  {
    icon: "fa-box-open",
    title: "Delivery on full payment",
    text: "We will not deliver your product/services until we receive our full and final payment.",
  },
  {
    icon: "fa-receipt",
    title: "GST extra",
    text: "18% GST will be extra as per the govt. norms.",
  },
  {
    icon: "fa-calendar-check",
    title: "Installments / EMI",
    text: "If Payments Installments/EMI are mentioned in the Quotation, we will take PDC (Post Dated Cheques) against it. We will raise your invoice after the realization of the PDC’s.",
  },
  {
    icon: "fa-file-signature",
    title: "Purchase order first",
    text: "We will initiate our job only after the acknowledgment of your Purchase Order (PO).",
  },
  {
    icon: "fa-handshake",
    title: "Third-party payments",
    text: "You need to pay third-party payment direct to the service provider, and we will not be responsible for that.",
  },
];

export default function PaymentTerms() {
  return (
    <section className="payment-terms-area">
      <div className="container">
        <div className="payment-terms-header">
          <span className="pre">Billing &amp; payments</span>
          <h1 className="title">Payment Terms</h1>
          <p className="disc">A few simple rules that keep every project on schedule. Please read them before confirming your order.</p>
          <nav className="payment-terms-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <i className="fa-solid fa-chevron-right"></i>
            <span aria-current="page">Payment Terms</span>
          </nav>
        </div>

        <ol className="payment-terms-grid">
          {terms.map((term, i) => (
            <li className="payment-terms-card" key={term.title}>
              <div className="payment-terms-card-top">
                <span className="icon">
                  <i className={`fa-solid ${term.icon}`}></i>
                </span>
                <span className="number">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h6 className="title">{term.title}</h6>
              <p className="disc">{term.text}</p>
            </li>
          ))}
        </ol>

        <div className="payment-terms-help">
          <div className="text">
            <h5 className="title">Questions about billing?</h5>
            <p className="disc">Our team will walk you through quotations, installments and invoices.</p>
          </div>
          <div className="actions">
            <a className="call-us" href="tel:+918511266673">
              <i className="fa-solid fa-phone"></i> +91 85112 66673
            </a>
            <Link href="/contact" className="rts-btn btn-primary">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
