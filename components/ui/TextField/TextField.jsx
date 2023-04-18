import styles from "./TextField.module.css";

export default function TextField({type="text", placeholder, inputRef, multiline, rows}) {
  if (multiline) {
    return (
      <textarea
        className={`${styles.input} ${styles.multiline}`}
        placeholder={placeholder}
        rows={rows}
        ref={inputRef}
      />
    )
  }

  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      ref={inputRef}
    />
  )
}