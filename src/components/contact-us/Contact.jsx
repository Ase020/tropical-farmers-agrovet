/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import GoogleMapReact from "google-map-react";

import "./contact.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_rvx6y2h",
        "template_8fq0b3l",
        {
          from_name: form.name,
          to_name: "Tropical Admin",
          from_email: form.email,
          to_email: "felixasejunior@gmail.com",
          message: form.message,
        },
        "maz5XYDLGqV1Eo4h7"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon possible.");

          console.log(result.text);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          alert("Sorry, something went wrong! 💀");
        }
      );
  };

  const defaultProps = {
    center: {
      //   lat: 10.99835602,
      //   lng: 77.01502627,

      lat: -0.373897,
      lng: 35.28005,
    },
    zoom: 11,
  };

  return (
    <div className="contact-container">
      <div
        className="contact-wrapper"
        style={{ height: "100vh", width: "100%" }}
      >
        <div className="contact-form-wrapper">
          <h3 className="contact-title">Contact Us</h3>

          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <div className="contact-input-wrapper">
              <label className="contact-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="contact-input"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact-input-wrapper">
              <label className="contact-label">Email</label>
              <input
                type="email"
                name="email"
                className="contact-input"
                placeholder="john.doe@gmail.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact-input-wrapper">
              <label className="contact-label">Message</label>
              <textarea
                cols="50"
                rows="10"
                name="message"
                className="contact-input"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div className="contact-map" style={{ height: "100%", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDxzpYwzgt5MdURMqto9P-DLd8NQcB_MkU",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={-0.373897}
              lng={35.28005}
              text="Tropical Farmers"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Contact;
