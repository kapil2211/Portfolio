"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "./Experience.module.css";
import Button from "../button/Button";

const intern = [
  {
    id: 1,
    title: "BrainVision Technology",
    title2: "Professional Contribution",
    image: "BVT.jpeg",
    Role: "Full-Stack Developer",
    Tenure: "May '24 - July '24",
    TechStack: "ReactJs, MongoDb, NodeJs, ExpressJs, Socket.Io,Docker",
    description: [
      "Designed and implemented a room page with advanced filters using React.js, leveraging Geolocation APIs and MongoDB geospatial indexing to boost query performance by 40%-60% for seamless real-time discovery.",
      "Enhanced user onboarding by integrating NodeMailer, efficiently processing over 500 email verifications daily.",
      "Integrated Socket.io for real-time updates and messaging, enabling seamless collaboration with 1000+ users.",
    ],
    url: "https://www.brainvisiontechnology.com/",
  },
  {
    id: 2,
    title: "Sochem",
    title2: "Professional Contribution",
    image: "Sochem.jpeg",
    Role: "Full-Stack Developer",
    Tenure: "Jul '23 - Apr '24",
    TechStack: "NextJs, PostgreSQL, Django, Flask, Azure, GitHub",
    description: [
      "Handled the Announcement page of website to regularly update it for upcoming events and announcing winners of past event and also built per events page containing information about events and their timeline.",
      "Developed and maintained the website of Departmental fest OSMOZE'22 using Reactjs and HTML-CSS.",
      "Deployed and Hosted over cloud computing platform Microsoft Azure.",
    ],
    url: "https://in.linkedin.com/company/sochemiitbhu",
  },
];

const Experience = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}> Experience </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 2, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ul className={styles.cards}>
          {intern.map((item) => (
            <li className={styles.cards_item} key={item.id}>
              <div className={styles.card} tabIndex="0">
                <div className={styles.card_image}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.card_content}>
                  <h2 className={styles.card_title}>{item.title}</h2>
                  <div className={styles.card_meta}>
                    {item.Role && (
                      <p>
                        <strong>Role:</strong> {item.Role}
                      </p>
                    )}
                    {item.Tenure && (
                      <p>
                        <strong>Tenure:</strong> {item.Tenure}
                      </p>
                    )}
                    {item.TechStack && (
                      <p>
                        <strong>Tech Stack:</strong> {item.TechStack}
                      </p>
                    )}
                  </div>
                  <br />
                  <hr />
                  <br />
                  <h4 className={styles.card_title}>{item.title2}</h4>
                  <div className={styles.card_text}>
                    {item.description.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                  <br></br>
                  <Button url={item.url} text="Know More"></Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Experience;
