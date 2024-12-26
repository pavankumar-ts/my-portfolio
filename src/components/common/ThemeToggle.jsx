// ThemeToggle.js
import React from 'react';
import styles from '@/styles/ThemeToggle.module.css';

export const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <label className={styles.switch}>
      <input 
        type="checkbox" 
        checked={isDarkMode}
        onChange={onToggle}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
