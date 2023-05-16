import styles from "./Paper.module.css";

export default function Paper({children}) {
  return (
    <div className={styles.paper}>
      {children}
    </div>
  )
}