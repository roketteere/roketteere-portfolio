import { useState } from "react";
import { Mailbox, BodyText, SendFill } from "react-bootstrap-icons";

export default function Contact() {
  return (
    <form className="container-sm col-sm-8 row-sm-8">
      <div className="mb-3 card-body">
        <label
          htmlFor="email"
          className="card-title bg-primary form-label border border-primary-subtle rounded p-4 pb-2 pt-2 m-2 text-white">
          <Mailbox /> Your E-Mail
        </label>
        <input
          type="email"
          className="form-control text-bg-light p-1 border border-primary-subtle rounded"
          id="email"
        />
        <div className="form-text ">Your privacy is important to me</div>
      </div>
      <div className="mb-3 card-body">
        <label
          htmlFor="body-text"
          className="card-title bg-primary form-label p-4 pb-2 pt-2 m-2 text-white border border-primary-subtle rounded">
          <BodyText /> Your Message
        </label>
        <textarea
          type="text"
          className="form-control text-bg-light p-3 border border-primary-subtle rounded"
          id="body-text"
          aria-label="With textarea"></textarea>
        <div className="form-text ">Hey I would like to hear from you!</div>
      </div>
      <button type="submit" className="btn btn-primary">
        <SendFill /> Send
      </button>
    </form>
  );
}
