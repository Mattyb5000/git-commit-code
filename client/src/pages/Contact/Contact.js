import React from "react";
import Navbar1 from "../../components/Navbar1/Navbar1";

import "./Contact.css";

function Contact() {
  return (
    <div className="back">
      <Navbar1 />
      <header>
        <div className="contactHead">
          <p className="contactTitle">
            USE THE FORM BELOW TO DROP US AN EMAIL.
          </p>
          <p className="contactTitle">OLD-FASHIONED PHONE CALLS WORK TOO.</p>
          <h3 className="contactTitle">706.308.8557</h3>
        </div>
      </header>
      <form className="formBox">
        <input
          class="form-control"
          type="text"
          placeholder="First Name"
          aria-label="default input example"
        />
        <input
          class="form-control"
          type="text"
          placeholder="Last Name"
          aria-label="default input example"
        />
          <input
          class="form-control"
          type="text"
          placeholder="Last Email"
          aria-label="default input example"
        />
          <input
          class="form-control"
          type="text"
          placeholder="Phone Number"
          aria-label="default input example"
        />
          <input
          class="form-control inputLast"
          type="text"
          placeholder="What can We do for you?"
          aria-label="default input example"
        />
        <button type="button" class="btn btn-info send">Send</button>
      </form>
    </div>
  );
}

export default Contact;
