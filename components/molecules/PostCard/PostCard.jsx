import styles from "./PostCard.module.css";
import Image from "next/image";

export default function PostCard({image, title, description, createAt}) {
  return (
    <li className={styles.card}>
      <div className={styles.imageBox}>
        <Image className={styles.image} src={image} alt={title} width={300} height={100}/>
      </div>

      <section className={styles.postInfo}>
        <p className={`${styles.info} ${styles.title}`}>{title}</p>
        <p className={`${styles.info} ${styles.description}`}>{description}</p>
        <p className={`${styles.info} ${styles.date}`}>{createAt}</p>
      </section>
    </li>
  )
}