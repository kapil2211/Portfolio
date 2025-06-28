"use client";
import { Link } from "react-scroll";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { id: 1, title: "About", url: "about" },
  { id: 2, title: "Experience", url: "experience" },
  { id: 3, title: "Projects", url: "project" },
  { id: 4, title: "Contact", url: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          <div className={styles.imageWrapper}>
            <Image
              src="/Kapil_logo.png"
              alt="KapCode Logo"
              fill
              className={styles.img}
            />
          </div>
          KapCode
        </Link>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.url}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass={styles.active}
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
