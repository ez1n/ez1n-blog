import styles from "./Button.module.css";

export default function Button({type, text, color, onClick}) {
  const colorName = color === "error" ? styles.error : color === "secondary" ? styles.secondary : "";

  return (
    <button
      className={`${styles.button} ${colorName}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}