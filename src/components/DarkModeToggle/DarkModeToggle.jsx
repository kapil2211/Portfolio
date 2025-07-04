"use client"

import React, { useState, useEffect } from 'react';
import styles from './DarkModeToggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';

const DarkModeToggle = () => {
  const {toggle, mode} = useState(ThemeContext);

  return (
  
      <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
    
  );
};

export default DarkModeToggle;
