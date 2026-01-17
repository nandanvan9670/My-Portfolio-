import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../CSS/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6rcmycr",     // 🔴 EmailJS service id
        "template_9cdl28c",    // 🔴 template id
        formData,
        "JQ-rNMPeoqg5vKqjd"      // 🔴 public key
      )
      .then(
        () => {
          alert("Message sent successfully ✅");

          // FORM RESET
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send email ❌");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="row">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input 
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        </div>
        
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
