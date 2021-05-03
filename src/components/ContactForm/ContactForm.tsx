import React, { FC } from "react";

import "./contact-form.scss";

const ContactForm: FC = () => (
  <form name="contact" method="POST" data-netlify="true" className="u-margin-top-4">
    <input type="hidden" name="form-name" value="contact" />
    <div className="form-field">
      <label htmlFor="name">Your Name:</label> <input id="name" type="text" name="name" />
    </div>
    <div className="form-field">
      <label htmlFor="email">Your Email:</label> <input type="email" name="email" />
    </div>
    <div className="form-field">
      <label htmlFor="message">Message:</label> <textarea name="message"></textarea>
    </div>
    <div className="form-field">
      <button type="submit">✉&nbsp;&nbsp;&nbsp;Send</button>
    </div>
  </form>
);

export default ContactForm;
