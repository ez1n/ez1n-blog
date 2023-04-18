import styles from "./Button.module.css";

export default function Button({type, text, onClick}) {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}