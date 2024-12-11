// Button.tsx

import React from "react";
import styles from "./Button.module.css"; // Importa el archivo CSS

interface ButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties; // Permite que puedas pasar estilos en línea
  onClick?: () => void; // Asegúrate de añadir la función onClick si la usas
}

const Button: React.FC<ButtonProps> = ({ children, style, onClick }) => {
  return (
    <button
      style={style} // Estilo en línea
      className={styles.button} // Aplica la clase CSS desde Button.module.css
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
