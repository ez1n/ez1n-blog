import styles from "./ListItem.module.css";

export default function ListItem({children}){
  return (
    <li className={styles.list}>
      {children}
    </li>
  )
}