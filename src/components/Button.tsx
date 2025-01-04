// Button.tsx

import React from "react";
import styles from "./Button.module.css"; 

interface ButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties; 
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ children, style, onClick }) => {
  return (
    <button
      style={style} 
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
