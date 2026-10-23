"use client";

import { useState } from "react";

// Replaces the template's contact-form.js (AJAX post to mailer.php).
export default function ContactForm() {
  const [status, setStatus] = useState({ type: "", text: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const res = await fetch("/api/contact", { method: "POST", body: new FormData(form) });
      const text = await res.text();
      if (!res.ok) throw new Error(text);
      setStatus({ type: "success", text });
      form.reset();
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Oops! An error occured and your message could not be sent." });
    }
  };

  return (
    <div className="rts-contact-form-area contact-form-page rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form className="contact-form" action="/api/contact" method="post" id="contact-form" onSubmit={onSubmit}>
              <div className="single-input-area">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />{" "}
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="single-input-area">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="text" placeholder="Your email" required />{" "}
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="single-input-area text-area">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="Your message" />
                <i className="fa-regular fa-message"></i>
              </div>
              <button type="submit" className="rts-btn btn-primary">
                Send message <i className="fa-solid fa-location-arrow"></i>
              </button>
              <div id="form-messages" className={`text-center text-primary mt-5 text-capitalize ${status.type}`}>
                {status.text}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
