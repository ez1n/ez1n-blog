import styles from "./CommentItem.module.css";

export default function CommentItem({content, createAt}) {
  return (
    <li className={styles.item}>
      <p className={styles.content}>{content}</p>
      <p className={styles.date}>{createAt}</p>
    </li>
  )
}