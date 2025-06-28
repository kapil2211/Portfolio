"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "./Project.module.css"; // Ensure the styles below are saved here
import Button from "../button/Button";

const carouselItems = [
  {
    title: "VoxNews App",
    img: "/VoxNews_AI.png",
    livelink: "",
    githubcode: "https://github.com/kapcode22/React_Alan_AI.git",
    desc: "We built a voice-controlled React News App using Alan AI, enabling users to navigate and control the app entirely by voice. It’s easy to integrate and brings a seamless hands-free experience.",
  },

  {
    title: "Payment App",
    img: "Payment_App.png",
    livelink: "",
    githubcode: "https://github.com/kapcode22/CalAi.git",
    desc: "Developed a payment-enabled React application to understand and implement Stripe integration. I also explored key web concepts like localStorage, sessionStorage, and integrated Firebase Authentication for secure user login and session management.",
  },
  {
    title: "Artistly.com ",
    img: "Artistly.png",
    livelink: "https://artistly-fczd.vercel.app/",
    githubcode: "https://github.com/kapil2211/Artistly.git",
    desc: "A platform designed for artists to showcase their portfolios, connect with like-minded creatives, and find collaboration opportunities. The app features user profiles, artwork galleries, and real-time chat to foster a vibrant artistic community",
  },
  {
    title: "SSC Official Website",
    img: "/SSC_thumbnail.png",
    livelink: "https://ssc-final-frontend.onrender.com/",
    githubcode: "https://github.com/kapcode22/SSC_Final.git",
    desc: "We’ve built a central platform for all social activities and events at IIT BHU. It streamlines communication, highlights initiatives, and keeps students, faculty, and the community informed and engaged.",
  },
  {
    title: "Innovate Hub",
    img: "/Innovate_HUB.jpeg",
    githubcode: "https://github.com/kapcode22/Innovate_Hub.git",
    livelink: "https://innovate-hub-frontend.onrender.com/",
    desc: "Innovate_Hub is a web platform that connects students with project ideas to those eager to collaborate. It bridges the gap between talent and opportunity, fostering innovation and teamwork across campus.",
  },
];

const Project = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Projects</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 2, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.carousel} data-mask>
          {carouselItems.map((item, index) => (
            <article key={index} style={{ "--i": index }}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <div>
                <p>{item.desc}</p>
                <div className={styles.buttonGroup}>
                  <Button url={item.githubcode} text="Code Link" />
                  <Button url={item.livelink} text="Live Link" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
