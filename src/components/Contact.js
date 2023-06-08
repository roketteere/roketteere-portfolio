import { useState } from "react";
import { Mailbox, BodyText, SendFill, Person } from "react-bootstrap-icons";

export default function Contact() {
  return (
    <form className="container-sm col-sm-8 row-sm-8">
      <div className="mb-3 card-body">
        <label
          htmlFor="name"
          className="card-title bg-dark form-label border border-dark-subtle rounded p-4 pb-2 pt-2 m-2 text-white">
          <Person /> Your Name
        </label>
        <input
          type="text"
          className="form-control text-bg-light p-1 border border-dark-subtle rounded"
          id="name"
          required
        />
        <div className="form-text">Your privacy is important to me</div>
      </div>
      <div className="mb-3 card-body">
        <label
          htmlFor="email"
          className="card-title bg-dark form-label border border-dark-subtle rounded p-4 pb-2 pt-2 m-2 text-white">
          <Mailbox /> Your E-Mail
        </label>
        <input
          type="email"
          className="form-control text-bg-light p-1 border border-dark-subtle rounded"
          id="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <div className="form-text">Your privacy is important to me</div>
      </div>
      <div className="mb-3 card-body">
        <label
          htmlFor="body-text"
          className="card-title bg-dark form-label p-4 pb-2 pt-2 m-2 text-white border border-dark-subtle rounded">
          <BodyText /> Your Message
        </label>
        <textarea
          type="text"
          className="form-control text-bg-light p-3 border border-dark-subtle rounded"
          id="body-text"
          aria-label="With textarea"
          required></textarea>
        <div className="form-text">Hey I would like to hear from you!</div>
      </div>
      <button type="submit" className="btn btn-success">
        <SendFill /> Send
      </button>
    </form>
  );
}
