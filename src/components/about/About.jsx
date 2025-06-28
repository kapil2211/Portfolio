"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // LeetCode icon

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.imgcontainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 2, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.imgcontainer}
          >
            <Image src="/Owner-2.png" fill={true} alt="...hero" className={styles.img} />
            <div className={styles.socialPill}>
              {/* Social icons */}
              <a
                href="https://www.linkedin.com/in/kapil-rahangdale-637b3822a"
                target="_blank"
                className={styles.icon}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/kapil2211"
                target="_blank"
                className={styles.icon}
              >
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/kapcode22"
                target="_blank"
                className={styles.icon}
              >
                <SiLeetcode />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.textcontainer}>
          <h2 className={styles.title}> About Me</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 2, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.desc}>
              I’m <b>Kapil Rahangdale</b>, a passionate full-stack web developer
              and <b>IIT BHU </b>
              graduate. I blend creativity with logic to build robust,
              user-centric web apps, backed by strong CS fundamentals and
              hands-on project experience.
              <br />
              <span>
                My expertise spans both frontend and backend technologies. On
                the frontend, I craft clean, responsive, and engaging user
                interfaces using{" "}
                <b> HTML, CSS, JavaScript, React, and Next.js. </b> On the
                backend, I develop scalable and efficient server-side logic with{" "}
                <b>
                  Node.js, Express, and databases like MongoDB and PostgreSQL
                </b>
                .
              </span>
              <br />
              With expertise in <b>RESTful APIs </b>, authentication, and modern
              development tools, I build end-to-end web solutions that ensure
              smooth interaction between frontend and backend. I focus on
              writing clean, maintainable code and stay updated with the latest
              tech to create impactful digital products.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
