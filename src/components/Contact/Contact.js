import React from "react";
import "./Contact.css";
import {sendEmail} from './js'

import emailjs from "emailjs-com";
import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ydnq01s",
        "template_mc8lvzk",
        e.target,
        "user_CwNptdn7yDUpmXHZDgVci"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  
  return (
    <div id="contact" class="contact">
      <div class="main-container">
        <div class="contact-container">
          <div class="sub-contact-container">
            <h1>Contact Me</h1>
            <div class="icon-container">
              <LinkedIn
                style={{ fontSize: "35px", margin: "10px", cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ankit-dhawan-17b552161/",
                    "_blank"
                  )
                }
              />
              <GitHub
                style={{ fontSize: "35px", margin: "10px", cursor: "pointer" }}
                onClick={() =>
                  window.open("https://github.com/ad-dhawan", "_blank")
                }
              />

              {/* <Instagram
                style={{ fontSize: "35px", margin: "10px", cursor: "pointer" }}
                onClick={() =>
                  window.open("https://www.instagram.com/dhawan.exe/", "_blank")
                }
              /> */}
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="sub-form-container">
            <div class="style-form-container">
              <form onSubmit={sendEmail}>
                <div class="inputs-container">
                  <div class="inputs">
                    <input
                      type="text"
                      class="input"
                      placeholder="Name"
                      name="from_name"
                    />
                  </div>
                  <div class="inputs">
                    <input
                      type="email"
                      class="input"
                      placeholder="Email Address"
                      name="reply_to"
                    />
                  </div>
                  <div class="inputs">
                    <input
                      type="text"
                      class="input"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                  <div class="inputs">
                    <textarea
                      class="input"
                      id=""
                      cols="30"
                      rows="8"
                      placeholder="Your message"
                      name="message"
                    ></textarea>
                  </div>
                  <div class="button-container">
                    <input
                      type="submit"
                      class="send-button"
                      value="Send Message"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
