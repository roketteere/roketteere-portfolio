import { useState } from "react";

export default function Contact() {
  return (
    <form className="container-fluid">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Your E-Mail
        </label>
        <input type="email" className="form-control" id="email" />
        <div className="form-text ">Your privacy is important to me</div>
      </div>
      <div className="mb-3">
        <label htmlFor="body-text" className="form-label">
          Your Message
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body-text"
          aria-label="With textarea"></textarea>
        <div className="form-text ">Hey I would like to hear from you!</div>
      </div>
    </form>
  );
}
