'use client';

import { motion } from 'framer-motion'; // ✅ This is now allowed in latest Framer Motion

import Button from "@/components/button/button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2 className={styles.title2}>
          {" "}
          Hi I'm <span className={styles.title}>Kapil Rahangdale</span> <br />a
          FullStack Developer
        </h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.desc}
        >
          Crafting scalable code and seamless user experiences. Turning ideas
          into impactful digital solutions. Passionate about clean architecture,
          responsive design, and continuous learning. Building fast, reliable,
          and user-focused web applications.
        </motion.p>

        <Button
          url="https://drive.google.com/drive/folders/1ryMJ9leKtgMp9Oq4iLIPV19jcDN4tZ2p?usp=drive_link"
          text="Download Resume"
          download
        />
      </div>
    </div>
  );
};

export default Hero;
