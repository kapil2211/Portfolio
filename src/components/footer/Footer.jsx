import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import styles from './Footer.module.css';

const socialLinks = [
  { id: 1, icon: <FaInstagram />, url: 'https://instagram.com/_kapil_2_2' },
  { id: 2, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/kapil-rahangdale-637b3822a" },
  { id: 3, icon: <FaGithub />, url: "https://github.com/kapil2211" },
  { id: 4, icon: <FaTelegram />, url: 'https://t.me/@Kapil2211' },
];

const pageLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* Left Column - Logo */}
        <div className={styles.footerColumn}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.imageWrapper}>
              <Image
                src="/Kapil_logo.png"
                alt="KapCode Logo"
                fill
                className={styles.logoImg}
              />
            </div>
            KapCode
          </Link>
          <p className={styles.description}>
            Problem Solver<br/>
            Critical Thinker<br/>
            Innovative Developer<br/>
            Adaptible

          </p>
        </div>

        {/* Column 2 - Page Links */}
        <div className={styles.footerColumn}>
          <h4 className={styles.linkHeader}>Pages</h4>
          <ul className={styles.linkList}>
            {pageLinks.map((page, index) => (
              <li key={index}>
                <Link href={page.href} className={styles.pageLink}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Column - 3D Portfolio */}
        <div className={`${styles.footerColumn} ${styles.center}`}>
          <div className={styles.name}>Kapil Rahangdale</div>
          <div className={styles.portfolio}>Portfolio</div>
        </div>

        {/* Right Column - Social Links */}
        <div className={`${styles.footerColumn} ${styles.social}`}>
          <h4>Connect with me @</h4>
          <div className={styles.icons}>
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
