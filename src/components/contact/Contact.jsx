"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCall, MdEmail } from "react-icons/md";

const connection = [
  {
    id: 1,
    title: "Email Address",
    icon: MdEmail,
    value: "kapilrhngdle2211@gmail.com",
  },
  {
    id: 2,
    title: "Phone Number",
    icon: MdOutlineCall,
    value: "7218389179",
  },
  {
    id: 3,
    title: "Location",
    icon: FaLocationDot,
    value: "At. Manish Nagar, Nagpur, Maharashtra, India",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_6tx72an", "template_ef4vzif", templateParams, "VP3vRmed8-XVrbmHP")
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <p className={styles.heading1}>Contact Me</p>
        <h1 className={styles.title}>Get in touch with me</h1>
        <p>
          I'm currently open to internships, full-time opportunities, and freelance projects.
          Feel free to reach out — I’d love to connect and collaborate!
        </p>

        {connection.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className={styles.contactBlock}>
              <div className={styles.iconWrapper}>
                <Icon size={18} />
              </div>
              <div className={styles.contactText}>
                <div className={styles.contactTitle}>{item.title}</div>
                <div className={styles.contactValue}>{item.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={styles.textarea}
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.sendButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
